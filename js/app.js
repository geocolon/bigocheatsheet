/* ═══════════════════════════════════════════
   Big O Cheatsheet — app.js
   Tables, theme toggle, filters, scroll reveal
═══════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   COMPLEXITY BADGE HELPER
───────────────────────────────────────────── */
function getBadgeClass(val) {
  if (!val || val === "N/A") return "";
  const v = val.toLowerCase();
  if (v.includes("1)") || v.includes("log n)")) return "badge-good";
  if (v.includes("n)") && !v.includes("n²") && !v.includes("n log") && !v.includes("nk")) return "badge-fair";
  if (v.includes("n log") || v.includes("n+k") || v.includes("nk")) return "badge-fair";
  return "badge-bad";
}

function badge(text) {
  if (!text || text === "N/A") {
    return '<span class="badge-complexity" style="color:var(--text-muted)">N/A</span>';
  }
  return `<span class="badge-complexity ${getBadgeClass(text)}">${text}</span>`;
}

/* ─────────────────────────────────────────────
   RENDER DATA STRUCTURES TABLE
───────────────────────────────────────────── */
function renderDSTable(filter = "all") {
  const tbody = document.getElementById("ds-tbody");
  const filtered = filter === "all"
    ? dataStructures
    : dataStructures.filter(d => d.cat === filter);

  tbody.innerHTML = filtered.map((d, i) => `
    <tr style="animation: fadeUp 0.4s ease ${i * 0.04}s both">
      <td>${d.name}</td>
      <td>${badge(d.avgAccess)}</td><td>${badge(d.avgSearch)}</td>
      <td>${badge(d.avgInsert)}</td><td>${badge(d.avgDelete)}</td>
      <td>${badge(d.wAccess)}</td><td>${badge(d.wSearch)}</td>
      <td>${badge(d.wInsert)}</td><td>${badge(d.wDelete)}</td>
      <td>${badge(d.space)}</td>
    </tr>
  `).join("");
}

/* ─────────────────────────────────────────────
   RENDER SORTING TABLE
───────────────────────────────────────────── */
function renderSortTable(filter = "all") {
  const tbody = document.getElementById("sort-tbody");
  const filtered = filter === "all"
    ? sortingAlgorithms
    : sortingAlgorithms.filter(d => d.cat === filter);

  tbody.innerHTML = filtered.map((d, i) => `
    <tr style="animation: fadeUp 0.4s ease ${i * 0.04}s both">
      <td>${d.name}</td>
      <td>${badge(d.best)}</td>
      <td>${badge(d.avg)}</td>
      <td>${badge(d.worst)}</td>
      <td>${badge(d.space)}</td>
    </tr>
  `).join("");
}

/* ─────────────────────────────────────────────
   FILTER BUTTONS
───────────────────────────────────────────── */
document.getElementById("ds-filters").addEventListener("click", e => {
  if (!e.target.classList.contains("btn-filter")) return;
  e.target.parentElement.querySelectorAll(".btn-filter")
    .forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  renderDSTable(e.target.dataset.filter);
});

document.getElementById("sort-filters").addEventListener("click", e => {
  if (!e.target.classList.contains("btn-filter")) return;
  e.target.parentElement.querySelectorAll(".btn-filter")
    .forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  renderSortTable(e.target.dataset.filter);
});

/* ─────────────────────────────────────────────
   INITIAL TABLE RENDER
───────────────────────────────────────────── */
renderDSTable();
renderSortTable();

/* ─────────────────────────────────────────────
   DARK / LIGHT THEME TOGGLE
───────────────────────────────────────────── */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const html = document.documentElement;

// Load saved preference
const savedTheme = localStorage.getItem("bigo-theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  themeIcon.className = savedTheme === "dark"
    ? "bi bi-moon-stars-fill"
    : "bi bi-sun-fill";
}

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  themeIcon.className = next === "dark"
    ? "bi bi-moon-stars-fill"
    : "bi bi-sun-fill";
  localStorage.setItem("bigo-theme", next);

  // Redraw chart so D3 picks up new CSS colors
  setTimeout(drawChart, 100);
});

/* ─────────────────────────────────────────────
   SCROLL-REVEAL ANIMATION
───────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ─────────────────────────────────────────────
   ACTIVE NAV LINK ON SCROLL
───────────────────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active",
      link.getAttribute("href") === "#" + current);
  });
});

/* ─────────────────────────────────────────────
   DEBOUNCED CHART RESIZE
───────────────────────────────────────────── */
function debounce(fn, ms) {
  let t;
  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

/* ─────────────────────────────────────────────
   INIT D3 CHART
───────────────────────────────────────────── */
drawChart();
window.addEventListener("resize", debounce(drawChart, 250));
