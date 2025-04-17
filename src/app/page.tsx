import Navigation from "@/components/navigation"
import AboutSection from "@/components/about-section"
import CoursesSection from "@/components/courses-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navigation />
      <div className="pt-16">
        {" "}
        {/* Add padding to account for fixed nav */}
        <AboutSection />
        <CoursesSection />
        <Footer />
      </div>
    </main>
  )
}

