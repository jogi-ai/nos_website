import Navigation from "@/components/navigation"
import CoursesSection from "@/components/courses-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navigation />
      <div className="pt-16">
        <CoursesSection />
        <Footer />
      </div>
    </main>
  )
}

