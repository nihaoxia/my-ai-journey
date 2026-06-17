// symbol 唯一的标识符，用函数创建的，简单数据类型
// 轻松表达，独一无二
console.log(Symbol('张三') === Symbol("张三"))
console.log(typeof Symbol('张三'))
console.log(Symbol());//绝对唯一，可以传一个标签
let obj = {
  [Symbol()]: 'value',
  prop: "2"
}