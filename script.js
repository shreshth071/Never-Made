// Global Cart Logic using Alpine.js Store
document.addEventListener('alpine:init', () => {
    Alpine.store('cart', {
        items: [],
        open: false,

        init() {
            // Let auth state settle before loading the first time
            setTimeout(() => this.load(), 100);
        },

        getCartKey() {
            try {
                const authStore = window.Alpine.store('auth');
                return authStore && authStore.user ? 'nm-cart-' + authStore.user.id : 'nm-cart-guest';
            } catch (e) {
                return 'nm-cart-guest';
            }
        },

        async load() {
            const key = this.getCartKey();
            const guestKey = 'nm-cart-guest';
            
            // 1. Load current context (Guest or User)
            let localItems = JSON.parse(localStorage.getItem(key) || '[]');
            this.items = localItems;

            const authStore = window.Alpine.store('auth');
            
            // 2. Guest to User Merge Logic
            if (authStore && authStore.user && key !== guestKey) {
                const guestItems = JSON.parse(localStorage.getItem(guestKey) || '[]');
                if (guestItems.length > 0) {
                    console.log('Merging guest cart into user account...');
                    this.items = this.mergeItemArrays(this.items, guestItems);
                    localStorage.removeItem(guestKey);
                    await this.save(); // Persist merged state
                }
            }

            // 3. Background sync from Supabase if authenticated
            try {
                if (authStore && authStore.user && window.supabase) {
                    const { data, error } = await window.supabase
                        .from('user_carts')
                        .select('items')
                        .eq('user_id', authStore.user.id)
                        .maybeSingle();

                    if (data && data.items) {
                        // Merge server state with local state (Server usually wins for persistence, but we combine)
                        this.items = this.mergeItemArrays(this.items, data.items);
                        // Save the combined truth
                        localStorage.setItem(this.getCartKey(), JSON.stringify(this.items));
                    }
                }
            } catch (e) {
                console.warn('Silent cart fetch failed:', e);
            }
        },

        mergeItemArrays(base, incoming) {
            const result = [...base];
            incoming.forEach(item => {
                const existing = result.find(i => i.id === item.id && i.size === item.size);
                if (existing) {
                    // Use the higher quantity or sum them? Summing is safer for guest-to-user merge
                    existing.quantity = Math.max(existing.quantity, item.quantity);
                } else {
                    result.push(item);
                }
            });
            return result;
        },

        addItem(product, options = {}) {
            // product: { id, name, price, size, image }
            const { openDrawer = true } = options;
            const existingItem = this.items.find(item => item.id === product.id && item.size === product.size);
            if (existingItem) {
                existingItem.quantity += (product.quantity || 1);
            } else {
                this.items.push({ ...product, quantity: product.quantity || 1 });
            }
            this.save();
            this.open = openDrawer;
        },

        buyNow(product) {
            this.addItem(product, { openDrawer: false });
            window.location.href = 'checkout.html';
        },

        removeItem(index) {
            this.items.splice(index, 1);
            this.save();
        },

        updateQuantity(index, delta) {
            this.items[index].quantity += delta;
            if (this.items[index].quantity <= 0) {
                this.removeItem(index);
            }
            this.save();
        },

        get total() {
            return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },

        get count() {
            return this.items.reduce((sum, item) => sum + item.quantity, 0);
        },

        getImage(imgStr) {
            if (!imgStr) return '';
            if (imgStr.startsWith('http')) return imgStr;
            const parts = imgStr.split('/');
            const filename = parts[parts.length - 1];
            return '../image/' + filename;
        },

        async save() {
            // 1. Instant local persistence
            localStorage.setItem(this.getCartKey(), JSON.stringify(this.items));

            // 2. Background sync to Supabase
            try {
                const authStore = window.Alpine.store('auth');
                if (authStore && authStore.user && window.supabase) {
                    await window.supabase
                        .from('user_carts')
                        .upsert({ user_id: authStore.user.id, items: this.items });
                }
            } catch (e) {
                console.warn('Silent cart sync failed:', e);
            }
        }
    });

    Alpine.store('auth', {
        user: null,
        profile: null, // Don't pre-load from localStorage here, let auth.js handle it to avoid staleness
        loading: true,

        get isLoggedIn() {
            return !!this.user;
        },

        get firstName() {
            if (this.isLoggedIn && this.profile && this.profile.firstName) return this.profile.firstName;
            return '';
        },

        get displayName() {
            return this.firstName ? 'Hi, ' + this.firstName : 'Account';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Never Made Clone - Custom JS Loaded');
});

window.NM_SEARCH_PRODUCTS = [
    { id: 'nm-tee-supra-001', name: 'Supra Drift Graphic Tee', price: 1899, image: 'image/supra.jpeg', size: 'M' },
    { id: 'nm-tee-wanted-001', name: 'Wanted Poster Tee', price: 1999, image: 'image/tshirt wanted.jpeg', size: 'M' },
    { id: 'nm-tee-spider-001', name: 'Spider Script Tee', price: 1799, image: 'image/Spider Script Teeshirt.jpg', size: 'M' },
    { id: 'nm-tee-noise-001', name: 'Noise Type Tee', price: 1699, image: 'image/Music Tee.jpg', size: 'M' },
    { id: 'nm-tee-cyber-001', name: 'Cyber Chrome Tee', price: 1599, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop', size: 'M' },
    { id: 'nm-tee-dropout-001', name: 'Acid Wash Dropout Tee', price: 1899, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop', size: 'M' },
    { id: 'nm-tee-phantom-001', name: 'Phantom Logo Tee', price: 1499, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop', size: 'M' },
    { id: 'nm-tee-blank-001', name: 'Heavyweight Blank Tee', price: 1299, image: 'image/heavy weight ts.jpg', size: 'M' },
    { id: 'nm-hd-wanted-001', name: 'Wanted Oversized Hoodie', price: 4199, image: 'image/wavedrop-cloth.jpg', size: 'M' },
    { id: 'nm-hd-supra-001', name: 'Supra Drift Hoodie', price: 2899, image: 'image/Supra MK4 Hoodie.jpg', size: 'M' },
    { id: 'nm-hd-panel-001', name: 'Monochrome Panel Hoodie', price: 2799, image: 'image/download.jpg', size: 'L' },
    { id: 'nm-hd-eclipse-001', name: 'Eclipse Zip-Up Hoodie', price: 2599, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop', size: 'M' },
    { id: 'nm-hd-core-001', name: 'Heavyweight Core Hoodie', price: 3299, image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=1887&auto=format&fit=crop', size: 'M' },
    { id: 'nm-hd-acid-001', name: 'Acid Wash Dropout Hoodie', price: 2899, image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop', size: 'M' },
    { id: 'nm-hd-studio-001', name: 'Studio Essential Hoodie', price: 2499, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop', size: 'M' },
    { id: 'nm-hd-neon-001', name: 'Neon Shadow Cyber Hoodie', price: 3499, image: 'image/neon_shadow_hoodie.png', size: 'M' },
    { id: 'nm-btm-shadow-001', name: 'Shadow Cargo Pants', price: 2499, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop', size: '32' },
    { id: 'nm-btm-track-001', name: 'Mono Track Pants', price: 2299, image: 'image/jeans.jpg', size: '32' },
    { id: 'nm-btm-denim-001', name: 'Washed Denim', price: 2799, image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1770&auto=format&fit=crop', size: '32' },
    { id: 'nm-btm-utility-001', name: 'Utility Wide Pants', price: 2599, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1770&auto=format&fit=crop', size: '32' },
    { id: 'nm-btm-para-001', name: 'Parachute Tech Pants', price: 2899, image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=1887&auto=format&fit=crop', size: '32' },
    { id: 'nm-btm-flare-001', name: 'Flared Washed Denim', price: 3299, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop', size: '32' },
    { id: 'nm-btm-sweat-001', name: 'Heavyweight Sweatpants', price: 2199, image: 'image/heavy sweat pants.jpg', size: '32' },
    { id: 'nm-btm-short-001', name: 'Mesh Basketball Shorts', price: 1699, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1770&auto=format&fit=crop', size: '32' },
    { id: 'paranorman-001', name: 'Paranorman - Purple Washed Jacket', price: 2799, image: 'image/purpel jackey.png', size: 'L' },
    { id: 'moon-3-001', name: 'Moon 3 - Supersized Jacket', price: 3299, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop', size: 'XL' },
    { id: 'csman-jacket-001', name: 'CSMAN - Embroidered Denim Jacket', price: 2999, image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=1887&auto=format&fit=crop', size: 'L' },
    { id: 'nm-jkt-celestial-001', name: 'Celestial Guard Jacket', price: 2999, image: 'image/jacket.jpeg', size: 'L' },
    { id: 'nm-jkt-puffer-001', name: 'Oversized Puffer Jacket', price: 4499, image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=1773&auto=format&fit=crop', size: 'XL' },
    { id: 'nm-jkt-varsity-001', name: 'Never Made Varsity Jacket', price: 5299, image: 'image/jacket_varsity.png', size: 'L' },
    { id: 'nm-jkt-tech-001', name: 'Technical Shell Jacket', price: 3899, image: 'image/jacket_tech.png', size: 'L' },
    { id: 'nm-jkt-leather-001', name: 'Faux Leather Moto Jacket', price: 6999, image: 'image/jacket_leather.png', size: 'L' },
    { id: 'nm-arc-cl-plain-shirt-001', name: 'Simple Plain Shirt', price: 499, image: 'https://images.pexels.com/photos/13894675/pexels-photo-13894675.png?cs=srgb&dl=pexels-abdul175-13894675.jpg&fm=jpg', size: 'M' },
    { id: 'nm-arc-cl-plain-tee-001', name: 'Simple Plain T-Shirt', price: 599, image: 'https://images.pexels.com/photos/20266321/pexels-photo-20266321.jpeg?cs=srgb&dl=pexels-enforcenongtdu-photography-706094831-20266321.jpg&fm=jpg', size: 'M' },
    { id: 'nm-arc-cl-trousers-001', name: 'Classic Trousers', price: 899, image: 'https://images.pexels.com/photos/20648310/pexels-photo-20648310.jpeg?cs=srgb&dl=pexels-gursher-gill-63702010-20648310.jpg&fm=jpg', size: '32' },
    { id: 'nm-arc-cl-jeans-001', name: 'Simple Jeans', price: 999, image: 'https://images.pexels.com/photos/17898555/pexels-photo-17898555.jpeg?cs=srgb&dl=pexels-bymuratisikofficial-17898555.jpg&fm=jpg', size: '32' },
    { id: 'nm-arc-cl-oxford-shirt-001', name: 'Metro Line Shirt', price: 849, image: 'https://images.pexels.com/photos/23542319/pexels-photo-23542319.jpeg?auto=compress&cs=tinysrgb&w=900', size: 'M' },
    { id: 'nm-arc-cl-neutral-tee-001', name: 'Daybreak Tee', price: 699, image: 'https://images.pexels.com/photos/20355553/pexels-photo-20355553.jpeg?auto=compress&cs=tinysrgb&w=900', size: 'M' },
    { id: 'nm-arc-cl-chinos-001', name: 'Sidewalk Taper Pants', price: 999, image: 'https://images.pexels.com/photos/11000250/pexels-photo-11000250.jpeg?auto=compress&cs=tinysrgb&w=900', size: '32' },
    { id: 'nm-arc-cl-sweatpants-001', name: 'Core Lounge Joggers', price: 999, image: 'https://images.pexels.com/photos/13073646/pexels-photo-13073646.jpeg?auto=compress&cs=tinysrgb&w=900', size: '32' },
    { id: 'nm-arc-cl-fem-tank-001', name: 'Essential White Tank Top', price: 499, image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1887&auto=format&fit=crop', size: 'S' },
    { id: 'nm-arc-cl-fem-mock-001', name: 'Ribbed Mock Neck Top', price: 699, image: 'image/Neck Top-unsplash.jpg', size: 'M' },
    { id: 'nm-arc-cl-fem-linen-001', name: 'Classic Linen Shirt', price: 899, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop', size: 'M' },
    { id: 'nm-arc-cl-fem-tee-001', name: 'Oversized Graphic Tee', price: 799, image: 'image/Oversized-unsplash.jpg', size: 'L' },
    { id: 'nm-arc-cl-fem-jeans-001', name: 'High-Rise Straight Jeans', price: 1299, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop', size: '28' },
    { id: 'nm-arc-cl-fem-trousers-001', name: 'Wide Leg Trousers', price: 1199, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop', size: '28' },
    { id: 'nm-arc-cl-fem-shorts-001', name: 'Classic Denim Midi Skirt', price: 999, image: 'image/Midi Skirt-unsplash.jpg', size: 'S' },
    { id: 'nm-arc-cl-fem-skirt-001', name: 'Ribbed Knit Skirt', price: 899, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1887&auto=format&fit=crop', size: 'S' }
];

window.normalizeSearchTerm = function(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
};

window.createSearchOverlayData = function() {
    return {
        query: '',
        products: (window.NM_SEARCH_PRODUCTS || []).map((product) => ({ ...product })),
        get filtered() {
            const normalizedQuery = window.normalizeSearchTerm(this.query);
            if (!normalizedQuery) return this.products.slice(0, 4);

            const tokens = normalizedQuery.split(' ').filter(Boolean);
            return this.products.filter((product) => {
                const normalizedName = window.normalizeSearchTerm(product.name);
                return tokens.every((token) => normalizedName.includes(token));
            }).slice(0, 4);
        },
        getUrl(product) {
            return 'product.html?id=' + product.id +
                '&name=' + encodeURIComponent(product.name) +
                '&price=' + product.price +
                '&image=' + encodeURIComponent(product.image) +
                '&size=' + product.size;
        },
        goFirst() {
            if (this.filtered.length > 0) {
                window.location.href = this.getUrl(this.filtered[0]);
            }
        }
    };
};

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const player = preloader ? preloader.querySelector('lottie-player') : null;
    
    if (preloader && player) {
        // Fade out preloader after 'Welcome' appears roughly once
        setTimeout(() => {
            if (preloader.style.display !== 'none') {
                preloader.style.opacity = '0';
                setTimeout(() => { preloader.style.display = 'none'; }, 1000);
            }
        }, 3000); // Wait 3 seconds before hiding
    }
});
