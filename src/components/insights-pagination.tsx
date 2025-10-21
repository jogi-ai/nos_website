"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface InsightsPaginationProps {
  currentPage: number
  category: string
  tag: string
}

// Mock total articles - this will be calculated from Sanity data
const TOTAL_ARTICLES = 3
const ARTICLES_PER_PAGE = 6

export default function InsightsPagination({ currentPage, category, tag }: InsightsPaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const totalPages = Math.ceil(TOTAL_ARTICLES / ARTICLES_PER_PAGE)

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString() || "")
    
    if (page > 1) {
      params.set("page", page.toString())
    } else {
      params.delete("page")
    }
    
    router.push(`/insights?${params.toString()}`)
  }

  // Don't show pagination if there's only one page or less
  if (totalPages <= 1) {
    return null
  }

  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      // Calculate start and end of middle section
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're near the beginning or end
      if (currentPage <= 3) {
        end = Math.min(totalPages - 1, 4)
      }
      if (currentPage >= totalPages - 2) {
        start = Math.max(2, totalPages - 3)
      }

      // Add ellipsis before middle section if needed
      if (start > 2) {
        pages.push("...")
      }

      // Add middle section
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis after middle section if needed
      if (end < totalPages - 1) {
        pages.push("...")
      }

      // Always show last page if it's not already included
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {getPageNumbers().map((page, index) => (
          <div key={index}>
            {page === "..." ? (
              <span className="px-3 py-2 text-gray-500">...</span>
            ) : (
              <Button
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => navigateToPage(page as number)}
                className={
                  currentPage === page
                    ? "bg-[--color-primary] text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }
              >
                {page}
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center"
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  )
}