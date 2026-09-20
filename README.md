# NEXORA ERP — Smart Business Management Dashboard

Frontend-only ERP dashboard UI built with **HTML5 + CSS3**, with a light JavaScript layer for
navigation state, theme persistence, and demo interactions. Visual direction: Y2K —
chrome-bordered glass panels, cyan/magenta glow, gradient buttons, Chakra Petch + Space Grotesk type.

## Scope

This submission covers the **HTML structure and CSS styling** for every required screen.
JavaScript is intentionally kept to UI-only helpers (theme toggle, password show/hide, toasts,
page nav). Data logic — form validation, localStorage-backed CRUD, cart math, tax/VAT
calculation, chart rendering — is left as clearly labeled hooks in `js/script.js` for that layer
of the assignment.

## Folder structure

```
nexora-erp/
├── index.html            Login
├── signup.html           Sign Up
├── forgot-password.html  Forgot Password
├── reset-password.html   Reset Password
├── dashboard.html        Stats, monthly performance, recent orders, notifications
├── employees.html        Employee table, search/filter toolbar, pagination
├── products.html         Product table, categories, stock status
├── inventory.html        Stock levels, inventory history
├── sales.html            Cart preview + checkout panel
├── invoice.html          Printable invoice layout
├── finance.html          Income / expenses / profit overview
├── reports.html          Report list (sales, inventory, employee, customer)
├── css/
│   └── style.css         All shared styling (theme variables, layout, components)
├── js/
│   └── script.js         Theme persistence, password toggle, toast helper, hook comments
└── assets/               (empty — drop product/logo images here)
```

## Running it

Open `index.html` in a browser, or serve the folder with any static server. No build step,
no dependencies.

## Notes for whoever picks up the JavaScript

- Table toolbars (`.toolbar` inputs/selects) on `employees.html` / `products.html` are markup
  only — wire up filtering/sorting there.
- `.bars` divs on `dashboard.html` / `finance.html` are static placeholder charts — swap for
  Chart.js.
- Auth forms have `id`s (`login-form`, `signup-form`, etc.) ready for validation + localStorage.
- Role-based view switching and real stock/sales calculations are not implemented.
