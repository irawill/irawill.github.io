import process from 'node:process';
import { build } from 'esbuild';

const pad = (value) => String(value).padStart(2, '0');

const formatLocalTimestamp = (date) => {
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    const second = pad(date.getSeconds());

    const offsetMinutes = -date.getTimezoneOffset();
    const sign = offsetMinutes >= 0 ? '+' : '-';
    const absoluteOffset = Math.abs(offsetMinutes);
    const offsetHour = pad(Math.floor(absoluteOffset / 60));
    const offsetMinute = pad(absoluteOffset % 60);

    return `${year}-${month}-${day} ${hour}:${minute}:${second} ${sign}${offsetHour}:${offsetMinute}`;
};

const getBuildBanner = () => {
    const now = new Date();
    const localTime = formatLocalTimestamp(now);
    const utcTime = now.toISOString();
    return `/* Build Time (Local): ${localTime}; UTC: ${utcTime} */`;
};

const run = async () => {
    await build({
        entryPoints: ['script.js'],
        outfile: 'script.min.js',
        minify: true,
        legalComments: 'none',
        banner: {
            js: getBuildBanner(),
        },
    });
};

run().catch((error) => {
    console.error(error);
    process.exit(1);
});
