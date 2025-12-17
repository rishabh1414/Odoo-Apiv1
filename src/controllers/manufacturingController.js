import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

export async function getMrpOrderFields(req, res) {
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
        "mrp.production",
        "fields_get",
        [],
        { attributes: ["string", "type", "required"] },
      ],
    },
    id: 800,
  });

  res.json(fields.result);
}

export async function listMrpOrders(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const state = req.query.state;
    const domain = state ? [["state", "=", state]] : [];

    const fields = [
      "name",
      "origin",
      "state",
      "product_id",
      "product_qty",
      "bom_id",
      "date_planned_start",
      "date_planned_finished",
      "company_id",
    ];

    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "mrp.production", "search_read", [domain], { fields, limit: 500 }],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, mrp_orders: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createMrpOrder(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const input = req.body;
    const data = {
      product_id: input.product_id,
      product_qty: input.product_qty,
      bom_id: input.bom_id,
      origin: input.origin,
      date_planned_start: input.date_planned_start,
      company_id: input.company_id,
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
        args: [DB, uid, PASSWORD, "mrp.production", "create", [data]],
      },
      id: Date.now(),
    });

    if (created.error) return res.status(400).json({ error: created.error });

    res.json({ success: true, mrp_order_id: created.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function listBoms(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const fields = ["code", "product_tmpl_id", "product_qty", "company_id", "type", "bom_line_ids"];
    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "mrp.bom", "search_read", [[]], { fields, limit: 500 }],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, boms: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
