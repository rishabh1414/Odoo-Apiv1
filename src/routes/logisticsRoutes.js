import { Router } from "express";
import { createPicking, getPickingFields, listPickings } from "../controllers/logisticsController.js";

const router = Router();

router.get("/pickings/fields", getPickingFields);
router.get("/pickings", listPickings);
router.post("/pickings", createPicking);

export default router;
