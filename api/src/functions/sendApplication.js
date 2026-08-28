const { app } = require("@azure/functions");
const {
  isHoneypotFilled,
  validateApplicationFields,
  decodeResumeAttachment,
  sendApplicationEmail,
} = require("../shared/email-handler.cjs");

app.http("sendApplication", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "send-application",
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

    const validation = validateApplicationFields(fields);
    if (!validation.ok) {
      return { status: 400, jsonBody: { ok: false, error: validation.error } };
    }

    const decoded = decodeResumeAttachment(fields);
    if (!decoded.ok) {
      return { status: 400, jsonBody: { ok: false, error: decoded.error } };
    }

    try {
      await sendApplicationEmail(fields, decoded.attachment);
      return { status: 200, jsonBody: { ok: true } };
    } catch (err) {
      context.error("Failed to send application email:", err);
      return { status: 500, jsonBody: { ok: false, error: "Failed to send email" } };
    }
  },
});
