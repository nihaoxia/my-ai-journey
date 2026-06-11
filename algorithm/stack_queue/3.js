//js没有class,约定大写为构造函数
function Greeting(name) {
  // console.log(this)
  this.name = name
}
console.log(new Greeting('张三'))