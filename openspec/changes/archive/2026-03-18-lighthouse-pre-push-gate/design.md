## Context

项目是纯静态单页网站，通过 GitHub Pages 部署。Lighthouse 移动端和桌面端所有指标均需维持 100/100。当前已有 `npm run lh:h5` 和 `npm run lh:pc` 脚本，但无自动化门禁，完全依赖开发者手动执行。项目无 git hooks 基础设施。

## Goals / Non-Goals

**Goals:**
- `git push` 前自动执行 Lighthouse 审计，得分不满 100 时阻止 push
- hook 脚本入库，任何 clone 项目并 `npm install` 的人自动获得 hook
- 复用现有 `lh:h5`/`lh:pc` npm scripts，不修改它们

**Non-Goals:**
- CI/CD 级别的 Lighthouse 检查（仅本地门禁）
- 自定义 Lighthouse 阈值配置（固定 100 分）
- 修改现有 npm scripts 的参数或行为

## Decisions

### 1. Hook 管理：husky

**选择**: husky v9+

**替代方案**:
- 原生 `.git/hooks/` — 不入库，每个开发者需手动配置
- lint-staged — 定位不同，专注 pre-commit 的 staged files

**理由**: husky 是最轻量的入库方案。v9+ 只做一件事：把 `.husky/` 下的脚本注册为 git hooks。通过 `"prepare": "husky"` 实现 `npm install` 后自动安装。

### 2. Hook 触发点：pre-push

**选择**: pre-push（而非 pre-commit）

**理由**: Lighthouse 审计耗时 20-30 秒，放在 pre-commit 会严重拖慢日常开发节奏。push 频率远低于 commit，在 push 前做门禁更合理。

### 3. 构建策略：hook 内执行 build

**选择**: pre-push 脚本内先执行 `npm run build`

**理由**: 确保 Lighthouse 审计的是最新构建产物，避免源码改了但忘记 rebuild 的情况。

### 4. Dev Server 生命周期：检测复用

**选择**: 先检测 localhost:5500 是否在监听，已有服务则复用，否则自启 Python HTTP server 并在 hook 结束时自动清理（trap EXIT）

**替代方案**:
- 总是自启新端口 — 可能与已运行的 dev server 产生资源竞争
- 要求手动启动 — 增加操作步骤，容易遗忘

**理由**: 兼顾自动化与对现有进程的尊重。开发者正在跑 `npm run dev` 时不会被打断。

### 5. Lighthouse 执行：串行

**选择**: 先执行 `npm run lh:h5`，完成后再执行 `npm run lh:pc`，串行运行

**替代方案**:
- 并行执行（`lh:h5 &` + `lh:pc &` + `wait`）— 速度更快，但两个 headless Chrome 实例争抢 CPU，在 `--throttling-method=provided`（不做模拟节流）下会导致 Performance 分数不稳定

**理由**: 项目使用 `--throttling-method=provided`，Lighthouse 直接用机器实际性能测量。并行时两个 Chrome 争抢 CPU 资源会导致 Performance 分数虚低，产生误报。串行执行虽然多耗时约 15-20s，但分数更准确可靠。

### 6. 分数解析：Node.js 脚本

**选择**: 独立的 `scripts/check-scores.mjs` 使用 Node.js 解析 JSON

**替代方案**:
- shell 内联 `jq` — 需要额外系统依赖
- shell 内联 `node -e` — 逻辑复杂时可读性差

**理由**: Node.js 已是项目前置要求，无需额外依赖。独立脚本便于维护和测试。

## Risks / Trade-offs

- **[耗时]** 每次 push 增加 ~40-50s → 可接受，换取分数准确性和质量保证
- **[Python 依赖]** dev server 依赖 `python3` → macOS 自带，Linux 普遍预装，与现有 `npm run dev` 一致
- **[hook 可被绕过]** `git push --no-verify` 可跳过 → 这是 git 设计，无法阻止，但至少默认有门禁
