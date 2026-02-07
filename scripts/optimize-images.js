const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../assets/images');

async function processFile(filePath) {
    try {
        const image = await Jimp.read(filePath);
        const { width, height } = image.bitmap;

        // Optimization criteria:
        // 1. Max dimension > 1280
        // 2. Size > 500KB (approx check via buffer or just always optimize large dimensions)

        let processed = false;

        // Resize if too big
        if (width > 1280 || height > 1280) {
            console.log(`Resizing ${path.basename(filePath)} (${width}x${height}) -> max 1280`);
            image.scaleToFit({ w: 1280, h: 1280 });
            processed = true;
        }

        // Always compress if processed or if existing file is huge (implied by just writing it out with quality)
        // But to be safe, let's just write it out with quality 80 for all images in the target folder
        // Only if it's a chapter image (scene*.png) or similar large asset.
        // We'll target everything in 'youssef' folder specifically.

        if (filePath.includes('youssef') || processed) {
            if (!processed) {
                console.log(`Compressing ${path.basename(filePath)} (no resize needed)`);
            }
            // Jimp v1.0 write is async and returns promise
            if (image.writeAsync) {
                await image.writeAsync(filePath);
            } else {
                await image.write(filePath);
            }
            console.log(`Saved ${path.basename(filePath)}`);
        } else {
            console.log(`Skipping ${path.basename(filePath)} (small enough/not target)`);
        }

    } catch (err) {
        console.error(`Error processing ${filePath}:`, JSON.stringify(err, null, 2));
    }
}

async function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            await walkDir(filePath);
        } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
            // Filter only youssef folder or large files to avoid messing up icons
            if (filePath.includes('youssef') || stat.size > 500 * 1024) {
                await processFile(filePath);
            }
        }
    }
}

walkDir(imagesDir).then(() => {
    console.log('Image optimization complete.');
});
