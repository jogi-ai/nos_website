import { NextResponse } from "next/server"
import { google } from "googleapis"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")
const courseDataNameWise = {
    "White Water Kayaking Foundation Course" : {
        listId:  "f999ef6e-6be4-4d13-b0d6-a0dc8b9dfab7",
        sheetId: "1Gs37hkZyCOQ9EOiXeZoI7h_CW3VeyMuwiAHxGbP38XI"  
    },
}
export async function POST(request: Request) {
  try {
    const data = await request.json() as {
      fullName: string,
      email: string,
      phone: string,
      gender: string,
      age: number,
      preferredCourseDate: string,
      courseName: keyof typeof courseDataNameWise,
      message?: string,
    }
    
    //trim all fields
    for (const key in data) {
      const typedKey = key as keyof typeof data;
      if (typeof data[typedKey] === "string") {
        (data[typedKey] as string) = (data[typedKey] as string).trim();
      }
    }
    const errors: Record<string, string> = {}
    console.log("received data",data)
    // Validate fullName
    if (!data.fullName || data.fullName.length < 2 || data.fullName.length > 200) {
      errors.fullName = "Full name must be between 2 and 200 characters."
    }

    // Validate email
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!data.email || !emailPattern.test(data.email)) {
      errors.email = "Invalid email format."
    }

    // Validate phone
    const phonePattern = /^[0-9+\-\s()]{10,15}$/
    if (!data.phone || !phonePattern.test(data.phone)) {
      errors.phone = "Phone number must be between 10 and 15 characters and valid."
    }

    // Validate age
    if (!data.age || data.age < 15 || data.age > 100) {
      errors.age = "Age cannot be less than 15 or greater than 100."
    }

    // Validate preferredCourseDate
    const validCourseDates = ["may-22-may-25", "may-15-may-18", "may-29-june-1"]
    if (!data.preferredCourseDate || !validCourseDates.includes(data.preferredCourseDate)) {
      errors.preferredCourseDate = "Preferred course date is invalid."
    }

    const validGenders = ["male", "female", "other"]
    if (!data.gender || !validGenders.includes(data.gender)) {
      errors.preferredCourseDate = "Gender date is invalid."
    }

    // Validate courseName
    if (!data.courseName || !(data.courseName in courseDataNameWise)) {
      errors.courseName = "Course name is invalid."
    }

    // Validate message
    if (data.message && data.message.length > 1000) {
      errors.message = "Message cannot exceed 1000 characters."
    }

    // If there are errors, return a 400 response
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 400 })
    }

    // 1. Add to SendGrid list
    try {
      console.log("sending to sendgrid1")
      addToSendGridList(data)
    } catch (error) {
      console.error("SendGrid list error:", error)
    }

    // 2. Send email to school
    try {
      sendEmailToSchool(data)
    } catch (error) {
      console.error("Email to school error:", error)
    }

    // 3. Add to Google Sheet
    try {
      addToGoogleSheet(data)
    } catch (error) {
      console.error("Google Sheet error:", error)
    }

    // 4. Send thank you email to registrant
    try {
      sendThankYouEmail(data)
    } catch (error) {
      console.error("Thank you email error:", error)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}

// Add contact to SendGrid list
async function addToSendGridList(data: {
  fullName: string,
  email: string,
  phone: string,
  gender: string,
  age: number,
  preferredCourseDate: string,
  courseName: keyof typeof courseDataNameWise,
  message?: string,
}) {
  const { fullName, email, phone, age, gender, courseName }: { fullName: string; email: string; phone: string; age: number; gender: string; courseName: keyof typeof courseDataNameWise } = data

  const [firstName, ...lastNameParts] = fullName.split(" ")
  const lastName = lastNameParts.join(" ")
  const dataToSend: {
    email: string;
    first_name: string;
    last_name?: string;
    custom_fields: {
      phone: string;
      age: number;
      gender: string;
    };
  } = {
    email,
    first_name: firstName,
    custom_fields: {
      phone,
      age,
      gender
    },
  }
  if(lastName) {
    dataToSend.last_name = lastName
  }
  console.log("sending to sendgrid2")
  const reqBody = {
    list_ids: [courseDataNameWise[courseName].listId],
    contacts: [dataToSend],
  }
  console.log("SendGrid request body:", reqBody)
  const response = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  })
  console.log("SendGrid response status:", response.status)
  if (response.status !=  202) {
    console.log("SendGrid response error:", response.statusText)
    console.log("SendGrid response body:", await response.json())
    throw new Error(`SendGrid API error: ${response.statusText} (${response.status}) ${JSON.stringify(await response.json())}`)
  }
  const responseData = await response.json()
  console.log("SendGrid response:", responseData)
  return responseData
}

