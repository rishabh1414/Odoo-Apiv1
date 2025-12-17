import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

export async function getPartnerFields(req, res) {
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
        "res.partner",
        "fields_get",
        [],
        { attributes: ["string", "type", "required"] },
      ],
    },
    id: 400,
  });

  res.json(fields.result);
}

export async function listPartners(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const type = req.query.type; // customer | vendor | all
    let domain = [];
    if (type === "customer") domain = [["customer_rank", ">", 0]];
    else if (type === "vendor") domain = [["supplier_rank", ">", 0]];

    const fields = [
      "name",
      "email",
      "phone",
      "mobile",
      "street",
      "city",
      "state_id",
      "country_id",
      "zip",
      "customer_rank",
      "supplier_rank",
      "company_type",
      "vat",
      "is_company",
      "active",
    ];

    const response = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "res.partner", "search_read", [domain], { fields, limit: 500 }],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, partners: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createPartner(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const input = req.body;
    const data = {
      name: input.name,
      email: input.email,
      phone: input.phone,
      mobile: input.mobile,
      street: input.street,
      city: input.city,
      state_id: input.state_id,
      country_id: input.country_id,
      zip: input.zip,
      vat: input.vat,
      is_company: input.is_company,
      company_type: input.company_type, // company | person
      customer_rank: input.customer_rank,
      supplier_rank: input.supplier_rank,
      active: input.active,
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
        args: [DB, uid, PASSWORD, "res.partner", "create", [data]],
      },
      id: Date.now(),
    });

    if (created.error) return res.status(400).json({ error: created.error });

    res.json({ success: true, partner_id: created.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
