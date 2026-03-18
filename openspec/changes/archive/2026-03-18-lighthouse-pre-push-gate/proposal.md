## Why

每次 push 代码前需要保证 Lighthouse 在移动端和桌面端测试得分均为 100 分。目前没有任何自动化门禁，完全依赖开发者手动跑 `npm run lh:h5` 和 `npm run lh:pc` 检查，容易遗漏导致低分代码被推送。

## What Changes

- 引入 husky 管理 git hooks，使 pre-push hook 可入库共享
- 新增 `pre-push` hook 脚本，在 `git push` 前自动执行：
  - 运行 `npm run build` 确保构建产物最新
  - 检测 localhost:5500 是否已有服务运行，无则自启 Python HTTP 服务器并在结束时自动清理
  - 并行运行 `npm run lh:h5` 和 `npm run lh:pc`
  - 解析 Lighthouse JSON 报告，检查 8 项得分（4 类别 × 2 端）
  - 全部 100 分放行 push，任一 <100 分阻止 push 并输出得分明细
- 新增 `scripts/check-scores.mjs` 脚本用于解析 Lighthouse JSON 并格式化输出

## Capabilities

### New Capabilities
- `pre-push-lighthouse-gate`: push 前自动运行 Lighthouse 审计并阻止低分代码提交的完整门禁流程

### Modified Capabilities

（无）

## Impact

- **依赖**: 新增 `husky` devDependency
- **package.json**: 新增 `"prepare": "husky"` script
- **新文件**: `.husky/pre-push`、`scripts/check-scores.mjs`
- **开发体验**: 每次 push 增加约 20-30 秒等待时间
