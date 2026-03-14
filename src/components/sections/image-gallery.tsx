import CourseGallery, { type GalleryName } from "@/components/course-gallery"

export interface ImageGalleryProps {
  galleryName?: GalleryName
  title?: string
  description?: string
}

export default function ImageGallery({ galleryName, title = "Gallery", description }: ImageGalleryProps) {
  if (!galleryName) return null
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6">{title}</h2>
      {description && (
        <p className="text-lg text-gray-700 mb-6">{description}</p>
      )}
      <CourseGallery galleryName={galleryName} />
    </div>
  )
}
