//如何封装一个sleep 函数？ 2000？

function sleep(t){
    return new Promise( (resolve,reject) => {
     // es6提供的解决异步问题的api，许下诺言
     setTimeout(() =>{
         resolve();
     },t)
    })
}


async function main(){
    // await 后面要接受promise
    console.log('--start--');
    await sleep(2000) // 异步任务同步化
    console.log('--end--')
}
main()
