import { Router } from "express";
import { listInventory, listLocations } from "../controllers/inventoryController.js";

const router = Router();

router.get("/inventory/quants", listInventory);
router.get("/inventory/locations", listLocations);

export default router;
