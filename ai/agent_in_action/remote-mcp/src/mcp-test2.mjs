import 'dotenv/config'
import { MultiServerMCPClient } from '@langchain/mcp-adapters';
import { ChatOpenAI } from '@langchain/openai';
import chalk from 'chalk';
import {
  HumanMessage,
  SystemMessage,
  ToolMessage
} from '@langchain/core/messages';

const model = new ChatOpenAI({
  modelName: 'deepseek-v4-pro',
  apiKey: process.env.DEEPSEEK_API_KEY,
  temperature: 0,
  configuration: {
    baseURL: 'https://api.deepseek.com/v1',
  },
});

const mcpClient = new MultiServerMCPClient({
  // 高德地图 MCP（HTTP 远程）
  'amap-maps': {
    url: 'https://mcp.amap.com/mcp?key=adf7dbcd788f107fe2a71153c20bd511'
  },
  // 本地自定义 MCP Server（stdio）
  'my-mcp-server2': {
    command: 'node',
    args: [
      'D:/Workspace/xld_ai/ai/agent_in_action/mcp-demo/src/my-mcp-server.mjs'
    ]
  },
  // Chrome DevTools MCP（操控浏览器：打开页面、点击元素、截图等）
  'chrome-devtools': {
    command: 'npx',
    args: [
      '-y',
      'chrome-devtools-mcp@latest'
    ]
  },
  // File System MCP（读写本地文件）
  'filesystem': {
    command: 'npx',
    args: [
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'D:/Workspace/xld_ai'
    ]
  }
})

const tools = await mcpClient.getTools();
console.log(tools);
const modelWithTools = model.bindTools(tools);

async function runAgentWithTools(query, maxIterations = 30) {
  const messages = [
    new HumanMessage(query)
  ];
  for (let i = 0; i < maxIterations; i++) {
    console.log(chalk.bgGreen(`正在等待AI思考, 第${i + 1}轮....`));
    const response = await modelWithTools.invoke(messages);
    messages.push(response);

    if (!response.tool_calls || response.tool_calls.length === 0) {
      console.log(chalk.bgRed(`AI回答： ${response.content}`));
      return response.content;
    }

    console.log(chalk.bgBlue(`工具调用： 
      ${response.tool_calls.map(t => t.name).join(', ')}
      `));

    for (const toolCall of response.tool_calls) {
      const foundTool = tools.find(t => t.name === toolCall.name);
      if (foundTool) {
        const toolResult = await foundTool.invoke(toolCall.args);
        let contentStr;
        if (typeof toolResult === 'string') {
          contentStr = toolResult;
          //src
          //fileSystem {text:}
        } else if (toolResult && toolResult.text) {
          contentStr = toolResult.text;
        }
        messages.push(new ToolMessage({
          content: contentStr,
          tool_call_id: toolCall.id,
        }));
      }
    }
  }

  // 最后一个消息是AI的回复
  // 改进
  return messages[messages.length - 1].content;
}

await runAgentWithTools(`拿到东华理工大学抚州校区图片，打开浏览器，展示校区图片`);
mcpClient.close();
