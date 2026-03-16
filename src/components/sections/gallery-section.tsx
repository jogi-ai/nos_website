import Gallery, { type GalleryItem } from "@/components/gallery"

export interface GallerySectionProps {
  items: GalleryItem[]
  title?: string
  description?: string
}

export default function GallerySection({ items, title = "Gallery", description }: GallerySectionProps) {
  if (items.length === 0) return null
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6">{title}</h2>
      {description && (
        <p className="text-lg text-gray-700 mb-6">{description}</p>
      )}
      <Gallery items={items} />
    </div>
  )
}
