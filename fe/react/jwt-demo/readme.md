# jwt 登录授权
用的都是JWT JSON Web Token
- HTTP 是无状态 Stateless ，用户身份？你是谁？
- Header Authorization
  Bear Token 就是一串鉴权码 身份凭证
- /login admin 123456
  {
    id:1,
    username:'admin',
    role:'admin'
  }
  JSON 身份对象  = > JWT(单向操作) => Token 颁发给登录者
  登录者每次带上token => authorization => decode =>JSON 对象

# zustand
轻量级的状态管理框架 react 全家桶： react + react-router-dom + zustand
- 父子传递 组件通信 状态共享
- createContext + useContext 跨层级共享
- 登录与否，用户信息 全局状态
  全局共享，跨路由
  zustand 统一管理  store 状态仓库

  React App = UI Component + Store

## mockjs 大前端 登录鉴权校验
- axios baseURL
- vite mockjs 插件
  /api/

  ## JSON Web Token
  sign , verify 两个动作
  sign 用户json对象(身份信息，json 表现力)
  cookie / session 登录方案
  cookie 请求每次都会带上 sessionId
  sessionId -> 内存中 session 会话对象 不太适合分布式
  jwt 没有这个问题， 任何一台服务器签发的token 都可以再任何一台其他自己的服务器上 解码出来 JSON 对象