import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

export async function getInvoiceFields(req, res) {
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
        "account.move",
        "fields_get",
        [],
        { attributes: ["string", "type", "required"] },
      ],
    },
    id: 200,
  });

  res.json(fields.result);
}

export async function listInvoices(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const moveType = req.query.type || "out_invoice";
    const domain = moveType === "all" ? [] : [["move_type", "=", moveType]];

    const fields = [
      "name",
      "move_type",
      "invoice_date",
      "invoice_date_due",
      "invoice_payment_term_id",
      "partner_id",
      "invoice_origin",
      "invoice_user_id",
      "state",
      "amount_total",
      "amount_residual",
      "currency_id",
      "invoice_line_ids",
    ];

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
          "account.move",
          "search_read",
          [domain],
          { fields, limit: 500 },
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
      invoices: response.result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createInvoice(req, res) {
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
            quantity: line.quantity ?? 1,
            price_unit: line.price_unit ?? 0,
            name: line.description || line.name || "Line",
            tax_ids: line.tax_ids,
          },
        ])
      : undefined;

    const data = {
      move_type: input.move_type || "out_invoice",
      partner_id: input.partner_id,
      invoice_date: input.invoice_date,
      invoice_date_due: input.invoice_date_due,
      invoice_payment_term_id: input.invoice_payment_term_id,
      currency_id: input.currency_id,
      invoice_origin: input.invoice_origin,
      invoice_user_id: input.invoice_user_id,
      narration: input.narration,
      invoice_line_ids: input.invoice_line_ids || normalizedLines,
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
        args: [DB, uid, PASSWORD, "account.move", "create", [data]],
      },
      id: Date.now(),
    });

    if (created.error) {
      return res.status(400).json({ error: created.error });
    }

    res.json({ success: true, invoice_id: created.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