// Send email to school
async function sendEmailToSchool(data: {
  fullName: string,
  email: string,
  phone: string,
  gender: string,
  age: number,
  preferredCourseDate: string,
  courseName: keyof typeof courseDataNameWise,
  message?: string,
}) {
  const { fullName, email, phone, age, gender, preferredCourseDate, courseName, message } = data

  const msg = {
    to: "info@nationaloutdoorschool.com",
    from: {
      email: "noreply@nationaloutdoorschool.com",
      name: "Website Enquiry",
    },
    subject: `New Course Registration: ${courseName}`,
    text: `
      New registration for ${courseName}
      
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Age: ${age}
      Gender: ${gender}
      Preferred Course Date: ${preferredCourseDate}
      Message: ${message || "No message provided"}
      
    `,
    html: `
      <h2>New registration for ${courseName}</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Preferred Course Date:</strong> ${preferredCourseDate}</p>
      <p><strong>Message:</strong> ${message || "No message provided"}</p>
    `,
  }
  await sgMail.send(msg)
}

// Add to Google Sheet
async function addToGoogleSheet(data: {
  fullName: string,
  email: string,
  phone: string,
  gender: string,
  age: number,
  preferredCourseDate: string,
  courseName: keyof typeof courseDataNameWise,
  message?: string,
}) {
  const { fullName, email, phone, age, gender, preferredCourseDate, courseName, message }: { fullName: string; email: string; phone: string; age: number; gender: string; preferredCourseDate: string; courseName: keyof typeof courseDataNameWise; message?: string } = data

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
    spreadsheetId: courseDataNameWise[courseName].sheetId,
    range: "Leads!A:H", // Adjust based on your sheet 
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(), // Timestamp
          fullName, 
          email, 
          phone, 
          age, 
          gender, 
          preferredCourseDate, 
          courseName, 
          message
        ],
      ],
    },
  })
}

// Send thank you email to registrant
async function sendThankYouEmail(data: {
  fullName: string,
  email: string,
  phone: string,
  gender: string,
  age: number,
  preferredCourseDate: string,
  courseName: keyof typeof courseDataNameWise,
  message?: string,
}) {
  const { fullName, email, courseName } = data
  
  const msg = {
    to: email,
    from: {
      name: "National Outdoor School",
      email: "noreply@nationaloutdoorschool.com"
    },
    subject: `Thank You for Registering for ${courseName}`,
    text: `
      Dear ${fullName},
      
      Thank you for enquiring about the ${courseName}. We're excited to have you join us!
      
      Here's what to expect next:
      
      1. You'll receive a call from one of our representatives to confirm your eligiblity for the course.
      2. You will be sent a registration form and payment link. Submitting the form and payment will confirm your spot on the course.
      
      If you have any questions before then, please don't hesitate to contact us at info@nationaloutdoorschool.com.
      
      We look forward to seeing you on the water!
      
      Best regards,
      The National Outdoor School Team
    `,
    html: `
      <p>Dear ${fullName},</p>
      
      <p>Thank you for registering for our <strong>${courseName}</strong>. We're excited to have you join us!</p>
      
      <p>Here's what to expect next:</p>
      
      <ol>
        <li>You'll receive a call from one of our representatives to confirm your eligiblity for the course.</li>
        <li>You will be sent a registration form and payment link. Submitting the form and payment will confirm your spot on the course.</li>
      </ol>
      
      <p>If you have any questions before then, please don't hesitate to contact us at info@nationaloutdoorschool.com.</p>

      <p>We look forward to seeing you on the water!</p>
      
      <p>Best regards,<br>
      The National Outdoor School Team</p>
    `
  }

  await sgMail.send(msg)
}
