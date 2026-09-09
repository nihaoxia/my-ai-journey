# Mission: DeepSeek-R1 WebGPU 项目面试掌握

## Why
用户希望真正理解自己写在简历上的 DeepSeek-R1 WebGPU 项目，能够在面试中从浏览器、Worker、模型加载到 WebGPU 推理完整讲清楚，并能诚实处理当前代码与简历描述之间的差异。

## Success looks like
- 用两分钟画出并解释主线程、Web Worker、Transformers.js、ONNX Runtime Web 和 WebGPU 的调用链。
- 能解释 tokenizer、chat template、量化、流式生成、TPS、Shader 预热和中断机制。
- 面对追问时能指出已实现、未实现和需要验证的部分，不把示例代码包装成不存在的生产能力。
- 能根据代码定位关键实现，并提出合理的性能与工程改进。

## Constraints
- 以当前仓库代码为事实依据，优先使用高可信官方资料。
- 每次课程保持短小，包含主动回忆或面试演练。
- 默认使用中文，保留必要的英文 API 名称。

## Out of scope
- 暂不深入训练 DeepSeek 模型或实现底层 GPU kernel。
- 暂不把项目扩展为生产级多用户服务。
