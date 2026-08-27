const { app } = require("@azure/functions");
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

let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error(
      "Missing GMAIL_USER or GMAIL_APP_PASSWORD application settings",
    );
  }

  cachedTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
  return cachedTransporter;
}

app.http("sendEmail", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "send-email",
  handler: async (request, context) => {
    let body;
    try {
      body = await request.json();
    } catch {
      return { status: 400, jsonBody: { ok: false, error: "Invalid JSON body" } };
    }

    const {
      full_name,
      designation,
      business_email,
      country,
      mobile_number,
      company_name,
      company_size,
      // honeypot — real users never fill this in
      company_website,
    } = body ?? {};

    if (company_website) {
      // Silently drop bot submissions so scrapers get no signal.
      return { status: 200, jsonBody: { ok: true } };
    }

    if (!full_name || !business_email || !mobile_number || !company_name) {
      return {
        status: 400,
        jsonBody: { ok: false, error: "Missing required fields" },
      };
    }

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

    try {
      const transporter = getTransporter();
      const gmailUser = process.env.GMAIL_USER;
      const notifyTo = process.env.NOTIFY_TO || gmailUser;

      await transporter.sendMail({
        from: `"Cognexa Website" <${gmailUser}>`,
        to: notifyTo,
        replyTo: business_email,
        subject: `New demo request — ${company_name}`,
        html,
      });

      return { status: 200, jsonBody: { ok: true } };
    } catch (err) {
      context.error("Failed to send email:", err);
      return { status: 500, jsonBody: { ok: false, error: "Failed to send email" } };
    }
  },
});
