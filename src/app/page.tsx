import Navigation from "@/components/navigation"
import AboutSection from "@/components/about-section"
import CoursesSection from "@/components/courses-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "National Outdoor School | Adventure Sports & Wilderness Education",
  description:
    "Discover immersive outdoor education experiences with National Outdoor School. Expert-led courses in wilderness survival, kayaking, trekking, climbing more.",
  keywords: "white water kayaking courses, outdoor education, wilderness skills, adventure courses, outdoor school, nature education",
  openGraph: {
    title: "National Outdoor School | Adventure Sports & Wilderness Education",
    description:
      "Discover immersive outdoor education experiences with National Outdoor School. Expert-led courses in wilderness survival, kayaking, trekking, climbing more.",
    url: "https://nationaloutdoorschool.com",
    siteName: "National Outdoor School",
    images: [
      {
        url: "https://nationaloutdoorschool.com/og-image-home.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "National Outdoor School - Adventure Sports & Wilderness Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "National Outdoor School | Adventure Sports & Wilderness Education",
  //   description:
  //     "Discover immersive outdoor education experiences with National Outdoor School. Expert-led courses in wilderness survival, kayaking, trekking, climbing more.",
  //   images: ["https://nationaloutdoorschool.com/og-image-home.jpg"], // Replace with actual image path
  //   creator: "@nationaloutdoorschool",
  // },
  alternates: {
    canonical: "https://nationaloutdoorschool.com",
  },
}
export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navigation />
      <div className="pt-16">
        {" "}
        {/* Add padding to account for fixed nav */}
        <AboutSection />
        <CoursesSection />
        <Footer />
      </div>
    </main>
  )
}

