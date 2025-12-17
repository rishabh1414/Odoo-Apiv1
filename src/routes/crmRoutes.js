import { Router } from "express";
import { createLead, getLeadFields, listLeads } from "../controllers/crmController.js";

const router = Router();

router.get("/crm/leads/fields", getLeadFields);
router.get("/crm/leads", listLeads);
router.post("/crm/leads", createLead);

export default router;
