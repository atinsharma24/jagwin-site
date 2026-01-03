type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function renderContactEmailHtml(payload: ContactPayload) {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const phone = escapeHtml(payload.phone);
  const service = escapeHtml(payload.service);
  const message = escapeHtml(payload.message).replaceAll("\n", "<br/>");

  // Keep styling simple + brand-consistent (primary: #F07C00).
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Contact Inquiry</title>
  </head>
  <body style="margin:0;padding:0;background:#111827;color:#0f172a;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#111827;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:18px 20px;background:#0f172a;">
                <div style="font-size:14px;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;">Jagwin Enterprises LLP</div>
                <div style="margin-top:6px;font-size:22px;font-weight:700;color:#ffffff;">New Contact Inquiry</div>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 20px;border-top:4px solid #F07C00;">
                <div style="font-size:14px;color:#475569;">A new enquiry was submitted from the website contact form.</div>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;border-collapse:separate;border-spacing:0 10px;">
                  <tr>
                    <td style="width:140px;color:#64748b;font-size:13px;">Name</td>
                    <td style="color:#0f172a;font-size:14px;font-weight:600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="width:140px;color:#64748b;font-size:13px;">Email</td>
                    <td style="color:#0f172a;font-size:14px;font-weight:600;"><a href="mailto:${email}" style="color:#0f172a;text-decoration:none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="width:140px;color:#64748b;font-size:13px;">Phone</td>
                    <td style="color:#0f172a;font-size:14px;font-weight:600;"><a href="tel:${phone}" style="color:#0f172a;text-decoration:none;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="width:140px;color:#64748b;font-size:13px;">Service</td>
                    <td style="color:#0f172a;font-size:14px;font-weight:600;">${service}</td>
                  </tr>
                </table>

                <div style="margin-top:10px;padding:14px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
                  <div style="font-size:13px;color:#64748b;">Message</div>
                  <div style="margin-top:8px;font-size:14px;line-height:1.55;color:#0f172a;">${message}</div>
                </div>

                <div style="margin-top:16px;font-size:12px;color:#94a3b8;">
                  Reply directly to this email to respond to the customer.
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;background:#0b1220;color:#94a3b8;font-size:12px;">
                © ${new Date().getFullYear()} Jagwin Enterprises LLP
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderContactEmailText(payload: ContactPayload) {
  return [
    "New Contact Inquiry — Jagwin Enterprises LLP",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Service: ${payload.service}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}
