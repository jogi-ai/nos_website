import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "White Water Kayaking Foundation Course",
      description:
        "A perfect course for beginners to learn the essential skills required to navigate white water with balance and control.",
      image: "/intro-to-white-water-kayaking.jpg",
      date: "May 22-25, 2025",
      location: "Kali River, Dandeli, Karnataka, India",
      link: "/courses/white-water-kayaking-foundation-course"
    }
  ]

  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">Upcoming Courses</h2>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
          Discover our range of immersive outdoor education courses led by expert instructors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link href={course.link} key={course.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-gray-600">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {course.date} • {course.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{course.description}</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full btnPrimary text-white">Learn More</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Button variant="outline" className="border-green-700  hover:bg-green-50">
            View All Courses
          </Button>
        </div> */}
      </div>
    </section>
  )
}

