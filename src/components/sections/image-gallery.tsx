import CourseGallery, { type GalleryItem, type GalleryName } from "@/components/course-gallery"

export interface ImageGalleryProps {
  /** Gallery items (e.g. from location config). When provided, galleryName is ignored. */
  items?: GalleryItem[]
  galleryName?: GalleryName
  title?: string
  description?: string
}

export default function ImageGallery({ items, galleryName, title = "Gallery", description }: ImageGalleryProps) {
  const hasContent = (items?.length ?? 0) > 0 || galleryName
  if (!hasContent) return null
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6">{title}</h2>
      {description && (
        <p className="text-lg text-gray-700 mb-6">{description}</p>
      )}
      <CourseGallery items={items} galleryName={galleryName} />
    </div>
  )
}
