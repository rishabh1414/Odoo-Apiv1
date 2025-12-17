import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

export async function getLeadFields(req, res) {
  const uid = await authOdoo();
  if (!uid) return res.status(401).json({ error: "Auth failed" });

  const fields = await callOdoo({
    jsonrpc: "2.0",
    method: "call",
    params: {
      service: "object",
      method: "execute_kw",
      args: [
        DB,
        uid,
        PASSWORD,
        "crm.lead",
        "fields_get",
        [],
        { attributes: ["string", "type", "required"] },
      ],
    },
    id: 600,
  });

  res.json(fields.result);
}

export async function listLeads(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const stage = req.query.stage_id;
    const domain = stage ? [["stage_id", "=", Number(stage)]] : [];

    const fields = [
      "name",
      "partner_id",
      "contact_name",
      "email_from",
      "phone",
      "mobile",
      "user_id",
      "stage_id",
      "type",
      "priority",
      "probability",
      "planned_revenue",
      "date_deadline",
      "activity_summary",
    ];

    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "crm.lead", "search_read", [domain], { fields, limit: 500 }],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, leads: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createLead(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const input = req.body;
    const data = {
      name: input.name,
      partner_id: input.partner_id,
      contact_name: input.contact_name,
      email_from: input.email,
      phone: input.phone,
      mobile: input.mobile,
      user_id: input.user_id,
      stage_id: input.stage_id,
      type: input.type,
      priority: input.priority,
      probability: input.probability,
      planned_revenue: input.planned_revenue,
      date_deadline: input.date_deadline,
      description: input.description,
    };

    for (const key of Object.keys(data)) {
      if (data[key] === undefined || data[key] === null) delete data[key];
    }

    const created = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "crm.lead", "create", [data]],
      },
      id: Date.now(),
    });

    if (created.error) return res.status(400).json({ error: created.error });

    res.json({ success: true, lead_id: created.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
