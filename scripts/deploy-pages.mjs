import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
if (!existsSync(join(dist, 'index.html'))) throw new Error('Run npm run build before publishing.');
const git = (args, cwd = root) => execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] }).trim();
const remote = git(['remote', 'get-url', '--push', 'origin']);
const source = git(['rev-parse', '--short', 'HEAD']);
const directory = mkdtempSync(join(tmpdir(), 'portfolio-pages-'));

try {
  git(['init', '--initial-branch=gh-pages'], directory);
  git(['remote', 'add', 'origin', remote], directory);
  const branch = spawnSync('git', ['ls-remote', '--exit-code', remote, 'refs/heads/gh-pages'], { cwd: root, stdio: 'inherit' });
  if (branch.status === 0) {
    git(['fetch', '--depth=1', 'origin', 'gh-pages'], directory);
    git(['checkout', '-B', 'gh-pages', 'FETCH_HEAD'], directory);
  } else if (branch.status !== 2) {
    throw new Error('Could not check the remote gh-pages branch.');
  }
  for (const entry of readdirSync(directory)) {
    if (entry !== '.git') rmSync(join(directory, entry), { recursive: true, force: true });
  }
  cpSync(dist, directory, { recursive: true });
  writeFileSync(join(directory, '.nojekyll'), '');
  git(['add', '--all'], directory);
  const changes = git(['status', '--porcelain'], directory);
  if (changes) {
    git(['commit', '-m', `Publish portfolio from ${source}`], directory);
    git(['push', 'origin', 'gh-pages'], directory);
    console.log('Published compiled site to gh-pages.');
  } else {
    console.log('gh-pages already contains this build.');
  }
} finally {
  rmSync(directory, { recursive: true, force: true });
}
