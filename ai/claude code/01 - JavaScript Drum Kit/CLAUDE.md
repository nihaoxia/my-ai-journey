# CLAUDE.md

本文件为 Claude Code（claude.ai/code）在此仓库中工作时提供指导。

## 如何运行

直接在浏览器中打开 `index-START.html` 或 `index-FINISHED.html`。无需构建步骤、无需依赖、无需服务器。

## 项目概述

Wes Bos 的 JavaScript30 课程中的键盘打击乐器项目。按下 A–L 键触发鼓声，并伴有 CSS 过渡高亮效果（`transform: scale(1.1)` + 黄色边框发光）。

## 文件职责

- **`index-START.html`** — 练习模板。HTML 和 CSS 已就绪，`<script>` 为空。所有开发工作在此文件中进行。
- **`index-FINISHED.html`** — 完整的参考实现。阅读此文件了解目标行为。
- **`style.css`** — 两个 HTML 文件共用的样式表。定义了按键高亮动画的 `.playing` 类。
- **`sounds/*.wav`** — 9 个鼓音效样本。
- **`background.jpg`** — 页面背景图片。

## 架构

按键和音频元素通过 `data-key` 属性进行配对，属性值使用 `keyCode` 码（例如：`A` = 65 → clap，`S` = 83 → hihat，以此类推）。JavaScript 逻辑如下：

1. 监听 `window` 上的 `keydown` 事件。
2. 通过 `querySelector` 和 `data-key` 属性选择匹配的 `<audio>` 和 `.key` `<div>`。
3. 调用 `audio.play()` — 先将 `audio.currentTime = 0` 重置，使快速连按可以重新触发音效。
4. 为 `.key` div 添加 `.playing` 类实现高亮效果。
5. 在 `transitionend` 事件中移除 `.playing`（过滤为 `propertyName === 'transform'`，避免在每个过渡属性上都触发）。

## 练习任务（JS 需要实现的内容）

`index-START.html` 包含可用的 HTML/CSS 骨架和一个空的 `<script>` 块。任务是在该 `<script>` 中实现以下 JavaScript 逻辑：

- 捕获键盘按键（A、S、D、F、G、H、J、K、L）。
- 播放对应的 `<audio>` 元素。
- 为匹配的 `.key` div 添加 `.playing` 类使其高亮。
- 在 CSS `transform` 过渡结束后移除该类。
