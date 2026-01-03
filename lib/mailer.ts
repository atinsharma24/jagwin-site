import nodemailer from "nodemailer";

export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
};

function getEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export function getSmtpConfig(): SmtpConfig {
  const host = getEnv("SMTP_HOST");
  const port = Number(getEnv("SMTP_PORT"));
  const secure = (process.env.SMTP_SECURE ?? "false") === "true";
  const user = getEnv("SMTP_USER");
  const pass = getEnv("SMTP_PASS");

  if (!Number.isFinite(port)) throw new Error("SMTP_PORT must be a number");

  return { host, port, secure, user, pass };
}

export function getMailer() {
  const cfg = getSmtpConfig();
  return nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: {
      user: cfg.user,
      pass: cfg.pass,
    },
  });
}
