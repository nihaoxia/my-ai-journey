# 吴恩达AI应用中的prompt

## Prompt Principles
- 使用清晰且具体的prompt
- llm响应约束返回的结构，一般是json
- 五个构建块


## get_response 函数
- 参数默认值是函数的代码优化的重要语法特性
- 好复用，灵活，简便
- llm api 
    - completions 完成接口
       prompt
    - chat.completions
       messages:[
        {"role":"system",content: prompt}
        {"role":"user",content: prompt},
        {"role":"assistant",content: ''}
        {"role":"user",content: ""}
       ]

## 吴恩达 prompt 规则
  llm智能模型高级通过一系列，规则来较少智能的随机性
- 清晰且具体的表达
  清晰 让大模型理解我们的目的，不偏离主题或少犯错误
  具体 我们要提供上下文
  - 总结的案例之中使用清晰的格式区间，告诉llm我们待处理的文件文本在哪里
   {text}   {} 是字符串模板中的占位符
   使用特殊的符号 ``` 来清晰地指出要处理的文本
   总结 summerize 翻译等等都是机器学习 （nlp）的常见模型
- 对响应的结果格式做约束，一般为json格式
    继续丰富json的key，还加点注释（自然语义的加持）

- Few shot 即少样本提示，在 Prompt 里附带少量示例，让模型参照格式、逻辑与风格，快速对齐任务要求，无需复杂指令。

- llm是有幻觉的
