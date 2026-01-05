import { Router } from "express";
import {
  createPartner,
  getPartnerById,
  getPartnerFields,
  listPartners,
} from "../controllers/partnerController.js";

const router = Router();

router.get("/partners/fields", getPartnerFields);
router.get("/partners/:id", getPartnerById);
router.get("/partners", listPartners);
router.post("/partners", createPartner);

export default router;
