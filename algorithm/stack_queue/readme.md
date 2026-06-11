## 如何用栈模拟队列
线性  
  - 栈，队列，列表
非线性  
  - 树，图，集合
- 栈  stack   FILO  后进先出
- 队列 Queue   FIFO  先进先出
  push(x) 将一个元素放入队列的尾部
  pop()  从队列的头部移除一个元素
  peek()  返回队列的头部元素
  empty()  返回队列是否为空

  ## js 的面向对象
  - 不走寻常路
  不需要class 也可以完成面向对象
  函数是一等对象
  普通函数
     this 全局对象
  new + 构造函数
     this 指向新创建的对象

原型式的面向对象
 js里面没有类，只有对象 MyQueue 就是对象
 MyQueue.prototype 是一个对象
 