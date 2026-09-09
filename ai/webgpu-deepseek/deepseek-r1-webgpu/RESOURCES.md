# DeepSeek-R1 WebGPU Resources

## Knowledge

- [Transformers.js 官方 README](https://github.com/huggingface/transformers.js#quick-tour)
  2026-09-09 已实际读取：确认 ONNX Runtime 运行模型、device 指定 WebGPU，以及量化 dtype 的基本职责。当前主分支示例已是 4.x，不能用它代替项目 3.7.1 的 API 细节。

- [Transformers.js documentation](https://huggingface.co/docs/transformers.js)
  官方 JavaScript 推理库文档；用于解释 `AutoTokenizer`、`AutoModelForCausalLM`、流式生成和浏览器运行时。
- [Transformers.js WebGPU guide](https://huggingface.co/docs/transformers.js/en/guides/webgpu)
  官方 WebGPU 使用指南；用于解释 `device: "webgpu"`、浏览器能力和运行限制。
- [Hugging Face model card: DeepSeek-R1-Distill-Qwen-1.5B-ONNX](https://huggingface.co/onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX)
  当前项目实际加载的模型、文件格式和量化信息。
- [WebGPU API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)
  浏览器侧 `navigator.gpu`、adapter 和 device 能力的权威入门资料。
- [WebGPU specification](https://www.w3.org/TR/webgpu/)
  W3C 技术规范；用于深入追问 GPU adapter、device 和命令执行模型。
- [ONNX Runtime Web documentation](https://onnxruntime.ai/docs/get-started/with-javascript.html)
  ONNX Runtime JavaScript/Web 运行时资料；用于解释模型图在浏览器中的执行后端。

## Wisdom (Communities)

- [Hugging Face Forums](https://discuss.huggingface.co/)
  适合核对 Transformers.js 与模型转换的实践问题。
- [WebGPU GitHub discussions](https://github.com/gpuweb/gpuweb/discussions)
  适合查阅 WebGPU 浏览器兼容性和规范讨论。

## Gaps

- 以下文档索引为后续阅读入口，尚未逐页核验；模型卡本次网络请求失败。第一课基本调用关系以已读取的官方 README 和当前仓库源码为依据。

- 当前仓库没有性能基准、浏览器兼容性矩阵或端到端测试；后续课程应以实测数据补齐这些部分。
