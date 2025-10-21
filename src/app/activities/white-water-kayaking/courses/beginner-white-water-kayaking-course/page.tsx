import Image from "next/image"
import CourseRegistrationForm from "@/components/course-registration-form"
import CourseGallery from "@/components/course-gallery"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Clock, Calendar, MapPin, Users, Award, AlertTriangle, Check, X } from "lucide-react"
import RegisterButton from "@/components/register-button"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "White Water Kayaking Foundation Course",
  description:
    "Master the fundamentals of white water kayaking in our 4-day foundation course. Learn paddling techniques, river features, safety skills, and eskimo roll.",
  keywords:
    "white water kayaking, kayaking course, kayaking foundation, river kayaking, water sports, outdoor adventure",
  openGraph: {
    title: "White Water Kayaking Foundation Course | National Outdoor School",
    description:
      "Master the fundamentals of white water kayaking in our 4-day foundation course. Learn paddling techniques, river features, safety skills, and eskimo roll.",
    url: "https://nationaloutdoorschool.com/courses/white-water-kayaking-foundation-course",
    siteName: "National Outdoor School",
    images: [
      {
        url: "https://nationaloutdoorschool.com/og-image-kayaking.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "White Water Kayaking Course - National Outdoor School",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://nationaloutdoorschool.com/courses/white-water-kayaking-foundation-course",
  },
}
export default function WhiteWaterKayakingCourse() {
   // Number of slots remaining
  //  const slotsRemaining = 3
  return (
    <>
      {/* Banner Video/Image */}
      <div className="relative w-full h-[60vh]">
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              White Water Kayaking Foundation Course
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium drop-shadow-lg">4 Days of Learning & Adventure</p>
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

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Alert className="mb-8 border-amber-500 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertDescription className="flex items-center justify-between">
              <span className="text-amber-800 font-medium">Limited availability for this course!</span>
              {/* <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                {slotsRemaining} slots remaining
              </Badge> */}
            </AlertDescription>
          </Alert>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              
              <div className="course-description">
                <h2 className="font-serif text-3xl font-bold mb-6">Course Description</h2>

                <p className="text-lg text-gray-700 mb-6">
                  Whitewater kayaking is a water sport where individuals navigate rivers using specialized kayaks to
                  paddle through rapids, waves, and obstacles while maintaining control and balance.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  The course provides all the foundational knowledge for the student to pursue the highly exciting and
                  rewarding journey of learning white water kayaking.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  The course aims to not just cover practical skills required for kayaking but also impart theoretical
                  knowledge through off-the-river sessions to understand river features and currents, which we
                  believe aids in faster learning.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Upcoming course date</h3>
                    </div>
                    <p className="mb-2">Aug 2025</p>
                    <p className="text-sm text-gray-600">*Check enquiry form for dates</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Location</h3>
                    </div>
                    <p>Kodencherry, Kerala</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Group Size</h3>
                    </div>
                    <p>Maximum 5 participants per batch</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Skill Level</h3>
                    </div>
                    <p>Beginner</p>
                  </CardContent>
                </Card>
              </div>
              {/* Eligibility */}
              <h4 className="font-serif text-lg font-bold mb-6">At the end of the course you will be able to:</h4>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Navigate a white water kayak in grade 2 rapids</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Perform basic rescue and self-rescue techniques
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Swim and float comfortably in grade 2 rapids</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Notice river features and learn to deal with them</span>
                </li>
              </ul>

              {/* Eligibility */}
              <h2 className="font-serif text-3xl font-bold mb-6">Eligibility</h2>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Previous kayaking experience not required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Above age 15</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Must not suffer from medical issues that prevents the participant from taking part in
                    physical intensive activities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Ability to swim and float comfortably in deep water</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Proven physical fitness</span>
                </li>
              </ul>
              
              {/* Eligibility */}
              <h2 className="font-serif text-3xl font-bold mb-6">Safety</h2>
              <p className="mb-6 text-lg">We understand that learning kayaking is an enjoyable experience when practice is conducted in the safest environment possible among highly experienced instructors and resuce professionals. Here are some highlights about safety during the course:</p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Practice sessions in a highly safe and secured environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Certified instructor with 13 years of expereince in white water</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Certified rescue professionals on the river during the course along with the instrcutor
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">High quality safety equipment like PFDs, throw ropes, helmet and airbags</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Beginners will not be taken in rapids above Grade 3</span>
                </li>
              </ul>

              {/* Curriculum */}
              <h2 className="font-serif text-3xl font-bold mb-6">Curriculum</h2>
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-3">
                    White water kayaking introduction
                  </h3>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc text-lg">Kayak design</li>
                    <li className="list-disc text-lg">About kayaking equipment</li>
                    <li className="list-disc text-lg">River safety briefing</li>
                    <li className="list-disc text-lg">Seat positioning</li>
                    <li className="list-disc text-lg">Kayak carrying technique</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-3">Basic paddling skills</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc text-lg">Forward stroke</li>
                    <li className="list-disc text-lg">Back stroke</li>
                    <li className="list-disc text-lg">Basic Rescue skills</li>
                    <li className="list-disc text-lg">Wet exit</li>
                    <li className="list-disc text-lg">Throw bag rescue</li>
                    <li className="list-disc text-lg">T rescue</li>
                    <li className="list-disc text-lg">White water swimming</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-3">River features</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc text-lg">Waves</li>
                    <li className="list-disc text-lg">Holes</li>
                    <li className="list-disc text-lg">Eddies</li>
                    <li className="list-disc text-lg">Pour overs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-3">Core skills</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc text-lg">Eddy in</li>
                    <li className="list-disc text-lg">Eddy out</li>
                    <li className="list-disc text-lg">Eskimo roll</li>
                    <li className="list-disc text-lg">Ferrying</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-3">Down river skills</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc text-lg">Momentum</li>
                    <li className="list-disc text-lg">Moving laterally</li>
                    <li className="list-disc text-lg">Leaning</li>
                    <li className="list-disc text-lg">Signals</li>
                  </ul>
                </div>
              </div>

              {/* Daily Schedule */}
              <h2 className="font-serif text-3xl font-bold mb-6">Daily Schedule</h2>
              <Tabs defaultValue="weekday" className="mb-12">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="weekday">Thursday - Saturday</TabsTrigger>
                  <TabsTrigger value="weekend">Sunday</TabsTrigger>
                </TabsList>
                <TabsContent value="weekday" className="border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-4">Thursday - Saturday Schedule</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">6:30am - 7:00am</span>
                        <p>Exercise / Warm up / Yoga</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">7:00am - 7:30am</span>
                        <p>Breakfast</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">7:45am - 8:15am</span>
                        <p>Travel to training location</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">8:30am - 1:00pm</span>
                        <p>Theory & Practical Sessions on the river (with 30 minutes break)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">1:30pm - 2:30pm</span>
                        <p>Lunch</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">2:30pm onwards</span>
                        <p>Practice / Pool Sessions (optional)</p>
                      </div>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="weekend" className="border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-4">Sunday Schedule</h3>
                  <ul className="space-y-4">
                  <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">6:30am - 7:00am</span>
                        <p>Exercise / Warm up / Yoga</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">7:00am - 7:30am</span>
                        <p>Breakfast</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">7:45am - 8:15am</span>
                        <p>Travel to training location</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">8:30am - 1:00pm</span>
                        <p>Theory & Practical Sessions on the river (with 30 minutes break)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">1:30pm - 2:30pm</span>
                        <p>Lunch</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">3:00pm - 4:30pm</span>
                        <p>River run</p>
                      </div>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
              {/* Course Fees - NEW SECTION */}
              <h2 className="font-serif text-3xl font-bold mb-6">Course Fees</h2>
              <div className="bg-white rounded-lg border p-6 mb-8">
                <h3 className="font-serif text-xl font-bold mb-4">Introductory Offer</h3>
                <div className="text-xl font-bold mb-6"><span className="line-through">₹22,000</span> ₹19,000</div>

                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Professional instruction from certified kayaking instructors</span>
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
                      <span>Transportation to training spots within training location</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Course completion certificate</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold mb-4">What&apos;s Not Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Transportation to course location</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Food & Beverages</span>
                    </li>

                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-4">Refund Policy</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">100% refund:</span>
                      <span>If cancelled 20+ days before course start date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">50% refund:</span>
                      <span>If cancelled 15-19 days before course start date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">30% refund:</span>
                      <span>If cancelled 7-14 days before course start date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">No refund:</span>
                      <span>If cancelled less than 7 days before course start date</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Gallery - NEW SECTION */}
              <h2 className="font-serif text-3xl font-bold mb-6">Gallery</h2>
              <div className="mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Get a glimpse of the exciting experiences that await you on our White Water Kayaking Foundation
                  Course. These images showcase the beautiful river environments, learning moments, and the thrill of
                  kayaking.
                </p>
                <CourseGallery />
              </div>

              {/* Accommodation - NEW SECTION */}
              {/* <h2 className="font-serif text-3xl font-bold mb-6">Recommended Accommodation</h2>
              <div className="bg-white rounded-lg border p-6 mb-12">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="/accommodation.jpg"
                        alt="Jungli, The Nomad Village"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-serif text-xl font-bold mb-2">Jungli, The Nomad Village</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Our recommended accommodation partner is the Jungli, The Nomad Village located in Moulangi, Dandeli. For more details about the accommodation visit <a className="underline" href="https://www.junglithenomad.com/the-big-bungalow" target="_blank">Jungli&apos;s website.</a>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                            <span>Digital nomad friendly</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                            <span>Stay with group and coach</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                            <span>Swimming pool for eskimo roll practice sessions</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                            <span>Kayaker-friendly facilities</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                            <span>Equipment drying area</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                            <span>Healthy meal options</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Amenities</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                            <span>Free Wi-Fi</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                            <span>Hot water 24/7</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                            <span>Air-conditioned rooms</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-serif text-lg font-bold mb-2">Special Kayaker Discount</h3>
                  <p className="mb-2">
                    As a participant National Outdoor School&apos;s White Water Kayaking Foundation Course, you&apos;re eligible for a special
                    discounted rate of Rs. 2500 / head / night for sharing rooms(includes stay, meals & taxes) at Jungli.
                  </p>
                </div>
              </div> */}
              {/* Things to Carry - NEW SECTION */}
              <h2 className="font-serif text-3xl font-bold mb-6">Things to Carry</h2>
              <div className="bg-white rounded-lg border p-6 mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  To ensure you have a comfortable experience during the White Water Kayaking Foundation
                  Course, please bring the following items with you:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-4">Essential Items</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Quick-dry clothing (synthetic or wool, avoid cotton)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Swimming shorts/trunks</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Water shoes or sneakers (that can get wet)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Sunscreen (water-resistant, SPF 30+)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Towel</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Water bottle (1 liter minimum)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>ID Proof</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold mb-4">Additional Good To Have Items</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Sunglasses</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Hat or cap</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Lightweight rain jacket</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Dry bag for personal items</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Insect repellent</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Personal medications</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Camera (waterproof)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Snacks for energy between meals</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Small first aid kit</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h3 className="font-serif text-lg font-bold text-amber-800 mb-2">Important Note</h3>
                  <p>
                    All specialized kayaking equipment (kayak, paddle, spray skirt, helmet, life jacket) will be
                    provided by National Outdoor School. Please do not bring valuables that cannot be secured, as we
                    cannot be responsible for lost or damaged items during river activities.
                  </p>
                </div>
              </div>
              {/* Instructor Profile */}
              <h2 className="font-serif text-3xl font-bold mb-6">Instructor Profile</h2>
              <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
                <div className="md:w-1/3 w-[100%]">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image src="/jogi-instructor-dp.jpg" alt="Jogi Nayak" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3 w-[100%]">
                  <h3 className="font-serif text-2xl font-bold text-gray-600 mb-2">Jogi Nayak</h3>
                  <div className="text-lg text-gray-700">
                    <p className="mb-2">Jogi is a passionate kayaker and an advocate for the sport. His passion for the sport has made him explore more than 15 rivers across India, Nepal and
                    USA. He believes that kayaking is not just a sport, but a way of life that connects people with nature and helps them discover their true potential.
                    He is committed to sharing his knowledge and experience with others, and helping them develop their skills and confidence on the water. </p>
                    
                    <p className="mb-2">He is certified as a White Water Rescue Technician from Rescue 3 international, Swift Water Rescue Technician from ITRA and
                    river guide from US National White Water Center. He has previously trained over 100 students 
                    at General Thimayya National Academy of Adventure and various other kayaking schools in India.</p>
                    

                    <p>His mission with National Outdoor School is to make white water kayaking accessible to all,
                    create a community of kayakers who are passionate about the sport and the environment, and produce 
                    athletes in India that reach the world stage.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 course-registration-form">
              <div className="sticky top-20 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary text-white p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Enquiry form</h3>
                  <p className="text-green-100">Register your interest and we will get back as soon as possible</p>
                </div>
                <div className="p-6">
                  <CourseRegistrationForm courseName="White Water Kayaking Foundation Course" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegisterButton />
    </>
  )
}

