# OtakuVerse PK 🗡️
### Pakistan's #1 Anime Merchandise Store

---

## 📁 Project Structure

```
otakuverse-pk/
│
├── index.html              ← Homepage (open this in browser)
│
├── css/
│   ├── variables.css       ← Design tokens (colours, fonts, spacing, z-index)
│   ├── animations.css      ← All @keyframe animations
│   ├── base.css            ← Reset, global styles, cursor, buttons, toasts
│   └── layout.css          ← Nav, hero, sections, products, cart, footer
│
└── js/
    ├── data.js             ← All 34 products + categories (your "database")
    ├── ui.js               ← Cursor, particles, marquee, drawer, toast, reveal
    ├── cart.js             ← Cart state, wishlist, checkout, localStorage
    └── products.js         ← Filtering, sorting, rendering, pagination, modal
```

---

## 🚀 How to Run

Just open `index.html` in any browser — no server or install needed.

---

## 🌐 How to Deploy

Upload the entire `otakuverse-pk/` folder to any web host:
- **Netlify** — drag & drop the folder at netlify.com/drop
- **Vercel**  — `vercel deploy` from the folder
- **cPanel**  — upload via File Manager to `public_html/`

---

## ✏️ How to Customize

### Add a new product
Open `js/data.js` and add a new object to the `PRODUCTS` array:
```js
{
  id: 35,
  cat: "figures",       // figures | shirts | hoodies | plushies | accessories
  series: "One Piece",
  name: "Roronoa Zoro Three Sword Style Figure",
  brand: "Bandai",
  price: 7800,          // in PKR
  was: 9500,            // original price (null if no discount)
  rating: 4.9,
  reviews: 1200,
  badge: "new",         // hot | sale | new | exc | null
  img: "https://...",   // product image URL
  desc: "Full description here...",
  sizes: [],            // ["S","M","L","XL"] for clothing, [] for others
  related: [1, 2, 3]   // IDs of related products
}
```

### Change colours
Open `css/variables.css` and edit the colour variables.

### Change PKR exchange rate
Currently set at 1 USD ≈ 278 PKR.
Update the prices in `js/data.js`.

---

## 💳 Payment Methods (Pakistan)
- Cash on Delivery (COD)
- JazzCash
- EasyPaisa
- Bank Transfer (HBL, MCB, UBL)

---

## 📦 Tech Stack
- **HTML5** — semantic structure
- **CSS3**  — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — no frameworks, no dependencies
