import { Router } from "express";
import {
  createPurchaseOrder,
  getPurchaseOrderFields,
  listPurchaseOrders,
} from "../controllers/purchaseOrderController.js";

const router = Router();

router.get("/purchase-orders/fields", getPurchaseOrderFields);
router.get("/purchase-orders", listPurchaseOrders);
router.post("/purchase-orders", createPurchaseOrder);

export default router;
