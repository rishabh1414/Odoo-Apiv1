import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

export async function getPickingFields(req, res) {
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
        "stock.picking",
        "fields_get",
        [],
        { attributes: ["string", "type", "required"] },
      ],
    },
    id: 700,
  });

  res.json(fields.result);
}

export async function listPickings(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const pickingType = req.query.picking_type_id;
    const domain = pickingType ? [["picking_type_id", "=", Number(pickingType)]] : [];

    const fields = [
      "name",
      "origin",
      "state",
      "partner_id",
      "scheduled_date",
      "date_done",
      "picking_type_id",
      "location_id",
      "location_dest_id",
      "move_ids_without_package",
    ];

    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "stock.picking", "search_read", [domain], { fields, limit: 500 }],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, pickings: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createPicking(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const input = req.body;

    const normalizedMoves = Array.isArray(input.moves)
      ? input.moves.map((line) => [
          0,
          0,
          {
            name: line.description || line.name || "Move",
            product_id: line.product_id,
            product_uom_qty: line.quantity ?? 1,
            product_uom: line.product_uom,
            location_id: line.location_id,
            location_dest_id: line.location_dest_id,
            picking_type_id: input.picking_type_id,
          },
        ])
      : undefined;

    const data = {
      picking_type_id: input.picking_type_id,
      partner_id: input.partner_id,
      origin: input.origin,
      location_id: input.location_id,
      location_dest_id: input.location_dest_id,
      scheduled_date: input.scheduled_date,
      move_ids_without_package: input.move_ids_without_package || normalizedMoves,
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
        args: [DB, uid, PASSWORD, "stock.picking", "create", [data]],
      },
      id: Date.now(),
    });

    if (created.error) return res.status(400).json({ error: created.error });

    res.json({ success: true, picking_id: created.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
