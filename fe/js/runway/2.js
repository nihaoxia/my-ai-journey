// 在v8引擎眼里
// 声明提升
var myname  //变量提升
function showName() {
    console.log('函数showName执行');
}  //函数提升
showName(); 
console.log(myname); //undefined
 myname = '张三';
