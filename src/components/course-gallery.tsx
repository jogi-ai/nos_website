"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useSwipeable } from "react-swipeable"

// Sample gallery items - in a real application, this would come from a database or CMS
const galleryItems = [
  {
    id: 1,
    type: "image",
    thumbnail: "/roll-practice.jpg",
    fullSize: "/roll-practice.jpg",
    alt: "Eskimo roll practice",
  },
  {
    id: 2,
    type: "image",
    thumbnail: "/navigating-a-rapid-in-a-kayak.jpg",
    fullSize: "/navigating-a-rapid-in-a-kayak.jpg",
    alt: "Navigating the Kali River in a kayak",
  },
  {
    id: 3,
    type: "image",
    thumbnail: "/eskimo-roll-in-a-rapid.jpg",
    fullSize: "/eskimo-roll-in-a-rapid.jpg",
    alt: "Eskimo roll in a rapid",
  },
  {
    id: 4,
    type: "video",
    thumbnail: "/rapid-run.png",
    videoSrc: "/kali-rapid-run.mp4", 
    alt: "Rapid run",
  },
  {
    id: 5,
    type: "image",
    thumbnail: "/rapid-run-2.jpg",
    fullSize: "/rapid-run-2.jpg",
    alt: "Running the first rapid",
  },
  {
    id: 6,
    type: "image",
    thumbnail: "/kali-river-ariel-view.jpg",
    fullSize: "/kali-river-ariel-view.jpg",
    alt: "Aerial view of the Kali River",
  },
  {
    id: 7,
    type: "image",
    thumbnail: "/first-rapid.jpg",
    fullSize: "/first-rapid.jpg",
    alt: "First rapid ariel view",
  },
  {
    id: 8,
    type: "image",
    thumbnail: "/unloading-kayak.jpg",
    fullSize: "/unloading-kayak.jpg",
    alt: "Kayaker preparing equipment",
  },
]

export default function CourseGallery() {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const openGallery = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return

      if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open])

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  const currentItem = galleryItems[currentIndex]

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openGallery(index)}
          >
            <Image src={item.thumbnail || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black/90 border-none">
          <div className="relative h-[80vh] w-full flex items-center justify-center" {...swipeHandlers}>
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 text-white hover:bg-white/20"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 text-white hover:bg-white/20"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </Button>

            {/* Media content */}
            <div className="w-full h-full flex items-center justify-center p-8">
              {currentItem.type === "image" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={currentItem.fullSize || "/placeholder.svg"}
                    alt={currentItem.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={currentItem.videoSrc}
                    controls
                    autoPlay
                    className="max-h-full max-w-full"
                    poster={currentItem.thumbnail}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>

          {/* Caption */}
          <div className="p-4 bg-black text-white text-center">
            <p>{currentItem.alt}</p>
            <p className="text-sm text-gray-400">
              {currentIndex + 1} of {galleryItems.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
