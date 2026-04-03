const fs = require('fs');
const path = require('path');

const files = ['index.html', 'shop.html', 'tshirts.html', 'hoodies.html', 'bottoms.html', 'jackets.html'];

for (const file of files) {
    const fullPath = path.join(__dirname, file);
    if (!fs.existsSync(fullPath)) continue;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    let matches = 0;
    
    // Replace product card links more robustly
    // Find <a href="checkout.html" anywhere ... @click.prevent="$store.cart.buyNow({ ... })"
    const regex = /<a\s+href="checkout\.html"\s*(?:[\s\S]*?)@click\.prevent="\$store\.cart\.buyNow\(\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*price:\s*(\d+),\s*image:\s*'([^']+)',\s*size:\s*'([^']+)'\s*\}\)"/g;
    
    content = content.replace(regex, (match, id, name, price, image, size) => {
        matches++;
        const query = `id=${encodeURIComponent(id)}&name=${encodeURIComponent(name)}&price=${price}&image=${encodeURIComponent(image)}&size=${encodeURIComponent(size)}`;
        return `<a href="product.html?${query}"`;
    });
    
    // Also, there might be ones where href is not the first attribute ?
    // Let's just catch all that match the buyNow call if it's inside an anchor.
    // simpler regex:
    const simpleRegex = /<a\s+href="checkout\.html"[^>]*?@click\.prevent="\$store\.cart\.buyNow\(\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*price:\s*(\d+),\s*image:\s*'([^']+)',\s*size:\s*'([^']+)'\s*\}\)"/g;
    
    let matches2 = 0;
    content = content.replace(simpleRegex, (match, id, name, price, image, size) => {
        matches2++;
        const query = `id=${encodeURIComponent(id)}&name=${encodeURIComponent(name)}&price=${price}&image=${encodeURIComponent(image)}&size=${encodeURIComponent(size)}`;
        return `<a href="product.html?${query}"`;
    });

    console.log(`File: ${file}: Matches regex 1: ${matches}, Matches regex 2: ${matches2}`);
    fs.writeFileSync(fullPath, content);
}
