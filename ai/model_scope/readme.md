# Model Scope
魔搭，前辈是HuggingFace，俗称抱抱脸
- model 
开源大模型平台、训练以及发布自己的模型
- scope 
社区

## 数据服务



## Note Book
如果我们有NLP 实验，算法，python note book  随时编写，随时运行

python  优点是语法很简洁，很适合数学运算、
NLP AI 爬虫
- JS这门语言不适合运算
而是web前端脚本，交互（幻灯片、滚动加载更多）用户体验
js的数据类型都是Number

- py没有内置的数组
数组有初始化的容量，数组的每一项的类型要一样
数组是内存之中连续的空间
- py用list 灵活有序，可以随时增删改查，可以放任意数据类型，无需提前指定容量 
- range生成0到n-1的整数序列
- 复合语句结尾必须加 ： 表示下一行是从属代码块，用缩进
- 切片 Slice
- py的实例化不需要new 直接执行构造函数就可以了
- 多行字符串模板 三个引号 """

AIGC  22年底 openai gpt3
OpebAI sdk 业内标杆
deepseek等 直接使用OpenAI sdk

## LLM api 调用
- 安装openai sdk
- 实例化client
    api_key
    base_url
    遵守同样的接口标准
- client.chat.completion.create()
    AIGC 文本生成接口
    model
    prompt

## prompt 高级设计模式
- 详细且准确的指令
- 一步步去引导llm工作
- 对返回结果的格式做约束
    一般json格式
    - 清晰 正确
    - json适合接下来继续运行
