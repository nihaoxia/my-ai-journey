# Document 切割

- 知识库 放的知识
  知识的来源很多 一个word文档，一个pdf文件，一个bilibili视频，一个url，一个靠谱的twitter
  各种格式的文件 -> 向量化前的Document
  不能直接创建Document对象
  怎么处理一下？
  Document? langchain 提供的标准格式的文档 pageContent,metadata

## loader
知识库 -> 向量数据库
各种知识文件 后缀区别 不同的文件也有不同的loader
输入是文件 输出是Documents
两件事情要做
1. 选择相应的loader  有很多种 180多种
2. 分块 文件太大 要检索的一定是大小具有一定语义的chunk
来自社区@langchain/community 主要由社区维护 我们都可以写loader
langchain @langchain/core 官方维护

- 爬虫 crawl
  - 从目标url开始，发送请求，拿到html字符串 axios 简单
  - 解析html字符串，提取需要的文本内容(正则)
  - cheerio 另辟蹊径，前端思维 css选择器 需要的内容
  cheerio.load(html) document对象
  $(css selector).text()

  ## AI 时代程序员价值
  - 不再是coding,交给AI
  - vibe coding 问出好的问题(prompt)、提供丰富准确的上下文(Context)、驾驭(Harness)并部署(FDE)Agent产品，设计长时间稳定运行的Loop,用好AI，快速成为一名AI架构师。
  - 切割的意义
    保持语义的完整性
     - separators 语义的最基本构成 '。' , '！' , '？'不会是逗号
     - 按 chunkSize 大小 切割
     - 切断了 ，chunk 的最后一句和下一个chunk 第一句 他们的语义相关性最大，但是因为chunkSize 的限制，他们被切开了，导致语义的完整性被破坏 用 chunkOverlap 用一定的重叠来补救
