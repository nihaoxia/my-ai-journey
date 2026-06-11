// 主程序文件
// 多个默认的输出 a,b... {对象 key :value} 
// 解构语法
import client, { a, b } from './client.mjs'
console.log(client);
// let { name, age } = { "name": "张三", "age": 20 }
// console.log("名字叫" + name + "，年龄是" + age);
let obj = { "name": "李四", "city": "北京" }
// let name = obj.name
// console.log(name);
// 结构与不结构区别   性能差异
let { name, city } = obj
console.log(name, city);
// es6 让js 成为大型项目企业级开发语言
// 解构赋值  可以从对象中提取属性值，成为变量 ，且性能更好