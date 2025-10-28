import GuidedTripsSection from "@/components/guided-trips-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "White Water Kayaking - Guided Trips | National Outdoor School",
  description:
    "Join our expert guides and experience the thrill of navigating rivers with professional support and guidance.",
  keywords:
    "guided kayaking trips, white water kayaking, kayaking tours, river kayaking, kayaking adventures, dandeli kayaking, kali river kayaking",
  openGraph: {
    title: "White Water Kayaking - Guided Trips | National Outdoor School",
    description:
      "Join our expert guides and experience the thrill of navigating rapids with professional support and guidance.",
    images: ["/og-image-kayaking.jpg"],
  },
}

export default function GuidedTripsPage() {
  return (
    <>
      <GuidedTripsSection />
    </>
  )
}
