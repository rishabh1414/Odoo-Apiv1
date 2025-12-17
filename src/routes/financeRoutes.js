import { Router } from "express";
import { getPaymentTermFields, listPaymentTerms } from "../controllers/financeController.js";

const router = Router();

router.get("/finance/payment-terms/fields", getPaymentTermFields);
router.get("/finance/payment-terms", listPaymentTerms);

export default router;
