function add(a:number, b:number):number {
 return a + b;// "+",还可以做字符串拼接
}
// js 足够简单
// 大型项目
let a =1;
let b= "2";
let c:number = add(a,Number(b));
add(a,Number(b));//强制类型转换
console.log(add(a,+b)); //隐式类型转换
