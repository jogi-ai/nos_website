"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    setSubscribed(true)
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
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full btnPrimary">
                  Subscribe
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

