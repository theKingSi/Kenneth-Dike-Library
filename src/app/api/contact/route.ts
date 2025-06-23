import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()
  const { name, email, subject, message, department } = data

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 })
  }

  try {
    const response = await resend.emails.send({
      from: "Library Contact <no-reply@yourdomain.com>", // you must verify this domain on Resend
      to: "solomonndunewe@gmail.com", // your personal/work email
      subject: `New message from ${name}: ${subject}`,
      html: `
        <p><strong>Department:</strong> ${department || "General Inquiry"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json({ success: true, id: response.id })
  } catch (error: any) {
    console.error("Resend Error:", error)
    return NextResponse.json({ success: false, error: error?.message || "Failed to send email" }, { status: 500 })
  }
}
