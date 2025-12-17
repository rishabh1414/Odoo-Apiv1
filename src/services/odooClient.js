import { ODOO_URL, DB, USER, PASSWORD } from "../config/odoo.js";

export async function callOdoo(payload) {
  const res = await fetch(ODOO_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const contentType = res.headers.get("content-type") || "";
  const bodyText = await res.text();
  const preview = bodyText.slice(0, 500);

  if (!res.ok) {
    throw new Error(
      `Odoo request failed with status ${res.status} ${res.statusText}: ${preview}`
    );
  }

  if (!contentType.includes("application/json")) {
    throw new Error(
      `Odoo responded with non-JSON content (${contentType || "unknown"}): ${preview}`
    );
  }

  try {
    return JSON.parse(bodyText);
  } catch (err) {
    throw new Error(
      `Unable to parse Odoo JSON response: ${err.message}. Response: ${preview}`
    );
  }
}

export async function authOdoo() {
  const auth = await callOdoo({
    jsonrpc: "2.0",
    method: "call",
    params: {
      service: "common",
      method: "authenticate",
      args: [DB, USER, PASSWORD, {}],
    },
    id: 1,
  });

  return auth.result;
}

export { DB, PASSWORD };
