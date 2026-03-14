import Image from "next/image"
import Link from "next/link"
import { getFoundationCourseLocationList } from "./foundation-course-locations.config"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "White Water Kayaking Foundation Course - Level 1",
  description:
    "Master the fundamentals of white water kayaking in our 4-day foundation course. Available in Kodencherry (Kerala), Dandeli (Karnataka), and Rudraprayag (Uttarakhand). Learn paddling techniques, river features, safety skills, and eskimo roll.",
  keywords:
    "white water kayaking, kayaking course, kayaking foundation, river kayaking, water sports, outdoor adventure, Dandeli, Kerala, Uttarakhand",
  openGraph: {
    title: "White Water Kayaking Foundation Course - Level 1",
    description:
      "Master the fundamentals of white water kayaking in our 4-day foundation course. Available in Kodencherry, Dandeli, and Rudraprayag.",
    url: "https://nationaloutdoorschool.com/activities/white-water-kayaking/courses/white-water-kayaking-foundation-course",
    siteName: "National Outdoor School",
    images: [
      {
        url: "https://nationaloutdoorschool.com/og-image-kayaking.jpg",
        width: 1200,
        height: 630,
        alt: "White Water Kayaking Foundation Course - National Outdoor School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://nationaloutdoorschool.com/activities/white-water-kayaking/courses/white-water-kayaking-foundation-course",
  },
}

const COURSE_BASE_PATH = "/activities/white-water-kayaking/courses/white-water-kayaking-foundation-course"

export default function WhiteWaterKayakingFoundationCourseOverview() {
  const locations = getFoundationCourseLocationList()

  return (
    <>
      <div className="relative w-full h-[70vh]">
        <div className="absolute inset-0 bg-black/10 z-10 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              White Water Kayaking Foundation Course - Level 1
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium drop-shadow-lg">
              4 day intro course into the fascinating world of white water kayaking
            </p>
          </div>
        </div>
        <Image
          src="/kayaking-course-bg.jpg"
          alt="White Water Kayaking"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6">About the course</h2>
            <p className="text-lg text-gray-700 mb-4">
              Whitewater kayaking is a water sport where individuals navigate rivers using specialized kayaks to
              paddle through rapids, waves, and obstacles while maintaining control and balance. Our foundation
              course gives you all the essential skills and knowledge to start your journey.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The course is run in three locations across India. Choose a venue below to see dates, fees,
              schedule, and how to register for that location.
            </p>
          </div>

          <h2 className="font-serif text-3xl font-bold mb-8 text-center">Where we run this course</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <Link key={loc.slug} href={`${COURSE_BASE_PATH}/${loc.slug}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">{loc.locationLabel}</h3>
                    {loc.shortDescription && (
                      <p className="text-gray-600">{loc.shortDescription}</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full btnPrimary text-white">View details & dates</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
