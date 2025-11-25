const fs = require('fs');
const path = require('path');

const portfolioPath = path.join(process.cwd(), 'src/data/sections/portfolio.json');
const imagesDir = path.join(process.cwd(), 'public/img/portfolio');

// Read current portfolio data to keep titles/text
const portfolioData = JSON.parse(fs.readFileSync(portfolioPath, 'utf8'));

// Get all image files
let allFiles = [];
try {
    allFiles = fs.readdirSync(imagesDir).filter(file =>
        file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg') || file.endsWith('.webp')
    );
} catch (e) {
    console.error("Error reading directory:", e);
    process.exit(1);
}

console.log(`Found ${allFiles.length} total images in folder.`);

// Shuffle images (Fisher-Yates shuffle)
for (let i = allFiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allFiles[i], allFiles[j]] = [allFiles[j], allFiles[i]];
}

// Distribute images across the 16 items
const itemsCount = portfolioData.items.length;
const imagesPerItem = Math.ceil(allFiles.length / itemsCount);

console.log(`Distributing approx ${imagesPerItem} images to each of the ${itemsCount} items.`);

portfolioData.items.forEach((item, index) => {
    const start = index * imagesPerItem;
    const end = start + imagesPerItem;
    // Slice the images for this item
    const itemImages = allFiles.slice(start, end).map(img => `/img/portfolio/${img}`);

    // Update the item with new images. 
    // If we have fewer images than items (unlikely but possible), some might be empty, 
    // so we should handle that gracefully or just leave them empty.
    item.images = itemImages;
});

// Write back to file
fs.writeFileSync(portfolioPath, JSON.stringify(portfolioData, null, 4));

console.log('Portfolio updated successfully!');
