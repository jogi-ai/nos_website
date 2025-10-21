import { client } from '@/sanity/lib/client'
import groq from 'groq'

export interface Article {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  author: {
    name: string
    slug: {
      current: string
    }
  }
  mainImage: {
    asset: {
      _ref: string
      url?: string
    }
    alt: string
  }
  categories: Array<{
    title: string
    slug: {
      current: string
    }
  }>
  tags: string[]
  readTime: string
  featured: boolean
  publishedAt: string
  body: any[]
  seo: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    ogImage?: {
      asset: {
        url: string
      }
    }
  }
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

// Fetch all categories
export async function getCategories(): Promise<Category[]> {
  const query = groq`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `
  
  return client.fetch(query)
}

// Fetch all unique tags
export async function getTags(): Promise<string[]> {
  const query = groq`
    array::unique(*[_type == "post" && defined(tags)].tags[])
  `
  
  return client.fetch(query)
}

// Fetch articles with filtering and pagination
export async function getArticles({
  category,
  tag,
  page = 1,
  pageSize = 6,
  featured = false
}: {
  category?: string
  tag?: string
  page?: number
  pageSize?: number
  featured?: boolean
} = {}): Promise<{
  articles: Article[]
  totalCount: number
  totalPages: number
}> {
  let categoryFilter = ''
  let tagFilter = ''
  let featuredFilter = featured ? ' && featured == true' : ''

  if (category) {
    categoryFilter = ` && references(*[_type == "category" && slug.current == "${category}"]._id)`
  }

  if (tag) {
    tagFilter = ` && "${tag}" in tags[]`
  }

  const filters = `*[_type == "post"${categoryFilter}${tagFilter}${featuredFilter}]`
  const offset = (page - 1) * pageSize

  // Get total count
  const countQuery = `count(${filters})`
  const totalCount = await client.fetch(countQuery)

  // Get articles
  const articlesQuery = groq`
    ${filters} | order(publishedAt desc) [${offset}...${offset + pageSize}] {
      _id,
      title,
      slug,
      excerpt,
      author-> {
        name,
        slug
      },
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      categories[]-> {
        title,
        slug
      },
      tags,
      readTime,
      featured,
      publishedAt,
      seo
    }
  `

  const articles = await client.fetch(articlesQuery)
  const totalPages = Math.ceil(totalCount / pageSize)

  return {
    articles,
    totalCount,
    totalPages
  }
}

// Fetch a single article by category and slug
export async function getArticle(categorySlug: string, articleSlug: string): Promise<Article | null> {
  const query = groq`
    *[_type == "post" && slug.current == $articleSlug && references(*[_type == "category" && slug.current == $categorySlug]._id)][0] {
      _id,
      title,
      slug,
      excerpt,
      author-> {
        name,
        slug
      },
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      categories[]-> {
        title,
        slug
      },
      tags,
      readTime,
      featured,
      publishedAt,
      body,
      seo {
        metaTitle,
        metaDescription,
        keywords,
        ogImage {
          asset-> {
            url
          }
        }
      }
    }
  `

  return client.fetch(query, { categorySlug, articleSlug })
}

// Fetch featured articles
export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  const query = groq`
    *[_type == "post" && featured == true] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      author-> {
        name,
        slug
      },
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      categories[]-> {
        title,
        slug
      },
      tags,
      readTime,
      featured,
      publishedAt
    }
  `

  return client.fetch(query)
}

// Fetch related articles by category
export async function getRelatedArticles(articleId: string, categoryIds: string[], limit = 3): Promise<Article[]> {
  const query = groq`
    *[_type == "post" && _id != $articleId && count((categories[]._ref)[@ in $categoryIds]) > 0] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      author-> {
        name,
        slug
      },
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      categories[]-> {
        title,
        slug
      },
      tags,
      readTime,
      publishedAt
    }
  `

  return client.fetch(query, { articleId, categoryIds })
}