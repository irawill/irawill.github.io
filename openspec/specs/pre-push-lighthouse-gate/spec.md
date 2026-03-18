### Requirement: push 前自动构建
pre-push hook SHALL 在执行 Lighthouse 审计前先运行 `npm run build`，确保构建产物与源码一致。

#### Scenario: 构建成功
- **WHEN** 开发者执行 `git push`
- **THEN** hook 先执行 `npm run build`，构建成功后继续后续流程

#### Scenario: 构建失败
- **WHEN** 开发者执行 `git push` 且 `npm run build` 返回非零退出码
- **THEN** hook 立即终止并阻止 push，输出构建错误信息

### Requirement: Dev Server 检测复用
pre-push hook SHALL 检测 localhost:5500 是否已有服务在监听。若已有，则复用；若没有，则自动启动 Python HTTP server 并在 hook 结束时清理。

#### Scenario: 端口已被占用（dev server 运行中）
- **WHEN** localhost:5500 已有服务在监听
- **THEN** hook 复用该服务，不启动新进程，hook 结束后不终止该服务

#### Scenario: 端口空闲
- **WHEN** localhost:5500 无服务监听
- **THEN** hook 启动 `python3 -m http.server 5500` 作为后台进程，并注册 trap 在 hook 退出时自动 kill 该进程

#### Scenario: 自启服务器启动失败
- **WHEN** Python HTTP server 启动失败或端口在检测后被占用
- **THEN** hook 终止并阻止 push，输出错误提示

### Requirement: 串行执行 Lighthouse 审计
pre-push hook SHALL 串行执行 `npm run lh:h5` 和 `npm run lh:pc`，先完成移动端审计再执行桌面端审计，避免 Chrome 实例争抢 CPU 导致 Performance 分数不准。

#### Scenario: 两端审计均成功完成
- **WHEN** 移动端和桌面端 Lighthouse 审计均正常完成
- **THEN** 生成 `reports/lighthouse-h5.report.json` 和 `reports/lighthouse-pc.report.json`

#### Scenario: 移动端审计失败
- **WHEN** `npm run lh:h5` 返回非零退出码
- **THEN** hook 立即终止并阻止 push，不再执行桌面端审计

#### Scenario: 桌面端审计失败
- **WHEN** `npm run lh:pc` 返回非零退出码
- **THEN** hook 终止并阻止 push，输出错误信息

### Requirement: 得分检查与门禁
hook SHALL 解析两份 Lighthouse JSON 报告，检查 Performance、Accessibility、Best Practices、SEO 四项得分（共 8 项：4 类别 × 2 端）。全部为 100 分时放行 push，任一低于 100 分时阻止 push。

#### Scenario: 全部满分
- **WHEN** 8 项得分均为 100（JSON 中 score = 1）
- **THEN** hook 以退出码 0 结束，push 正常执行

#### Scenario: 存在不满分项
- **WHEN** 任一得分低于 100
- **THEN** hook 以退出码 1 结束，阻止 push，并输出得分明细表格，标注未满分项及对应报告路径

### Requirement: 得分明细输出格式
当检查完成后，hook SHALL 输出格式化的得分表格，包含移动端和桌面端的四项得分，满分项标记通过，不满分项标记失败。

#### Scenario: 输出得分表格
- **WHEN** Lighthouse 审计完成且 JSON 解析成功
- **THEN** 输出包含以下信息的表格：类别名称、移动端得分、桌面端得分、每项的通过/失败状态，以及详细报告的文件路径

### Requirement: husky 自动安装
项目 SHALL 通过 `package.json` 的 `"prepare": "husky"` script 确保 `npm install` 后自动注册 git hooks。

#### Scenario: 新 clone 项目
- **WHEN** 开发者 clone 项目并执行 `npm install`
- **THEN** husky 自动安装，`.husky/pre-push` 被注册为 git pre-push hook
