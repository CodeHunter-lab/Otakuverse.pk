/* =============================================
   cart.js — Cart, Wishlist & Checkout Logic
   ============================================= */

// ── State ────────────────────────────────────
let cart     = JSON.parse(localStorage.getItem("ov_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("ov_wish") || "[]");
let couponApplied = false;

// ── Persistence ──────────────────────────────
function saveCart() {
  localStorage.setItem("ov_cart", JSON.stringify(cart));
  updateCartBadge();
  renderCartItems();
}

function saveWishlist() {
  localStorage.setItem("ov_wish", JSON.stringify(wishlist));
}

// ── Cart Actions ─────────────────────────────
function addToCart(product, size = null, qty = 1) {
  const existing = cart.find(i => i.id === product.id && i.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id:     product.id,
      name:   product.name,
      price:  product.price,
      series: product.series,
      img:    product.img,
      size,
      qty
    });
  }
  saveCart();
  showToast("Added to cart! 🛒", "🛒");
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
  showToast("Item removed", "✕");
}

function changeCartQty(idx, delta) {
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}

// ── Wishlist Actions ──────────────────────────
function toggleWishlist(productId, btn) {
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(x => x !== productId);
    if (btn) { btn.textContent = "♡"; btn.classList.remove("active"); }
    showToast("Removed from wishlist", "♡");
  } else {
    wishlist.push(productId);
    if (btn) { btn.textContent = "♥"; btn.classList.add("active"); }
    showToast("Added to wishlist! ♥", "♥");
  }
  saveWishlist();
  if (btn) {
    btn.style.transform = "scale(1.35)";
    setTimeout(() => btn.style.transform = "", 280);
  }
}

// ── Cart UI ───────────────────────────────────
function updateCartBadge() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll(".cart-badge").forEach(b => {
    b.textContent = count;
  });
}

function renderCartItems() {
  const container = document.getElementById("cart-items-list");
  if (!container) return;

  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-ico">🛒</div>
        <div>Your cart is empty</div>
        <small style="color:var(--muted)">Add some anime merch!</small>
      </div>`;
    updateCartTotals();
    return;
  }

  container.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img class="ci-img" src="${item.img}" alt="${item.name}"
           onerror="this.src='https://placehold.co/62x62/0f0f1c/e63946?text=OV'">
      <div class="ci-body">
        <div class="ci-ser">${item.series}</div>
        <div class="ci-name">${item.name.substring(0, 42)}${item.name.length > 42 ? "..." : ""}</div>
        <div class="ci-price">Rs. ${(item.price * item.qty).toLocaleString()}</div>
        ${item.size ? `<div class="ci-size">Size: ${item.size}</div>` : ""}
        <div class="ci-qty">
          <button class="cq-btn" onclick="changeCartQty(${i}, -1)">−</button>
          <span class="cq-num">${item.qty}</span>
          <button class="cq-btn" onclick="changeCartQty(${i}, 1)">+</button>
        </div>
      </div>
      <button class="ci-rm" onclick="removeFromCart(${i})">✕</button>
    </div>`).join("");

  updateCartTotals();
}

function updateCartTotals() {
  const sub    = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const ship   = (cart.length && sub < 2000) ? 200 : 0;
  const disc   = couponApplied ? Math.round(sub * 0.1) : 0;
  const total  = sub + ship - disc;

  const $ = id => document.getElementById(id);
  if ($("cart-subtotal"))  $("cart-subtotal").textContent  = `Rs. ${sub.toLocaleString()}`;
  if ($("cart-shipping"))  $("cart-shipping").textContent  = ship === 0 ? "FREE" : `Rs. ${ship}`;
  if ($("cart-total"))     $("cart-total").textContent     = `Rs. ${total.toLocaleString()}`;

  const discRow = $("cart-discount-row");
  if (discRow) {
    discRow.style.display = disc ? "flex" : "none";
    const discEl = $("cart-discount");
    if (discEl) discEl.textContent = `-Rs. ${disc.toLocaleString()}`;
  }
}

// ── Coupon ────────────────────────────────────
function applyCoupon() {
  const code = document.getElementById("coupon-input")?.value.trim().toUpperCase();
  const valid = ["ANIME10", "OTAKU15", "OV2026"];
  if (valid.includes(code)) {
    couponApplied = true;
    updateCartTotals();
    showToast("Coupon applied! 10% off 🎉", "🎉");
  } else {
    showToast("Invalid coupon code", "❌");
  }
}

// ── Cart Sidebar Open/Close ───────────────────
function openCart() {
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ── Checkout ──────────────────────────────────
function openCheckout() {
  closeCart();
  document.getElementById("checkout-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckout(e) {
  if (!e || e.target === document.getElementById("checkout-modal")) {
    document.getElementById("checkout-modal").classList.remove("open");
    document.body.style.overflow = "";
  }
}

function selectPayment(el) {
  document.querySelectorAll(".pay-opt").forEach(p => p.classList.remove("selected"));
  el.classList.add("selected");
}

function placeOrder() {
  if (!cart.length) {
    showToast("Your cart is empty!", "⚠️");
    return;
  }
  clearCart();
  closeCheckout();
  showToast("Order placed! 🎉 You'll receive a confirmation soon.", "🎉");
}

// ── Init ──────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderCartItems();

  // Cart overlay click
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
});
