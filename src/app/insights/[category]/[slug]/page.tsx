import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react"
import { getArticle } from "@/lib/sanity"
import { RichText } from "@/components/rich-text"
import { urlFor } from "@/sanity/lib/image"

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}): Promise<Metadata> {
  const { category, slug } = await params
  const article = await getArticle(category, slug)
  
  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found."
    }
  }

  const imageUrl = article.seo?.ogImage?.asset?.url || 
                   (article.mainImage?.asset ? urlFor(article.mainImage).width(1200).height(630).url() : undefined)

  return {
    title: article.seo?.metaTitle || article.title,
    description: article.seo?.metaDescription || article.excerpt,
    keywords: article.seo?.keywords,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author?.name || 'Unknown'],
    },
    alternates: {
      canonical: `/insights/${category}/${slug}`,
    },
  }
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}) {
  const { category, slug } = await params
  const article = await getArticle(category, slug)

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getImageUrl = () => {
    if (article.mainImage?.asset?.url) {
      return article.mainImage.asset.url
    }
    if (article.mainImage?.asset?._ref) {
      return urlFor(article.mainImage).width(1200).height(600).quality(80).url()
    }
    return '/placeholder-article.jpg'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Insights */}
      <div className="bg-stone-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/insights" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Meta Information */}
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-[--color-primary] text-white">
                {article.categories[0]?.title}
              </Badge>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(article.publishedAt)}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Author and Tags */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="mb-4 sm:mb-0">
                <p className="text-gray-600">
                  By <span className="font-medium text-gray-900">{article.author?.name || 'Unknown'}</span>
                </p>
              </div>
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 mb-12 rounded-xl overflow-hidden">
              <Image
                src={getImageUrl()}
                alt={article.mainImage?.alt || article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <RichText content={article.body} />
            </div>

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-to-r from-[--color-charcoal] to-[--color-primary] rounded-xl text-center">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Ready to Start Your Kayaking Journey?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Don&apos;t just read about the adventure - experience it! Join our expert-led courses and discover the thrill of white water kayaking for yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/activities/white-water-kayaking/courses">
                  <Button className="bg-white text-[--color-charcoal] hover:bg-gray-100 font-medium px-8 py-3">
                    View Our Courses
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[--color-charcoal] px-8 py-3">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
              Continue Your Adventure
            </h2>
            <div className="text-center">
              <Link href="/insights">
                <Button className="btnPrimary">
                  Read More Articles
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}