# RAG
Retrieval Augmented Generation (RAG)
Retrieval 检索器
知识库 -> 先embedding 基于向量数据库 -> 检索器 (embedding+行速度
 + prompt embedding)

 ## langchain RAG 业务能力
   开箱即用的llm开发框架
 - @langchain/openai  ChatOpenAI Embedding
 - @langchain/core/documents
   embendding 的最小单元 
   知识库 有文件构成 (文本、声音、图片、视频等)构成
   某个段落的文字 有我们要找的语义
   {
     pageContent: '要单独embedding的文本'
     meta:{ 元数据 不做embedding
      ...
      link: 'https://www.baidu.com',
      author:...
     }
   }
   documents ...  简单就放内存 复杂发向量数据库
   - @langchain/classic  llm 开发以来 langchain的经典常用模块
     提供MemoryVectorStore 内存向量数据库

     检索器 = (知识库 -> 文档 -> documents -> embedding ->   memoryvector store)
invoke()

AI 发展太迅猛 langchain 版本更新太快，看文档

- retriever.invoke(3) top_k 
  在相似度查询的基础上，还会做去重、过滤、rerank 等
- vector.similaritySearchWithScore(3) 只做向量查询