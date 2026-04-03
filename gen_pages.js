const fs = require('fs');

const templateFile = 'collections.html';
const content = fs.readFileSync(templateFile, 'utf8');

const headPart = content.split('<!-- Page Header -->')[0];
const tailPart = '<!-- Mobile Menu Overlay -->' + content.split('<!-- Mobile Menu Overlay -->')[1];

const pages = {
    'contact.html': {
        title: 'Contact Us',
        subtitle: 'Get in touch with our team',
        content: `
    <section class="py-24 px-6">
        <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div class="space-y-8">
                <h2 class="text-3xl font-black uppercase italic tracking-tighter">Studio HQ</h2>
                <div class="space-y-4 text-gray-400 text-sm font-bold uppercase tracking-widest">
                    <p>New Delhi, India</p>
                    <p>studio@nevermade.in</p>
                    <p>+91 98765 43210</p>
                </div>
            </div>
            <div>
                <form class="space-y-6">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase tracking-widest text-gray-500">Name</label>
                        <input type="text" class="w-full bg-transparent border border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-all">
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase tracking-widest text-gray-500">Email</label>
                        <input type="email" class="w-full bg-transparent border border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-all">
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase tracking-widest text-gray-500">Message</label>
                        <textarea rows="4" class="w-full bg-transparent border border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-white transition-all"></textarea>
                    </div>
                    <button type="button" class="w-full bg-white text-black py-5 text-xs font-black uppercase tracking-[0.3em] hover:invert transition duration-500">Send Message</button>
                </form>
            </div>
        </div>
    </section>
`
    },
    'shipping.html': {
        title: 'Shipping',
        subtitle: 'Delivery Information',
        content: `
    <section class="py-24 px-6">
        <div class="max-w-[800px] mx-auto space-y-12 text-sm leading-relaxed text-gray-400">
            <div>
                <h3 class="text-xl font-black uppercase italic tracking-tighter text-white mb-4">Domestic Shipping (India)</h3>
                <p>We offer free standard shipping on all orders above Rs. 1,999. For orders below this amount, a flat rate of Rs. 150 applies. Standard delivery takes 3-5 business days. Express shipping is available for Rs. 300 and takes 1-2 business days.</p>
            </div>
            <div>
                <h3 class="text-xl font-black uppercase italic tracking-tighter text-white mb-4">International Shipping</h3>
                <p>We currently ship to select international destinations. Shipping rates and delivery times vary by location and will be calculated at checkout. Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.</p>
            </div>
            <div>
                <h3 class="text-xl font-black uppercase italic tracking-tighter text-white mb-4">Order Tracking</h3>
                <p>Once your order has been dispatched, you will receive a shipping confirmation email containing a tracking number. You can use this number to track your package on our carrier's website.</p>
            </div>
        </div>
    </section>
`
    },
    'returns.html': {
        title: 'Returns',
        subtitle: 'Exchange & Return Policy',
        content: `
    <section class="py-24 px-6">
        <div class="max-w-[800px] mx-auto space-y-12 text-sm leading-relaxed text-gray-400">
            <div>
                <h3 class="text-xl font-black uppercase italic tracking-tighter text-white mb-4">Our Policy</h3>
                <p>We accept returns and exchanges within 14 days of the delivery date. Items must be unworn, unwashed, and in their original condition with all tags attached.</p>
            </div>
            <div>
                <h3 class="text-xl font-black uppercase italic tracking-tighter text-white mb-4">How to Return</h3>
                <p>To initiate a return or exchange, please email studio@nevermade.in with your order number and reason for return. Our team will provide you with a return shipping label and instructions.</p>
            </div>
            <div>
                <h3 class="text-xl font-black uppercase italic tracking-tighter text-white mb-4">Refunds</h3>
                <p>Refunds will be processed to the original method of payment within 7-10 business days after we receive and inspect the returned items. Original shipping costs are non-refundable.</p>
            </div>
        </div>
    </section>
`
    },
    'archives.html': {
        title: 'Archives',
        subtitle: 'Past collections and sold-out drops',
        content: `
    <section class="py-24 px-6">
        <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div class="group cursor-pointer">
                <div class="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] mb-6">
                    <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop" class="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition duration-700" alt="Archive 1">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <span class="bg-black/50 text-white px-6 py-2 text-xs font-black uppercase tracking-[0.3em] backdrop-blur-sm">Sold Out</span>
                    </div>
                </div>
                <h3 class="text-2xl font-black uppercase italic tracking-tighter">Genesis Drop - 001</h3>
                <p class="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Fall 2023</p>
            </div>
            <div class="group cursor-pointer mt-0 md:mt-32">
                <div class="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] mb-6">
                    <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop" class="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition duration-700" alt="Archive 2">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <span class="bg-black/50 text-white px-6 py-2 text-xs font-black uppercase tracking-[0.3em] backdrop-blur-sm">Sold Out</span>
                    </div>
                </div>
                <h3 class="text-2xl font-black uppercase italic tracking-tighter">Core Essentials</h3>
                <p class="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Spring 2024</p>
            </div>
        </div>
    </section>
`
    }
};

const path = require('path');
for (const [filename, data] of Object.entries(pages)) {
    const pageHeader = `
    <!-- Page Header -->
    <header class="py-24 border-b border-white/5 px-6">
        <div class="max-w-[1400px] mx-auto">
            <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">${data.title}</h1>
            <p class="text-gray-500 text-xs uppercase tracking-[0.4em] mt-6">${data.subtitle}</p>
        </div>
    </header>
`;
    const headReplaced = headPart.replace('<title>Collections | Never Made Streetwear</title>', `<title>${data.title} | Never Made Streetwear</title>`);
    const filepath = path.resolve(__dirname, filename);
    fs.writeFileSync(filepath, headReplaced + pageHeader + data.content + tailPart, 'utf8');
}
console.log('Created files successfully.');
