import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = join(__dirname, '..', 'src', 'img');
const MAX_WIDTH = 1920;
const QUALITY = 80;
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const rel = relative(IMG_DIR, filePath);
  const outPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  try {
    const metadata = await sharp(filePath).metadata();
    let pipeline = sharp(filePath);

    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH);
    }

    pipeline = pipeline.webp({ quality: QUALITY });

    await pipeline.toFile(outPath);

    const [origStat, newStat] = await Promise.all([stat(filePath), stat(outPath)]);
    const saved = ((1 - newStat.size / origStat.size) * 100).toFixed(1);

    console.log(
      `✓ ${rel} → .webp | ${(origStat.size / 1024 / 1024).toFixed(1)}MB → ${(newStat.size / 1024 / 1024).toFixed(1)}MB (${saved}% smaller)`
    );
  } catch (err) {
    console.error(`✗ ${rel}: ${err.message}`);
  }
}

const files = await getFiles(IMG_DIR);
console.log(`Found ${files.length} images to optimize...\n`);

for (const file of files) {
  await optimizeImage(file);
}

console.log('\nDone!');
