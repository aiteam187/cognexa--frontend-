import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const PORT = process.env.PORT || 5050;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const NOTIFY_TO = process.env.NOTIFY_TO || GMAIL_USER;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.error(
    "Missing GMAIL_USER or GMAIL_APP_PASSWORD in server/.env — see server/.env.example",
  );
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
});

const app = express();
app.use(cors());
app.use(express.json());

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

app.post("/api/send-email", async (req, res) => {
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
  } = req.body ?? {};

  if (company_website) {
    // Silently pretend success so bots get no signal.
    return res.status(200).json({ ok: true });
  }

  if (!full_name || !business_email || !mobile_number || !company_name) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
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
    await transporter.sendMail({
      from: `"Cognexa Website" <${GMAIL_USER}>`,
      to: NOTIFY_TO,
      replyTo: business_email,
      subject: `New demo request — ${company_name}`,
      html,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Test email server listening on http://localhost:${PORT}`);
});
