import express from "express";
import invoiceRoutes from "./routes/invoiceRoutes.js";
import partnerRoutes from "./routes/partnerRoutes.js";
import purchaseOrderRoutes from "./routes/purchaseOrderRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import salesOrderRoutes from "./routes/salesOrderRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import crmRoutes from "./routes/crmRoutes.js";
import logisticsRoutes from "./routes/logisticsRoutes.js";
import manufacturingRoutes from "./routes/manufacturingRoutes.js";
import financeRoutes from "./routes/financeRoutes.js";

const app = express();

const landingPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Odoo API</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap");
      :root {
        --ink: #0b1f24;
        --muted: #5b6a68;
        --accent: #ff7a1a;
        --accent-2: #0bbf9a;
        --paper: #f7f2ea;
        --card: #ffffff;
        --shadow: rgba(12, 26, 29, 0.12);
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-family: "Space Grotesk", "Segoe UI", sans-serif;
        color: var(--ink);
        background:
          radial-gradient(1200px 600px at 10% 10%, rgba(255, 122, 26, 0.18), transparent 60%),
          radial-gradient(900px 500px at 90% 20%, rgba(11, 191, 154, 0.16), transparent 55%),
          linear-gradient(135deg, #f7f2ea 0%, #eef6f4 100%);
        min-height: 100vh;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      .orb {
        position: fixed;
        border-radius: 999px;
        filter: blur(0px);
        opacity: 0.25;
        z-index: 0;
        animation: float 10s ease-in-out infinite;
      }
      .orb.one {
        width: 220px;
        height: 220px;
        background: #ffb380;
        top: 6%;
        left: -60px;
      }
      .orb.two {
        width: 280px;
        height: 280px;
        background: #74e4cb;
        bottom: -80px;
        right: -40px;
        animation-delay: 1s;
      }
      .shell {
        position: relative;
        z-index: 1;
        max-width: 1100px;
        margin: 0 auto;
        padding: 64px 24px 72px;
      }
      .hero {
        display: grid;
        gap: 20px;
        animation: fadeUp 0.9s ease both;
      }
      .tag {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        background: #0b1f24;
        color: #f7f2ea;
        border-radius: 999px;
        font-size: 13px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }
      h1 {
        margin: 0;
        font-size: clamp(36px, 5vw, 58px);
        line-height: 1.05;
      }
      .hero p {
        margin: 0;
        max-width: 560px;
        font-size: 18px;
        color: var(--muted);
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .btn {
        padding: 12px 18px;
        border-radius: 12px;
        border: 1px solid transparent;
        font-weight: 600;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .btn.primary {
        background: var(--accent);
        color: #1f1200;
        box-shadow: 0 12px 24px -12px rgba(255, 122, 26, 0.6);
      }
      .btn.secondary {
        background: #ffffff;
        border-color: rgba(11, 31, 36, 0.12);
        color: var(--ink);
      }
      .btn:hover {
        transform: translateY(-2px);
      }
      .grid {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
      }
      .card {
        background: var(--card);
        border-radius: 18px;
        padding: 18px;
        box-shadow: 0 18px 40px -28px var(--shadow);
        border: 1px solid rgba(11, 31, 36, 0.08);
        display: grid;
        gap: 10px;
        animation: fadeUp 0.9s ease both;
      }
      .card:nth-child(2) {
        animation-delay: 0.1s;
      }
      .card:nth-child(3) {
        animation-delay: 0.2s;
      }
      .card:nth-child(4) {
        animation-delay: 0.3s;
      }
      .card h3 {
        margin: 0;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        color: var(--muted);
        font-size: 14px;
      }
      code {
        font-family: "IBM Plex Mono", "SFMono-Regular", monospace;
        font-size: 12px;
        background: rgba(11, 31, 36, 0.08);
        padding: 4px 8px;
        border-radius: 999px;
      }
      .footer {
        margin-top: 48px;
        font-size: 13px;
        color: var(--muted);
      }
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(14px);
        }
      }
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0px);
        }
      }
      @media (max-width: 720px) {
        .shell {
          padding: 48px 18px 64px;
        }
        .actions {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    </style>
  </head>
  <body>
    <div class="orb one"></div>
    <div class="orb two"></div>
    <main class="shell">
      <section class="hero">
        <span class="tag">Odoo API</span>
        <h1>Welcome to the Odoo API hub.</h1>
        <p>Elegant, fast, and ready to serve products, partners, sales, inventory, and more in one place.</p>
        <div class="actions">
          <a class="btn primary" href="/products">Try /products</a>
          <a class="btn secondary" href="/products/fields">Browse fields</a>
        </div>
      </section>
      <section class="grid">
        <article class="card">
          <h3>Products</h3>
          <p>Search, create, update, and manage templates.</p>
          <code>GET /products</code>
        </article>
        <article class="card">
          <h3>Partners</h3>
          <p>Work with customers, vendors, and contacts.</p>
          <code>GET /partners</code>
        </article>
        <article class="card">
          <h3>Sales &amp; Invoices</h3>
          <p>Orders, invoicing, and revenue flow.</p>
          <code>GET /sales-orders</code>
        </article>
        <article class="card">
          <h3>Inventory</h3>
          <p>Track stock, logistics, and manufacturing.</p>
          <code>GET /inventory/quants</code>
        </article>
      </section>
      <div class="footer">Tip: open any endpoint in a browser or Postman to explore live data.</div>
    </main>
  </body>
</html>`;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).type("html").send(landingPage);
});

app.use(productRoutes);
app.use(invoiceRoutes);
app.use(salesOrderRoutes);
app.use(partnerRoutes);
app.use(purchaseOrderRoutes);
app.use(inventoryRoutes);
app.use(crmRoutes);
app.use(logisticsRoutes);
app.use(manufacturingRoutes);
app.use(financeRoutes);

export default app;
