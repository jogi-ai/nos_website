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
  title: "Himalayan White Water Kayaking Summer Program for Kids",
  description:
    "A special opportunity for kids to explore their wild side by immersing themselves in the prestine rivers and mountains of the Himalayas while learning white water kayaking from the top instructors in the country.",
  keywords:
    "kids white water kayaking, kids summer camp, himalayas, rudraprayag, uttarakhand, kids outdoor camp, family kayaking",
  openGraph: {
    title: "Himalayan White Water Kayaking Summer Program for Kids",
    description:
      "A special opportunity for kids to explore their wild side by immersing themselves in the prestine rivers and mountains of the Himalayas while learning white water kayaking from the top instructors in the country.",
    url: "https://nationaloutdoorschool.com/activities/white-water-kayaking/courses/himalayan-white-water-kayaking-summer-program-for-kids",
    siteName: "National Outdoor School",
    images: [
      {
        url: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/kids_program_og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Himalayan White Water Kayaking Summer Program for Kids - by National Outdoor School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://nationaloutdoorschool.com/courses/himalayan-white-water-kayaking-summer-program-for-kids",
  },
}

export default function KidsWhiteWaterKayakingSummerCamp() {
  return (
    <>
      {/* Banner */}
      <div className="relative w-full h-[80vh]">
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Himalayan White Water Kayaking Summer Program for Kids
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium drop-shadow-lg w-[80%] mx-auto">
              A special opportunity for kids to explore their wild side by immersing themselves in the prestine rivers and mountains of the Himalayas while learning white water kayaking from the top instructors in the countryb.
            </p>
          </div>
        </div>
        <Image
          src="https://igutafeeling.com/uploads/nos_media/kids_kayaking/kids_program_banner.jpg"
          alt="Himalayan White Water Kayaking Summer Program for Kids - by National Outdoor School"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="course-description">
              {/* Course Description */}
              <h2 className="font-serif text-3xl font-bold mb-6">Course Description</h2>
              <p className="mb-6">
                The White Water Kayaking Kids Summer Camp at Shivanandi River Lodge is designed to introduce children to the outdoors,
                build survival skills, and develop a lasting love for nature and rivers through the immersive experience
                of learning white water kayaking.
              </p>
              <p className="mb-6">
                The program runs for a minimum of 4 days with the option to extend to any number of days. Parents have
                the option to learn white water kayaking alongside their child, making it a memorable family adventure
                in the Himalayas.
              </p>
              <h4 className="font-serif text-lg font-bold mb-6">At the end of the course the student will:</h4>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>Be able to navigate a kayak in grade 1-2 rapids</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Be able to perform basic self-rescue techniques and have more confidence in water
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>Have a deeper understanding of how to deal with water and river features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>Have better survival skills and knowledge about the outdoors</span>
                </li>
              </ul>
              </div>
              {/* Overview cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Dates</h3>
                    </div>
                    <p className="mb-2">April & May 2026</p>
                    <p className="text-sm text-gray-600">Choose any 4 days, extendable</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Location</h3>
                    </div>
                    <p className="mb-2">Shivanandi River Lodge</p>
                    <p className="text-sm text-gray-600">Rudraprayag, Uttarakhand</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Age</h3>
                    </div>
                    <p className="mb-2">10-15 years.</p>
                    <p className="text-sm text-gray-600">Parents may also join as participants.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="h-6 w-6 text-charcoal" />
                      <h3 className="font-serif text-xl font-bold">Skill Level</h3>
                    </div>
                    <p className="mb-2">Beginner</p>
                    <p className="text-sm text-gray-600">Basic comfort in water is required.</p>
                  </CardContent>
                </Card>
              </div>
              {/* Course Location */}
              <h2 className="font-serif text-3xl font-bold mb-6">About Shivanandi River Lodge</h2>
              <div className="mb-12">
                <p className="mb-4">
                  Shivanandi River Lodge is built by one of the most experienced and renouned white water kayakers in India, Shalabh Gahalaut. 
                  Shalabh is a pioneer in the sport and is a well known personality in the white water kayaking community worldwide.
                </p>
                <p className="mb-4">
                  Shivanandi River Lodge is a popular destination among adventure and outdoors enthusiasts and especially among kayakers from across world.
                  The lodge offers a family-friendly base with comfortable accommodation, meals, a natural swimming pool and direct access to the river Alaknanda and other classic Himalayan rivers in the region. 
                  Its peaceful and natural setting and make it ideal for kids their families to connect with nature and learn white water kayaking.</p>
              </div>
              <div className="mb-[2rem] mt-[2rem]">
                <CourseGallery galleryName="shivanandi" columns={2} />
              </div>
              
              {/* Eligibility */}
              <h2 className="font-serif text-3xl font-bold mb-6">Eligibility</h2>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>Age 10-15 (kids). Parents may also join as participants.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>No prior kayaking experience required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Ability to swim and float comfortably in deep water with the help of a PFD (life jacket)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    No medical conditions that prevent participation in moderate physical activity
                  </span>
                </li>
              </ul>

              {/* Safety */}
              <h2 className="font-serif text-3xl font-bold mb-6">Safety</h2>
              <p className="mb-6">
                Safety and emotional comfort is our top priority when it comes to teaching kids white water kayaking. Here are some highlights about safety during the course:
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>Slow and controlled progression of skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>Certified and highly experienced instructors with experience in teaching children</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multiple certified rescue and first aidprofessionals at all times during the sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>Kid-appropriate safety gear</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <span>Kids will not be taken on rapids above Grade 2</span>
                </li>
              </ul>

              {/* Curriculum */}
              <h2 className="font-serif text-3xl font-bold mb-6">Curriculum</h2>
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-3">Introduction to kayaking</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc">Kayak design</li>
                    <li className="list-disc">About kayaking equipment</li>
                    <li className="list-disc">River safety briefing</li>
                    <li className="list-disc">Seat positioning</li>
                    <li className="list-disc">Kayak carrying technique</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-3">Basic paddling</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc">Forward stroke</li>
                    <li className="list-disc">Back stroke</li>
                    <li className="list-disc">Basic self rescue skills</li>
                    <li className="list-disc">Wet exit</li>
                    <li className="list-disc">Edge control</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-3">River running</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="list-disc">Protocols for river running</li>
                    <li className="list-disc">Signals</li>
                    <li className="list-disc">Running Grade 1 and 2 rapids</li>
                  </ul>
                </div>
              </div>

              {/* Day-wise plan */}
              <h2 className="font-serif text-3xl font-bold mb-6">Day-wise Plan</h2>
              <Tabs defaultValue="day1" className="mb-12">
                <TabsList className="grid w-full grid-cols-5 mb-6">
                  <TabsTrigger value="day1">Day 1</TabsTrigger>
                  <TabsTrigger value="day2">Day 2</TabsTrigger>
                  <TabsTrigger value="day3">Day 3</TabsTrigger>
                  <TabsTrigger value="day4">Day 4</TabsTrigger>
                  <TabsTrigger value="day5">Day 5+</TabsTrigger>
                </TabsList>
                <TabsContent value="day1" className="border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-4">Day 1 — Introduction</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Orientation and safety briefing</div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Introduction to kayak and equipment</div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Simple strokes in an eddy</div>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="day2" className="border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-4">Day 2 — Building skills</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Basic paddling skills</div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Improving confidence in the gear and self</div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Wet exit</div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Edge control</div>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="day3" className="border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-4">Day 3 — Short river run</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Practice in moving water</div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Refine the learned skills</div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Run a short river section</div>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="day4" className="border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-4">Day 4 — Long river run</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Revision of skills</div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Class 1, 15km run from Rudraprayag to Dharidevi</div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                      <div>Wrap-up and certificate</div>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="day5" className="border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-600 mb-4">Day 5+ — Optional extension</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    You can extend the camp by any number of days. Extra days include more river time, practice, and
                    exploration suited to the individual's progress.
                  </p>
                </TabsContent>
              </Tabs>

              {/* Fees */}
              <h2 className="font-serif text-3xl font-bold mb-6" id="fees">Price</h2>
              <div className="bg-white rounded-lg border p-6 mb-8">
                {/* <h3 className="font-serif text-xl font-bold mb-4">All inclusive price</h3> */}
                <p className="text-xl font-bold mb-6">Rs. 40,000/- per head.</p>
                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Instruction from professional white waterkayaking instructors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Equipment (kayak, paddle, spray skirt, helmet, life jacket)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Course completion certificate</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Accommodation in Rooms (at Shivanandi River Lodge)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Meals (Standard Vegetarian Indian)</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold mb-4">What&apos;s Not Included</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Non vegetarian meals(Additional cost)</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Beverages</span>
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
                      <span>If cancelled 15–19 days before course start date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">30% refund:</span>
                      <span>If cancelled 7–14 days before course start date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">No refund:</span>
                      <span>If cancelled less than 7 days before course start date</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Gallery */}
              <h2 className="font-serif text-3xl font-bold mb-6">Gallery</h2>
              <div className="mb-12">
                <p className="mb-6">
                  A glimpse into life at Shivanandi River Lodge.
                </p>
                <CourseGallery galleryName="kids-kayaking-camp" />
              </div>

              {/* Things to Carry */}
              <h2 className="font-serif text-3xl font-bold mb-6">Things to Carry</h2>
              <div className="bg-white rounded-lg border p-6 mb-12">
                <p className="text-lg mb-6">
                  To ensure a comfortable experience for your child (and yourself if you&apos;re joining), please bring:
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
                        <span>Swimming wear</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Water shoes or sneakers that can get wet</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Sunscreen (water-resistant, SPF 30+)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Towel and extra set of clothes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Water bottle (1 litre minimum)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>ID proof (for parent/guardian)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-4">Good to Have</h3>
                    <ul className="space-y-2">
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
                        <span>Insect repellent</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Personal medications</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Camera (waterproof) or phone in dry bag</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h3 className="font-serif text-lg font-bold text-amber-800 mb-2">Important Note</h3>
                  <p>
                    All kayaking equipment is provided by National Outdoor School. Do not bring valuables that cannot be
                    secured during river activities.
                  </p>
                </div>
              </div>

              {/* Instructor Profiles — multiple */}
              <h2 className="font-serif text-3xl font-bold mb-6" id="instructor-profile">Instructor Profiles</h2>
              <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
                  <div className="md:w-1/3 w-[100%]">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image src="https://igutafeeling.com/uploads/nos_media/shalabh.jpg" alt="Shalabh Gahlaut" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-[100%]">
                    <h3 className="font-serif text-2xl font-bold text-gray-600 mb-2">Shalabh Gahlaut</h3>
                    <div>
                      <p className="mb-2">Shalabh is a pioneer of white water kayaking in India with decades of experience in the sport and is the first to kayak a number of rivers in the Indian sub-continent.</p> 
                      <p className="mb-2">Shalabh has vast experience in teaching children. He is a father of 2 daughters and has helped his children to become passionate kayakers and environmentally conscious individuals with a deep love for nature and the outdoors.</p> 
                      <p className="mb-2">His family built Shivanandi River Lodge together wishing it to be a place of relaxation, a place close to the mountains and rivers, and a home for the family. 
                        The family home evolved into a lodge and a popular destination among adventure and outdoors enthusiasts, especially among kayakers from across the world.
                      </p>
                    </div>
                  </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
                  <div className="md:w-1/3 w-[100%]">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image src="https://igutafeeling.com/uploads/nos_media/arjun.jpg" alt="Arjun Sagoi" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:w-2/3 w-[100%]">
                    <h3 className="font-serif text-2xl font-bold text-gray-600 mb-2">Arjun Sagoi</h3>
                    <div>
                        <p className="mb-2">Arjun is a highly accomplished white water kayaker in India. He is the founder along with Shalabh Gahlaut of Alakananda Whitewater, a leading white water kayaking and rafting company in India. 
                        Arjun has vast experience working as a river guide and rescue professional in reputed white water kayaking and rafting companies in India and Iceland.</p>
                      
                      <p className="mb-2">Arjun's wishes to share his vast knowledge about kayaking, rivers and mountainswith children and help them to become better individuals.</p>
                    </div>
                  </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
                <div className="md:w-1/3 w-[100%]">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image src="/jogi-instructor-dp.jpg" alt="Jogi Nayak" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3 w-[100%]">
                  <h3 className="font-serif text-2xl font-bold text-gray-600 mb-2">Jogi Nayak</h3>
                  <div>
                    <p className="mb-2">Jogi is a passionate kayaker and an advocate for the sport. His passion for white water kayaking has made him explore more than 25+ rivers across various countries.</p> 
                    <p className="mb-2">He is certified as a White Water Rescue Technician from Rescue 3 international, Level 2 Swift Water Rescue Professional from ITRA
                    and a certified river guide from US National White Water Center, which is the training ground for olympic level athletes.</p>
                    <p className="mb-2">He believes that white water kayaking is not just a sport, but a way of life that connects people with nature and helps them discover their true potential.
                    He is committed to sharing his knowledge and experience with others, and helping them develop their skills and confidence on the water and outdoors. </p>
                    <p>Jogi's mission with National Outdoor School is to make quality outdoor education accessible to all and
                    build a community of nature lovers, outdoor sports enthusiasts and world class athletes.</p>
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
                    <div>
                      <p className="mb-2">Daman Singh is a highly accomplished white water kayaker in India. He has won accolades in International competitions and has vast experience across rivers in India, Nepal and Iceland. 
                      He loves sharing his knowledge and experience with others, guiding them into becoming better paddlers. He is among top white water kayakers in the country.</p>
                      
                      <p className="mb-2">Daman is also a certified white water rescue professional. He has vast experience working as a river guide in reputed companies like Alakananda Whitewater, India and Arctic Rafting, Iceland.</p>
                    </div>
                  </div>
              </div>
              {/* Things to do around */}
              <h2 className="font-serif text-3xl font-bold mb-6">Additional Info</h2>
              {/* How to get there */}
              <h3 className="font-serif text-2xl font-bold mb-6">How to Get There</h3>
              <div className="mb-12">
                <p className="mb-4">
                  Shivanandi River Lodge is located in Rudraprayag, Uttarakhand which is well connected by road.
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>By road:</strong> Rudraprayag is about 4–5 hours from Rishikesh, 5–6 hours from Haridwar,
                    and 5–6 hours from Dehradun. You can drive or hire a taxi.
                  </li>
                  <li>
                    <strong>Nearest airport:</strong> Jolly Grant Airport, Dehradun. From the airport, Rudraprayag is
                    roughly 5–6 hours by road.
                  </li>
                  <li>
                    <strong>By train:</strong> Nearest major railheads are Haridwar and Rishikesh. From there, take a
                    taxi or bus to Rudraprayag.
                  </li>
                  <li>
                    Once in Rudraprayag, follow directions to Shivanandi River Lodge. We can share detailed directions
                    and contact details for the lodge after you register.
                  </li>
                </ul>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-6">Things to do near Rudraprayag</h3>
              <div className="mb-12">
                <p className="mb-4">
                  Rudraprayag is a gateway to the Char Dham and offers plenty for families when not on the river:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="list-disc">Rudraprayag town and confluence of Alaknanda & Mandakini Rivers</li>
                  <li className="list-disc">Day hike to Karthik Swamy temple</li>
                  <li className="list-disc">Trip to Chandrashila Peak</li>
                  <li className="list-disc">Riverside picnics</li>
                  <li className="list-disc">Local villages and mountain views</li>
                </ul>
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
                  <CourseRegistrationForm courseName="Himalayan White Water Kayaking Kids Summer Camp" />
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
