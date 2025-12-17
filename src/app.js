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

app.use(express.json());

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
