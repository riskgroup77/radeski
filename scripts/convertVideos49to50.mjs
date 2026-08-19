/**
 * vid49.MOV va vid50.mp4 → public/videos/49.mp4, 50.mp4
 * Usage: node scripts/convertVideos49to50.mjs
 */
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const outDir = path.join(rootDir, 'public', 'videos');

const JOBS = [
  { input: 'vid49.MOV', output: '49.mp4' },
  { input: 'vid50.mp4', output: '50.mp4' },
];

function convert(input, output) {
  const result = spawnSync(
    'ffmpeg',
    [
      '-y',
      '-i',
      input,
      '-vf',
      'scale=720:-2',
      '-c:v',
      'libx264',
      '-crf',
      '26',
      '-preset',
      'medium',
      '-c:a',
      'aac',
      '-b:a',
      '128k',
      '-movflags',
      '+faststart',
      output,
    ],
    { stdio: 'pipe', encoding: 'utf8' },
  );

  if (result.status !== 0) {
    throw new Error(result.stderr || `ffmpeg failed for ${input}`);
  }
}

for (const job of JOBS) {
  const source = path.join(rootDir, job.input);
  if (!existsSync(source)) {
    console.warn(`skip: ${job.input} not found`);
    continue;
  }
  const target = path.join(outDir, job.output);
  console.log(`Converting ${job.input} -> videos/${job.output}`);
  convert(source, target);
}

console.log('Done.');
