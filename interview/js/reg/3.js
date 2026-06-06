  //把w改为W，把‘-’去掉
const str =  'hello-world';
// () 表示分组，不匹配(),但是可以提取
// $1 表示提取的第一个分组
const reg = /-(\w)(\w)/
console.log(str.match(reg))
