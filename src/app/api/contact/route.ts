// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    console.log("📨 New Contact Message Received:")
    console.log("Full Name:", body.name)
    console.log("Email:", body.email)
    console.log("Subject:", body.subject)
    console.log("Department:", body.department)
    console.log("Message:", body.message)

    return NextResponse.json({ success: true, message: "Form data received" }, { status: 200 })
  } catch (error) {
    console.error("❌ Error parsing form data:", error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
