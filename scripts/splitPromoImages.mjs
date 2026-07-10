/**
 * Birlashtirilgan do/posle promo rasmlarini alohida fayllarga bo'ladi.
 *
 * do1.jpg — vertikal: chap = do, o'ng = posle
 * do2.jpg — gorizontal: yuqori = do, past = posle
 * do3.jpg — gorizontal: yuqori = do, past = posle
 */
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const promoDir = path.join(__dirname, '..', 'public', 'promo');

const JPEG_QUALITY = 92;

const jobs = [
  {
    source: 'do1.jpg',
    split: 'vertical',
    before: 'do1do.jpg',
    after: 'do1posle.jpg',
  },
  {
    source: 'do2.jpg',
    split: 'horizontal',
    before: 'do2do.jpg',
    after: 'do2posle.jpg',
  },
  {
    source: 'do3.jpg',
    split: 'horizontal',
    before: 'do3do.jpg',
    after: 'do3posle.jpg',
  },
];

async function splitImage({ source, split, before, after }) {
  const inputPath = path.join(promoDir, source);
  const meta = await sharp(inputPath).metadata();
  const { width, height } = meta;

  if (!width || !height) {
    throw new Error(`Could not read dimensions: ${source}`);
  }

  let beforeExtract;
  let afterExtract;

  if (split === 'vertical') {
    const half = Math.floor(width / 2);
    beforeExtract = { left: 0, top: 0, width: half, height };
    afterExtract = { left: half, top: 0, width: width - half, height };
  } else {
    const half = Math.floor(height / 2);
    beforeExtract = { left: 0, top: 0, width, height: half };
    afterExtract = { left: 0, top: half, width, height: height - half };
  }

  const beforePath = path.join(promoDir, before);
  const afterPath = path.join(promoDir, after);

  await sharp(inputPath)
    .extract(beforeExtract)
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(beforePath);

  await sharp(inputPath)
    .extract(afterExtract)
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(afterPath);

  const beforeMeta = await sharp(beforePath).metadata();
  const afterMeta = await sharp(afterPath).metadata();

  console.log(
    `${source} (${width}x${height}, ${split})`,
  );
  console.log(`  → ${before}: ${beforeMeta.width}x${beforeMeta.height}`);
  console.log(`  → ${after}: ${afterMeta.width}x${afterMeta.height}`);
}

for (const job of jobs) {
  await splitImage(job);
}

console.log('\nDone.');
