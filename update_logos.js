const fs = require('fs');
const path = require('path');

const htmlDir = path.join(__dirname, 'html');

function updateLogos() {
    if (!fs.existsSync(htmlDir)) {
        console.log(`Directory not found: ${htmlDir}`);
        return;
    }

    const files = fs.readdirSync(htmlDir).filter(file => file.endsWith('.html'));

    files.forEach(file => {
        const filepath = path.join(htmlDir, file);
        const originalContent = fs.readFileSync(filepath, 'utf-8');
        let content = originalContent;

        // 1. Remove <div class="flex-shrink-0..."> around NEVER MADE
        content = content.replace(
            /<div class="flex-shrink-0[^>]*>\s*<a[^>]*>NEVER\s*MADE<\/a>\s*<\/div>/gmi,
            ''
        );

        // 2. Remove <a> tags that contain NEVER MADE that serve as logo
        content = content.replace(
            /<a[^>]*class="[^"]*text-(?:xl|2xl|3xl)[^"]*"[^>]*>\s*NEVER\s*MADE\s*<\/a>/gmi,
            ''
        );

        // 3. Remove any other stray <h3>NEVER MADE</h3> (like in product.html)
        content = content.replace(
            /<h3[^>]*>\s*NEVER\s*MADE\s*<\/h3>/gmi,
            ''
        );
        
        // 4. Remove span with NEVER MADE in mobile menu, if any
        content = content.replace(
            /<span[^>]*>\s*NEVER\s*MADE\s*<\/span>/gmi,
            ''
        );

        if (content !== originalContent) {
            fs.writeFileSync(filepath, content, 'utf-8');
            console.log(`Cleaned up ${file}`);
        }
    });

    console.log("Done.");
}

updateLogos();
