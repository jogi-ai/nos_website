"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useSwipeable } from "react-swipeable"

// Sample gallery items - in a real application, this would come from a database or CMS
const galleryItems = {
  "foundation-course":[
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
      id: 2,
      type: "image",
      thumbnail: "/navigating-a-rapid-in-a-kayak.jpg",
      fullSize: "/navigating-a-rapid-in-a-kayak.jpg",
      alt: "Navigating the Kali River in a kayak",
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
      id: 8,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/bracing.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/bracing.mp4",
      alt: "Student learning bracing technique",
    },
    {
      id: 9,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/class-2-rapid-run.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/class-2-rapid-run.mp4",
      alt: "Class 2 rapid run",
    },
    {
      id: 10,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/eddy-out-and-in.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/eddy-out-and-in.mp4",
      alt: "Learners trying eddy out and in technique",
    },
    {
      id: 11,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/eddy-out.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/eddy-out.mp4",
      alt: "Learners trying eddy out and in technique",
    },
    {
      id: 12,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/forward.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/forward.mp4",
      alt: "Learners practicing paddling",
    },
    {
      id: 13,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/pool-practice-1.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/pool-practice-1.mov",
      alt: "Practicing roll in swimming pool",
    },
    {
      id: 14,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/pool-practice-2.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/pool-practice-2.mov",
      alt: "Practicing roll in swimming pool",
    },
    {
      id: 15,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/progress.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/progress.mov",
      alt: "Student making progress",
    },
    {
      id: 16,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-1.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-1.mp4",
      alt: "Rapid run",
    },
    {
      id: 17,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-2.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-2.mp4",
      alt: "River run",
    },
    {
      id: 18,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-3.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-3.mp4",
      alt: "River run",
    },
    {
      id: 19,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-4.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-4.mp4",
      alt: "River run",
    },
    {
      id: 21,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-6.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-6.mp4",
      alt: "River run",
    },
    {
      id: 22,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run.mp4",
      alt: "River run",
    },
    {
      id: 23,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/simple-boof-practice.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/simple-boof-practice.mp4",
      alt: "Boof practice",
    },
    {
      id: 24,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/simple-ferry-practice.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/simple-ferry-practice.mp4",
      alt: "Ferry practice",
    },
    {
      id: 25,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-1.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-1.mov",
      alt: "White water swimming",
    },
    {
      id: 26,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-2.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-2.mov",
      alt: "White water swimming",
    },
    {
      id: 27,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-3.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-3.mov",
      alt: "White water swimming",
    }
  ],
  "kali-kayaking-trip":[
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
      id: 2,
      type: "image",
      thumbnail: "/navigating-a-rapid-in-a-kayak.jpg",
      fullSize: "/navigating-a-rapid-in-a-kayak.jpg",
      alt: "Navigating the Kali River in a kayak",
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
      id: 16,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-1.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-1.mp4",
      alt: "Rapid run",
    },
    {
      id: 17,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-2.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-2.mp4",
      alt: "River run",
    },
    {
      id: 18,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-3.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-3.mp4",
      alt: "River run",
    },
    {
      id: 19,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-4.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-4.mp4",
      alt: "River run",
    },
    {
      id: 21,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-6.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-6.mp4",
      alt: "River run",
    },
    {
      id: 22,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run.mp4",
      alt: "River run",
    },
    {
      id: 23,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-1.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-1.mp4",
      alt: "River run",
    },
    {
      id: 24,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-2.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-2.mp4",
      alt: "River run",
    },
    {
      id: 25,
      type: "video",
      thumbnail: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-3.jpg",
      videoSrc: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-3.mp4",
      alt: "River run",
    }
  ]
}
// const galleryItems = [
//   {
//     id: 1,
//     type: "image",
//     thumbnail: "https://igutafeeling.com/uploads/nos_media/river_view.jpg",
//     fullSize: "https://igutafeeling.com/uploads/nos_media/river_view.jpg",
//     alt: "View of river from the bridge",
//   },
//   {
//     id: 2,
//     type: "image",
//     thumbnail: "https://igutafeeling.com/uploads/nos_media/kodencherry_top_view.jpg",
//     fullSize: "https://igutafeeling.com/uploads/nos_media/kodencherry_top_view.jpg",
//     alt: "Kodencherry ariel view",
//   },
//   {  
//     id: 3,
//     type: "video",
//     thumbnail: "https://igutafeeling.com/uploads/nos_media/game_of_thorns_thumb.jpg",
//     videoSrc: "https://igutafeeling.com/uploads/nos_media/game_of_thorns.mp4", 
//     alt: "Game of thorns rapid",
//   },
//   {  
//     id: 4,
//     type: "video",
//     thumbnail: "https://igutafeeling.com/uploads/nos_media/pool_roll_thumb.jpg",
//     videoSrc: "https://igutafeeling.com/uploads/nos_media/pool_roll.mp4", 
//     alt: "Pool roll practice",
//   },
//   {  
//     id: 5,
//     type: "video",
//     thumbnail: "https://igutafeeling.com/uploads/nos_media/river_roll_thumb.jpg",
//     videoSrc: "https://igutafeeling.com/uploads/nos_media/river_roll.mp4", 
//     alt: "Student rolling in the river",
//   },
//   {  
//     id: 6,
//     type: "video",
//     thumbnail: "https://igutafeeling.com/uploads/nos_media/river_run_thumb.jpg",
//     videoSrc: "https://igutafeeling.com/uploads/nos_media/river_run.mp4", 
//     alt: "Students running rapids",
//   },
//   {  
//     id: 7,
//     type: "video",
//     thumbnail: "https://igutafeeling.com/uploads/nos_media/bracing_thumb.jpg",
//     videoSrc: "https://igutafeeling.com/uploads/nos_media/bracing.mp4", 
//     alt: "Bracing technique practice",
//   },
//   {  
//     id: 7,
//     type: "video",
//     thumbnail: "https://igutafeeling.com/uploads/nos_media/white_water_swimming_thumb.jpg",
//     videoSrc: "https://igutafeeling.com/uploads/nos_media/white_water_swimming.mp4", 
//     alt: "White water swimming practice",
//   },
// ]

export default function CourseGallery({ galleryName } : { galleryName: string }) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const openGallery = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems[galleryName].length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryItems[galleryName].length - 1 ? 0 : prevIndex + 1))
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
  console.log(galleryItems, galleryName);
  const currentItem = galleryItems[galleryName][currentIndex]

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems[galleryName].map((item, index) => (
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
              {currentIndex + 1} of {galleryItems[galleryName].length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
