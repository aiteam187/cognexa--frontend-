const { app } = require("@azure/functions");
const {
  isHoneypotFilled,
  validateFields,
  sendDemoRequestEmail,
} = require("../shared/email-handler.cjs");

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

    const fields = body ?? {};

    if (isHoneypotFilled(fields)) {
      // Silently drop bot submissions so scrapers get no signal.
      return { status: 200, jsonBody: { ok: true } };
    }

    const validation = validateFields(fields);
    if (!validation.ok) {
      return { status: 400, jsonBody: { ok: false, error: validation.error } };
    }

    try {
      await sendDemoRequestEmail(fields);
      return { status: 200, jsonBody: { ok: true } };
    } catch (err) {
      context.error("Failed to send email:", err);
      return { status: 500, jsonBody: { ok: false, error: "Failed to send email" } };
    }
  },
});
