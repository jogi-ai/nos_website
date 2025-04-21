"use client"
import type React from "react"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Validation rules
  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
        case "name":
            return !value.trim()
              ? "Name is required"
              : value.trim().length < 2
                ? "Name must be at least 2 characters"
                : value.trim().length > 200 
                ? "Name cannot be greater than 200 characters"
                : ""
        case "email":
            return !value.trim()
            ? "Email is required"
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? "Invalid email address"
                : ""
        case "phone":
            // Phone is optional, but if provided, it should be valid
            return value.trim() && !/^[0-9+\-\s()]{10,15}$/.test(value) ? "Invalid phone number" : ""
        case "message":
            const trimmedMsg: string = value.trim()
            return trimmedMsg.length < 10
            ? "Message should be at least 10 characters"
                : trimmedMsg.length > 1000
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
  const handleChange = (name: keyof FormData, value: string) => {
    if(isSubmitted)
        setIsSubmitted(false)
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
      return
    }

    setIsSubmitting(true)

    try {
      // Submit form data to API
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiries/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      // Show success state
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }
const formHasErrors = useMemo(()=>Object.keys(errors).findIndex((key) => !!errors[key as keyof FormErrors]) > -1,[errors])
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className={errors.name ? "text-red-700" : ""}>
            Full name <span className="text-red-700">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            className={errors.name ? "border-red-700" : ""}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-sm text-red-700">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className={errors.email ? "text-red-700" : ""}>
            Email <span className="text-red-700">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className={errors.email ? "border-red-700" : ""}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-sm text-red-700">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className={errors.phone ? "text-red-700" : ""}>
          Phone (Optional)
        </Label>
        <Input
          id="phone"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          onBlur={() => handleBlur("phone")}
          className={errors.phone ? "border-red-700" : ""}
          disabled={isSubmitting}
        />
        {errors.phone && <p className="text-sm text-red-700">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={errors.message ? "text-red-700" : ""}>
          Message <span className="text-red-700">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="How can we help you?"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          className={errors.message ? "border-red-700" : ""}
          disabled={isSubmitting}
        />
        {errors.message && <p className="text-sm text-red-700">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full btnPrimary" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      {formHasErrors && touched.name && (
        <p className="text-sm text-red-700 text-center">Please correct the errors in the form before submitting.</p>
      )}

      {isSubmitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-center">
          Thank you for your message! We&apos;ll get back to you as soon as possible.
        </div>
      )}
    </form>
  )
}
