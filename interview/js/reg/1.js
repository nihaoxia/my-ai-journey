let str =' 15888878888';
//描述一个匹配的规则
// 正则表达式：一个字符一个字符的匹配
//[] 表示匹配的字符范围，比如[0-9]表示匹配0-9的任意一个数字
let reg = /^1[3-9]\d{9}$/; 
console.log(typeof {});
console.log(typeof reg);
console.log(
    Object.prototype.toString.call(reg)
); //false
console.log(reg.test(str)); //true
