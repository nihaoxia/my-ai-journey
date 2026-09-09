# 结构化大模型输出：

## 流式输出
- stream:true 开启流式输出
- 水管，一头接着llm，一头客户端，不断的有token流向客户端
  buffer

## stream 服务器本质
- llm server
- http 协议
  基于请求响应的简单协议
- 响应？ response
  - 同步
  - 流式 ？pipe

## SSE
 Server Sent Events
服务器单向不停地往浏览器推送消息，发送多次，不会断开连接
浏览器建立一个长链接，服务器一点一点(chunk)发数据,也就是流式输出。
```
Content-Type:text/event-stream
Cache-Control:no-cache
Connection:keep-alive;

```


相比于传统的http 同步传输，请求、响应，断开连接？
```
Content-Type:text/event-stream
Content-Type:text/html
```