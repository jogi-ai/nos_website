import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email } = data

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Add to SendGrid list
    try {
      await addToSendGridList(email)
    } catch (error) {
      console.error("SendGrid list error:", error)
      return NextResponse.json({ error: "Failed to add to newsletter list" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }
}

// Add contact to SendGrid list
async function addToSendGridList(email: string) {
  const response = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      list_ids: [process.env.SENDGRID_NEWSLETTER_LIST_ID],
      contacts: [
        {
          email,
        },
      ],
    }),
  })

  if (!response.ok) {
    throw new Error(`SendGrid API error: ${response.statusText}`)
  }

  return await response.json()
}
