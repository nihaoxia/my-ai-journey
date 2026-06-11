// 函数表达式
//类 MyQueue
//早期的js没有类
//因为不需要class 也可以完成面向对象
// 函数+prototype 更优秀
// 类是一个抽象的 一套属性 + 方法 的模板
// js开发比较快
const MyQueue = function () {
  // 构造函数，属性
  console.log('push方法', this);
  this.stack1 = [];
  this.stack2 = [];
  // this.x = 1;
}
MyQueue.prototype.push = function () {
  console.log('push方法');
}

// new 运算符运行，是构造函数，this 指向实例对象
const queue = new MyQueue()
// console.log(queue);
console.log(queue, queue.push());
