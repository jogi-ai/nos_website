"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2 } from "lucide-react"
// import { format } from "date-fns"
// import { toast } from "@/components/ui/use-toast"

interface CourseRegistrationFormProps {
  courseName: string
}
type FormData = {
  fullName: string
  email: string
  phone: string
  age: string
  gender: string
  preferredCourseDate: string
  message: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}
const initFormData: FormData = {
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "male",
    preferredCourseDate: "may-22-may-25",
    message:""
}
export default function CourseRegistrationForm({ courseName }: CourseRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState<FormData>(initFormData)

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Validation rules
  const validateField = (name: keyof FormData, value: FormData[keyof FormData]): string => {
    switch (name) {
      case "fullName":
        return !value.trim()
          ? "Full name is required"
          : value.trim().length < 2
            ? "Name must be at least 2 characters"
            : value.trim().length > 200 
            ? "Name cannot be greater than 200 characters"
            : ""
      case "email":
        return !value.trim()
          ? "Email is required"
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || value.length > 350
            ? "Invalid email address"
            : ""
      case "phone":
        return !value.trim()
          ? "Phone number is required"
          : !/^[0-9+\-\s()]{10,15}$/.test(value)
            ? "Invalid phone number"
            : ""
      case "age":
        const ageNum = Number.parseInt(value)
        return !value.trim()
          ? "Age is required"
          : isNaN(ageNum)
            ? "Invalid age"
            : ageNum < 15
              ? "You must be at least 15 years old"
              : ageNum > 100
                ? "Age cannot be greater than 100"
                : ""
      case "message":
        const trimmedMsg: string = value.trim()
        return trimmedMsg.length > 1000
            ? "Message cannot be greater than 1000 characters"
                : ""
      default:
        return ""
    }
  }

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    // Validate each field
    Object.entries(formData).forEach(([key, value]) => {
      const fieldName = key as keyof FormData
      const error = validateField(fieldName, value)
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  // Handle field change
  const handleChange = (name: keyof FormData, value: FormData[keyof FormData]) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // If field has been touched, validate on change
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  // Handle field blur
  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, formData[name])
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key] = true
        return acc
      },
      {} as Record<string, boolean>,
    )
    setTouched(allTouched)

    // Validate all fields
    const isValid = validateForm()

    if (!isValid) {
      // toast({
      //   title: "Form Validation Error",
      //   description: "Please correct the errors in the form.",
      //   variant: "destructive",
      // })
      return
    }

    setIsSubmitting(true)
    console.log("Submitting form data:", formData)
    try {
      // Submit form data to API
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiries/course`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          courseName,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit registration")
      }

      // Show success state
      setIsSubmitted(true)
      //Smooth scroll to .course-registration-form
      const formElement = document.querySelector(".course-registration-form")
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" })
      }
      // toast({
      //   title: "Registration Successful!",
      //   description: "Thank you for registering. We'll be in touch soon.",
      // })
    } catch (error) {
      console.error("Registration error:", error)
      // toast({
      //   title: "Registration Failed",
      //   description: "There was a problem submitting your registration. Please try again.",
      //   variant: "destructive",
      // })
    } finally {
      setIsSubmitting(false)
    }
  }
  const resetForm = () => {
    setFormData(initFormData)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)      
    setIsSubmitted(false)
  }
  const formHasErrors = useMemo(()=>Object.keys(errors).findIndex((key) => !!errors[key as keyof FormErrors]) > -1,[errors])
  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-800 mb-4">
          <CheckCircleIcon className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-xl font-bold mb-2">Registration Successful!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for registering for the {courseName}. We&apos;ve sent you an email with further details.
        </p>
        <Button variant="outline" className="mt-2" onClick={resetForm}>
          Register Another Person
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className={errors.fullName ? "text-red-700" : ""}>
              Full Name (required)
            </Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              onBlur={() => handleBlur("fullName")}
              className={errors.fullName ? "border-red-700" : ""}
            />
            {errors.fullName && <p className="text-sm text-red-700">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={errors.email ? "text-red-700" : ""}>
              Email (required)
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              className={errors.email ? "border-red-700" : ""}
            />
            {errors.email && <p className="text-sm text-red-700">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className={errors.phone ? "text-red-700" : ""}>
              Phone Number (required)
            </Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              className={errors.phone ? "border-red-700" : ""}
            />
            {errors.phone && <p className="text-sm text-red-700">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className={errors.age ? "text-red-700" : ""}>
              Age (required)
            </Label>
            <Input
              id="age"
              type="number"
              min="12"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => handleChange("age", e.target.value)}
              onBlur={() => handleBlur("age")}
              className={errors.age ? "border-red-700" : ""}
            />
            {errors.age && <p className="text-sm text-red-700">{errors.age}</p>}
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup
              defaultValue={formData.gender}
              value={formData.gender}
              onValueChange={(value) => handleChange("gender", value)}
              onBlur={() => handleBlur("gender")}
            >
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2 mt-1">
            <Label>Preferred course date (year 2025)</Label>
            <RadioGroup
              defaultValue={formData.preferredCourseDate}
              value={formData.preferredCourseDate}
              onValueChange={(value) => handleChange("preferredCourseDate", value)}
              onBlur={() => handleBlur("preferredCourseDate")}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="may-22-may-25" id="may-22-may-25" />
                  <Label htmlFor="may-22-may-25">May 22 - May 25</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="may-29-june-1" id="may-29-june-1" />
                  <Label htmlFor="may-29-june-1">May 29 - June 1</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="medical">Message (optional)</Label>
            <Textarea
              id="message"
              placeholder="Leave a message if you need to share any medical conditions or special requests."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              className={`min-h-[80px] ${errors.age ? "border-red-700" : ""}`}
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full btnPrimary" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Submit"
        )}
      </Button>

      {formHasErrors && touched.fullName && (
        <p className="text-sm text-red-700 text-center">Please correct the errors in the form before submitting.</p>
      )}
    </form>
  )
}

// This is just for the success message
function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  )
}

