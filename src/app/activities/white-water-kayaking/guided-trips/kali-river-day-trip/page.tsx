import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Clock, Calendar, MapPin, Users, Award, AlertTriangle, Check, X } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Kali River Day Trip | White Water Kayaking",
  description:
    "Experience an exciting day of white water kayaking on the Kali River. Perfect for beginners and intermediate paddlers looking for adventure.",
  keywords:
    "kali river kayaking, white water kayaking dandeli, kayaking day trip, river kayaking, water sports dandeli",
  openGraph: {
    title: "Kali River Day Trip | National Outdoor School",
    description:
      "Experience an exciting day of white water kayaking on the Kali River with expert guides.",
    url: "https://nationaloutdoorschool.com/activities/white-water-kayaking/guided-trips/kali-river-day-trip",
    siteName: "National Outdoor School",
    images: [
      {
        url: "https://nationaloutdoorschool.com/og-image-kayaking.jpg",
        width: 1200,
        height: 630,
        alt: "Kali River Kayaking Trip - National Outdoor School",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://nationaloutdoorschool.com/activities/white-water-kayaking/guided-trips/kali-river-day-trip",
  },
}

export default function KaliRiverDayTrip() {
  return (
    <>
      {/* Banner Image */}
      <div className="relative w-full h-[60vh]">
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Kali River Day Trip
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium drop-shadow-lg">
              Guided White Water Kayaking Adventure
            </p>
          </div>
        </div>
        <Image
          src="/kali-river-ariel-view.jpg"
          alt="Kali River Kayaking"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Trip Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Alert className="mb-8 border-amber-500 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertDescription className="flex items-center justify-between">
              <span className="text-amber-800 font-medium">Book in advance to secure your spot!</span>
            </AlertDescription>
          </Alert>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="trip-description">
                <h2 className="font-serif text-3xl font-bold mb-6">Trip Description</h2>

                <p className="text-lg text-gray-700 mb-6">
                  Experience the thrill of white water kayaking on the beautiful Kali River in Dandeli, Karnataka. 
                  This guided day trip is perfect for those who want to experience kayaking without committing to a 
                  multi-day course.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  Navigate through exciting rapids, enjoy the stunning river scenery, and learn from our experienced 
                  guides who will ensure your safety while maximizing the fun. Whether you&apos;re a beginner or have 
                  some kayaking experience, this trip offers the perfect balance of adventure and safety.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  The Kali River offers Grade 2-3 rapids that provide an exciting challenge without being overwhelming. 
                  All equipment and professional instruction are included.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Availability</h3>
                    </div>
                    <p>October to May (monsoon season)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Location</h3>
                    </div>
                    <p>Kali River, Dandeli, Karnataka</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Group Size</h3>
                    </div>
                    <p>Minimum 2, Maximum 6 participants</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Difficulty Level</h3>
                    </div>
                    <p>Beginner to Intermediate</p>
                  </CardContent>
                </Card>
              </div>

              {/* What to Expect */}
              <h2 className="font-serif text-3xl font-bold mb-6">What to Expect</h2>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Professional guide throughout the trip</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Safety briefing and paddling instruction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Navigate Grade 2-3 rapids</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Approximately 3-4 hours on the water</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Beautiful river scenery and wildlife</span>
                </li>
              </ul>

              {/* Requirements */}
              <h2 className="font-serif text-3xl font-bold mb-6">Requirements</h2>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Age 15 and above</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Ability to swim</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Good physical fitness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">No serious medical conditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Previous kayaking experience helpful but not required</span>
                </li>
              </ul>

              {/* Daily Schedule */}
              <h2 className="font-serif text-3xl font-bold mb-6">Trip Schedule</h2>
              <div className="border rounded-lg p-6 mb-12">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">8:30am - 9:00am</span>
                      <p>Meet at the river, gear up, and safety briefing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">9:00am - 9:30am</span>
                      <p>Basic paddling instruction and practice</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">9:30am - 12:30pm</span>
                      <p>Guided kayaking trip through rapids (with breaks)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">12:30pm - 1:00pm</span>
                      <p>Return to base, gear return, and debrief</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pricing */}
              <h2 className="font-serif text-3xl font-bold mb-6">Pricing</h2>
              <div className="bg-white rounded-lg border p-6 mb-8">
                <div className="text-3xl font-bold mb-6">₹3,500 per person</div>

                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Professional kayaking guide</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>All kayaking equipment (kayak, paddle, spray skirt, helmet, life jacket)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Safety equipment and first aid</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Basic paddling instruction</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Water and light snacks</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold mb-4">What&apos;s Not Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Transportation to/from the river</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Meals</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Personal expenses</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-4">Cancellation Policy</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">100% refund:</span>
                      <span>If cancelled 7+ days before trip date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">50% refund:</span>
                      <span>If cancelled 3-6 days before trip date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">No refund:</span>
                      <span>If cancelled less than 3 days before trip date</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Things to Bring */}
              <h2 className="font-serif text-3xl font-bold mb-6">What to Bring</h2>
              <div className="bg-white rounded-lg border p-6 mb-12">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Swimwear or quick-dry clothing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Water shoes or sneakers that can get wet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Towel and change of clothes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sunscreen and sunglasses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Water bottle</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span>ID proof</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Waterproof camera (optional)</span>
                  </li>
                </ul>
              </div>

              {/* Safety Information */}
              <h2 className="font-serif text-3xl font-bold mb-6">Safety</h2>
              <p className="mb-6 text-lg">
                Your safety is our top priority. All trips are led by certified kayaking guides with extensive 
                white water experience and rescue training.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Certified guide with 13+ years of white water experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">All participants wear life jackets and helmets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Support kayak with rescue equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">First aid kit and emergency communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Weather conditions monitored closely</span>
                </li>
              </ul>
            </div>

            {/* Sidebar - Booking Form */}
            <div className="lg:w-1/3">
              <div className="sticky top-20 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary text-white p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Book Your Trip</h3>
                  <p className="text-green-100">Reserve your spot for this exciting adventure</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">₹3,500</div>
                    <p className="text-gray-600">per person</p>
                  </div>
                  <Link href="/contact">
                    <Button className="w-full btnPrimary text-white mb-4">
                      Contact Us to Book
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-600 text-center">
                    Or call us at +91 9620309309
                  </p>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="mt-6 bg-amber-50 rounded-lg border border-amber-200 p-6">
                <h4 className="font-serif text-lg font-bold mb-4">Quick Info</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Clock className="h-4 w-4 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Duration: ~4 hours</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-4 w-4 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Min 2, Max 6 people</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-4 w-4 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All equipment provided</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No experience needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-gray-900">
            Want to Learn More?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If you enjoyed this day trip and want to develop your kayaking skills further, 
            check out our comprehensive kayaking courses.
          </p>
          <Link href="/activities/white-water-kayaking/courses">
            <Button className="btnPrimary text-white">
              View Our Courses
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
