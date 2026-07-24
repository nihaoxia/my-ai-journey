# token

## 怎么学习llm ?
### 先搞懂ai是什么
- 学习吴恩达
  AI For Everyone
  Generative For Everyone
  Prompt Engineering For Everyone
- karpathy
   Tesla 总监 OpenAI gpt3的作者
   3小时大模型入门过程
   讲透大模型的原理
Transformer  大模型的架构 (google 发明，llm的基本)、Attention 机制（注意力机制）、微调(fine-tuning)...
理论高级篇
## 动手用起来
把日常重复性工作交给AI
- cc, codex 
- notebookllm  google 出品的RAG
梯子
超级学习AI工具
- Obsidian 第二大脑
## 做个人作品
- vibecoding 一个完整的项目
网站、小程序、客户管理工具
Agent 开发工程师

## 关注
- 晓辉博士 专业深度
- 42章经
- 宝玉AI
- 歸藏 AI 产品

## 分词  Tokenization
- llm 记价和工作的最小单位
1个英文字符大约0.3个token
1个中文字符大约0.6个token
百万token 及人名币
  - 为什么必须分词？
输入的是Prompt文本
根据上一个词，可以预测下一个词
这样才能根据词之间的语义相关性计算
数学  llm本质是函数
神经网络只能处理数字 向量 矩阵
它看不懂中文、英文等字符
主要是由计算机底层运行机制和模型训练效率决定的
必须把文字转为一串数字离散符号ID、token
## token demo
- js-tiktoken
文本编码为token
解码token为文本
输入的tokens+输出的tokens = 总token数

## embedding
大模型不能直接处理文本，先tokenizer，再embedding
文本 切割为token(大的文本理解任务切割为小的文本理解任务 llm处理性能)
token可以想成一个单词，但也不完全是单词  cl100k_base来提供
文本 -> cl100k_base(映射规则) 不一定是word,而一定是token
token ID 215 100k 

理解语义，神经网络计算，相似度

embedding 文本嵌入 (向量化) llm embedding接口
1024 -1 -> 1

和神经网络知识 embedding, 相似度计算