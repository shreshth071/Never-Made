const PRODUCT_DATABASE = {
    "nm-btm-shadow-001": {
        id: "nm-btm-shadow-001",
        name: "Shadow Cargo Pants",
        category: "Men Premium Collectible",
        price: 2499,
        mrp: 3999,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop",
        colors: [
            { id: "black", label: "Washed Black", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop", available: true },
            { id: "olive", label: "Military Olive", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop", available: false }
        ],
        description: "Engineered for movement. Our Shadow Cargo pants feature deep utility pockets and a relaxed straight fit, woven from heavy-duty cotton ripstop.",
        features: ["100% Cotton Ripstop", "6 Utility Pockets", "Adjustable Drawstring Cuffs", "Relaxed Straight Fit"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 5
    },
    "kazama-pants-001": {
        id: "kazama-pants-001",
        name: "Kazama Pants",
        category: "Men Archive Collection",
        price: 1999,
        mrp: 2999,
        image: "image/kazama pants.jpeg",
        colors: [
            { id: "charcoal", label: "Charcoal Grey", image: "image/kazama pants.jpeg", available: true }
        ],
        description: "A staple from our earliest archives, the Kazama Pants provide an aggressive streetwear silhouette with unrivaled comfort.",
        features: ["Heavyweight French Terry", "Oversized Fit", "Vintage Wash Process", "Made in India"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-tee-supra-001": {
        id: "nm-tee-supra-001",
        name: "Supra Drift Graphic Tee",
        category: "Men T-Shirts",
        price: 1899,
        mrp: 2499,
        image: "image/supra.jpeg",
        colors: [
            { id: "white", label: "Optic White", image: "image/supra.jpeg", available: true },
            { id: "black", label: "Washed Black", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop", available: true }
        ],
        description: "High-octane aesthetic. Custom cut and sewn with a massive, high-density screen print honoring 90s drift culture.",
        features: ["280 GSM Cotton", "Boxy Drop Shoulder", "High Density Print", "Pre-Shrunk"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-hd-wanted-001": {
        id: "nm-hd-wanted-001",
        name: "Wanted Oversized Hoodie",
        category: "Men Outerwear",
        price: 4199,
        mrp: 5999,
        image: "image/1774526163829.png",
        colors: [
            { id: "black", label: "Midnight Black", image: "image/1774526163829.png", available: true }
        ],
        description: "The ultimate heavyweight layer. Weighing in at 400GSM, this massive oversized hoodie wraps you in premium fleece.",
        features: ["400 GSM Heavyweight Fleece", "Massive Kangaroo Pocket", "Drop Shoulder Oversized Fit", "Faded Wash Finish"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 5
    },
    "nm-hd-panel-001": {
        id: "nm-hd-panel-001",
        name: "Monochrome Panel Hoodie",
        category: "Men Outerwear",
        price: 2799,
        mrp: 3799,
        image: "image/download.jpg",
        colors: [{ id: "mono", label: "Monochrome", image: "image/download.jpg", available: true }],
        description: "A striking minimalist design featuring contrast panelling and a premium cotton blend.",
        features: ["320 GSM Cotton Blend", "Contrast Panelling", "Relaxed Fit", "Fleece Lined"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "paranorman-001": {
        id: "paranorman-001",
        name: "Paranorman - Purple Washed Jacket",
        category: "Men Outerwear",
        price: 2799,
        mrp: 3799,
        image: "image/purpel jackey.png",
        colors: [{ id: "purple", label: "Purple Wash", image: "image/purpel jackey.png", available: true }],
        description: "Vintage inspired washed denim jacket with a unique purple hue.",
        features: ["Heavyweight Denim", "Custom Purple Wash", "Silver Hardware", "Signature Fit"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "moon-3-001": {
        id: "moon-3-001",
        name: "Moon 3 - Supersized Jacket",
        category: "Men Outerwear",
        price: 3299,
        mrp: 4299,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop",
        colors: [{ id: "black", label: "Midnight", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop", available: true }],
        description: "Aggressive oversized silhouette designed for the bold.",
        features: ["Extreme Oversized Fit", "Water Resistant Shell", "Internal Utility Pockets", "Quilted Lining"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "csman-jacket-001": {
        id: "csman-jacket-001",
        name: "CSMAN - Embroidered Denim Jacket",
        category: "Men Outerwear",
        price: 2999,
        mrp: 3999,
        image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=1887&auto=format&fit=crop",
        colors: [{ id: "denim", label: "Classic Denim", image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=1887&auto=format&fit=crop", available: true }],
        description: "Exquisite back embroidery on premium selvedge denim.",
        features: ["14oz Selvedge Denim", "Intricate Back Embroidery", "Distressed Details", "Lifetime Warranty"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 5
    },
    "nm-hd-eclipse-001": {
        id: "nm-hd-eclipse-001",
        name: "Eclipse Zip-Up Hoodie",
        category: "Men Outerwear",
        price: 2599,
        mrp: 3599,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop",
        colors: [{ id: "black", label: "Midnight Black", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop", available: true }],
        description: "A premium zip-up hoodie featuring a tailored modern fit and heavyweight feel.",
        features: ["Premium Zipper Hardware", "French Terry Interior", "Double-Stitched Seams"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-hd-core-001": {
        id: "nm-hd-core-001",
        name: "Heavyweight Core Hoodie",
        category: "Men Outerwear",
        price: 3299,
        mrp: 4299,
        image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=1887&auto=format&fit=crop",
        colors: [{ id: "grey", label: "Heather Grey", image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=1887&auto=format&fit=crop", available: true }],
        description: "The absolute essential. Woven from 450GSM cotton for the perfect boxy silhouette.",
        features: ["450 GSM Heavyweight Cotton", "Boxy Silhouette", "Pre-washed for Softness"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-hd-acid-001": {
        id: "nm-hd-acid-001",
        name: "Acid Wash Dropout Hoodie",
        category: "Men Outerwear",
        price: 2899,
        mrp: 3899,
        image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop",
        colors: [{ id: "acid", label: "Acid Wash", image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop", available: true }],
        description: "Distressed aesthetics meet premium craftsmanship. Each piece features a unique wash pattern.",
        features: ["Unique Acid Wash", "Oversized Dropout Fit", "Frayed Hem Details"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 5
    },
    "nm-hd-studio-001": {
        id: "nm-hd-studio-001",
        name: "Studio Essential Hoodie",
        category: "Men Outerwear",
        price: 2499,
        mrp: 3499,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop",
        colors: [{ id: "black", label: "Studio Black", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop", available: true }],
        description: "Clean, minimal, and versatile. The perfect daily driver for the urban explorer.",
        features: ["Minimalist Design", "Breathable Cotton Blend", "Reinforced Pockets"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-jkt-puffer-001": {
        id: "nm-jkt-puffer-001",
        name: "Oversized Puffer Jacket",
        category: "Men Outerwear",
        price: 4499,
        mrp: 5499,
        image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=1773&auto=format&fit=crop",
        colors: [{ id: "black", label: "Tech Black", image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=1773&auto=format&fit=crop", available: true }],
        description: "Cold-weather ready with a massive silhouette and high-density insulation.",
        features: ["Thermal Insulation", "Cropped Oversized Fit", "Water-Repellent Fabric"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 5
    },
    "nm-jkt-varsity-001": {
        id: "nm-jkt-varsity-001",
        name: "Never Made Varsity Jacket",
        category: "Men Outerwear",
        price: 5299,
        mrp: 6299,
        image: "image/jacket_varsity.png",
        colors: [{ id: "classic", label: "Royal/White", image: "image/jacket_varsity.png", available: true }],
        description: "A contemporary take on a classic athletic silhouette. Features premium felt and leather detailing.",
        features: ["Premium Wool Blend", "Vegan Leather Sleeves", "Chenille Patch Detailing"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-jkt-tech-001": {
        id: "nm-jkt-tech-001",
        name: "Technical Shell Jacket",
        category: "Men Outerwear",
        price: 3899,
        mrp: 4899,
        image: "image/jacket_tech.png",
        colors: [{ id: "olive", label: "Olive Drab", image: "image/jacket_tech.png", available: true }],
        description: "Engineered for versatility. Lightweight shell protection with multi-pocket storage.",
        features: ["Multi-pocket Storage", "Weatherproof Zippers", "Adjustable Cuffs"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-jkt-leather-001": {
        id: "nm-jkt-leather-001",
        name: "Faux Leather Moto Jacket",
        category: "Men Outerwear",
        price: 6999,
        mrp: 7999,
        image: "image/jacket_leather.png",
        colors: [{ id: "black", label: "Obsidian Black", image: "image/jacket_leather.png", available: true }],
        description: "Classic motorcycle aesthetic crafted from high-grade grained faux leather.",
        features: ["Grained Faux Leather", "Asymmetrical Zipper", "Quilted Shoulder Detail"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 5
    }
};

window.getProductById = function(id) {
    return PRODUCT_DATABASE[id] || null;
};
