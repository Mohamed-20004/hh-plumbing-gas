import { NextResponse } from "next/server"
import { Resend } from "resend"

const TO_EMAIL = process.env.QUOTE_TO_EMAIL || "office@hhplumbingandgas.com"
const FROM_EMAIL =
  process.env.QUOTE_FROM_EMAIL || "HH Plumbing & Gas <onboarding@resend.dev>"

type QuotePayload = {
  name?: string
  email?: string
  phone?: string
  address?: string
  postcode?: string
  serviceType?: string
  type?: string
  brand?: string
  model?: string
  startingPrice?: number
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function buildHtml(d: QuotePayload) {
  const row = (label: string, value: unknown) =>
    value
      ? `<tr><td style="padding:6px 12px;color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:.06em;width:140px">${escapeHtml(label)}</td><td style="padding:6px 12px;color:#0f172a;font-weight:600">${escapeHtml(value)}</td></tr>`
      : ""

  return `<!doctype html>
<html><body style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f8fafc;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">
    <div style="background:#0a0a0a;color:#fff;padding:20px 24px">
      <p style="margin:0;font-size:12px;text-transform:uppercase;letter-spacing:.18em;color:#FFD60A">New quote request</p>
      <h1 style="margin:6px 0 0;font-size:20px">HH Plumbing &amp; Gas</h1>
    </div>
    <table style="width:100%;border-collapse:collapse">
      ${row("Name", d.name)}
      ${row("Email", d.email)}
      ${row("Phone", d.phone)}
      ${row("Postcode", d.postcode)}
      ${row("Address", d.address)}
      <tr><td colspan="2" style="padding:8px 12px;border-top:1px solid #e2e8f0"></td></tr>
      ${row("Service", d.serviceType)}
      ${row("Type", d.type)}
      ${row("Brand", d.brand)}
      ${row("Model", d.model)}
      ${row("Starting from", d.startingPrice ? `£${d.startingPrice.toLocaleString()}` : "")}
    </table>
    <div style="padding:16px 24px;background:#f8fafc;font-size:12px;color:#64748b">
      Submitted via the HH Plumbing &amp; Gas website at ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}.
    </div>
  </div>
</body></html>`
}

function buildText(d: QuotePayload) {
  return [
    `New quote request — HH Plumbing & Gas`,
    ``,
    `Name:        ${d.name ?? ""}`,
    `Email:       ${d.email ?? ""}`,
    `Phone:       ${d.phone ?? ""}`,
    `Postcode:    ${d.postcode ?? ""}`,
    `Address:     ${d.address ?? ""}`,
    ``,
    `Service:     ${d.serviceType ?? ""}`,
    `Type:        ${d.type ?? ""}`,
    `Brand:       ${d.brand ?? ""}`,
    `Model:       ${d.model ?? ""}`,
    `Starting from: ${d.startingPrice ? `£${d.startingPrice.toLocaleString()}` : ""}`,
  ].join("\n")
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    )
  }

  let data: QuotePayload
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  if (!data.name || !data.email || !data.phone) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    )
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New quote request — ${data.name}${data.serviceType ? ` (${data.serviceType})` : ""}`,
      html: buildHtml(data),
      text: buildText(data),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Quote send failed:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
