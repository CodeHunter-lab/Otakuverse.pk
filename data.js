/* =============================================
   data.js — All Products & Categories
   Prices in PKR (1 USD ≈ 278 PKR)
   ============================================= */

const PRODUCTS = [
  // ── ACTION FIGURES ──────────────────────────
  {
    id:1, cat:"figures", series:"Demon Slayer",
    name:"Bandai Anime Heroes Tanjiro Kamado Figure 6.5\" — 20+ Articulation",
    brand:"Bandai", price:6950, was:8350, rating:4.9, reviews:2847, badge:"hot",
    img:"https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_SL1500_.jpg",
    desc:"Highly detailed 6.5\" action figure of Tanjiro Kamado from Demon Slayer. Features over 20 points of articulation and comes with multiple accessories including his Nichirin Sword. Made by Bandai — Japan's #1 anime figure brand. Official licensed product.",
    sizes:[], related:[2,3,4]
  },
  {
    id:2, cat:"figures", series:"Dragon Ball Z",
    name:"S.H.Figuarts Super Saiyan Goku — Tamashii Nations Premium",
    brand:"Tamashii Nations", price:18100, was:null, rating:4.8, reviews:8931, badge:"new",
    img:"https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_SL1500_.jpg",
    desc:"Premium S.H.Figuarts Super Saiyan Son Goku figure from Tamashii Nations. Incredibly detailed paint job with multiple interchangeable hands and face parts. A must-have for any Dragon Ball Z collector.",
    sizes:[], related:[1,3,5]
  },
  {
    id:3, cat:"figures", series:"Jujutsu Kaisen",
    name:"Funko Pop! Sukuna Glow-in-Dark Special Edition — JJK",
    brand:"Funko", price:4175, was:5005, rating:4.7, reviews:1204, badge:"sale",
    img:"https://m.media-amazon.com/images/I/61KKYchWiVL._AC_SL1200_.jpg",
    desc:"Funko Pop! vinyl figure of Ryomen Sukuna from Jujutsu Kaisen. Special glow-in-the-dark edition exclusive. Stands approximately 3.75 inches tall. Officially licensed Funko product.",
    sizes:[], related:[1,4,8]
  },
  {
    id:4, cat:"figures", series:"Naruto",
    name:"ANIME HEROES Naruto Uzumaki Sage Mode — With Rasengan",
    brand:"Bandai", price:6400, was:7500, rating:4.9, reviews:6210, badge:"sale",
    img:"https://m.media-amazon.com/images/I/61VLjFSA1YL._AC_SL1000_.jpg",
    desc:"Naruto Uzumaki in Sage Mode — one of the most iconic forms from Naruto Shippuden. This 6.5\" figure by Bandai includes a Rasengan accessory and features 20+ points of articulation.",
    sizes:[], related:[1,2,29]
  },
  {
    id:5, cat:"figures", series:"One Piece",
    name:"Luffy Gear 5 Ichibansho Figure — Bandai Spirits Official",
    brand:"Bandai Spirits", price:10850, was:13050, rating:4.8, reviews:3100, badge:"hot",
    img:"https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_SL1500_.jpg",
    desc:"Monkey D. Luffy in his legendary Gear 5 form. Ichibansho series from Bandai Spirits. High quality paint and sculpt. Officially licensed.",
    sizes:[], related:[1,2,4]
  },
  {
    id:6, cat:"figures", series:"My Hero Academia",
    name:"Deku Izuku Midoriya All Might Mode — Banpresto Figure",
    brand:"Banpresto", price:5560, was:null, rating:4.6, reviews:789, badge:"new",
    img:"https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_SL1500_.jpg",
    desc:"Izuku Midoriya (Deku) in his iconic All Might tribute costume. Banpresto prize figure — high quality Japanese collectible. Stands approximately 7 inches tall.",
    sizes:[], related:[3,5,7]
  },
  {
    id:7, cat:"figures", series:"Bleach",
    name:"Ichigo Kurosaki Bankai S.H.Figuarts — Zangetsu Included",
    brand:"Tamashii Nations", price:22250, was:null, rating:4.9, reviews:1555, badge:"exc",
    img:"https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_SL1500_.jpg",
    desc:"Ichigo Kurosaki in his breathtaking Bankai form from Bleach. Premium S.H.Figuarts with his massive Zangetsu sword. Multiple interchangeable parts.",
    sizes:[], related:[2,5,8]
  },
  {
    id:8, cat:"figures", series:"Demon Slayer",
    name:"Nezuko Kamado Demon Form Figure — 10\" SEGA Movable",
    brand:"SEGA", price:7785, was:9730, rating:4.9, reviews:3002, badge:"sale",
    img:"https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_SL1500_.jpg",
    desc:"Nezuko Kamado in her demon form. This 10\" SEGA figure features movable limbs and incredible detail. Nezuko's pink haori and demon markings are faithfully recreated.",
    sizes:[], related:[1,4,6]
  },

  // ── T-SHIRTS ────────────────────────────────
  {
    id:9, cat:"shirts", series:"Naruto",
    name:"Ripple Junction Naruto Shippuden Graphic Tee — Official",
    brand:"Ripple Junction", price:5560, was:6950, rating:4.8, reviews:5412, badge:"sale",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Official Naruto Shippuden graphic t-shirt by Ripple Junction. 100% cotton, pre-shrunk. Features iconic Naruto artwork on the front. Available in multiple sizes.",
    sizes:["S","M","L","XL","2XL"], related:[10,11,12]
  },
  {
    id:10, cat:"shirts", series:"Dragon Ball Z",
    name:"Dragon Ball Z Super Saiyan Goku Graphic T-Shirt — Black",
    brand:"Ripple Junction", price:4725, was:null, rating:4.9, reviews:7200, badge:"hot",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Dragon Ball Z Super Saiyan Goku graphic t-shirt. Classic black with vibrant Goku print. 100% cotton, machine washable.",
    sizes:["S","M","L","XL","2XL"], related:[9,11,13]
  },
  {
    id:11, cat:"shirts", series:"Attack on Titan",
    name:"Survey Corps Wings of Freedom T-Shirt — Men's & Women's",
    brand:"Bioworld", price:5835, was:7225, rating:4.8, reviews:3190, badge:"new",
    img:"https://m.media-amazon.com/images/I/71K2MqH3pVL._AC_SX679_.jpg",
    desc:"Attack on Titan Survey Corps Wings of Freedom emblem t-shirt. Pre-shrunk 100% cotton. Officially licensed by Bioworld.",
    sizes:["S","M","L","XL","2XL","3XL"], related:[9,12,14]
  },
  {
    id:12, cat:"shirts", series:"One Piece",
    name:"One Piece Straw Hat Pirates Going Merry Vintage Tee",
    brand:"INTO THE AM", price:6400, was:7785, rating:4.8, reviews:2400, badge:"sale",
    img:"https://m.media-amazon.com/images/I/71a-NnJJhtL._AC_SX679_.jpg",
    desc:"One Piece Straw Hat Pirates t-shirt featuring the iconic Going Merry ship and crew. Heavyweight cotton with reinforced stitching. Washed black vintage finish.",
    sizes:["S","M","L","XL","2XL"], related:[10,11,13]
  },
  {
    id:13, cat:"shirts", series:"Jujutsu Kaisen",
    name:"Jujutsu Kaisen Gojo & Geto School Days Graphic Tee",
    brand:"Fifth Sun", price:5280, was:null, rating:4.7, reviews:890, badge:"new",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Jujutsu Kaisen t-shirt featuring young Gojo Satoru and Suguru Geto during their Jujutsu High school days. Soft cotton blend fabric.",
    sizes:["S","M","L","XL","2XL"], related:[9,10,15]
  },
  {
    id:14, cat:"shirts", series:"Bleach",
    name:"Bleach Ichigo vs Hollow White Vintage Print Tee",
    brand:"Popfunk", price:6680, was:null, rating:4.8, reviews:1640, badge:null,
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Bleach graphic tee featuring the epic confrontation between Ichigo and his inner Hollow. Vintage-style print. Premium soft cotton. Officially licensed.",
    sizes:["S","M","L","XL","2XL"], related:[11,12,13]
  },
  {
    id:15, cat:"shirts", series:"Demon Slayer",
    name:"Demon Slayer Tanjiro & Nezuko Sibling Art — Uniqlo UT",
    brand:"Uniqlo × Demon Slayer", price:6925, was:null, rating:4.9, reviews:3800, badge:"hot",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Exclusive Uniqlo UT collaboration with Demon Slayer. 100% organic cotton. Features Tanjiro and Nezuko in a stunning sibling artwork. Unisex sizing.",
    sizes:["XS","S","M","L","XL","2XL"], related:[9,10,14]
  },
  {
    id:16, cat:"shirts", series:"My Hero Academia",
    name:"My Hero Academia All Characters Symbol T-Shirt",
    brand:"Bioworld", price:6115, was:7505, rating:4.7, reviews:1220, badge:"sale",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"My Hero Academia t-shirt featuring all main hero characters and their iconic symbols. Bioworld official product. Comfortable cotton blend.",
    sizes:["S","M","L","XL","2XL"], related:[9,11,12]
  },

  // ── HOODIES ────────────────────────────────
  {
    id:17, cat:"hoodies", series:"One Piece",
    name:"Luffy Gear 5 Anime Pullover Hoodie — Unisex Fleece",
    brand:"Bioworld", price:9725, was:12515, rating:4.9, reviews:3556, badge:"sale",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Luffy Gear 5 hoodie — one of the most hyped anime moments ever. Unisex fleece pullover, warm and comfortable. Perfect for Pakistan winters.",
    sizes:["S","M","L","XL","2XL","3XL"], related:[18,19,20]
  },
  {
    id:18, cat:"hoodies", series:"Naruto",
    name:"Naruto Uzumaki Sage Mode Zip-Up Hoodie — Heavyweight",
    brand:"Ripple Junction", price:11950, was:null, rating:4.9, reviews:4100, badge:"hot",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Naruto Sage Mode zip-up hoodie. Premium heavyweight fleece. Full zip design with two front pockets. The iconic frog sage pattern on back.",
    sizes:["S","M","L","XL","2XL"], related:[17,19,21]
  },
  {
    id:19, cat:"hoodies", series:"Attack on Titan",
    name:"Survey Corps Scout Regiment Embroidered Zip Hoodie",
    brand:"Bearbroidery", price:13600, was:16700, rating:4.8, reviews:1780, badge:"sale",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Attack on Titan Survey Corps hoodie with genuine embroidered Wings of Freedom — not just printed. High quality embroidery. Durable zip-up with fleece lining.",
    sizes:["S","M","L","XL","2XL"], related:[17,18,20]
  },
  {
    id:20, cat:"hoodies", series:"Dragon Ball Z",
    name:"Super Saiyan Vegeta Pullover Hoodie — Heavyweight",
    brand:"INTO THE AM", price:15275, was:null, rating:4.7, reviews:2300, badge:"new",
    img:"https://m.media-amazon.com/images/I/61t+tFIV1AL._AC_SX679_.jpg",
    desc:"Dragon Ball Z Super Saiyan Vegeta heavyweight pullover hoodie. Premium garment-dyed fabric. Oversized fit, double-lined hood.",
    sizes:["S","M","L","XL","2XL","3XL"], related:[17,18,21]
  },
  {
    id:21, cat:"hoodies", series:"Jujutsu Kaisen",
    name:"Gojo Satoru Infinity Pullover Hoodie — Throughout Heaven",
    brand:"Bioworld", price:10560, was:13060, rating:4.8, reviews:1900, badge:"sale",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Jujutsu Kaisen Gojo Satoru Infinity hoodie. Features the iconic 'Throughout Heaven and Earth, I Alone Am The Honored One' design.",
    sizes:["S","M","L","XL","2XL"], related:[17,18,20]
  },
  {
    id:22, cat:"hoodies", series:"Demon Slayer",
    name:"Demon Slayer Tanjiro Water Breathing Hoodie — Official",
    brand:"Bioworld", price:9450, was:11730, rating:4.9, reviews:2800, badge:"hot",
    img:"https://m.media-amazon.com/images/I/71cBRnVhNfL._AC_SX679_.jpg",
    desc:"Demon Slayer Tanjiro Kamado Water Breathing hoodie. The water pattern flows across like Tanjiro's signature breathing style. Premium cotton-poly blend.",
    sizes:["S","M","L","XL","2XL"], related:[17,19,21]
  },

  // ── PLUSHIES ────────────────────────────────
  {
    id:23, cat:"plushies", series:"Naruto",
    name:"Kurama Nine-Tailed Fox Stuffed Plush Toy — 14\" Soft",
    brand:"Great Eastern Entertainment", price:4725, was:null, rating:4.9, reviews:2109, badge:"hot",
    img:"https://m.media-amazon.com/images/I/71PV3xWqFhL._AC_SL1200_.jpg",
    desc:"Kurama the Nine-Tailed Fox plush toy — 14 inches of fluffy orange goodness. Super soft fabric, child-safe stuffing. Officially licensed.",
    sizes:[], related:[24,25,26]
  },
  {
    id:24, cat:"plushies", series:"Demon Slayer",
    name:"Nezuko Kamado Chibi Plush — 12\" Box Form Sleeping",
    brand:"Club Mocchi Mocchi", price:5560, was:null, rating:4.9, reviews:1560, badge:"new",
    img:"https://m.media-amazon.com/images/I/61EIMXJgDOL._AC_SL1000_.jpg",
    desc:"Nezuko Kamado chibi plush in her adorable sleeping box form. 12 inches of pure softness from Club Mocchi Mocchi. Perfect gift.",
    sizes:[], related:[23,25,26]
  },
  {
    id:25, cat:"plushies", series:"Dragon Ball Z",
    name:"Shenron Dragon Soft Plush — 22\" Jumbo Collectible",
    brand:"Great Eastern Entertainment", price:8325, was:null, rating:4.7, reviews:890, badge:null,
    img:"https://m.media-amazon.com/images/I/71CcVnBiHLL._AC_SL1200_.jpg",
    desc:"Shenron the Eternal Dragon — 22 inches long! This majestic plush captures the legendary dragon that grants any wish. Officially licensed.",
    sizes:[], related:[23,24,27]
  },
  {
    id:26, cat:"plushies", series:"My Hero Academia",
    name:"Deku Izuku Midoriya Hero Plushie — 10\" Official",
    brand:"Great Eastern Entertainment", price:4175, was:5560, rating:4.8, reviews:2340, badge:"sale",
    img:"https://m.media-amazon.com/images/I/51uCPLvtP5L._AC_SL1000_.jpg",
    desc:"Deku's iconic hero costume captured in soft plush form. 10 inches tall, super soft fabric. Great Eastern Entertainment official product.",
    sizes:[], related:[23,24,25]
  },
  {
    id:27, cat:"plushies", series:"One Piece",
    name:"Tony Tony Chopper Stuffed Plush — 8\" Chibi Form",
    brand:"Great Eastern Entertainment", price:3895, was:null, rating:4.9, reviews:3200, badge:"hot",
    img:"https://m.media-amazon.com/images/I/71PV3xWqFhL._AC_SL1200_.jpg",
    desc:"Tony Tony Chopper in his adorable chibi form! 8 inches of the softest plush you'll ever hold. Great Eastern Entertainment official.",
    sizes:[], related:[23,24,26]
  },
  {
    id:28, cat:"plushies", series:"Naruto",
    name:"Naruto Uzumaki Chibi Sitting Plush — 8\" Fox Mode",
    brand:"Great Eastern Entertainment", price:4450, was:5280, rating:4.8, reviews:1870, badge:"sale",
    img:"https://m.media-amazon.com/images/I/61EIMXJgDOL._AC_SL1000_.jpg",
    desc:"Naruto Uzumaki in chibi sitting pose. Features his signature orange jumpsuit and headband. 8 inches tall, ultra-soft polyester fill.",
    sizes:[], related:[23,24,25]
  },

  // ── ACCESSORIES ─────────────────────────────
  {
    id:29, cat:"accessories", series:"Naruto",
    name:"Sharingan Eye Stainless Steel Adjustable Ring",
    brand:"Anime N Games", price:2775, was:null, rating:4.6, reviews:987, badge:null,
    img:"https://m.media-amazon.com/images/I/51YjUDyJaQL._AC_SL1000_.jpg",
    desc:"Sharingan eye design ring made from high quality stainless steel. Adjustable size fits most fingers. Hypoallergenic, won't rust or tarnish.",
    sizes:["Adjustable"], related:[30,31,32]
  },
  {
    id:30, cat:"accessories", series:"Jujutsu Kaisen",
    name:"Gojo Satoru Six Eyes Chain Bracelet — Stainless Steel",
    brand:"ToyWiz", price:3610, was:null, rating:4.8, reviews:760, badge:"new",
    img:"https://m.media-amazon.com/images/I/61J+cWd1OlL._AC_SL1200_.jpg",
    desc:"Gojo Satoru inspired chain bracelet featuring his Six Eyes motif. Stainless steel construction, adjustable chain length.",
    sizes:["Adjustable"], related:[29,31,32]
  },
  {
    id:31, cat:"accessories", series:"Dragon Ball Z",
    name:"Shenron Dragon Enamel Metal Keychain — Collectible",
    brand:"Great Eastern Entertainment", price:2225, was:null, rating:4.9, reviews:2200, badge:"hot",
    img:"https://m.media-amazon.com/images/I/61rNOEJaesL._AC_SL1000_.jpg",
    desc:"Shenron the Eternal Dragon enamel keychain. Metal construction with full colour enamel fill. Officially licensed.",
    sizes:[], related:[29,30,32]
  },
  {
    id:32, cat:"accessories", series:"Naruto",
    name:"Naruto Hidden Leaf Village Backpack — School & Travel",
    brand:"Bioworld", price:11125, was:13900, rating:4.9, reviews:1890, badge:"sale",
    img:"https://m.media-amazon.com/images/I/71yZdvQlxxL._AC_SL1500_.jpg",
    desc:"Naruto Shippuden Hidden Leaf Village backpack. Spacious main compartment, front zip pocket, padded back panel. Durable polyester.",
    sizes:[], related:[29,30,33]
  },
  {
    id:33, cat:"accessories", series:"Multiple",
    name:"Anime Poster Set — 12-Pack HD (Naruto, DBZ, One Piece...)",
    brand:"Feelin Good Tees", price:5280, was:null, rating:4.9, reviews:4500, badge:"hot",
    img:"https://m.media-amazon.com/images/I/71yZdvQlxxL._AC_SL1500_.jpg",
    desc:"12-pack HD anime poster set featuring iconic artwork from Naruto, Dragon Ball Z, One Piece, Demon Slayer, and more. 8×10 inch prints, vibrant colours.",
    sizes:[], related:[29,30,31]
  },
  {
    id:34, cat:"accessories", series:"Jujutsu Kaisen",
    name:"Jujutsu Kaisen Trifold Wallet — Faux Leather Embossed",
    brand:"Bioworld", price:6950, was:null, rating:4.7, reviews:612, badge:"new",
    img:"https://m.media-amazon.com/images/I/61J+cWd1OlL._AC_SL1200_.jpg",
    desc:"Jujutsu Kaisen faux leather trifold wallet with embossed Sukuna curse mark design. Multiple card slots, bill compartment, ID window.",
    sizes:[], related:[29,30,32]
  }
];

const CATEGORIES = [
  { id:"all",         label:"All Products",   icon:"⚡", count: PRODUCTS.length },
  { id:"figures",     label:"Figures",         icon:"⚔️", count: PRODUCTS.filter(p=>p.cat==="figures").length },
  { id:"shirts",      label:"T-Shirts",        icon:"👕", count: PRODUCTS.filter(p=>p.cat==="shirts").length },
  { id:"hoodies",     label:"Hoodies",         icon:"🧥", count: PRODUCTS.filter(p=>p.cat==="hoodies").length },
  { id:"plushies",    label:"Plushies",        icon:"🧸", count: PRODUCTS.filter(p=>p.cat==="plushies").length },
  { id:"accessories", label:"Accessories",     icon:"📿", count: PRODUCTS.filter(p=>p.cat==="accessories").length },
  { id:"sale",        label:"On Sale",         icon:"🔥", count: PRODUCTS.filter(p=>p.was).length }
];

const SERIES_LIST = [
  "Naruto","Demon Slayer","Dragon Ball Z","Jujutsu Kaisen",
  "One Piece","Attack on Titan","My Hero Academia","Bleach",
  "Chainsaw Man","Hunter × Hunter","Vinland Saga","Tokyo Ghoul"
];
