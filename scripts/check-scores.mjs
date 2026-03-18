import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const reportsDir = join(__dirname, '..', 'reports');

const CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];
const CATEGORY_LABELS = {
  'performance': 'Performance',
  'accessibility': 'Accessibility',
  'best-practices': 'Best Practices',
  'seo': 'SEO',
};

function loadReport(filename) {
  const filepath = join(reportsDir, filename);
  try {
    return JSON.parse(readFileSync(filepath, 'utf-8'));
  } catch (e) {
    console.error(`\x1b[31m✗ 无法读取报告: ${filepath}\x1b[0m`);
    console.error(`  ${e.message}`);
    process.exit(1);
  }
}

const h5 = loadReport('lighthouse-h5.report.json');
const pc = loadReport('lighthouse-pc.report.json');

let allPassed = true;

console.log('\n\x1b[1m┌──────────────────┬────────┬────────┐\x1b[0m');
console.log('\x1b[1m│ Category         │   H5   │   PC   │\x1b[0m');
console.log('\x1b[1m├──────────────────┼────────┼────────┤\x1b[0m');

for (const cat of CATEGORIES) {
  const h5Score = h5.categories[cat].score;
  const pcScore = pc.categories[cat].score;
  const h5Val = Math.round(h5Score * 100);
  const pcVal = Math.round(pcScore * 100);
  const h5Pass = h5Score === 1;
  const pcPass = pcScore === 1;

  if (!h5Pass || !pcPass) allPassed = false;

  const h5Display = h5Pass ? `\x1b[32m ${h5Val}  ✓\x1b[0m` : `\x1b[31m  ${String(h5Val).padStart(2)}  ✗\x1b[0m`;
  const pcDisplay = pcPass ? `\x1b[32m ${pcVal}  ✓\x1b[0m` : `\x1b[31m  ${String(pcVal).padStart(2)}  ✗\x1b[0m`;

  const label = CATEGORY_LABELS[cat].padEnd(16);
  console.log(`\x1b[1m│\x1b[0m ${label} \x1b[1m│\x1b[0m${h5Display} \x1b[1m│\x1b[0m${pcDisplay} \x1b[1m│\x1b[0m`);
}

console.log('\x1b[1m└──────────────────┴────────┴────────┘\x1b[0m');

if (allPassed) {
  console.log('\n\x1b[32m✓ Lighthouse 检查通过，所有指标均为 100 分。\x1b[0m\n');
  process.exit(0);
} else {
  console.log('\n\x1b[31m✗ Lighthouse 检查未通过，存在不满分项。\x1b[0m');
  console.log(`  H5 报告: reports/lighthouse-h5.report.html`);
  console.log(`  PC 报告: reports/lighthouse-pc.report.html\n`);
  process.exit(1);
}
