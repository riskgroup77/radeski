/**
 * vid12–vid22 ni public/videos/12.mp4 … 22.mp4 ga o'tkazadi.
 */
import { existsSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const outDir = path.join(rootDir, 'public', 'videos');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const IDS = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

function findSource(id) {
  for (const name of [`vid${id}.MP4`, `vid${id}.mp4`, `vid${id}.MOV`, `${id}.MP4`, `${id}.mp4`]) {
    const full = path.join(rootDir, name);
    if (existsSync(full)) return full;
  }
  return null;
}

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
    throw new Error(result.stderr?.slice(-800) || `ffmpeg failed for ${input}`);
  }
}

function probeDuration(filePath) {
  const result = spawnSync(
    'ffprobe',
    ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', filePath],
    { encoding: 'utf8' },
  );
  const seconds = Number(result.stdout.trim());
  if (!Number.isFinite(seconds)) return '';
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

const durations = {};

for (const id of IDS) {
  const source = findSource(id);
  if (!source) {
    console.warn(`skip ${id}: source not found`);
    continue;
  }
  const output = path.join(outDir, `${id}.mp4`);
  console.log(`Converting ${path.basename(source)} -> videos/${id}.mp4 ...`);
  convert(source, output);
  const duration = probeDuration(output);
  durations[id] = duration;
  console.log(`  OK (${duration})`);
}

console.log(JSON.stringify(durations, null, 2));
console.log('Done.');
