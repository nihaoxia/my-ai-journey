---
name: tian-ai-daily
description: 甜甜每日AI新闻概览。当用户需要获取今日AI行业资讯、AI新闻摘要、每日AI日报、AI行业动态时使用此技能。即使用户没有直接说"甜甜日报"，只要涉及"今天AI新闻"、"AI行业动态"、"AI资讯"、"AI日报"等关键词，都应触发此技能。
---

# 甜甜每日AI新闻概览

为用户精选每日最值得关注的AI行业资讯，生成中文精华摘要和精美可视化HTML页面，让用户用最少的时间掌握最新的行业动态。

## 核心原则

- **精选优先**：只保留真正有价值的行业资讯，过滤掉噪音、重复内容和低质量来源
- **中文呈现**：所有摘要均转化为流畅的中文，信息密度高，50-100字核心要点
- **来源权威**：优先抓取 TechCrunch、The Verge、Hacker News 等权威科技媒体的 AI 相关报道
- **时效性**：聚焦近 24 小时内的新闻，保证信息的新鲜度
- **关键词标注**：每条资讯配备智能标签，方便快速定位

## 工作流程

### 第一步：多方抓取 AI 新闻

并行搜索多个来源的 AI 新闻，覆盖不同视角：

**搜索策略：**
- 使用 WebSearch 搜索以下关键词（每次搜索独立进行）：
  - `AI artificial intelligence news today site:techcrunch.com`
  - `AI artificial intelligence news today site:theverge.com`
  - `AI machine learning news today`
  - `artificial intelligence industry news 2026`
- 使用 WebFetch 抓取 Hacker News 首页 (`https://news.ycombinator.com/`)，筛选 AI 相关帖子

**重要：**
- 搜索时不要仅限于上述关键词，可根据当天实际情况灵活调整
- 每个来源至少抓取 5-10 条候选新闻
- 合并所有结果，去重（基于标题和URL相似度）

### 第二步：智能过滤

对抓取到的所有新闻进行智能过滤，筛选标准：

**保留（有价值）：**
- AI 行业重大事件（融资、收购、上市、战略调整）
- 重要产品发布或技术突破（新模型、新框架、新应用）
- 行业趋势分析和深度报道
- 知名 AI 公司和人物的动态（OpenAI、Google DeepMind、Anthropic、Meta AI 等）
- 政策法规变化（AI 监管、伦理、数据隐私）
- 开源社区重要动态（重要项目发布、架构变更）

**过滤掉（无价值）：**
- 纯股价/币价行情播报（无分析内容）
- 重复报道（同一事件选最权威的来源）
- 明显的软文、广告、公关稿
- 与 AI 无直接关系的普通科技新闻
- 评论数过少、来源不明的博客文章

最终精选 **8-12 条**最有价值的新闻。

### 第三步：生成中文摘要

为每条精选新闻生成中文精华版：

**摘要要求：**
- 每条摘要 50-100 字（中文），精炼概括核心信息
- 必须包含：发生了什么、谁参与/主导、为什么重要
- 使用流畅自然的中文，避免生硬的机翻腔
- 保留关键英文术语（公司名、产品名、模型名等）

**关键词标签：**
- 为每条新闻标注 2-4 个关键词标签
- 标签类型包括：公司/机构名、技术领域、事件类型
- 例如：`#OpenAI` `#多模态` `#融资` `#开源`

**输出格式示例：**
```
标题：OpenAI 发布 GPT-5，推理能力大幅提升
摘要：OpenAI 今日正式发布 GPT-5 模型，在数学推理和代码生成方面实现重大突破。
新模型在 MATH 基准测试中达到 96.2% 的准确率，较上一代提升 12 个百分点。
CEO Sam Altman 称这是通向 AGI 的关键一步，API 价格同时下调 30%。
标签：#OpenAI #GPT-5 #推理 #API
来源：TechCrunch
链接：https://techcrunch.com/...
```

### 第四步：生成 HTML 页面

使用 `assets/template.html` 作为模板，生成最终的日报页面。

**页面要素：**
- 顶部标题：`🍩 甜甜AI日报 - [当天日期 YYYY年MM月DD日]`
- 副标题：`精选 [N] 条今日AI行业资讯 · 让阅读更甜一点`
- 卡片式布局：每条新闻一张卡片
  - 卡片包含：标题、摘要、标签、来源、时间
  - 整张卡片可点击，跳转到原文
  - 悬停效果：轻微上浮 + 阴影增强
- 底部：`甜甜AI日报 · 用心精选每日AI资讯 · [日期]`

**设计风格：**
- 主色调：温暖粉色系（与"甜甜"品牌呼应）
  - 背景：`#fdf6f0`（暖米色）
  - 卡片：`#ffffff`
  - 强调色：`#e8857c`（甜橙粉）
  - 标签：`#f0d9d5` 背景 + `#c0514a` 文字
  - 标题：`#3d2c2a`（深棕）
- 字体：系统默认中文字体栈，代码类内容用等宽字体
- 响应式设计：桌面端 2 列，移动端 1 列
- 圆角卡片 + 轻微阴影，营造温暖、轻松的阅读氛围

