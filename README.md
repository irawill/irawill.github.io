# Will 的个人网站

现代化、响应式的个人作品展示站点，聚焦前端工程能力、项目经历与技术沉淀展示。

## 项目说明

- 纯静态实现：`HTML + CSS + Vanilla JS`
- 支持中英文切换、主题切换、打字机效果、响应式布局
- 兼顾 PC / H5 展示体验
- 产物发布模式：源码 + 构建产物（`*.min.*`、`woff2`）一并入库

## 目录结构

```text
.
├── index.html
├── script.js
├── styles.css
├── script.min.js
├── styles.min.css
├── fonts/
│   ├── inter.css
│   ├── inter-*.ttf
│   └── inter-*.woff2
└── scripts/
    ├── build-fonts.mjs
    └── dev.mjs
```

## 环境要求

- Node.js 20+
- npm 10+
- Python 3（用于本地静态 server）

## 快速开始

```bash
npm install
npm run dev
```

启动后访问：`http://localhost:5500`

## 可用脚本

- `npm run dev`：本地开发模式（启动 server + 监听构建 js/css + 生成 woff2 字体）
- `npm run build`：一键构建发布产物（字体、CSS、JS）
- `npm run build:fonts`：将 `fonts/*.ttf` 转换为 `fonts/*.woff2`
- `npm run build:css`：生成 `styles.min.css`
- `npm run build:js`：生成 `script.min.js`
- `npm run lh:h5`：移动端 Lighthouse（禁用扩展基线，输出到 `reports/`）
- `npm run lh:pc`：桌面端 Lighthouse（禁用扩展基线，输出到 `reports/`）

## 发布流程

```bash
npm ci
npm run build
```

然后提交以下变更并发布：

- 源码变更（`index.html`、`script.js`、`styles.css` 等）
- 构建产物（`script.min.js`、`styles.min.css`、`fonts/*.woff2`）

## Lighthouse 说明

- 推荐使用 `npm run lh:h5` / `npm run lh:pc` 作为统一采集入口
- 命令已包含 `--incognito --disable-extensions`，避免浏览器扩展注入干扰评分
- 当前默认使用 `--throttling-method=provided`（本机实测口径）

## Lighthouse 最新得分（2026-03-05）

| 场景 | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| H5 | 100 | 100 | 100 | 100 |
| PC | 100 | 100 | 100 | 100 |

## 线上地址

[https://irawill.github.io](https://irawill.github.io)

## Credits

此站点由 **Claude AI** 生成。
