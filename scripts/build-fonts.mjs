import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import ttf2woff2 from 'ttf2woff2';

const fontsDir = path.resolve(process.cwd(), 'fonts');
const files = (await readdir(fontsDir)).filter((file) => file.endsWith('.ttf'));

if (!files.length) {
    console.log('No TTF files found in fonts/.');
    process.exit(0);
}

for (const file of files) {
    const inputPath = path.join(fontsDir, file);
    const outputPath = inputPath.replace(/\.ttf$/i, '.woff2');
    const ttfBuffer = await readFile(inputPath);
    const woff2Buffer = ttf2woff2(ttfBuffer);

    await writeFile(outputPath, woff2Buffer);
    console.log(`Generated ${path.basename(outputPath)}`);
}
