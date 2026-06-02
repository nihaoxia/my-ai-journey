# Generative AI
英伟达证书

- apikey 从英伟达获取
 - gitignore + .env
 - npm init -y
   初始化node项目  得到 package.json文件
 - npm i openai
   安装openai 模块 事实标准
   安装需要花时间，消耗空间
 - pnpm 
   只需要安装一次，在不同的项目中软连接

 - npm install -g pnpm
 - .gitigonre
   git 提交可以忽略的文件声明
   apikey不能提交
   留在本地
   写在.env 文件中，.gitignore 中忽略 .env文件
   - apikey 读取进来的流程
    dotenv 库 默认读取根目录下的.env文件
    .env 文件有格式要求
    Key(大写)=value  换行
    读取到process 进程对象中
    .env就是环境变量的配置文件
    .gitignore 中忽略 .env文件，本地跑，远程不提交、
    process全局对象

- mjs后缀
   js后缀
   es6才推出最新现代化模块化方案
   .js后缀？
   再package.json 中添加 type: "module"
   npm i -g nodemon
   nodemon index.mjs

   ## async/ await
   es8 新增的异步编程语法
   js代码的编写顺序和执行顺序不同
   变量声明/异步任务（setTimeout,api请求）
   async/await 来卡住执行流程
   api返回结果后继续执行后面的代码

   ## AIGC 工程化开发流程总结
   - AI项目/Agent项目 几乎都是后端项目
   - npm init -y 初始化为后端项目
   - pnpm i openai/dotenv
   - 实例化client 
   - main 单点入口函数
     -  main.mjs 单点入口文件
     - main 单点入口函数
- 调用chat completion api 
  - 同步按顺序执行，很快执行
  100ms 
  - 异步代码 执行慢/等下执行
    耗时长
    控制异步的执行顺序
    async await 来卡住它 让代码可读性更好，控制执行流程
