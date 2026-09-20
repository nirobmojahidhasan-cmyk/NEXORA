/* NEXORA ERP — light UI helpers only.
   Data handling / CRUD / calculations are out of scope for this
   HTML+CSS submission and are left as clearly marked hooks below. */

// ---- theme (persisted) ----
(function () {
  const saved = localStorage.getItem('nexora-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  if (next === 'dark') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', 'light');
  localStorage.setItem('nexora-theme', next);
}

// ---- password show/hide ----
function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.textContent = isHidden ? 'HIDE' : 'SHOW';
}

// ---- mobile sidebar (collapses to horizontal scroll via CSS already) ----
// no JS needed — handled with media queries in style.css

// ---- toast helper (demo only, no backend) ----
function showToast(message) {
  let wrap = document.getElementById('toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = message;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ---- HOOK: form submit handlers ----
// Wire these to real validation / localStorage / API calls:
//   document.getElementById('login-form')?.addEventListener('submit', e => {...})
//   document.getElementById('signup-form')?.addEventListener('submit', e => {...})

// ---- HOOK: table search / filter / sort / pagination ----
// The .toolbar inputs on employees.html / products.html are markup only;
// attach input/change listeners here to filter the .table-wrap rows.

// ---- HOOK: charts ----
// Replace the .bars placeholders with a real Chart.js canvas + data.
