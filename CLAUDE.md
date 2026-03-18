# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在本仓库中工作时提供指引。

## 项目概览

个人作品展示网站（irawill.github.io）—— 纯静态单页应用，使用原生 HTML、CSS、JavaScript 构建，零框架依赖。通过 GitHub Pages 部署。

## 构建与开发

**环境要求：** Node.js 20+、npm 10+、Python 3（本地开发服务器）

```bash
npm install          # 安装开发依赖
npm run dev          # 启动开发服务器 localhost:5500，支持文件监听
npm run build        # 生产构建：字体 → CSS → JS
npm run build:css    # 压缩 styles.css → styles.min.css（esbuild）
npm run build:js     # 压缩 script.js → script.min.js（esbuild，带构建时间戳）
npm run build:fonts  # TTF 转 WOFF2
npm run lh:h5       # Lighthouse 移动端审计 — 需先启动开发服务器
npm run lh:pc       # Lighthouse 桌面端审计 — 需先启动开发服务器
```

## 发布流程

源码和构建产物（`.min.*`、`.woff2`）均提交到 Git。修改后：

```bash
npm run build
# 提交源码和构建产物，然后 push
```

## 架构说明

**三个核心文件：**
- `index.html` — 单页 HTML，包含所有内容区块
- `script.js` — 全部 JS 逻辑（主题/语言管理、打字机效果、交互动效）
- `styles.css` — 全部样式（CSS 变量驱动主题、响应式布局）

**构建脚本**（`scripts/` 目录）：
- `dev.mjs` — 编排 esbuild 监听 + Python HTTP 服务器
- `build-js.mjs` — JS 压缩并注入构建时间戳
- `build-fonts.mjs` — TTF 转 WOFF2 字体

**`script.js` 中的关键模式：**
- `ThemeLanguageManager` 类 — 单例模式，管理主题（深色/浅色）和语言（zh/en）状态，通过 localStorage 持久化
- 双语内容以内联数据对象形式定义，包含 `zh`/`en` 键
- 通过 `requestIdleCallback` 延迟非关键 DOM 更新（含 `setTimeout` 降级方案）
- 悬浮效果使用 `requestAnimationFrame` 防抖，避免布局抖动

**`styles.css` 中的约定：**
- 默认深色主题；浅色主题通过 `[data-theme="light"]` 属性切换
- 所有主题颜色使用 CSS 自定义属性（`--bg-primary`、`--text-primary` 等）
- 使用 `clamp()` 实现流式排版
- 动画遵循 `prefers-reduced-motion` 用户偏好

## 性能基线

Lighthouse 移动端和桌面端所有指标均为 100/100，修改代码时请维持此基线。
