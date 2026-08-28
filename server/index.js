import "dotenv/config";
import express from "express";
import cors from "cors";
import {
  getTransporter,
  isHoneypotFilled,
  validateFields,
  sendDemoRequestEmail,
} from "../api/src/shared/email-handler.cjs";

const PORT = process.env.PORT || 5050;

try {
  getTransporter();
} catch {
  console.error(
    "Missing GMAIL_USER or GMAIL_APP_PASSWORD in server/.env — see server/.env.example",
  );
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const fields = req.body ?? {};

  if (isHoneypotFilled(fields)) {
    // Silently pretend success so bots get no signal.
    return res.status(200).json({ ok: true });
  }

  const validation = validateFields(fields);
  if (!validation.ok) {
    return res.status(400).json({ ok: false, error: validation.error });
  }

  try {
    await sendDemoRequestEmail(fields);
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
