import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

export async function getPurchaseOrderFields(req, res) {
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
        "purchase.order",
        "fields_get",
        [],
        { attributes: ["string", "type", "required"] },
      ],
    },
    id: 500,
  });

  res.json(fields.result);
}

export async function listPurchaseOrders(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const state = req.query.state;
    const domain = state ? [["state", "=", state]] : [];

    const fields = [
      "name",
      "partner_id",
      "date_order",
      "currency_id",
      "amount_total",
      "amount_tax",
      "amount_untaxed",
      "state",
      "picking_type_id",
      "order_line",
    ];

    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "purchase.order", "search_read", [domain], { fields, limit: 500 }],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, purchase_orders: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createPurchaseOrder(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const input = req.body;

    const normalizedLines = Array.isArray(input.lines)
      ? input.lines.map((line) => [
          0,
          0,
          {
            product_id: line.product_id,
            name: line.description || line.name || "Line",
            product_qty: line.quantity ?? 1,
            price_unit: line.price_unit ?? 0,
            date_planned: line.date_planned,
            product_uom: line.product_uom,
            taxes_id: line.taxes_id,
          },
        ])
      : undefined;

    const data = {
      partner_id: input.partner_id,
      currency_id: input.currency_id,
      date_order: input.date_order,
      picking_type_id: input.picking_type_id,
      company_id: input.company_id,
      origin: input.origin,
      notes: input.notes,
      order_line: input.order_line || normalizedLines,
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
        args: [DB, uid, PASSWORD, "purchase.order", "create", [data]],
      },
      id: Date.now(),
    });

    if (created.error) return res.status(400).json({ error: created.error });

    res.json({ success: true, purchase_order_id: created.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
