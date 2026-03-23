import sharp from 'sharp';
import { readdir, stat, rename, unlink, readFile, writeFile } from 'fs/promises';
import { join, extname, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = join(__dirname, '..', 'src', 'img');
const MAX_WIDTH = 1920;
const QUALITY = 75;
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

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
  const outPath = filePath.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
  const tmpPath = outPath + '.tmp';

  try {
    const buffer = await readFile(filePath);
    const metadata = await sharp(buffer).metadata();
    let pipeline = sharp(buffer);

    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH);
    }

    const result = await pipeline.webp({ quality: QUALITY }).toBuffer();
    const origSize = buffer.length;

    await writeFile(outPath, result);
    if (tmpPath !== outPath) await unlink(tmpPath).catch(() => {});

    const newSize = result.length;
    const saved = ((1 - newSize / origSize) * 100).toFixed(1);

    console.log(
      `✓ ${rel} → .webp | ${(origSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${saved}% smaller)`
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
