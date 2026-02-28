/* =============================================
   products.js — Filter, Sort, Render & Modal
   ============================================= */

// ── Filter State ─────────────────────────────
let activeCat   = "all";
let searchQuery = "";
let priceMin    = 0;
let priceMax    = 999999;
let sortBy      = "default";
let currentPage = 1;
const PAGE_SIZE = 8;

// ── Modal State ───────────────────────────────
let modalQty  = 1;
let modalSize = null;

// ── Build Category Chips ──────────────────────
function buildChips() {
  const row = document.getElementById("chip-row");
  if (!row) return;
  row.innerHTML = CATEGORIES.map(c => `
    <button class="chip ${c.id === activeCat ? "active" : ""}"
            data-cat="${c.id}"
            onclick="filterByCategory('${c.id}')">
      ${c.icon} ${c.label} <small style="opacity:.6">(${c.count})</small>
    </button>`).join("");
}

// ── Filter Entry Points ───────────────────────
function filterByCategory(cat) {
  activeCat = cat;
  currentPage = 1;
  // Update chips
  document.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("active", c.dataset.cat === cat);
  });
  renderProducts();
  document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

let searchDebounce;
function handleSearch(value) {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    searchQuery = value;
    currentPage = 1;
    renderProducts();
  }, 220);
}

function applyFilters() {
  priceMin   = parseInt(document.getElementById("price-min")?.value) || 0;
  priceMax   = parseInt(document.getElementById("price-max")?.value) || 999999;
  sortBy     = document.getElementById("sort-select")?.value || "default";
  currentPage = 1;
  renderProducts();
}

function clearSearch() {
  searchQuery = "";
  activeCat   = "all";
  const inputs = document.querySelectorAll(".search-input");
  inputs.forEach(i => i.value = "");
  buildChips();
  renderProducts();
}

// ── Get Filtered & Sorted Products ───────────
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category
  if (activeCat === "sale") {
    list = list.filter(p => p.was);
  } else if (activeCat !== "all") {
    list = list.filter(p => p.cat === activeCat);
  }

  // Search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q)   ||
      p.series.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
    );
  }

  // Price range
  list = list.filter(p => p.price >= priceMin && p.price <= priceMax);

  // Sort
  switch (sortBy) {
    case "price-asc":  list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "rating":     list.sort((a, b) => b.rating - a.rating); break;
    case "reviews":    list.sort((a, b) => b.reviews - a.reviews); break;
  }

  return list;
}

