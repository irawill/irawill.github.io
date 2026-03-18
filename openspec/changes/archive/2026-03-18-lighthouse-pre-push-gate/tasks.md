## 1. Husky 初始化

- [x] 1.1 安装 husky 为 devDependency（`npm install --save-dev husky`）
- [x] 1.2 在 package.json 中添加 `"prepare": "husky"` script
- [x] 1.3 执行 `npx husky` 初始化 `.husky/` 目录

## 2. 分数检查脚本

- [x] 2.1 创建 `scripts/check-scores.mjs`：读取 `reports/lighthouse-h5.report.json` 和 `reports/lighthouse-pc.report.json`，提取 4 个类别的 score
- [x] 2.2 实现格式化得分表格输出，包含类别名、移动端得分、桌面端得分、通过/失败标记
- [x] 2.3 实现退出码逻辑：全部 score === 1 时 exit 0，否则 exit 1，并输出报告文件路径

## 3. Pre-push Hook 脚本

- [x] 3.1 创建 `.husky/pre-push` 脚本，添加执行 `npm run build` 的步骤（失败则 exit 1）
- [x] 3.2 实现 dev server 检测复用逻辑：检测 localhost:5500，已有则复用，否则启动 `python3 -m http.server 5500 &` 并注册 `trap kill EXIT`
- [x] 3.3 添加等待 server 就绪的循环检测（curl 轮询，超时 ~10 秒）
- [x] 3.4 实现串行执行 `npm run lh:h5` 和 `npm run lh:pc`，任一失败则 exit 1
- [x] 3.5 调用 `node scripts/check-scores.mjs` 检查得分并以其退出码作为 hook 退出码

## 4. 验证

- [x] 4.1 端到端测试：执行 `git push` 验证完整流程（build → server → lighthouse → 检查 → 放行/阻止）
