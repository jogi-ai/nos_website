"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { CalendarIcon, Loader2 } from "lucide-react"
import { Loader2 } from "lucide-react"
// import { format } from "date-fns"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface CourseRegistrationFormProps {
  courseName: string
}

export default function CourseRegistrationForm({ courseName }: CourseRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [date, setDate] = useState<Date>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-800 mb-4">
          <CheckCircleIcon className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-xl font-bold mb-2">Registration Successful!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for registering for the {courseName}. We&apos;ve sent a confirmation email with further details.
        </p>
        <Button variant="outline" className="mt-2" onClick={() => setIsSubmitted(false)}>
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
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Enter your full name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" min="12" placeholder="Enter your age" required />
          </div>

          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup defaultValue="male">
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

          {/* <div className="space-y-2">
            <Label>Preferred Course Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div> */}

          {/* <div className="space-y-2">
            <Label htmlFor="experience">Previous Experience</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="beginner">Beginner (tried once or twice)</SelectItem>
                <SelectItem value="intermediate">Intermediate (some experience)</SelectItem>
                <SelectItem value="advanced">Advanced (regular kayaker)</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          <div className="space-y-2">
            <Label htmlFor="medical">Message</Label>
            <Textarea
              id="medical"
              placeholder="Please list any medical conditions or allergies we should be aware of"
              className="min-h-[80px]"
            />
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="emergency">Emergency Contact</Label>
            <Input id="emergency" placeholder="Name and phone number" required />
          </div> */}

          {/* <div className="flex items-start space-x-2 pt-2">
            <Checkbox id="terms" required className="mt-1" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="terms" className="text-sm font-normal leading-snug">
                I confirm that I can swim and float comfortably in deep water and I agree to the terms and conditions
              </Label>
            </div>
          </div> */}
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

      {/* <p className="text-xs text-center text-gray-500 mt-4">
        By registering, you agree to our Terms of Service and Privacy Policy
      </p> */}
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