// ── Render Products Grid ──────────────────────
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const pgEl = document.getElementById("pagination");
  if (!grid) return;

  const filtered = getFilteredProducts();
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  if (currentPage > totalPages) currentPage = 1;

  const slice = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  if (!slice.length) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <p>No products found.<br>
        <small style="color:var(--muted)">Try a different search or category.</small></p>
        <br>
        <button class="btn btn-outline" onclick="clearSearch()" style="margin-top:8px">
          Show All Products
        </button>
      </div>`;
    if (pgEl) pgEl.innerHTML = "";
    return;
  }

  const BADGE_CLASS = { hot:"badge-hot", sale:"badge-sale", new:"badge-new", exc:"badge-exc" };
  const BADGE_LABEL = { hot:"🔥 Hot",    sale:"SALE",        new:"NEW",       exc:"Exclusive" };

  grid.innerHTML = slice.map((p, i) => {
    const stars    = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
    const isWished = wishlist.includes(p.id);
    const discount = p.was ? Math.round((1 - p.price / p.was) * 100) : 0;

    return `
    <div class="product-card" style="animation-delay:${i * 0.07}s" onclick="openProductModal(${p.id})">
      <div class="prod-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy"
             onerror="this.src='https://placehold.co/400x400/0f0f1c/e63946?text=OtakuVerse'">
        <div class="prod-overlay"></div>
        ${p.badge ? `<span class="prod-badge ${BADGE_CLASS[p.badge]}">${BADGE_LABEL[p.badge]}</span>` : ""}
        ${discount ? `<span class="prod-badge badge-sale" style="top:auto;bottom:42px">-${discount}%</span>` : ""}
        <button class="prod-wish ${isWished ? "active" : ""}"
                onclick="event.stopPropagation(); toggleWishlist(${p.id}, this)">
          ${isWished ? "♥" : "♡"}
        </button>
        <button class="prod-quick-view" onclick="event.stopPropagation(); openProductModal(${p.id})">
          Quick View
        </button>
      </div>
      <div class="prod-info">
        <div class="prod-amz">📦 via Amazon · ${p.brand}</div>
        <div class="prod-series">${p.series}</div>
        <div class="prod-stars">${stars} <span class="rc">(${p.reviews.toLocaleString()})</span></div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-footer">
          <div>
            <div class="price-now">Rs. ${p.price.toLocaleString()}</div>
            ${p.was ? `<div class="price-was">Rs. ${p.was.toLocaleString()}</div>` : ""}
            <div class="price-cod">✓ COD Available</div>
          </div>
          <button class="btn-atc" onclick="event.stopPropagation(); handleAddToCart(event, ${p.id})">
            <span>+ Cart</span>
          </button>
        </div>
      </div>
    </div>`;
  }).join("");

  renderPagination(totalPages);
}

// ── Handle Add to Cart from Grid ──────────────
function handleAddToCart(e, productId) {
  e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === productId);
  addToCart(product, null, 1);
  const btn = e.currentTarget;
  btn.classList.add("added");
  btn.querySelector("span").textContent = "✓ Added!";
  setTimeout(() => {
    btn.classList.remove("added");
    btn.querySelector("span").textContent = "+ Cart";
  }, 1500);
}

// ── Pagination ────────────────────────────────
function renderPagination(totalPages) {
  const pgEl = document.getElementById("pagination");
  if (!pgEl || totalPages <= 1) { if (pgEl) pgEl.innerHTML = ""; return; }

  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
      html += `<button class="page-btn ${i === currentPage ? "active" : ""}"
                        onclick="goToPage(${i})">${i}</button>`;
    } else if (Math.abs(i - currentPage) === 2) {
      html += `<span class="page-btn dots">…</span>`;
    }
  }
  pgEl.innerHTML = html;
}

function goToPage(n) {
  currentPage = n;
  renderProducts();
  document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Product Detail Modal ──────────────────────
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  modalQty  = 1;
  modalSize = null;

  const stars    = "★".repeat(Math.round(product.rating)) + "☆".repeat(5 - Math.round(product.rating));
  const discount = product.was ? Math.round((1 - product.price / product.was) * 100) : 0;
  const isWished = wishlist.includes(product.id);

  const relatedHTML = product.related
    .map(rid => PRODUCTS.find(x => x.id === rid))
    .filter(Boolean)
    .map(r => `
      <div class="rel-card" onclick="openProductModal(${r.id})">
        <img src="${r.img}" alt="${r.name}"
             onerror="this.src='https://placehold.co/200x200/0f0f1c/e63946?text=OV'">
        <div class="rel-info">
          <div class="rel-name">${r.name.substring(0, 38)}...</div>
          <div class="rel-price">Rs. ${r.price.toLocaleString()}</div>
        </div>
      </div>`).join("");

  document.getElementById("modal-content").innerHTML = `
    <div class="modal-body">
      <div class="modal-images">
        <img class="modal-main-img" id="modal-main-img"
             src="${product.img}"
             onerror="this.src='https://placehold.co/500x500/0f0f1c/e63946?text=OtakuVerse'">
        <div class="modal-thumbs">
          <img class="modal-thumb active" src="${product.img}"
               onclick="setModalImage(this, '${product.img}')"
               onerror="this.style.display='none'">
        </div>
      </div>
      <div class="modal-info">
        <div class="modal-series">${product.series}</div>
        <div class="modal-name">${product.name}</div>
        <div class="modal-stars">${stars}
          <span class="rc">(${product.reviews.toLocaleString()} reviews)</span>
        </div>
        <div class="modal-price-block">
          <div class="modal-price">Rs. ${product.price.toLocaleString()}</div>
          ${product.was ? `
            <div class="modal-price-was">Was Rs. ${product.was.toLocaleString()}</div>
            <div class="modal-savings">
              You save Rs. ${(product.was - product.price).toLocaleString()} (${discount}% off)
            </div>` : ""}
        </div>
        <div class="modal-desc">${product.desc}</div>

        ${product.sizes.length ? `
          <div>
            <div class="size-label">Size</div>
            <div class="sizes">
              ${product.sizes.map(s => `
                <button class="size-btn" onclick="selectModalSize(this, '${s}')">${s}</button>
              `).join("")}
            </div>
          </div>` : ""}

        <div class="qty-row">
          <span class="qty-label">Qty</span>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeModalQty(-1)">−</button>
            <input class="qty-num" id="modal-qty-display" type="number" value="1" min="1" readonly>
            <button class="qty-btn" onclick="changeModalQty(1)">+</button>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn btn-primary btn-wide" onclick="modalAddToCart(${product.id})" style="flex:1">
            Add to Cart 🛒
          </button>
          <button class="btn btn-outline" onclick="toggleWishlist(${product.id}, this)" style="padding:10px 16px">
            ${isWished ? "♥" : "♡"}
          </button>
        </div>

        <div class="modal-badges">
          <span class="modal-badge">✓ COD Available</span>
          <span class="modal-badge">📦 Amazon Sourced</span>
          <span class="modal-badge">🚚 Nationwide Delivery</span>
          <span class="modal-badge">🔄 Easy Returns</span>
        </div>
      </div>
    </div>

    ${relatedHTML ? `
      <div class="related-prods">
        <span class="eyebrow">You May Also Like</span>
        <div class="related-grid">${relatedHTML}</div>
      </div>` : ""}`;

  document.getElementById("product-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal(e) {
  if (!e || e.target === document.getElementById("product-modal")) {
    document.getElementById("product-modal").classList.remove("open");
    document.body.style.overflow = "";
  }
}

function setModalImage(el, src) {
  document.getElementById("modal-main-img").src = src;
  document.querySelectorAll(".modal-thumb").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
}

function selectModalSize(btn, size) {
  document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  modalSize = size;
}

function changeModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById("modal-qty-display").value = modalQty;
}

function modalAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  addToCart(product, modalSize, modalQty);
  closeProductModal();
  openCart();
}

// ── Build Showcase (Hero) ─────────────────────
function buildShowcase() {
  const grid = document.getElementById("showcase-grid");
  if (!grid) return;
  const picks = [PRODUCTS[0], PRODUCTS[8], PRODUCTS[22], PRODUCTS[28]];
  grid.innerHTML = picks.map(p => `
    <div class="sc-card" onclick="openProductModal(${p.id})">
      <img src="${p.img}" alt="${p.name}"
           onerror="this.src='https://placehold.co/200x200/0f0f1c/e63946?text=OV'">
      <div class="sc-info">
        <div class="sc-series">${p.series}</div>
        <div class="sc-price">Rs. ${p.price.toLocaleString()}</div>
      </div>
    </div>`).join("");
}

// ── Init ──────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildChips();
  buildShowcase();
  renderProducts();

  // Product modal overlay click
  document.getElementById("product-modal")?.addEventListener("click", closeProductModal);
});
