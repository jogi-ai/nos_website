import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function GuidedTripsSection() {
  const guidedTrips = [
    {
      id: 1,
      title: "White Water Kayaking on Kali River, Dandeli",
      description:
        "Experience the thrill of white water kayaking on the Kali River. Perfect for beginners and intermediate paddlers looking for an exciting day on the water.",
      image: "/first-rapid.jpg",
      // date: "Available year-round",
      // location: "Dandeli, Karnataka",
      link: "/activities/white-water-kayaking/guided-trips/white-water-kayaking-on-kali-river-dandeli",
      features : [
        "Grade 2-3 Rapids",
      ]
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">White Water Kayaking - Guided Trips</h2>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
          Join our expert guides and experience the thrill of navigating rivers with professional support and guidance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidedTrips.map((trip) => (
            <Link href={trip.link} key={trip.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-gray-600">{trip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{trip.description}</p>
                </CardContent>
                <div className="border-t pt-4 px-6">
                    <div className="flex flex-wrap gap-2">
                    {trip.features.map((feature, index) => (
                        <span 
                        key={index}
                        className="bg-stone-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                        {feature}
                        </span>
                    ))}
                    </div>
                </div>
                <CardFooter>
                    <Button className="w-full btnPrimary text-white">Learn More</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Button variant="outline" className="border-green-700  hover:bg-green-50">
            View All Guided Trips
          </Button>
        </div> */}
      </div>
    </section>
  )
}
