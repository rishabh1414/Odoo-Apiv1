import { authOdoo, callOdoo, DB, PASSWORD } from "../services/odooClient.js";

// Map of website-facing field names to Odoo model field names
const WEBSITE_TO_ODOO_FIELD = {
  sku: "x_studio_sku",
  name: "name",
  description: "description_purchase",
  rating: "x_studio_product_rating",
  price: "list_price",
  stock_quantity: "x_studio_stock_quantity",
  image_1920: "image_1920",
  image_1024: "image_1024",
  image_512: "image_512",
  image_256: "image_256",
  image_128: "image_128",
  is_custom: "x_studio_is_custom",
  category: "x_studio_selection_field_75k_1jcm2f0o4",
  fiber_count: "x_studio_fiber_count",
  cable_type: "x_studio_cable_type",
  jacket_color: "x_studio_jacket_color",
  length_available: "x_studio_length_available",
};
const IMAGE_FIELDS = new Set(["image_1920", "image_1024", "image_512", "image_256", "image_128"]);

function shortenToSingleLine(value, maxLen = 120) {
  if (typeof value !== "string") return value;
  const singleLine = value.replace(/\s+/g, " ").trim();
  if (singleLine.length <= maxLen) return singleLine;
  return `${singleLine.slice(0, Math.max(0, maxLen - 3))}...`;
}

function stripDataUrl(value) {
  if (typeof value !== "string") return value;
  const match = value.trim().match(/^data:.*;base64,(.*)$/i);
  return match ? match[1] : value;
}

async function toBase64IfUrl(value, fieldLabel = "image") {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  const lower = trimmed.toLowerCase();
  if (!lower.startsWith("http://") && !lower.startsWith("https://")) return value;

  const res = await fetch(trimmed);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${fieldLabel} from URL (${res.status} ${res.statusText})`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  return buffer.toString("base64");
}

async function normalizeImageValue(value, fieldLabel) {
  if (value === undefined || value === null) return value;
  const stripped = stripDataUrl(value);
  return await toBase64IfUrl(stripped, fieldLabel);
}

async function buildProductData(input, availableFields, { includeDefaults = false } = {}) {
  const data = {};
  const imageInputs = {};

  for (const [inputKey, odooField] of Object.entries(WEBSITE_TO_ODOO_FIELD)) {
    const value = input[inputKey];
    if (value === undefined || value === null) continue;
    if (!availableFields.includes(odooField)) continue;
    if (IMAGE_FIELDS.has(odooField)) {
      imageInputs[odooField] = value;
      continue;
    }
    data[odooField] = value;
  }

  const preferredImage =
    imageInputs.image_1920 ??
    imageInputs.image_1024 ??
    imageInputs.image_512 ??
    imageInputs.image_256 ??
    imageInputs.image_128;
  if (preferredImage !== undefined && availableFields.includes("image_1920")) {
    data.image_1920 = await normalizeImageValue(preferredImage, "image_1920");
  }

  if (includeDefaults) {
    data.type = data.type || "consu";
    data.website_published = data.website_published ?? true;
  }

  return data;
}

async function fetchProductFieldNames(uid) {
  const fields = await callOdoo({
    jsonrpc: "2.0",
    method: "call",
    params: {
      service: "object",
      method: "execute_kw",
      args: [DB, uid, PASSWORD, "product.template", "fields_get", []],
    },
    id: 11,
  });

  return fields?.result ? Object.keys(fields.result) : [];
}

export async function getProductFields(req, res) {
  try {
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
          "product.template",
          "fields_get",
          [],
          { attributes: ["string", "type", "required"] },
        ],
      },
      id: 2,
    });

    res.json(fields.result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createProduct(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Odoo authentication failed" });

    const input = req.body;

    const availableFields = await fetchProductFieldNames(uid);
    const data = await buildProductData(input, availableFields, { includeDefaults: true });

    const created = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "product.template", "create", [data]],
      },
      id: Date.now(),
    });

    if (created.error) {
      return res.status(400).json({ error: created.error });
    }

    res.json({ success: true, product_id: created.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateProduct(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Odoo authentication failed" });

    const productId = parseInt(req.params.id, 10);
    if (!Number.isFinite(productId)) {
      return res.status(400).json({ error: "Invalid product id" });
    }

    const input = req.body;
    const availableFields = await fetchProductFieldNames(uid);
    const data = await buildProductData(input, availableFields);

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    const updated = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "product.template", "write", [[productId], data]],
      },
      id: Date.now(),
    });

    if (updated.error) {
      return res.status(400).json({ error: updated.error });
    }

    res.json({ success: true, updated: updated.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const productId = parseInt(req.params.id, 10);

    const result = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "product.template", "unlink", [[productId]]],
      },
      id: 4,
    });

    res.json({ deleted: result.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getProductTypeValues(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Auth failed" });

    const fields = await callOdoo({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [DB, uid, PASSWORD, "product.template", "fields_get", ["type"]],
      },
      id: 99,
    });

    res.json(fields.result.type.selection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function listProducts(req, res) {
  try {
    const uid = await authOdoo();
    if (!uid) return res.status(401).json({ error: "Odoo authentication failed" });

    const availableFields = await fetchProductFieldNames(uid);
    const fields = availableFields.length > 0 ? availableFields : ["name"];

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
          "product.template",
          "search_read",
          [ [] ],
          { fields, limit: 2000 },
        ],
      },
      id: Date.now(),
    });

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    const products = response.result.map((product) => {
      const normalized = { ...product };
      for (const [key, value] of Object.entries(normalized)) {
        if (key.startsWith("image_")) {
          normalized[key] = shortenToSingleLine(value);
        }
      }
      return normalized;
    });

    res.json({
      success: true,
      count: response.result.length,
      products,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
