const {
  isHoneypotFilled,
  validateApplicationFields,
  decodeResumeAttachment,
  sendApplicationEmail,
} = require("../../api/src/shared/email-handler.cjs");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ ok: false, error: "Method not allowed" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: "Invalid JSON body" }) };
  }

  const fields = body ?? {};

  if (isHoneypotFilled(fields)) {
    // Silently drop bot submissions so scrapers get no signal.
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }

  const validation = validateApplicationFields(fields);
  if (!validation.ok) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: validation.error }) };
  }

  const decoded = decodeResumeAttachment(fields);
  if (!decoded.ok) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: decoded.error }) };
  }

  try {
    await sendApplicationEmail(fields, decoded.attachment);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Failed to send application email:", err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: "Failed to send email" }) };
  }
};
