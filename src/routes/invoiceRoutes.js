import { Router } from "express";
import { createInvoice, getInvoiceFields, listInvoices } from "../controllers/invoiceController.js";

const router = Router();

router.get("/invoices/fields", getInvoiceFields);
router.get("/invoices", listInvoices);
router.post("/invoices", createInvoice);

export default router;
