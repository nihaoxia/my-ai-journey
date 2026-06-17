// node内置的http模块
//早期的js,特别是前端没有模块化系统
// node 一定要上模块化思想 require + module.exports
// esm 是升级版 import + export default
//require node早期的模块化系统 commonjs
const http = require('http');
// 伺服状态
http.createServer((req, res) => {
  res.end('hello world');
}).listen(3000, () => {
  console.log(`server is running on 3000 port`)
});