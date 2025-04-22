"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
type FormData = {
  email: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}
export default function Footer() {
  const [formData, setFormData] = useState<FormData>({
      email: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
// Validation rules
  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
        case "email":
            return !value.trim()
            ? "Email is required"
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? "Invalid email address"
                : ""
        default:
            return ""
    }
  }
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiries/newsletter`, {
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
          email: ""
        })
      } catch (error) {
        console.error("Contact form error:", error)
      } finally {
        setIsSubmitting(false)
      }
    }

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">National Outdoor School</h3>
            <p className="mb-6">Our mission is to make outdoor education more structured and accessible.</p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/nationaloutdoorschool/" className="hover:text-green-200 transition-colors" target="_blank">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-green-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-green-200 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Adarsh Palm Retreat, Bangalore - 560103</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@nationaloutdoorschool.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for updates on new courses, outdoor tips, and special offers.
            </p>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-sm text-red-700">{errors.email}</p>}
                <Button type="submit" className="w-full btnPrimary" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            ) : (
              <p className="text-green-300 font-medium">
                Thanks for subscribing! You&apos;ll receive our next newsletter soon.
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-primary pt-8 text-center text-sm text-white">
          <p>© {new Date().getFullYear()} National Outdoor School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

