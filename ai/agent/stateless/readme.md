# 无状态 stateless
- 调用大模型接口的本质是什么？
http 调用 消耗算力生成结果
高并发、高可用，后端需要支持无状态
- 无状态是指？
  http 无状态协议(无状态 GET/POST...RESTful) + header(cookie?身份/Authorization)
  所有人都公平
  有状态？你是谁？llm服务器太大了
- 每次请求都是独立的，不依赖于之前的请求
- 服务器不需要储存用户端的状态
- 服务器可以水平扩展，因为每次请求都是独立的

- llm也是无状态的 它基于http
 每次请求独立

 ## llm运行底层规则
 - 无状态
 - 尝试让大模型懂我们
 - 每次手动带上全部对话
- 服务器端的并发
  在任何一台服务器上运行都没差别

  ## 升级
  - Prompt Engineering    聊天对话为主
  - Context Engineering   上下文工程
  - RAG  llm不懂，没有，更加优质的mcp
  - Skill               
  - Loop Engineering      循环工程
  - Harness               AI工程
历史对话 、知识库 claude.md agent.md  上下文
抽卡、prompt质量或设计只能提升抽到金卡，不是特别的可控

## chatHistory  有什么问题？
- 没有维护全部的history  大模型的回复也是关键
- messages会越来越长，消耗token越大
- LRU 缓存  一次对话里一直聊，因为任务还没完成
  tokens开销变大，最近聊的一定要留下，久远的要适当地删除
  capacity  缓存大小