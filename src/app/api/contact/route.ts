// /app/api/contact/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, subject, message, department } = body

  // Validate fields
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "hotmail", "yahoo", etc. or use host + port + secure
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO, // your receiving email
      subject: `Contact Form - ${subject}`,
      html: `
        <h3>New message from ${name} (${email})</h3>
        <p><strong>Department:</strong> ${department || "N/A"}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Email send error:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
