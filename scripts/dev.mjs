import { spawn } from 'node:child_process';
import process from 'node:process';
import { context } from 'esbuild';

const runCommand = (command, args) => new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('exit', (code) => {
        if (code === 0) {
            resolve();
            return;
        }
        reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
    });
});

const start = async () => {
    await runCommand(process.execPath, ['scripts/build-fonts.mjs']);

    const jsContext = await context({
        entryPoints: ['script.js'],
        outfile: 'script.min.js',
        minify: false,
        sourcemap: 'inline',
        legalComments: 'none',
    });

    const cssContext = await context({
        entryPoints: ['styles.css'],
        outfile: 'styles.min.css',
        minify: false,
        sourcemap: 'inline',
        legalComments: 'none',
    });

    await jsContext.watch();
    await cssContext.watch();

    const server = spawn('python3', ['-m', 'http.server', '5500'], {
        stdio: 'inherit',
    });

    let shuttingDown = false;
    const shutdown = async (exitCode = 0) => {
        if (shuttingDown) return;
        shuttingDown = true;

        await Promise.allSettled([jsContext.dispose(), cssContext.dispose()]);
        if (!server.killed) {
            server.kill('SIGTERM');
        }
        process.exit(exitCode);
    };

    process.on('SIGINT', () => shutdown(0));
    process.on('SIGTERM', () => shutdown(0));

    server.on('exit', async (code) => {
        if (!shuttingDown) {
            console.error(`Dev server exited with code ${code ?? 0}`);
        }
        await shutdown(code ?? 0);
    });

    console.log('Dev server is running at http://localhost:5500');
};

start().catch((error) => {
    console.error(error);
    process.exit(1);
});
