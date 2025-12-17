import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

export async function getPaymentTermFields(req, res) {
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
        "account.payment.term",
        "fields_get",
        [],
        { attributes: ["string", "type", "required"] },
      ],
    },
    id: 900,
  });

  res.json(fields.result);
}

export async function listPaymentTerms(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const fields = ["name", "note", "line_ids", "company_id", "active"];
    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "account.payment.term", "search_read", [[]], { fields, limit: 200 }],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, payment_terms: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Note: Aging reports and GL summaries rely on Odoo report models; expose as needed via report endpoints.
