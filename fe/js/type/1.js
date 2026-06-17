//表示空，或者没有
//null 
// primitive types  原始 内存空间固定
// 赋值时是拷贝式赋值
let a = null;
let b = a//拷贝 相当于复印机
b = 2
let obj1 = {
  name: "李四"
}
let obj2 = obj1 //引用类型 赋值时是引用地址
obj2.company = "字节跳动"
console.log(obj1);
console.log(obj2);
console.log(a, b);
let obj = {
  name: "张三",
  address: "null"
}
console.log(obj.address);
console.log(obj.age);

let largeObject = {
  data: new Array(100000000).fill('hgh')

}
// 手动回收内存
largeObject = null;