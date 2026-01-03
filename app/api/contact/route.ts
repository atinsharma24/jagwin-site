import { NextResponse } from "next/server";
import { getMailer } from "@/lib/mailer";
import {
  renderContactEmailHtml,
  renderContactEmailText,
} from "@/lib/contactEmailTemplate";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function validate(payload: any): ContactPayload {
  const name = payload?.name;
  const email = payload?.email;
  const phone = payload?.phone;
  const service = payload?.service;
  const message = payload?.message;

  if (![name, email, phone, service, message].every(isNonEmptyString)) {
    throw new Error("Missing required fields");
  }

  const emailStr = String(email).trim();
  // Basic email sanity check (avoid over-rejecting)
  if (!emailStr.includes("@") || emailStr.length > 200) {
    throw new Error("Invalid email");
  }

  return {
    name: String(name).trim().slice(0, 120),
    email: emailStr.slice(0, 200),
    phone: String(phone).trim().slice(0, 40),
    service: String(service).trim().slice(0, 120),
    message: String(message).trim().slice(0, 4000),
  };
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const payload = validate(json);

    const to = process.env.MAIL_TO ?? "info@jagwin.in";
    const from = process.env.MAIL_FROM ?? "Jagwin Website <info@jagwin.in>";

    const transporter = getMailer();

    await transporter.sendMail({
      to,
      from,
      subject: `New website enquiry: ${payload.service}`,
      replyTo: payload.email,
      text: renderContactEmailText(payload),
      html: renderContactEmailHtml(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = typeof err?.message === "string" ? err.message : "Unknown error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 400 }
    );
  }
}
