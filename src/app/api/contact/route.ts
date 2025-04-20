import { NextResponse } from "next/server"
import { google } from "googleapis"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")
const spreadsheetId = "1fNPU_clkIpoioeKgJs-rmp49OSlzFksJFLJROnP4OEg"
const listId = "3c4f0022-71dc-44c9-b18c-419ead68836a"
export async function POST(request: Request) {
  try {
    const data = await request.json() as {
      name: string,
      email: string,
      phone: string,
      message: string
    }
    
    //trim all fields
    for (const key in data) {
      const typedKey = key as keyof typeof data;
      if (typeof data[typedKey] === "string") {
        (data[typedKey] as string) = (data[typedKey] as string).trim();
      }
    }
    const { name, email, phone, message } = data
    //Name cannot be less than 2 characters and greater than 200 characters
    if (!name || name.length < 2 || name.length > 200) {
      return NextResponse.json({ error: "Name must be between 2 and 200 characters" }, { status: 400 })
    }
    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate phone format if provided
    if (phone && !/^[0-9+\-\s()]{10,15}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 })
    }

    //Validate message - should be atleast 10 characters and not greater than 1000 characters
    if (!message || message.length < 10 || message.length > 1000) {
      return NextResponse.json({ error: "Message must be between 10 and 1000 characters" }, { status: 400 })
    }

    // 1. Send email to school
    try {
      sendEmailToSchool(data)
    } catch (error) {
      console.error("Email to school error:", error)
    }

    // 2. Add to Google Sheet
    try {
      addToGoogleSheet(data)
    } catch (error) {
      console.error("Google Sheet error:", error)
    }

    // 3. Add to SendGrid list
    try {
      addToSendGridList(data)
    } catch (error) {
      console.error("SendGrid list error:", error)
    }

    // 4. Send thank you email to registrant
    try {
      sendThankYouEmail(data)
    } catch (error) {
      console.error("Thank you email error:", error)
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}

// Send email to school
async function sendEmailToSchool(data:{
  name: string
  email: string
  phone?: string
  message: string
}) {
  const { name, email, phone, message } = data

  const msg = {
    to: "info@nationaloutdoorschool.com",
    from: {
      email: "noreply@nationaloutdoorschool.com",
      name: "Website Enquiry - Contact Form",
    },
    subject: `New Contact Form Submission from ${name}`,
    text: `
      New contact form submission
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      
      Message:
      ${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  }

  await sgMail.send(msg)
}

// Add to Google Sheet
async function addToGoogleSheet(data: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  const { name, email, phone, message } = data

  // Authenticate with Google Sheets API
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const sheets = google.sheets({ version: "v4", auth })

  // Append data to the sheet
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Leads!A:E", // Adjust based on your sheet
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(), // Timestamp
          name,
          email,
          phone || "Not provided",
          message,
        ],
      ],
    },
  })
}

// Add contact to SendGrid list
async function addToSendGridList(data: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  const { name, email, phone } = data

  const [firstName, ...lastNameParts] = name.split(" ")
  const lastName = lastNameParts.join(" ")
  const dataToSend: { email: string; first_name: string; last_name?: string; custom_fields: { phone?: string } } = {
    email,
    first_name: firstName,
    custom_fields: {
      
    }
  }
  if (lastName) {
    dataToSend.last_name = lastName
  }
  if (phone) {
    dataToSend.custom_fields.phone = phone
  }
  const response = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      list_ids: [listId], // Using the newsletter list for contacts
      contacts: [
        dataToSend,
      ],
    }),
  })

  if (!response.ok) {
    throw new Error(`SendGrid API error: ${response.statusText}`)
  }

  return await response.json()
}

// Send thank you email to registrant
async function sendThankYouEmail(data: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  const { name, email, message } = data
  
  const msg = {
    to: email,
    from: {
      name: "National Outdoor School",
      email: "noreply@nationaloutdoorschool.com"
    },
    subject: `Received your enquiry`,
    text: `
      Dear ${name},
      
      We have received your enquiry and will get back to you shortly.

      Your message:
      -----
      "${message}"
      -----
      
      Best regards,
      The National Outdoor School Team
    `,
    html: `
      <p>Dear ${name},</p>
      
      <p>We have received your enquiry and will get back to you shortly.</p>
      
      <p>Your message:</p>
      <p>-----</p>
      <p>${message}</p>
      <p>-----</p>
      
      <p>Best regards,<br>
      The National Outdoor School Team</p>
    `
  }

  await sgMail.send(msg)
}