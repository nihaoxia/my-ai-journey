//Javascript 执行机制对开发者至关重要。
//要了解代码是怎么执行的
shouName('极客时间');
console.log(myname);

var myname = '张三'
function shouName(name) {
    console.log(name);
    var b = 1 ;
  console.log('函数showName执行',name);
}
