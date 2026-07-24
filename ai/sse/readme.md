# SSE Server Sent Event 服务器发送事件
## BFF 层  
Backend For Frontend 为前端服务的后端

Backend 纯后端Server
java/go/node MVC 开发
Model View Controller 后端的设计结构
CRUD 接口请求 restful 
稳定性、并发，安全...

JS 既可以作为前端，也可以作为后端 接口改一改
大前端工程师 自己写常见的node 服务，达成自身的需求

前端(Vue/React)  -> Node(BFF)  ->  后端(Java/Go)

## 流式输出里面
前端业务非常复杂， 二进制流对象，解码，解析data:各种情况
抽象一下，放到大前端BFF 层,node里面，前端简洁 降低难度

前端fetch  ->  node(BFF)  ->  llm服务器

vite 创建的vue项目 里面有package.json，也有node_modules文件夹
vite工程化 是node后端服务 方便的用于BFF 开发一下

## node框架开发
- 安装并引入后端开发框架(express)
- 实例化app，并监听3000端口
- 定义路由



## 跨域问题
- 只要域名、端口、协议(https/http) 有任何一个不同就是跨域
  fetch 请求的时候就会跨域 同源策略
- vite.config.js 解决方案
  - 请求地址 改成/api/stream
    /api 标志  请求后端api接口
    不跨域了 但是502
  - /stream 前端不会提供这个路由的
    bff 后端提供了
    所有前端请求  vite都会拦截
    vite 工程， proxy 配置
    代理一下请求 并转发出去
    :3000/stream 
    :5173/api/stream(不跨域 502) -> vite proxy /api -> :3000/stream
    