import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
// Load fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const merriweather = Merriweather({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "National Outdoor School | Adventure Sports & Wilderness Education",
    template: "%s | National Outdoor School",
  },
  description:
    "Discover immersive outdoor education experiences with National Outdoor School. Expert-led courses in wilderness survival, kayaking, trekking, climbing more.",
  keywords: [
    "outdoor education",
    "wilderness skills",
    "adventure courses",
    "white water kayaking courses",
    "outdoor school",
    "nature education",
  ],
  authors: [{ name: "National Outdoor School" }],
  creator: "National Outdoor School",
  publisher: "National Outdoor School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nationaloutdoorschool.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "National Outdoor School",
    images: [
      {
        url: "/og-image-home.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "National Outdoor School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nationaloutdoorschool",
    images: ["/og-image-home.jpg"], // Replace with actual image path
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

