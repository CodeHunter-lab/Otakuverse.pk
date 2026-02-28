/* =============================================
   ui.js — Cursor, Particles, Drawer, Toast,
           Scroll, Marquee, Reveal
   ============================================= */

// ── Custom Cursor ─────────────────────────────
(function initCursor() {
  const cursor = document.getElementById("cursor");
  const ring   = document.getElementById("cursor-ring");
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  })();

  // Hover targets — expand ring
  function addHover(selector) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }
  addHover("a, button, .product-card, .cat-card, .sc-card, .banner-card, .chip, .rel-card");
})();

// ── Particle System ───────────────────────────
(function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * canvas.width;
      this.y  = Math.random() * canvas.height;
      this.sz = Math.random() * 1.8 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.35 - 0.15;
      this.op = Math.random() * 0.45 + 0.05;
      this.color = Math.random() > 0.7 ? "#e63946" : Math.random() > 0.5 ? "#ffd60a" : "#ffffff";
    }
    update() {
      this.x  += this.vx;
      this.y  += this.vy;
      this.op -= 0.0006;
      if (this.op <= 0 || this.y < -5) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.op;
      ctx.fillStyle   = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur  = 5;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const particles = Array.from({ length: 70 }, () => new Particle());
  (function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  })();
})();

// ── Marquee ───────────────────────────────────
function buildMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track || typeof SERIES_LIST === "undefined") return;
  const items = [...SERIES_LIST, ...SERIES_LIST]
    .map(s => `<span>${s}</span><span class="marquee-sep"> ✦ </span>`)
    .join("");
  track.innerHTML = items;
}

// ── Mobile Drawer ─────────────────────────────
function openDrawer() {
  document.getElementById("mobile-drawer").classList.add("open");
  document.getElementById("drawer-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  document.getElementById("mobile-drawer").classList.remove("open");
  document.getElementById("drawer-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ── Toast Notifications ───────────────────────
function showToast(message, icon = "✓") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("out");
    setTimeout(() => toast.remove(), 250);
  }, 2500);
}

// ── Scroll Reveal ─────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ── Scroll-to-Top Button ──────────────────────
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ── Newsletter ────────────────────────────────
function subscribeNewsletter() {
  const input = document.getElementById("nl-email");
  const value = input?.value.trim();
  if (!value || !value.includes("@")) {
    showToast("Please enter a valid email", "⚠️");
    return;
  }
  showToast("Subscribed! Welcome to the Otaku Clan 🎌", "🎌");
  if (input) input.value = "";
}

// ── Scroll helper ─────────────────────────────
function scrollToProducts() {
  document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Init all UI ───────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildMarquee();
  initReveal();
  initScrollTop();

  // Drawer overlay click
  document.getElementById("drawer-overlay")?.addEventListener("click", closeDrawer);
});
