import { Router } from "express";
import {
  createSalesOrder,
  getSalesOrderById,
  getSalesOrderFields,
  listSalesOrders,
} from "../controllers/salesOrderController.js";

const router = Router();

router.get("/sales-orders/fields", getSalesOrderFields);
router.get("/sales-orders/:id", getSalesOrderById);
router.get("/sales-orders", listSalesOrders);
router.post("/sales-orders", createSalesOrder);

export default router;
