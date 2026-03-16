import CourseGallery, { type GalleryItem } from "@/components/course-gallery"

export interface ImageGalleryProps {
  items: GalleryItem[]
  title?: string
  description?: string
}

export default function ImageGallery({ items, title = "Gallery", description }: ImageGalleryProps) {
  if (items.length === 0) return null
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6">{title}</h2>
      {description && (
        <p className="text-lg text-gray-700 mb-6">{description}</p>
      )}
      <CourseGallery items={items} />
    </div>
  )
}
