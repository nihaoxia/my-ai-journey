// commonjs , import esm
const http = require('http'); // node 内置http 模块 
const fs = require('fs'); // node 内置fs 模块

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end("<html><body><h1>hello world</h1></html>");
  } else if (req.url === '/stream') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    let words = ["你", "好", ",", "欢", "迎", "到", "了", "解", "sse"];
    let index = 0;
    const timer = setInterval(() => {
      clearInterval(timer);
      res.end();// 关闭连接
      return;
      res.write(`data:${words[index]}`);
      index++;
    }, 1000)
  })
  }
})

server.listen(3000, () => {
  console.log('server is running on port 3000');
})