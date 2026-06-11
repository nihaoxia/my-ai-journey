let num = 0;
// 非纯函数：依赖外部变量，结果不可控
function aadd(b) {
  num += b;
  return num;
}
