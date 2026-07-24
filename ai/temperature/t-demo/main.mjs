import 'dotenv/config'
import { ChatOpenAI } from '@langchain/openai'
// 把大模型输出解析成纯字符
// chain 上 不用那么复杂 直接给我们content内容
import { StringOutputParser } from '@langchain/core/output_parsers';
// prompt 好复用
// 以前是硬编，写在代码里，不太好维护，不好模块化
// agent中 很多业务都是prompt驱动的 不同的用户，是同一套
// ai业务，只需要换身份就好 PromptTemplate
// 会在AI 工作流的比较前面的位置
import { PromptTemplate } from '@langchain/core/prompts';
// llm
// 创意性更多的
const creativeModel = new ChatOpenAI({
  model: 'deepseek-v4-pro',
  temperature: 0.8, // 增强创意的发散性
  topK: 4, // 仅从概率前4的词汇里采样，限制跑偏
  maxToken: 600,
  apiKey: process.env.DEEPSEEK_API_KEY,
  configuration: {
    baseURL: 'https://api.deepseek.com',
  }
})
//严谨
const preciseModel = new ChatOpenAI({
  model: 'deepseek-v4-pro',
  temperature: 0.2, // 保守一点
  topK: 8, // 更大的topK 保证信息的完整性
  maxToken: 600,
  apiKey: process.env.DEEPSEEK_API_KEY,
  configuration: {
    baseURL: 'https://api.deepseek.com',
  }
})

// prompt更好维护，管理，复用
const storyPrompt = PromptTemplate.fromTemplate(
  `
   请写一篇短篇故事，主题:{theme}
   风格温柔治愈，篇幅200字左右，要分段，文字细腻有画面感。
`
)
// 输出解析器，统一返回纯文本
const outputParser = new StringOutputParser();
// 工作流 pipe一下 工作流的流转
// AI 工程复杂 设计好AI工作流
const creativeChain = storyPrompt
  .pipe(creativeModel)
  .pipe(outputParser)
// 各种的AI 工作流生产路线
const preciseChain = storyPrompt
  .pipe(preciseModel)
  .pipe(outputParser)

// 把原料送到流水线生产
async function runWriteDemo() {
  const theme = "霸总";

  console.log('创意写作模式');
  const creativeText = await creativeChain.invoke({ theme });
  console.log(creativeText);
  console.log('\n-----------------');

  console.log('严谨写实模式');
  const preciseText = await preciseChain.invoke({ theme });
  console.log(preciseText);
}

runWriteDemo()
  .catch(err => console.error(err));