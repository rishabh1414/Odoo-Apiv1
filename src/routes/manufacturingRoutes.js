import { Router } from "express";
import {
  createMrpOrder,
  getMrpOrderFields,
  listBoms,
  listMrpOrders,
} from "../controllers/manufacturingController.js";

const router = Router();

router.get("/mrp/orders/fields", getMrpOrderFields);
router.get("/mrp/orders", listMrpOrders);
router.post("/mrp/orders", createMrpOrder);
router.get("/mrp/boms", listBoms);

export default router;
