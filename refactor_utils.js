/**
 * Unified Folder Restructure & Path Fixer Utility
 * ------------------------------------------------
 * This script was originally used during the transition of project files into 
 * separate 'html' and 'js' directories to accurately correct every relative path.
 * 
 * It contains the logic to:
 * 1. Move files into specialized folders.
 * 2. Parse HTML files to rewrite `href` and `src` links dynamically.
 * 3. Add dynamic Alpine Javascript image resolution for Cart operations depending on current page depth.
 * 4. Revert the folder structures back if needed.
 */

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const htmlDir = path.join(rootDir, 'html');
const jsDir = path.join(rootDir, 'js');

// 1. Fixing HTML Reference Links 
const replaceHtmlRefs = (content, mode) => {
    let result = content;

    if (mode === 'index') {
        const htmlFiles = [
            'shop.html', 'tshirts.html', 'hoodies.html', 'bottoms.html', 'jackets.html',
            'checkout.html', 'product.html', 'collections.html', 'contact.html',
            'shipping.html', 'returns.html', 'archives.html'
        ];
        // Redirect index links to HTML folder
        htmlFiles.forEach(hf => {
            const hrf = new RegExp(`href="${hf}(.*?)"`, 'g');
            result = result.replace(hrf, `href="html/${hf}$1"`);
            const lcf = new RegExp(`'${hf}(.*?)'`, 'g');
            result = result.replace(lcf, `'html/${hf}$1'`);
        });

        let jsFiles = ['script.js', 'products.js', 'saveaddres.js', 'openNewFormjs'];
        // Redirect scripts to JS folder
        jsFiles.forEach(jf => {
            const jsrf = new RegExp(`src="${jf}"`, 'g');
            result = result.replace(jsrf, `src="js/${jf}"`);
        });

    } else if (mode === 'sub') {
        // Redirect internal page links trailing backwards
        result = result.replace(/href="index\.html(.*?)"/g, `href="../index.html$1"`);
        result = result.replace(/href="style\.css"/g, `href="../style.css"`);
        result = result.replace(/src="image\//g, `src="../image/`);
    }

    return result;
}

// 2. Alpine Store Normalization (Cart Image Repair)
const injectAlpineNormalizer = (scriptContent) => {
    if (!scriptContent.includes('getImage(imgStr)')) {
        const newMethod = `        getImage(imgStr) {
            if (!imgStr) return '';
            if (imgStr.startsWith('http')) return imgStr;
            const parts = imgStr.split('/');
            const filename = parts[parts.length - 1];
            // Resolves image root correctly whether viewed from index.html or html/shop.html
            const loc = window.location.pathname;
            const isRoot = loc.endsWith('/') || loc.endsWith('index.html') || !loc.includes('/html');
            return isRoot ? 'image/' + filename : '../image/' + filename;
        },`;

        // Inject the property into Alpine Store Object
        return scriptContent.replace(/(save\(\) \{[\s\S]*?\})/, `$1,\n\n${newMethod}`);
    }
    return scriptContent;
}

// 3. Reverting Script Files Back to Root 
const moveJsBackToRoot = () => {
    if (fs.existsSync(jsDir)) {
        fs.readdirSync(jsDir).forEach(f => {
            if (f.endsWith('.js') || f === 'openNewFormjs') {
                fs.renameSync(path.join(jsDir, f), path.join(rootDir, f));
            }
        });
        fs.rmdirSync(jsDir, { recursive: true });
    }
}
