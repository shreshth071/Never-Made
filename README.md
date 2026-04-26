# NEVER MADE™ / Streetwear Collective

![Never Made Banner](../image/banner.jpg) 

> **Establish Identity. Access the Archive.**

Never Made is a premium, Cyber-Industrial e-commerce platform designed for high-end streetwear drops. Built with a focus on speed, security, and a visceral aesthetic, it utilizes a modern stack of lightweight technologies to deliver a "frictless" shopping experience.

---

## ⚡ Core Tech Stack

- **Frontend:** Vanilla HTML5, [Tailwind CSS](https://tailwindcss.com), [Alpine.js](https://alpinejs.dev)
- **Backend-as-a-Service:** [Supabase](https://supabase.com) (Auth, PostgreSQL, RLS)
- **State Management:** Alpine Global Stores (Cart, Auth)
- **UI/UX:** Glassmorphism, Mesh Gradients, Cyber-Industrial Typography

---

## 🛠️ Key Features

- **Robust Auth System:** Support for traditional Email/Password, Google OAuth, and Passwordless Magic Links via Supabase.
- **Dynamic Cart Engine:** Seamless local-to-cloud cart merging. Guest items automatically sync to your user profile upon login.
- **Product Archives:** Specialized "Classic" and "Exclusive" archive views for limited-run collections.
- **Premium UI:** Custom-built components including slide-out carts, search overlays, and interactive product cards.
- **Backend Sync:** Automated profile provisioning and cart persistence using Supabase triggers and policies.

---

## 🚀 Getting Started

### 1. Prerequisites
- A **Supabase** account and project.
- A local development server (like VS Code **Live Server**).

### 2. Configuration
Open `auth.js` and update the Supabase configuration with your credentials:

```javascript
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
```

### 3. Database Setup
Run the SQL commands found in the `/SQL Commands` directory in your Supabase SQL Editor to initialize:
- `profiles` table (User metadata)
- `user_carts` table (Cloud cart storage)
- RLS Policies (Security)

### 4. Run Locally
```bash
# If using VS Code
# Right click index.html -> Open with Live Server
```

---

## 📁 Project Structure

- `/html`: All page templates (Shop, Cart, Checkout, etc.)
- `/image`: Product photography and brand assets.
- `auth.js`: Supabase integration and authentication logic.
- `script.js`: Global Alpine stores and cart management.
- `style.css`: Custom theme utilities and mesh gradients.

---

## ⚖️ License

Distributed under the MIT License. See `LICENSE.md` for more information.

---

© 2026 NEVER MADE STREETWEAR / ALL RIGHTS RESERVED / END OF LINE
