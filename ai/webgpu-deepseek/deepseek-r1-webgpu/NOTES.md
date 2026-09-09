# Teaching Notes

用户使用中文，明确希望掌握简历项目并应对追问。按零项目基础开始；不将阅读课程视作掌握。实际岗位、面试时间和 JavaScript/React 基础待后续了解。

当前静态事实：App 的 start/update/complete 和 onInterrupt 为空，ready 聊天区无内容。Worker 保存了 past_key_values，但跨请求传入已注释。只有 check 包含结构化错误回传，load/generate 没有同样的异常处理。模型加载和 1 token 预热代码存在，但本次未执行真实模型推理，也未验证离线和性能收益。

本次 pnpm build/lint 被 pnpm 自动安装阶段的 ERR_PNPM_IGNORED_BUILDS 阻断，未执行到构建或 lint。未修改业务源码与现有简历文件。教学页面是静态 HTML，可直接打开。
