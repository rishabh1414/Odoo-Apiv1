import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

export async function listInventory(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const domain = [];
    const fields = ["product_id", "location_id", "quantity", "available_quantity", "reserved_quantity", "company_id"];

    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "stock.quant", "search_read", [domain], { fields, limit: 500 }],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, quants: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function listLocations(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const fields = ["name", "complete_name", "usage", "location_id", "company_id"];
    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "stock.location", "search_read", [[]], { fields, limit: 500 }],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, locations: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
