import { Metadata } from "next"
import { Suspense } from "react"
import InsightsGrid from "@/components/insights-grid"
import InsightsFilters from "@/components/insights-filters"
import InsightsPagination from "@/components/insights-pagination"

export const metadata: Metadata = {
  title: "Adventure Insights & White Water Kayaking Tips | National Outdoor School",
  description: "Discover expert insights on white water kayaking, outdoor adventures, and the best locations to learn kayaking near Bangalore and Kerala. Your ultimate guide to water sports in India.",
  keywords: "white water kayaking, kayaking near bangalore, kayaking in kerala, water sports india, outdoor adventures, kayaking courses, dandeli kayaking, coorg kayaking, kodencherry kayaking",
  openGraph: {
    title: "Adventure Insights & White Water Kayaking Tips | National Outdoor School",
    description: "Expert insights on white water kayaking, outdoor adventures, and the best locations to learn kayaking in India.",
    images: ["/og-image-insights.jpg"],
  },
}

interface SearchParams {
  category?: string
  tag?: string
  page?: string
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const resolvedParams = await searchParams
  const currentPage = parseInt(resolvedParams.page || "1")
  const selectedCategory = resolvedParams.category || ""
  const selectedTag = resolvedParams.tag || ""

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[--color-charcoal] to-[--color-primary]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Adventure Insights
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover expert tips, guides, and stories from the world of white water kayaking 
            and outdoor adventures. Your gateway to mastering water sports in India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12">
            <Suspense fallback={<div>Loading filters...</div>}>
              <InsightsFilters 
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
              />
            </Suspense>
          </div>

          {/* Articles Grid */}
          <div className="mb-12">
            <Suspense fallback={<div>Loading articles...</div>}>
              <InsightsGrid 
                page={currentPage}
                category={selectedCategory}
                tag={selectedTag}
              />
            </Suspense>
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <Suspense fallback={<div>Loading pagination...</div>}>
              <InsightsPagination 
                currentPage={currentPage}
                category={selectedCategory}
                tag={selectedTag}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-gray-900">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your passion for adventure into real skills. Join our expert-led courses 
            and experience the thrill of white water kayaking firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/activities/white-water-kayaking/courses"
              className="btnPrimary inline-flex items-center justify-center px-8 py-3 text-lg font-medium"
            >
              View Our Courses
            </a>
            <a
              href="/activities/white-water-kayaking/guided-trips"
              className="btnSecondary inline-flex items-center justify-center px-8 py-3 text-lg font-medium"
            >
              Explore Rivers
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}