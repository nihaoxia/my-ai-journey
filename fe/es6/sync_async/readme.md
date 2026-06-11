# js同步和异步
## js中有哪些异步任务
 cpu 执行时间 不能霸占 几十毫秒的轮询分配给进程的的执行时间
进程   董事长   PID
线程   经理     Thread
主线程、子线程

- c++ ，java等系统级别语言有多进程多线程架构，执行效率高，  
  但复杂
- js简单，设计为单线程架构
  setTimeout
  事件
  怎么办

  ## js 执行机制
  - 前端script脚本  后端 node / bun 代码执行
  - 启动一个进程 PID 负责分配资源
  - 进程启动一个主线程
     js足够简单 ，单线程
  - 先把同步任务快速执行掉  
     可以快速地把同步代码，用户需要看到的页面
  - 还是有定时器、fetch请求、事件等耗时性异步的任务 
    Async task
  - js 会把他们放入到event loop中
      跳过，等同步代码执行完后，再到event loop中把异步代码拿出来执行。

## 控制执行流程
 A fetch users api  所有的用户
 B fetch 每一个用户

 ## 理解 promise
 - 实例化Promise
 - 需要传递一个函数  executor
    会立刻执行，是耗时性任务的容器
    同步，里面可以容纳异步任务
 - resolve  表示异步任务成功解决了 then 被调用
 - reject   表示异步任务失败了，catch 被调用
 - 在executor 里面的异步任务成功解决或异常时，手动调用
 - resolve(result ) 传给then
 - reject(err)失败的原因