**页面保存：**
将生成的 HTML 保存到用户当前工作目录下，文件名为 `甜甜AI日报-[YYYY-MM-DD].html`。

### 第五步：呈现给用户

生成完成后，向用户展示：
1. 日报摘要（今日精选条数、覆盖主题）
2. HTML 文件路径
3. 提示用户可以直接在浏览器中打开该文件查看精美页面

---

## HTML 模板参考

以下是 HTML 页面的设计参考，实际生成时可基于此模板调整。核心设计元素：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>甜甜AI日报</title>
    <style>
        /* 基础样式 */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
                         "Microsoft YaHei", "Helvetica Neue", sans-serif;
            background: linear-gradient(135deg, #fdf6f0 0%, #fef0eb 50%, #fdf6f0 100%);
            min-height: 100vh;
            color: #3d2c2a;
            line-height: 1.6;
        }

        /* 顶部 Header */
        .header {
            text-align: center;
            padding: 48px 20px 32px;
            background: linear-gradient(180deg, rgba(232,133,124,0.08) 0%, transparent 100%);
        }
        .header h1 {
            font-size: 2.2em;
            font-weight: 700;
            background: linear-gradient(135deg, #d4736a, #e8857c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;
        }
        .header .subtitle {
            font-size: 0.95em;
            color: #a0807a;
            font-weight: 400;
        }

        /* 卡片容器 */
        .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 0 20px 60px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
            gap: 20px;
        }
        @media (max-width: 520px) {
            .container { grid-template-columns: 1fr; }
            .header h1 { font-size: 1.6em; }
        }

        /* 新闻卡片 */
        .card {
            background: #ffffff;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 2px 12px rgba(61,44,42,0.06);
            transition: all 0.25s ease;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            display: block;
            border: 1px solid rgba(232,133,124,0.1);
            position: relative;
        }
        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(232,133,124,0.15);
            border-color: rgba(232,133,124,0.25);
        }
        .card .source-badge {
            display: inline-block;
            font-size: 0.78em;
            color: #a0807a;
            margin-bottom: 10px;
            font-weight: 500;
            letter-spacing: 0.5px;
        }
        .card h3 {
            font-size: 1.1em;
            font-weight: 600;
            margin-bottom: 10px;
            line-height: 1.5;
            color: #3d2c2a;
        }
        .card .summary {
            font-size: 0.9em;
            color: #6b5550;
            line-height: 1.7;
            margin-bottom: 14px;
        }
        .card .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .card .tag {
            display: inline-block;
            background: #fdf0ed;
            color: #c0514a;
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 0.78em;
            font-weight: 500;
            letter-spacing: 0.3px;
        }
        .card .time {
            font-size: 0.75em;
            color: #bfa8a2;
            margin-top: 12px;
        }
        .card .external-icon {
            position: absolute;
            top: 20px;
            right: 20px;
            opacity: 0.3;
            font-size: 0.85em;
            transition: opacity 0.2s;
        }
        .card:hover .external-icon {
            opacity: 0.7;
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 32px 20px 48px;
            color: #bfa8a2;
            font-size: 0.85em;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <div class="header">
        <h1>🍩 甜甜AI日报 - [日期]</h1>
        <p class="subtitle">精选 [N] 条今日AI行业资讯 · 让阅读更甜一点</p>
    </div>

    <!-- 卡片容器 -->
    <div class="container">
        <!-- 每条新闻一张卡片 -->
        <a class="card" href="[原文链接]" target="_blank" rel="noopener">
            <span class="external-icon">🔗</span>
            <div class="source-badge">📰 [来源名称]</div>
            <h3>[新闻标题]</h3>
            <p class="summary">[50-100字中文摘要]</p>
            <div class="tags">
                <span class="tag">#标签1</span>
                <span class="tag">#标签2</span>
                <span class="tag">#标签3</span>
            </div>
            <div class="time">⏰ [发布时间]</div>
        </a>
        <!-- ... 更多卡片 ... -->
    </div>

    <!-- Footer -->
    <div class="footer">
        🍩 甜甜AI日报 · 用心精选每日AI资讯 · [日期]
    </div>
</body>
</html>
```

---

## 注意事项

1. **网络错误处理**：如果某个来源抓取失败（网络问题、限流等），跳过该来源并在日报中说明，不影响其他来源的结果
2. **日期格式**：统一使用 `YYYY年MM月DD日` 格式显示日期
3. **缓存意识**：WebFetch 有 15 分钟缓存，同一 URL 不要重复抓取
4. **去重优先**：同一事件被多个来源报道时，保留最权威或最详细的那篇，其余丢弃
5. **信息准确**：摘要基于抓取到的实际内容生成，不要编造或推断未在原文中出现的信息
6. **来源标注**：每条新闻必须标注来源媒体名称和原文链接
7. **关键词一致性**：同一公司/技术的标签命名保持一致（如统一用 `#OpenAI` 而非混用 `#openai` / `#OpenAI`）
