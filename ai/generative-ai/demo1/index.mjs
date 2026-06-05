//.env 文件中apikey 读取进来？
// dotenv
import dotenv from 'dotenv'
dotenv.config()
import { OpenAI } from 'openai'
const client = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: process.env.DEEPSEEK_BASE_URL
});
// process  进程对象
//操作系统的核心概念
//node index.mjs 本质是启动进程
//这是分配资源（内存，CPU，IO）的最小单位
//node 就是 process 这个全局对象
//process.env 是一个变量，包含了环境变量

//console.log(process.env.DEEPSEEK_API_KEY)
// console.log(process.env,
//     process.env.DEEPSEEK_API_KEY)
// async 修饰符表示函数是异步的
// 函数内部可以使用 await 关键字来等待异步操作的完成
// 省略function 关键字，箭头函数
const main = async() =>  {
console.log('程序开始运行');
const result = await client.chat.completions.create({
    model:'deepseek-chat',
    messages:[
        {
            role:'user',
            content:'Hello'
        }
    ]});
// setTimeout(function(){
//     console.log('1秒后执行');
// },1000)
console.log(result.choices[0].message.content);
console.log('程序结束')
}

main()
