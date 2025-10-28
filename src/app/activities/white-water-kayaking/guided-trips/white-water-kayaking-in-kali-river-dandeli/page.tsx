import Image from "next/image"
import CourseRegistrationForm from "@/components/course-registration-form"
import CourseGallery from "@/components/course-gallery"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Calendar, MapPin, Users, Award, Check, X } from "lucide-react"
import RegisterButton from "@/components/register-button"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "White Water Kayaking in Kali River, Dandeli | National Outdoor School",
  description:
    "Experience an exciting day of white water kayaking on the Kali River. Perfect for beginners and intermediate paddlers looking for adventure.",
  keywords:
    "kali river kayaking, white water kayaking dandeli, kayaking day trip, river kayaking, water sports dandeli",
  openGraph: {
    title: "White Water Kayaking in Kali River, Dandeli | National Outdoor School",
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
          {/* Banner Video/Image */}
          <div className="relative w-full h-[60vh]">
            <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
              <div className="container px-4 text-center">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  White Water Kayaking in Kali River, Dandeli
                </h1>
                <p className="text-xl md:text-2xl text-white font-medium drop-shadow-lg"> </p>
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
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-2/3">
                  
                  <div className="course-description">
                    <h2 className="font-serif text-3xl font-bold mb-6">Details about the river section</h2>
                    <p>The trip on the Kali typically launch from Ganeshgudi (just downstream of the Supa Dam) and covers roughly 9km of the river until Mounlangi, the finishing point.
The section has numerous grade 2-3 rapids along the way, perfect for beginner/intermediate paddlers to practice their river reading and kayaking skills.
Along the way the river carves a scenic canyon: lush green forest walls line the path almost the entire way.</p>
<br />
<br />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Calendar className="h-6 w-6 text-charcoal" />
                          <h3 className="font-serif text-xl font-bold">Upcoming date</h3>
                        </div>
                        <p className="mb-2">Nov 20 - 31st 2025</p>
                        <p className="text-sm text-gray-600">*Join us for any number of days</p>
                      </CardContent>
                    </Card>
    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <MapPin className="h-6 w-6 text-charcoal" />
                          <h3 className="font-serif text-xl font-bold">Location</h3>
                        </div>
                        <p>Kali River, Dandeli</p>
                      </CardContent>
                    </Card>
    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Users className="h-6 w-6 text-charcoal" />
                          <h3 className="font-serif text-xl font-bold">Group Size</h3>
                        </div>
                        <p>Maximum 5 participants per day</p>
                      </CardContent>
                    </Card>
    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Award className="h-6 w-6 text-charcoal" />
                          <h3 className="font-serif text-xl font-bold">Skill Level</h3>
                        </div>
                        <p>Beginner / Intermediate</p>
                      </CardContent>
                    </Card>
                  </div>
    
                  {/* Eligibility */}
                  <h2 className="font-serif text-3xl font-bold mb-6">Eligibility</h2>
                  <ul className="space-y-4 mb-12">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Participant should have completed a beginner white water kayaking course with us or any other reputed kayak school.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Above age 16</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Comfortable doing the eskimo roll</span>
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
                  <p className="mb-6 text-lg">We understand that learning kayaking is an enjoyable experience when conducted in the safest environment possible among highly experienced instructors and rescue professionals. Here are some highlights about safety during the trip:</p>
                  <ul className="space-y-4 mb-12">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">All guides have many years of experience in white water and are certified white water rescue professionals.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">High quality safety equipment like PFDs, throw ropes, helmet and airbags</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Paddlers will be assessed on day 1 and 2 to ensure they are ready for the more technical sections.</span>
                    </li>
                  </ul>
    
                  {/* Daily Schedule */}
                  <h2 className="font-serif text-3xl font-bold mb-6">Daily Schedule</h2>
                  <Tabs defaultValue="weekday" className="mb-12">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="weekday">Monday - Sunday</TabsTrigger>
                    </TabsList>
                    <TabsContent value="weekday" className="border rounded-lg p-6">
                      <h3 className="font-serif text-xl font-bold text-gray-600 mb-4">Monday - Sunday schedule</h3>
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
                            <p>Travel to starting point</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">8:30am - 1:00pm</span>
                            <p>Practice and river runs</p>
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
                  </Tabs>
                  {/* Course Fees - NEW SECTION */}
                  <h2 className="font-serif text-3xl font-bold mb-6">Trip Fees</h2>
                  <div className="bg-white rounded-lg border p-6 mb-8">
                    <h3 className="font-serif text-xl font-bold mb-4">Introductory Offer</h3>
                    <div className="text-xl font-bold mb-6"><span className="line-through">₹5000</span> ₹4,500 per day</div>
    
                    <div className="mb-6">
                      <h3 className="font-serif text-xl font-bold mb-4">What&apos;s Included</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Professional guidance and instruction from certified kayaking instructors</span>
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
                          <span>Transportation to river location</span>
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
                          <span>If cancelled 20+ days before trip start date</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">50% refund:</span>
                          <span>If cancelled 15-19 days before trip start date</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">30% refund:</span>
                          <span>If cancelled 7-14 days before trip start date</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">No refund:</span>
                          <span>If cancelled less than 7 days before trip start date</span>
                        </li>
                      </ul>
                    </div>
                  </div>
    
                  {/* Gallery - NEW SECTION */}
                  <h2 className="font-serif text-3xl font-bold mb-6">Gallery</h2>
                  <div className="mb-12">
                    <p className="text-lg text-gray-700 mb-6">
                      Get a glimpse of the exciting experiences that await you on the guided trip on the Kali River! These images showcase the beautiful river environments and the thrill of white water kayaking.
                    </p>
                    <CourseGallery />
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-6">Things to Carry</h2>
                  <div className="bg-white rounded-lg border p-6 mb-12">
                    <p className="text-lg text-gray-700 mb-6">
                      To ensure you have a comfortable experience during the White Water Kayaking Trip, please bring the following items with you:
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
                  <h2 className="font-serif text-3xl font-bold mb-6">Guide Profiles</h2>
                  <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
                    <div className="md:w-1/3 w-[100%]">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                        <Image src="/jogi-instructor-dp.jpg" alt="Jogi Nayak" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="md:w-2/3 w-[100%]">
                      <h3 className="font-serif text-2xl font-bold text-gray-600 mb-2">Jogi Nayak</h3>
                      <div className="text-lg text-gray-700">
                        <p className="mb-2">Jogi is a passionate kayaker and an advocate for the sport. His passion for the sport has made him explore more than 20 rivers across India, Nepal and
                        USA. He believes that kayaking is not just a sport, but a way of life that connects people with nature and helps them discover their true potential.
                        He is committed to sharing his knowledge and experience with others, and helping them develop their skills and confidence on the water. </p>
                        
                        <p className="mb-2">He is certified as a White Water Rescue Technician from Rescue 3 international, Level 2 Swift Water Rescue Technician from ITRA and
                        river guide from US National White Water Center. He has previously trained over 100 students 
                        at General Thimayya National Academy of Adventure and various other kayaking schools in India.</p>
                        
    
                        <p>His mission with National Outdoor School is to make white water kayaking accessible to all,
                        create a community of kayakers who are passionate about the sport and the environment, and produce 
                        athletes in India that reach the world stage.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
                    <div className="md:w-1/3 w-[100%]">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                        <Image src="/Daman-Dp.jpg" alt="Daman Singh" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="md:w-2/3 w-[100%]">
                      <h3 className="font-serif text-2xl font-bold text-gray-600 mb-2">Daman Singh</h3>
                      <div className="text-lg text-gray-700">
                        <p className="mb-2">Daman Singh is a highly accomplished white water kayaker in India. He has won accolades in International competitions and has vast experience across rivers in India, Nepal and Iceland. 
                        He loves sharing his knowledge and experience with others, guiding them into becoming better paddlers. He is among top white water kayakers in the country.</p>
                        
                        <p className="mb-2">Daman is a certified white water rescue professional. He has vast experience working as a river guide in reputed companies like Alakananda Whitewater, in India and Arctic Rafting, in Iceland.</p>
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
                      <CourseRegistrationForm courseName="Guided White Water Kayaking Trip - Kali River" />
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
