"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const ticking = useRef(false)
  useEffect(() => {
    // Initial scroll position
    setPrevScrollPos(window.scrollY)

    const handleScroll = () => {
      // Use requestAnimationFrame to throttle scroll events
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY

          // Only update state if there's a significant change (10px threshold)
          // This reduces the number of renders during scrolling
          if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
            // Make navbar visible when scrolling up or at the top
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
            setPrevScrollPos(currentScrollPos)
          }

          ticking.current = false
        })

        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full bg-black text-white z-50 transition-transform duration-300 will-change-transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold tracking-wide">
          <Image src="/logo_new.svg" alt="National Outdoor School Logo" width="100" height="71" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="font-medium hover:text-green-200 transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white px-5">
            <nav className="flex flex-col space-y-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl font-medium hover:text-green-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

