// Global Cart Logic using Alpine.js Store
document.addEventListener('alpine:init', () => {
    Alpine.store('cart', {
        items: JSON.parse(localStorage.getItem('sg-cart') || '[]'),
        open: false,

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

        save() {
            localStorage.setItem('sg-cart', JSON.stringify(this.items));
        }
    });

    Alpine.store('auth', {
        user: null,
        profile: JSON.parse(localStorage.getItem('nm-profile') || 'null'),
        loading: true,

        get isLoggedIn() {
            return !!this.user;
        },

        get firstName() {
            if (this.profile && this.profile.firstName) return this.profile.firstName;
            return 'User';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Never Made Clone - Custom JS Loaded');
});
