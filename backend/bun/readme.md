# Bun 
Bun是比 node更快、开箱即用、零配置的js/ts 运行时+包管理器
node 优化的升级版，性能特别好
ahthropic 收购了 用于 claude code 底层

## typescript
来自微软，是js的超集，添加了类型约束
js弱类型，经常出类型错误
- 静态的类型编译 ts -> js 文件检查类型或代码错误
- ts 非常强大，已经是Ai Agent 的标配

## js的易错性
- 浏览器 input输入 我们以为是数字，但实际是字符串
- "+" 身兼多职 加法与字符串拼接
- 又不报错，导致错误可能隐藏在系统里很久
- ts来解决

## 安装一下
powershell -c "irm bun.sh/install/windows | iex"
