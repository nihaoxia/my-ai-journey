# 入手AI，需要搞懂哪几个关键概念？

## Agent (智能体)
现在最值钱的Agent,Agent工程师已经取代传统软件工程师，刷新工资上限
FDE 公司开发各种Agent,帮助企业AI落地，降本增效
现在用的很多AI产品，本质已经是Agent。Cursor/Claude Code/
Codex/openclaw/hermes/豆包/悟空/workbuddy/飞书cli
核心都一样，能够帮我们干活。
不只是回答问题，还能读文件、搜网络、写代码、操作浏览器、电脑，都是Agent在做。
- 一个Agent有多强，取决于用了什么大脑（llm），装了什么工具，拿到了什么信息。

## LLm
大模型是Agent的大脑。豆包背后字节的大模型，claude Anthorpic
LLm 只负责**推理**和生成，真正的行动能力来自工具（tools）

## 工具 Tool
LLM只有推理生成能力，无法对接外部世界，tool可以补齐
没有tool，AI只能空推理，不能做任何实际工作，无法完成自动化任务。

- reasoning 推理
给出llm的规划和思维，方便我们了解和介入
- messages 多轮对话列表
- reasoning_effort : 'high'
- reasoning_content  推理内容
指导生成，流式输出
- content

- 青岛啤酒股价多少？
llm 推理 要调用的工具
getPrice 函数
结果返回给llm，
llm就知道怎么回答这个问题。
llm with tools？
openai 提供了接口  就是 tools
tool 函数 （llm理解 需要的参数）
结果再交给llm，再completion 一次