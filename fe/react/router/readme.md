# 路由
- restful 一切皆资源
- 前端路由负责 切换页面，
  以前是要后端路由支持， 传统，慢，白一下，体验不好。
  前后端分离、SPA hashRouter 
  hash 锚链接 改变url hash 部分不会刷新页面
  hashchange 

## React 集成前端路由
react 开发全家桶
- react 组件开发，响应式等 UI界面
- react-router-dom 给应用添加路由（前端）SPA
- zustand pinia 状态管理 
  hashRouter 
## 各种路由
- 基本配置
- 路由懒加载
  首页/页面加载速度 非当前路由页面不加载
  性能优化
- 动态路由
- 404 Not Found
- 鉴权路由
  - http 无状态的
  - 鉴权是要有状态的
    - 请求头 带上 token Authorization
    - Cookie 小饼干
    - localStorage 存储 login状态
    user       admin
    password   123456
- 组件内部的子组件
  props.children 拿到组件内部声明的所有子节点。
  model 弹窗组件  mask蒙层
  窗体 头部  尾部 主题部分children传入
  定制性
  <Model>
   {children 定制}
  <Model>

  ## 路由两种选型
  - hashRouter
  - browserRouter