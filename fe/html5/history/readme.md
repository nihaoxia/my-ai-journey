# 浏览历史
## 路由 Route
- navigator 对象，提供了浏览器的导航功能。
- 浏览器 输入url
  - url 浏览器 访问代理
  - http 协议 server发起请求
  - server 伺服状态 给予响应 text/html
  - 浏览器拿到响应数据 渲染页面
  - 浏览记录插入一条记录

  ## 链接
  万物互联靠的链接
  <a href=""></a>
  多了点啥？
  传统的，每次都得重新渲染整个页面，PC时代
  缺点：慢 没有必要重新渲染整个页面
  移动时代，App的体验是不一样的
  单页应用 Single Page Application
  SPA

  传统的多页面 每次都要重新渲染 移动端时代
  有点没必要 页面会白一下 (网速慢一点)
  访问体验上提升
  怎么把丰富的内容在一个网页显示？
  DOM编程？
  根据相应的url 
  / index.html content DOM 放到#container
  / about about.html content DOM 放到#container

  ## 单页应用
  - 点击链接跳转
    - url 和 资源 是一一对应的关系
    不只是DOM编程
    怎么改变url
    hash方式可以做到 url改变了，不会跳转

    ## Hash 路由
    http(s)://www.baidu.com/u/123?a=1&b=2#/page1
    protocol     host       path   queryString
    url中 hash 部分开始
     - url一定要变，不同的url对应不同的资源
     - 监听变化 根据hash 部分 渲染不同的部分
     优点是url 改变了(局部) 页面不会刷新

     hash 作为url的一部分，标记一个传统的PC长页面某一部分，坐电梯一样直达
     做前端路由  #/ #/about 不会重新渲染，又能满足url和资源的一一对应关系 前端路由。当hash部分改变的时候 hashchange事件 dom或组件替换