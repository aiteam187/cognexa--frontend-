// Shared by all three contact-form backends (Azure Functions, Netlify
// Functions, and the local test server) — see the sibling handler files
// for how each platform wires this in.
//
// Lives inside api/ (not a repo-root shared/ folder) because Azure Static
// Web Apps only deploys the api_location folder for the Functions app —
// anything outside it wouldn't exist at runtime. Netlify and the local
// server reach in via a relative path since they build from the full repo.
//
// Requires nodemailer to be resolvable from here at runtime. It's declared
// as a dependency in api/package.json (for Azure's own `npm install`) and
// currently also resolves for Netlify's function bundler via nodemailer
// being hoisted from the root package.json's dependencies — if that root
// dependency is ever removed, add nodemailer to netlify/functions/package.json
// directly so Netlify's build can still resolve it.
const nodemailer = require("nodemailer");

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

const REQUIRED_FIELDS = ["full_name", "business_email", "mobile_number", "company_name"];

function isHoneypotFilled(fields) {
  return Boolean(fields?.company_website);
}

function validateFields(fields) {
  const missing = REQUIRED_FIELDS.some((key) => !fields?.[key]);
  return missing ? { ok: false, error: "Missing required fields" } : { ok: true };
}

function buildDemoRequestEmail(fields) {
  const {
    full_name,
    designation,
    business_email,
    country,
    mobile_number,
    company_name,
    company_size,
  } = fields;

  const rows = {
    "Full name": full_name,
    Designation: designation,
    "Business email": business_email,
    Country: country,
    Mobile: mobile_number,
    Company: company_name,
    "Company size": company_size,
  };

  const html = `
    <h2>New demo request from cognexa.co.in</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${Object.entries(rows)
        .filter(([, v]) => v)
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  return {
    subject: `New demo request — ${company_name}`,
    html,
  };
}

let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables");
  }

  cachedTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
  return cachedTransporter;
}

async function sendDemoRequestEmail(fields) {
  const transporter = getTransporter();
  const gmailUser = process.env.GMAIL_USER;
  const notifyTo = process.env.NOTIFY_TO || gmailUser;
  const { subject, html } = buildDemoRequestEmail(fields);

  await transporter.sendMail({
    from: `"Cognexa Website" <${gmailUser}>`,
    to: notifyTo,
    replyTo: fields.business_email,
    subject,
    html,
  });
}

module.exports = {
  escapeHtml,
  isHoneypotFilled,
  validateFields,
  buildDemoRequestEmail,
  getTransporter,
  sendDemoRequestEmail,
};
