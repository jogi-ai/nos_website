"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { getArticles, Article } from "@/lib/sanity"
import { urlFor } from "@/sanity/lib/image"

interface InsightsGridProps {
  page: number
  category: string
  tag: string
}

export default function InsightsGrid({ page, category, tag }: InsightsGridProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      
      try {
        // Fetch regular articles
        const { articles: regularArticles, totalPages: pages } = await getArticles({
          category,
          tag,
          page,
          pageSize: 6,
          featured: false
        })
        
        // Fetch featured articles only on first page and no filters
        let featured: Article[] = []
        if (page === 1 && !category && !tag) {
          const { articles: featuredResults } = await getArticles({
            featured: true,
            pageSize: 1
          })
          featured = featuredResults
        }
        
        setArticles(regularArticles)
        setFeaturedArticles(featured)
        setTotalPages(pages)
      } catch (error) {
        console.error('Error fetching articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [category, tag, page])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    })
  }

  const getImageUrl = (image: Article['mainImage']) => {
    if (image?.asset?.url) {
      return image.asset.url
    }
    if (image?.asset?._ref) {
      return urlFor(image).width(800).height(400).quality(80).url()
    }
    return '/placeholder-article.jpg' // Fallback image
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-96" />
        ))}
      </div>
    )
  }

  if (articles.length === 0 && featuredArticles.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
        <p className="text-gray-600">Try adjusting your filters or check back later for new content.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      {featuredArticles.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Article</h2>
          {featuredArticles.slice(0, 1).map((article) => (
            <Link 
              key={article._id} 
              href={`/insights/${article.categories[0]?.slug.current}/${article.slug.current}`}
              className="block group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={getImageUrl(article.mainImage)}
                      alt={article.mainImage?.alt || article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-[--color-primary] text-white">
                        {article.categories[0]?.title}
                      </Badge>
                      <span className="text-sm text-gray-500">Featured</span>
                    </div>
                    <CardTitle className="font-serif text-2xl lg:text-3xl text-gray-900 mb-4 group-hover:text-[--color-primary] transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg leading-relaxed mb-6">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(article.publishedAt)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-[--color-primary] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Regular Articles Grid */}
      {articles.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {featuredArticles.length > 0 ? "More Articles" : "Latest Articles"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                key={article._id} 
                href={`/insights/${article.categories[0]?.slug.current}/${article.slug.current}`}
                className="block group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={getImageUrl(article.mainImage)}
                      alt={article.mainImage?.alt || article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[--color-primary] text-white text-xs">
                        {article.categories[0]?.title}
                      </Badge>
                    </div>
                    <CardTitle className="font-serif text-xl text-gray-900 group-hover:text-[--color-primary] transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                    
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.publishedAt)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}