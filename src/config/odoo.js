import "dotenv/config";

const required = ["ODOO_URL", "ODOO_DB", "ODOO_USER", "ODOO_PASSWORD"];
const missing = required.filter((key) => !process.env[key]);
if (missing.length) {
  throw new Error(
    `Missing required environment variables: ${missing.join(
      ", "
    )}. Check your .env or deployment environment.`
  );
}

export const ODOO_URL = process.env.ODOO_URL;
export const DB = process.env.ODOO_DB;
export const USER = process.env.ODOO_USER;
export const PASSWORD = process.env.ODOO_PASSWORD;
