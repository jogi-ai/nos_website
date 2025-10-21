"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getCategories, getTags, Category } from "@/lib/sanity"

interface InsightsFiltersProps {
  selectedCategory: string
  selectedTag: string
}

export default function InsightsFilters({ selectedCategory, selectedTag }: InsightsFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [categories, setCategories] = useState<Category[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [categoriesData, tagsData] = await Promise.all([
          getCategories(),
          getTags()
        ])
        
        setCategories(categoriesData)
        setTags(tagsData.sort())
      } catch (error) {
        console.error('Error fetching filters:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFilters()
  }, [])

  const updateFilters = (category: string, tag: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "")
    
    if (category && category !== "All Categories") {
      // Find the category slug
      const categoryData = categories.find(cat => cat.title === category)
      if (categoryData) {
        params.set("category", categoryData.slug.current)
      }
    } else {
      params.delete("category")
    }
    
    if (tag) {
      params.set("tag", tag)
    } else {
      params.delete("tag")
    }
    
    // Reset to page 1 when filters change
    params.delete("page")
    
    router.push(`/insights?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push("/insights")
  }

  // Find the current category title from slug
  const getCurrentCategoryTitle = () => {
    if (!selectedCategory) return ""
    const category = categories.find(cat => cat.slug.current === selectedCategory)
    return category?.title || ""
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-8 bg-gray-200 rounded w-20"></div>
            ))}
          </div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-16 mb-3"></div>
          <div className="flex gap-2 flex-wrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-200 rounded w-16"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const allCategories = ["All Categories", ...categories.map(cat => cat.title)]
  const currentCategoryTitle = getCurrentCategoryTitle()

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => {
            const isSelected = category === "All Categories" 
              ? !selectedCategory 
              : category === currentCategoryTitle
              
            return (
              <Button
                key={category}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilters(category, selectedTag)}
                className={isSelected
                  ? "bg-[--color-primary] text-white" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }
              >
                {category}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                className={`cursor-pointer transition-colors ${
                  selectedTag === tag 
                    ? "bg-[--color-primary] text-white hover:bg-[--color-primary]/90" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => updateFilters(currentCategoryTitle, selectedTag === tag ? "" : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Clear Filters */}
      {(selectedCategory || selectedTag) && (
        <div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearFilters}
            className="text-gray-600 border-gray-300 hover:bg-gray-50"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  )
}