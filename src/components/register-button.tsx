"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function RegisterButton() {
  const [showButton, setShowButton] = useState(false)
  const isMobile = useMobile()
  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const formRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Only run on mobile devices
    if (!isMobile) return

    // Find the elements we need to observe
    descriptionRef.current = document.querySelector(".course-description")
    formRef.current = document.querySelector(".course-registration-form")

    if (!descriptionRef.current || !formRef.current) return

    // Create intersection observers
    // const descriptionObserver = new IntersectionObserver(
    //   ([entry]) => {
    //     // When description is not in view (scrolled past it), potentially show button
    //     if (!entry.isIntersecting) {
    //       // Only show if form is also not in view
    //       if (formRef.current && !isElementInViewport(formRef.current)) {
    //         setShowButton(true)
    //       }
    //     } else {
    //       // Description is in view, hide button
    //       setShowButton(false)
    //     }
    //   },
    //   { threshold: 0.1 },
    // )

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        // When form comes into view, hide button
        if (entry.isIntersecting) {
          setShowButton(false)
        } else if (descriptionRef.current && !isElementInViewport(descriptionRef.current)) {
          // Form is not in view and we've scrolled past description, show button
          setShowButton(true)
        }
      },
      { threshold: 0.1 },
    )

    // Start observing
    // descriptionObserver.observe(descriptionRef.current)
    formObserver.observe(formRef.current)

    // Cleanup
    return () => {
    //   if (descriptionRef.current) descriptionObserver.unobserve(descriptionRef.current)
      if (formRef.current) formObserver.unobserve(formRef.current)
    }
  }, [isMobile])

  // Helper function to check if element is in viewport
  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!showButton) return null

  return (
    <Button
      onClick={scrollToForm}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full py-3 px-6 shadow-lg z-40 md:hidden animate-bounce-slow"
    >
      Enquire Now <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  )
}
