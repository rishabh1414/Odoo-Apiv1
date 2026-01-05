import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

const PARTNER_FIELDS = [
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

async function getPartnerFieldSet(uid) {
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
    id: 401,
  });

  if (fields.error) return { error: fields.error };

  const keys = Object.keys(fields.result || {});
  return { fieldSet: new Set(keys) };
}

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

    const { fieldSet, error } = await getPartnerFieldSet(uid);
    if (error) return res.status(400).json({ error });

    const type = req.query.type; // customer | vendor | all
    let domain = [];
    if (type === "customer") domain = [["customer_rank", ">", 0]];
    else if (type === "vendor") domain = [["supplier_rank", ">", 0]];

    const fields = PARTNER_FIELDS.filter((field) => fieldSet.has(field));

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
          "res.partner",
          "search_read",
          [domain],
          { fields, limit: 500 },
        ],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    res.json({ success: true, count: response.result.length, partners: response.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getPartnerById(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const { fieldSet, error } = await getPartnerFieldSet(uid);
    if (error) return res.status(400).json({ error });

    const rawId = String(req.params.id || "").trim();
    if (!rawId) {
      return res.status(400).json({ error: "Missing contact identifier" });
    }

    const isNumericId = /^\d+$/.test(rawId);
    const domain = isNumericId ? [["id", "=", Number(rawId)]] : [["name", "=", rawId]];

    const fields = PARTNER_FIELDS.filter((field) => fieldSet.has(field));

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
          "res.partner",
          "search_read",
          [domain],
          { fields, limit: 1 },
        ],
      },
      id: Date.now(),
    });

    if (response.error) return res.status(400).json({ error: response.error });

    const partner = response.result?.[0];
    if (!partner) return res.status(404).json({ error: "Contact not found" });

    res.json({ success: true, contact: partner });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createPartner(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const { fieldSet, error } = await getPartnerFieldSet(uid);
    if (error) return res.status(400).json({ error });

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

    const filteredData = {};
    for (const [key, value] of Object.entries(data)) {
      if (value === undefined || value === null) continue;
      if (!fieldSet.has(key)) continue;
      filteredData[key] = value;
    }

    const created = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "res.partner", "create", [filteredData]],
      },
      id: Date.now(),
    });

    if (created.error) return res.status(400).json({ error: created.error });

    res.json({ success: true, partner_id: created.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
