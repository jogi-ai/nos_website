import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, MapPin, Calendar, Clock, Users, Shield, Waves } from "lucide-react"

export default function WhiteWaterKayakingPage() {
  return (
    <>
      {/* Hero Section - Escape the layout padding */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-[139px] pt-[139px]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full object-cover z-11"
        >
          <source src="/banner-video-1.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don&apos;t support video */}
          <img 
            src="/kayaking-course-bg.jpg" 
            alt="White water kayaking background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          
          {/* Content */}
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              White Water Kayaking
            </h1>
            <h2 className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed text-gray-200">
              Experience the thrill of navigating pristine rapids through India&apos;s most spectacular river valleys. 
              From beginner-friendly courses to adrenaline-pumping guided expeditions.
            </h2>
            <div className="mt-8">
              <Button className="btnPrimary px-8 py-3 text-lg">
                Start Your Adventure
              </Button>
            </div>
          </div>
        </section>

        {/* Learn to Kayak Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Courses
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Master the art of white water kayaking with our comprehensive courses designed for all skill levels. 
                  From your first paddle stroke to advanced techniques, our certified instructors will guide you 
                  through every step of your kayaking journey.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-[--color-primary]" />
                    <span className="text-gray-700">Certified professional instructors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-[--color-primary]" />
                    <span className="text-gray-700">Small group sizes for personalized attention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-[--color-primary]" />
                    <span className="text-gray-700">Progressive skill development programs</span>
                  </div>
                </div>
                <Link href="/activities/white-water-kayaking/courses">
                  <Button className="btnPrimary">
                    Explore Courses
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 relative w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/intro-to-white-water-kayaking.jpg"
                  alt="Learning white water kayaking"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Guided Day Trips Section */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 relative w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/navigating-a-rapid-in-a-kayak.jpg"
                  alt="Guided kayaking trip"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Guided Trips
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Discover India&apos;s most breathtaking rivers with our expert guides. From the pristine waters of the 
                  Kali River in Dandeli to the challenging rapids of the Ganges, experience the country&apos;s diverse 
                  river systems in a safe and thrilling environment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <Card className="border-gray-200 bg-white shadow-sm">
                    <CardContent className="p-4">
                      <MapPin className="h-8 w-8 text-[--color-primary] mb-2" />
                      <h3 className="font-semibold text-gray-900 mb-1">Multiple Locations</h3>
                      <p className="text-sm text-gray-600">Rivers across Karnataka, Uttarakhand, and Himachal Pradesh</p>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200 bg-white shadow-sm">
                    <CardContent className="p-4">
                      <Calendar className="h-8 w-8 text-[--color-primary] mb-2" />
                      <h3 className="font-semibold text-gray-900 mb-1">Year Round</h3>
                      <p className="text-sm text-gray-600">Seasonal trips based on water levels and weather</p>
                    </CardContent>
                  </Card>
                </div>
                <Link href="/activities/white-water-kayaking/guided-trips">
                  <Button className="btnPrimary">
                    Explore Guided Trips
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Rental Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Equipment Rental
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Don&apos;t have your own gear? No problem! We provide high-quality kayaking equipment including 
                  kayaks, paddles, helmets, and safety gear. All our equipment is regularly inspected and 
                  maintained to ensure your safety and comfort on the water.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-[--color-primary] pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Gear Sets</h3>
                    <p className="text-gray-700">Kayak, paddle, helmet, life jacket, and wetsuit packages</p>
                  </div>
                  <div className="border-l-4 border-[--color-primary] pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Equipment</h3>
                    <p className="text-gray-700">Top brands like Pyranha, Werner, and Sweet Protection</p>
                  </div>
                  <div className="border-l-4 border-[--color-primary] pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Rental</h3>
                    <p className="text-gray-700">Daily, weekly, or seasonal rental options available</p>
                  </div>
                </div>
                <Link href="/activities/white-water-kayaking/equipment-rental">
                  <Button className="btnPrimary">
                    Rent Equipment
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 relative w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/unloading-kayak.jpg"
                  alt="Kayaking equipment"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <Waves className="h-16 w-16 text-[--color-primary] mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Rapids?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of adventurers who have discovered the thrill of white water kayaking with us. 
              Your next adventure is just one click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/activities/white-water-kayaking/courses">
                <Button className="btnPrimary w-full sm:w-auto">
                  Start Learning Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
    </>
  )
}
