import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

const SALES_ORDER_FIELDS = [
  "name",
  "state",
  "partner_id",
  "partner_invoice_id",
  "partner_shipping_id",
  "date_order",
  "validity_date",
  "commitment_date",
  "user_id",
  "amount_total",
  "amount_tax",
  "amount_untaxed",
  "currency_id",
  "order_line",
];

export async function getSalesOrderFields(req, res) {
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
        "sale.order",
        "fields_get",
        [],
        { attributes: ["string", "type", "required"] },
      ],
    },
    id: 300,
  });

  res.json(fields.result);
}

export async function listSalesOrders(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const state = req.query.state;
    const domain = state ? [["state", "=", state]] : [];

    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [
          DB,
          uid,
          PASSWORD,
          "sale.order",
          "search_read",
          [domain],
          { fields: SALES_ORDER_FIELDS, limit: 500 },
        ],
      },
      id: Date.now(),
    });

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    res.json({
      success: true,
      count: response.result.length,
      sales_orders: response.result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getSalesOrderById(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const rawId = String(req.params.id || "").trim();
    if (!rawId) {
      return res.status(400).json({ error: "Missing sales order identifier" });
    }

    const isNumericId = /^\d+$/.test(rawId);
    const domain = isNumericId ? [["id", "=", Number(rawId)]] : [["name", "=", rawId]];

    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [
          DB,
          uid,
          PASSWORD,
          "sale.order",
          "search_read",
          [domain],
          { fields: SALES_ORDER_FIELDS, limit: 1 },
        ],
      },
      id: Date.now(),
    });

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    const salesOrder = response.result?.[0];
    if (!salesOrder) {
      return res.status(404).json({ error: "Sales order not found" });
    }

    res.json({ success: true, sales_order: salesOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createSalesOrder(req, res) {
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
            product_uom_qty: line.quantity ?? 1,
            price_unit: line.price_unit ?? 0,
            name: line.description || line.name || "Line",
            tax_id: line.tax_id,
            discount: line.discount,
          },
        ])
      : undefined;

    const data = {
      partner_id: input.partner_id,
      partner_invoice_id: input.partner_invoice_id,
      partner_shipping_id: input.partner_shipping_id,
      date_order: input.date_order,
      validity_date: input.validity_date,
      commitment_date: input.commitment_date,
      user_id: input.user_id,
      currency_id: input.currency_id,
      client_order_ref: input.client_order_ref,
      origin: input.origin,
      note: input.note,
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
        args: [DB, uid, PASSWORD, "sale.order", "create", [data]],
      },
      id: Date.now(),
    });

    if (created.error) {
      return res.status(400).json({ error: created.error });
    }

    res.json({ success: true, sales_order_id: created.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
