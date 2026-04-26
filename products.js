const PRODUCT_DATABASE = {
    "nm-btm-shadow-001": {
        id: "nm-btm-shadow-001",
        name: "Shadow Cargo Pants",
        category: "Men Premium Collectible",
        price: 2499,
        mrp: 3999,
        image: "image/cargo pants.jpg",
        colors: [
            { id: "black", label: "Washed Black", image: "image/cargo pants.jpg", available: true },
            { id: "olive", label: "Military Olive", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop", available: false }
        ],
        description: "Engineered for movement. Our Shadow Cargo pants feature deep utility pockets and a relaxed straight fit, woven from heavy-duty cotton ripstop.",
        features: ["100% Cotton Ripstop", "6 Utility Pockets", "Adjustable Drawstring Cuffs", "Relaxed Straight Fit"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 5
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
        image: "image/wavedrop-cloth.jpg",
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
    },
    "nm-jkt-celestial-001": {
        id: "nm-jkt-celestial-001",
        name: "Celestial Guard Jacket",
        category: "Men Outerwear",
        price: 2999,
        mrp: 3499,
        image: "image/jacket.jpeg",
        colors: [{ id: "stealth", label: "Midnight Stealth", image: "image/jacket.jpeg", available: true }],
        description: "Celestial Print detailing Meets High-Performance streetwear. This oversized jacket features a premium lining and a cinematic silhouette.",
        features: ["Celestial Print detailing", "Oversized Fit", "Premium Lining"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-arc-ex-indian-wedding-001": {
        id: "nm-arc-ex-indian-wedding-001",
        name: "Indian Wedding Dress Set",
        category: "Archive Exclusive",
        price: 4999,
        mrp: 6999,
        image: "https://images.pexels.com/photos/28084270/pexels-photo-28084270.jpeg?cs=srgb&dl=pexels-vireshstudio-28084270.jpg&fm=jpg",
        defaultSize: "L",
        colors: [
            {
                id: "ivory",
                label: "Royal Ivory",
                image: "https://images.pexels.com/photos/28084270/pexels-photo-28084270.jpeg?cs=srgb&dl=pexels-vireshstudio-28084270.jpg&fm=jpg",
                available: true
            }
        ],
        description: "A ceremony-ready archive exclusive with intricate detailing, structured tailoring, and a regal silhouette made for grand celebrations.",
        features: ["Premium Embroidered Fabric", "Layered Wedding Set", "Tailored Occasion Fit", "Statement Dupatta Finish"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-arc-ex-kurta-pajama-001": {
        id: "nm-arc-ex-kurta-pajama-001",
        name: "Midnight Kurta Pajama",
        category: "Archive Exclusive",
        price: 5499,
        mrp: 7499,
        image: "https://images.pexels.com/photos/8818626/pexels-photo-8818626.jpeg?cs=srgb&dl=pexels-yankrukov-8818626.jpg&fm=jpg",
        defaultSize: "L",
        colors: [
            {
                id: "midnight",
                label: "Midnight Navy",
                image: "https://images.pexels.com/photos/8818626/pexels-photo-8818626.jpeg?cs=srgb&dl=pexels-yankrukov-8818626.jpg&fm=jpg",
                available: true
            }
        ],
        description: "A refined kurta pajama set from the archive, built for elevated festive dressing with a clean drape and polished finish.",
        features: ["Soft Structured Kurta", "Matching Pajama Bottom", "Festive Evening Finish", "Comfort Lined Construction"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-arc-ex-sherwani-001": {
        id: "nm-arc-ex-sherwani-001",
        name: "Festive Kurta Set",
        category: "Archive Exclusive",
        price: 6299,
        mrp: 8299,
        image: "https://images.pexels.com/photos/30891941/pexels-photo-30891941.jpeg?cs=srgb&dl=pexels-rohit-sharma-1230131-30891941.jpg&fm=jpg",
        defaultSize: "L",
        colors: [
            {
                id: "sunrise",
                label: "Sunrise Yellow",
                image: "https://images.pexels.com/photos/30891941/pexels-photo-30891941.jpeg?cs=srgb&dl=pexels-rohit-sharma-1230131-30891941.jpg&fm=jpg",
                available: true
            }
        ],
        description: "A bright festival-ready kurta set designed for haldi nights, celebration dressing, and statement festive styling from the archive.",
        features: ["Festival Print Detailing", "Light Occasion Fabric", "Comfort Festive Fit", "Archive Limited Piece"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 5
    },
    "nm-arc-ex-jacket-set-001": {
        id: "nm-arc-ex-jacket-set-001",
        name: "Festive Jacket Set",
        category: "Archive Exclusive",
        price: 5899,
        mrp: 7799,
        image: "https://images.pexels.com/photos/36342182/pexels-photo-36342182.jpeg?auto=compress&cs=tinysrgb&w=900",
        defaultSize: "L",
        colors: [
            {
                id: "ivory-pink",
                label: "Ivory Pink",
                image: "https://images.pexels.com/photos/36342182/pexels-photo-36342182.jpeg?auto=compress&cs=tinysrgb&w=900",
                available: true
            }
        ],
        description: "A festive statement set with a sharp jacket silhouette and vibrant turban styling, built for celebratory evenings and standout traditional dressing.",
        features: ["Structured Festive Jacket", "Statement Turban Styling", "Premium Occasion Finish", "Archive Limited Piece"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-arc-ex-yellow-kurta-001": {
        id: "nm-arc-ex-yellow-kurta-001",
        name: "Saffron Festival Kurta",
        category: "Archive Exclusive",
        price: 5199,
        mrp: 6999,
        image: "https://images.pexels.com/photos/34423741/pexels-photo-34423741.jpeg?auto=compress&cs=tinysrgb&w=900",
        defaultSize: "L",
        colors: [
            {
                id: "saffron",
                label: "Saffron Yellow",
                image: "https://images.pexels.com/photos/34423741/pexels-photo-34423741.jpeg?auto=compress&cs=tinysrgb&w=900",
                available: true
            }
        ],
        description: "A bright saffron kurta made for festive mornings and cultural celebrations, balancing clean tailoring with rich traditional color.",
        features: ["Light Festive Fabric", "Bright Saffron Tone", "Easy Celebration Fit", "Clean Traditional Finish"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-arc-ex-royal-turban-001": {
        id: "nm-arc-ex-royal-turban-001",
        name: "Royal Turban Festive Set",
        category: "Archive Exclusive",
        price: 6599,
        mrp: 8499,
        image: "https://images.pexels.com/photos/17593062/pexels-photo-17593062.jpeg?auto=compress&cs=tinysrgb&w=900",
        defaultSize: "L",
        colors: [
            {
                id: "red-ivory",
                label: "Red Ivory",
                image: "https://images.pexels.com/photos/17593062/pexels-photo-17593062.jpeg?auto=compress&cs=tinysrgb&w=900",
                available: true
            }
        ],
        description: "A regal festive look with rich accessories, turban detailing, and a polished traditional silhouette for high-energy celebration wear.",
        features: ["Royal Styling Details", "Decorative Turban Finish", "Occasion Ready Tailoring", "Archive Limited Piece"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 5
    },
    "nm-arc-cl-plain-shirt-001": {
        id: "nm-arc-cl-plain-shirt-001",
        name: "Simple Plain Shirt",
        category: "Archive Classic",
        price: 499,
        mrp: 899,
        image: "https://images.pexels.com/photos/13894675/pexels-photo-13894675.png?cs=srgb&dl=pexels-abdul175-13894675.jpg&fm=jpg",
        defaultSize: "M",
        colors: [
            {
                id: "black",
                label: "Classic Black",
                image: "https://images.pexels.com/photos/13894675/pexels-photo-13894675.png?cs=srgb&dl=pexels-abdul175-13894675.jpg&fm=jpg",
                available: true
            }
        ],
        description: "A clean, everyday plain shirt from the archive classics line with an easy fit and straightforward styling.",
        features: ["Breathable Daily Fabric", "Clean Collar Shape", "Easy Straight Fit", "Minimal Finish"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-plain-tee-001": {
        id: "nm-arc-cl-plain-tee-001",
        name: "Simple Plain T-Shirt",
        category: "Archive Classic",
        price: 599,
        mrp: 999,
        image: "https://images.pexels.com/photos/20266321/pexels-photo-20266321.jpeg?cs=srgb&dl=pexels-enforcenongtdu-photography-706094831-20266321.jpg&fm=jpg",
        defaultSize: "M",
        colors: [
            {
                id: "white",
                label: "Clean White",
                image: "https://images.pexels.com/photos/20266321/pexels-photo-20266321.jpeg?cs=srgb&dl=pexels-enforcenongtdu-photography-706094831-20266321.jpg&fm=jpg",
                available: true
            }
        ],
        description: "A simple plain tee designed for daily rotation, with a relaxed silhouette and clean essentials-first construction.",
        features: ["Soft Cotton Feel", "Relaxed Everyday Fit", "Minimal Crew Neck", "Easy Layering Weight"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-trousers-001": {
        id: "nm-arc-cl-trousers-001",
        name: "Classic Trousers",
        category: "Archive Classic",
        price: 899,
        mrp: 1399,
        image: "https://images.pexels.com/photos/20648310/pexels-photo-20648310.jpeg?cs=srgb&dl=pexels-gursher-gill-63702010-20648310.jpg&fm=jpg",
        defaultSize: "32",
        colors: [
            {
                id: "sand",
                label: "Sand Beige",
                image: "https://images.pexels.com/photos/20648310/pexels-photo-20648310.jpeg?cs=srgb&dl=pexels-gursher-gill-63702010-20648310.jpg&fm=jpg",
                available: true
            }
        ],
        description: "Clean-cut classic trousers with a straightforward profile, ideal for pairing with daily archive basics.",
        features: ["Straight Leg Shape", "Lightweight Tailored Feel", "Versatile Neutral Tone", "Easy Everyday Styling"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-jeans-001": {
        id: "nm-arc-cl-jeans-001",
        name: "Simple Jeans",
        category: "Archive Classic",
        price: 999,
        mrp: 1499,
        image: "https://images.pexels.com/photos/17898555/pexels-photo-17898555.jpeg?cs=srgb&dl=pexels-bymuratisikofficial-17898555.jpg&fm=jpg",
        defaultSize: "32",
        colors: [
            {
                id: "blue",
                label: "Classic Blue",
                image: "https://images.pexels.com/photos/17898555/pexels-photo-17898555.jpeg?cs=srgb&dl=pexels-bymuratisikofficial-17898555.jpg&fm=jpg",
                available: true
            }
        ],
        description: "Straightforward denim with a classic wash and easy everyday wearability, built for the archive classics lineup.",
        features: ["Classic Denim Wash", "Regular Tapered Fit", "Everyday Weight Fabric", "Minimal Clean Finish"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-oxford-shirt-001": {
        id: "nm-arc-cl-oxford-shirt-001",
        name: "Metro Line Shirt",
        category: "Archive Classic",
        price: 849,
        mrp: 1299,
        image: "https://images.pexels.com/photos/23542319/pexels-photo-23542319.jpeg?auto=compress&cs=tinysrgb&w=900",
        defaultSize: "M",
        colors: [
            {
                id: "sand-stripe",
                label: "Sand Stripe",
                image: "https://images.pexels.com/photos/23542319/pexels-photo-23542319.jpeg?auto=compress&cs=tinysrgb&w=900",
                available: true
            }
        ],
        description: "A fresh striped shirt built for everyday wear, with a cleaner silhouette and a more modern casual finish than the older site pieces.",
        features: ["Light Daily Fabric", "Clean Stripe Detailing", "Relaxed Everyday Fit", "New Classic Drop"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-black-tee-001": {
        id: "nm-arc-cl-black-tee-001",
        name: "Basic Black Tee",
        category: "Archive Classic",
        price: 549,
        mrp: 899,
        image: "image/heavy weight ts.jpg",
        defaultSize: "M",
        colors: [
            {
                id: "black",
                label: "Jet Black",
                image: "image/heavy weight ts.jpg",
                available: true
            }
        ],
        description: "A simple black t-shirt from the classic archive line with an everyday fit and easy layering weight.",
        features: ["Soft Cotton Feel", "Daily Wear Weight", "Clean Crew Neck", "Easy Relaxed Fit"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-chinos-001": {
        id: "nm-arc-cl-chinos-001",
        name: "Sidewalk Taper Pants",
        category: "Archive Classic",
        price: 999,
        mrp: 1499,
        image: "https://images.pexels.com/photos/11000250/pexels-photo-11000250.jpeg?auto=compress&cs=tinysrgb&w=900",
        defaultSize: "32",
        colors: [
            {
                id: "city-beige",
                label: "City Beige",
                image: "https://images.pexels.com/photos/11000250/pexels-photo-11000250.jpeg?auto=compress&cs=tinysrgb&w=900",
                available: true
            }
        ],
        description: "A sharper neutral pant made for everyday city outfits, with a tapered leg and a cleaner profile than the existing catalog bottoms.",
        features: ["Tapered Leg Shape", "Neutral Everyday Tone", "Structured Casual Fit", "New Classic Drop"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-light-jeans-001": {
        id: "nm-arc-cl-light-jeans-001",
        name: "Light Wash Denim",
        category: "Archive Classic",
        price: 1099,
        mrp: 1599,
        image: "image/jeans.jpg",
        defaultSize: "32",
        colors: [
            {
                id: "light-blue",
                label: "Light Blue",
                image: "image/jeans.jpg",
                available: true
            }
        ],
        description: "A light wash denim essential with a straightforward fit, made for daily classic looks and clean casual styling.",
        features: ["Light Wash Denim", "Regular Everyday Fit", "Comfort Wear Weight", "Simple Clean Finish"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-neutral-tee-001": {
        id: "nm-arc-cl-neutral-tee-001",
        name: "Daybreak Tee",
        category: "Archive Classic",
        price: 699,
        mrp: 999,
        image: "https://images.pexels.com/photos/20355553/pexels-photo-20355553.jpeg?auto=compress&cs=tinysrgb&w=900",
        defaultSize: "M",
        colors: [
            {
                id: "deep-blue",
                label: "Deep Blue",
                image: "https://images.pexels.com/photos/20355553/pexels-photo-20355553.jpeg?auto=compress&cs=tinysrgb&w=900",
                available: true
            }
        ],
        description: "A new easy-wear tee with a studio-clean look, built as a fresh classic entry instead of reusing any older website product styling.",
        features: ["Soft Stretch Feel", "Clean Minimal Shape", "Easy Daily Fit", "New Classic Drop"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-sweatpants-001": {
        id: "nm-arc-cl-sweatpants-001",
        name: "Core Lounge Joggers",
        category: "Archive Classic",
        price: 999,
        mrp: 1499,
        image: "https://images.pexels.com/photos/13073646/pexels-photo-13073646.jpeg?auto=compress&cs=tinysrgb&w=900",
        defaultSize: "32",
        colors: [
            {
                id: "sand",
                label: "Sand",
                image: "https://images.pexels.com/photos/13073646/pexels-photo-13073646.jpeg?auto=compress&cs=tinysrgb&w=900",
                available: true
            }
        ],
        description: "A new jogger built for clean off-duty looks, with a relaxed shape and minimal styling that keeps the classic archive lineup feeling fresh.",
        features: ["Soft Everyday Comfort", "Relaxed Jogger Shape", "Easy Movement Fit", "New Classic Drop"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-fem-tank-001": {
        id: "nm-arc-cl-fem-tank-001",
        name: "Essential White Tank Top",
        category: "Archive Classic",
        price: 499,
        mrp: 899,
        image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1887&auto=format&fit=crop",
        defaultSize: "S",
        colors: [{ id: "white", label: "Optic White", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1887&auto=format&fit=crop", available: true }],
        description: "A must-have archive staple. This ribbed tank top offers a body-hugging fit and premium softness for daily layering.",
        features: ["Ribbed Cotton Blend", "Form-fitting Silhouette", "Breathable Fabric", "Classic Scoop Neck"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-fem-mock-001": {
        id: "nm-arc-cl-fem-mock-001",
        name: "Ribbed Mock Neck Top",
        category: "Archive Classic",
        price: 699,
        mrp: 1199,
        image: "image/Neck Top-unsplash.jpg",
        defaultSize: "M",
        colors: [{ id: "black", label: "Jet Black", image: "image/Neck Top-unsplash.jpg", available: true }],
        description: "Sophisticated yet simple. The mock neck top features a subtle texture and a versatile cut that transitions from day to night.",
        features: ["Mock Neckline", "Vertical Ribbed Detail", "Soft-touch Jersey", "Slim Fit"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-fem-linen-001": {
        id: "nm-arc-cl-fem-linen-001",
        name: "Classic Linen Shirt",
        category: "Archive Classic",
        price: 899,
        mrp: 1499,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
        defaultSize: "M",
        colors: [{ id: "cream", label: "Sand Cream", image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1887&auto=format&fit=crop", available: true }],
        description: "Breathable luxury. Crafted from premium linen, this shirt offers a relaxed, airy feel perfect for warm-weather archive styling.",
        features: ["100% Organic Linen", "Relaxed Button-down", "Chest Pocket Detail", "Eco-friendly Dye"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-arc-cl-fem-tee-001": {
        id: "nm-arc-cl-fem-tee-001",
        name: "Oversized Graphic Tee",
        category: "Archive Classic",
        price: 799,
        mrp: 1299,
        image: "image/Oversized-unsplash.jpg",
        defaultSize: "L",
        colors: [{ id: "vintage-grey", label: "Vintage Grey", image: "image/Oversized-unsplash.jpg", available: true }],
        description: "Streetwear soul. This oversized tee features a subtle archive-inspired graphic and a heavy-wash finish for a lived-in feel.",
        features: ["220 GSM Cotton", "Drop Shoulder Fit", "Distressed Screen Print", "Reinforced Neckline"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    },
    "nm-arc-cl-fem-jeans-001": {
        id: "nm-arc-cl-fem-jeans-001",
        name: "High-Rise Straight Jeans",
        category: "Archive Classic",
        price: 1299,
        mrp: 2199,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop",
        defaultSize: "28",
        colors: [{ id: "vintage-blue", label: "Vintage Indigo", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop", available: true }],
        description: "The timeless silhouette. Our high-rise straight jeans are built to last, featuring a flattering waist and a structured denim feel.",
        features: ["Non-stretch Denim", "High-waisted Fit", "Classic 5-pocket Styling", "Antique Silver Hardware"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-arc-cl-fem-trousers-001": {
        id: "nm-arc-cl-fem-trousers-001",
        name: "Wide Leg Trousers",
        category: "Archive Classic",
        price: 1199,
        mrp: 1999,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop",
        defaultSize: "28",
        colors: [{ id: "charcoal", label: "Slate Charcoal", image: "https://images.unsplash.com/photo-1584305116359-24159a24392b?q=80&w=1887&auto=format&fit=crop", available: true }],
        description: "Modern elegance. These wide-leg trousers feature a sharp pleat and a fluid drape, perfect for an elevated archive look.",
        features: ["Tailored Waistband", "Deep Front Pleats", "Fluid Crepe Fabric", "Slant Side Pockets"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-arc-cl-fem-shorts-001": {
        id: "nm-arc-cl-fem-shorts-001",
        name: "Classic Denim Midi Skirt",
        category: "Archive Classic",
        price: 999,
        mrp: 1499,
        image: "image/Midi Skirt-unsplash.jpg",
        defaultSize: "S",
        colors: [{ id: "denim-blue", label: "Classic Indigo", image: "image/Midi Skirt-unsplash.jpg", available: true }],
        description: "A timeless archive piece. This denim midi skirt features a flattering high-waist fit and a clean, structured silhouette that pairs perfectly with any classic top.",
        features: ["High-waisted Fit", "Premium Rigid Denim", "Center Back Slit", "Classic 5-pocket Detail"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 4
    },
    "nm-arc-cl-fem-skirt-001": {
        id: "nm-arc-cl-fem-skirt-001",
        name: "Ribbed Knit Skirt",
        category: "Archive Classic",
        price: 899,
        mrp: 1499,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1887&auto=format&fit=crop",
        defaultSize: "S",
        colors: [{ id: "olive", label: "Studio Olive", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1887&auto=format&fit=crop", available: true }],
        description: "The minimalist midi. This ribbed knit skirt offers a flexible fit and a clean silhouette that pairs perfectly with oversized tops.",
        features: ["Elasticated Waistband", "Midi Length", "Stretchy Knit Fabric", "Back Slit for Movement"],
        vendor: "Never Made Studios, New Delhi, India.",
        thumbnails: 3
    }
};

window.getProductById = function(id) {
    return PRODUCT_DATABASE[id] || null;
};
