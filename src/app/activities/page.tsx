import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Clock, Users, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Explore our range of outdoor activities and adventure sports. From white water kayaking to wilderness expeditions, discover your next adventure with National Outdoor School.",
  keywords: [
    "outdoor activities",
    "adventure sports",
    "white water kayaking",
    "wilderness expeditions",
    "outdoor education",
    "nature activities"
  ],
  openGraph: {
    title: "Activities | National Outdoor School",
    description:
      "Explore our range of outdoor activities and adventure sports. From white water kayaking to wilderness expeditions, discover your next adventure.",
    url: "https://nationaloutdoorschool.com/activities",
    siteName: "National Outdoor School",
    images: [
      {
        url: "https://nationaloutdoorschool.com/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "National Outdoor School Activities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://nationaloutdoorschool.com/activities",
  },
}

interface Activity {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
  features: string[]
}

const activities: Activity[] = [
  {
    id: "white-water-kayaking",
    title: "White Water Kayaking",
    description: "Experience the thrill of navigating pristine rapids through India's most spectacular river valleys. Our comprehensive programs cater to all skill levels, from complete beginners to advanced paddlers seeking to refine their technique.",
    shortDescription: "Navigate pristine rapids and experience the thrill of white water adventure in India's most beautiful river valleys.",
    image: "/rapid-run-2.jpg",
    href: "/activities/white-water-kayaking",
    difficulty: "All Levels",
    features: [
      "Courses",
      "Guided day trips",
      "Expeditions",
      "Equipment rental"
    ]
  }
  // Future activities can be added here:
  // {
  //   id: "rock-climbing",
  //   title: "Rock Climbing",
  //   description: "Scale natural rock formations...",
  //   // ... other properties
  // },
  // {
  //   id: "wilderness-survival",
  //   title: "Wilderness Survival",
  //   description: "Learn essential survival skills...",
  //   // ... other properties
  // }
]

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Our Activities
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover a world of outdoor adventure and education. Our carefully crafted programs 
            combine expert instruction with unforgettable experiences in nature's most beautiful settings.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Expert Instructors</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-[--color-primary]" />
              <span>Small Groups</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-[--color-primary]" />
              <span>Multiple Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Link key={activity.id} href={activity.href} className="block group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {activity.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl text-gray-900">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {activity.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div className="border-t pt-4">
                      <div className="flex flex-wrap gap-2">
                        {activity.features.map((feature, index) => (
                          <span 
                            key={index}
                            className="bg-stone-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button 
                        className="w-full btnPrimary group-hover:bg-[--color-primary] transition-colors"
                      >
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <h3 className="font-serif text-3xl font-bold mb-4 text-gray-900">
              More Adventures Coming Soon
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're constantly expanding our offerings to include more exciting outdoor activities. 
              Stay tuned for rock climbing, wilderness survival, trekking expeditions, and more!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧗</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Rock Climbing</h4>
                <p className="text-sm text-gray-600">Scale natural rock formations and build strength, technique, and confidence.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏕️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Wilderness Survival</h4>
                <p className="text-sm text-gray-600">Learn essential skills for thriving in the wilderness with minimal equipment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥾</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Trekking Expeditions</h4>
                <p className="text-sm text-gray-600">Multi-day adventures through India's most spectacular mountain ranges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable outdoor experience. Our expert instructors and carefully planned programs 
            ensure you'll have both the adventure and education you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btnPrimary w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
            <Link href="/activities/white-water-kayaking">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto">
                Start with Kayaking
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
