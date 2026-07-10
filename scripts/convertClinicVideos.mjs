/**
 * Klinika videolarini (1–10) web MP4 ga o'tkazadi.
 * Manba: loyiha ildizidagi 1.MOV, 2.MOV, 3.MP4 ... 10.MP4
 * Natija: public/videos/1.mp4 ... 10.mp4
 */
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const outDir = path.join(rootDir, 'public', 'videos');

const SOURCE_CANDIDATES = [
  ['1.MOV', '1.mp4', '1.MP4'],
  ['2.MOV', '2.mp4', '2.MP4'],
  ['3.MP4', '3.mp4', '3.MOV'],
  ['4.MOV', '4.mp4', '4.MP4'],
  ['5.MP4', '5.mp4', '5.MOV'],
  ['6.MP4', '6.mp4', '6.MOV'],
  ['7.MP4', '7.mp4', '7.MOV'],
  ['8.MP4', '8.mp4', '8.MOV'],
  ['9.MP4', '9.mp4', '9.MOV'],
  ['10.MP4', '10.mp4', '10.MOV'],
];

function findSource(index) {
  for (const name of SOURCE_CANDIDATES[index - 1]) {
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
    throw new Error(result.stderr || `ffmpeg failed for ${input}`);
  }
}

for (let i = 1; i <= 10; i++) {
  const source = findSource(i);
  if (!source) {
    console.warn(`skip ${i}: source not found`);
    continue;
  }
  const output = path.join(outDir, `${i}.mp4`);
  console.log(`Converting ${path.basename(source)} -> videos/${i}.mp4`);
  convert(source, output);
}

console.log('Done.');
