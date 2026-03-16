"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useSwipeable } from "react-swipeable"

// Gallery item type – supplied via items prop (e.g. from location config or shared constants below)
export type GalleryItem = {
  id: number;
  type: "image" | "video";
  thumbnail: string;
  alt: string;
  fullSize?: string;
  videoSrc?: string;
};

/** Shared gallery data for Kali River kayaking trip page. */
export const KALI_KAYAKING_TRIP_ITEMS: GalleryItem[] = [
  { id: 6, type: "image", thumbnail: "/kali-river-ariel-view.jpg", fullSize: "/kali-river-ariel-view.jpg", alt: "Aerial view of the Kali River" },
  { id: 7, type: "image", thumbnail: "/first-rapid.jpg", fullSize: "/first-rapid.jpg", alt: "First rapid ariel view" },
  { id: 2, type: "image", thumbnail: "/navigating-a-rapid-in-a-kayak.jpg", fullSize: "/navigating-a-rapid-in-a-kayak.jpg", alt: "Navigating the Kali River in a kayak" },
  { id: 4, type: "video", thumbnail: "/rapid-run.png", videoSrc: "/kali-rapid-run.mp4", alt: "Rapid run" },
  { id: 5, type: "image", thumbnail: "/rapid-run-2.jpg", fullSize: "/rapid-run-2.jpg", alt: "Running the first rapid" },
  { id: 16, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-1.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-1.mp4", alt: "Rapid run" },
  { id: 17, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-2.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-2.mp4", alt: "River run" },
  { id: 18, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-3.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-3.mp4", alt: "River run" },
  { id: 19, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-4.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-4.mp4", alt: "River run" },
  { id: 21, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-6.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-6.mp4", alt: "River run" },
  { id: 22, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run.mp4", alt: "River run" },
  { id: 23, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-1.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-1.mp4", alt: "River run" },
  { id: 24, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-2.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-2.mp4", alt: "River run" },
  { id: 25, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-3.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kali_kayaking/vid-3.mp4", alt: "River run" },
];

/** Shared gallery data for kids kayaking camp page. */
export const KIDS_KAYAKING_CAMP_ITEMS: GalleryItem[] = [
  { id: 1, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/family_shivanandi.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/family_shivanandi.jpg", alt: "Family enjoying their time at Shivanandi River Lodge" },
  { id: 2, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/kayaks_arranged.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/kayaks_arranged.jpg", alt: "Kayaks arranged in front of the lodge" },
  { id: 3, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/kids_rafting.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/kids_rafting.jpg", alt: "Kids enjoyingrafting on Alaknanda River" },
  { id: 4, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/pool_kayak_session.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/pool_kayak_session.jpg", alt: "Kids enjoying a pool kayak session" },
  { id: 5, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/pool_view_msr.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/pool_view_msr.jpg", alt: "Pro kayaker practicing in the pool" },
  { id: 6, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_dogs.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_dogs.jpg", alt: "Pets at Shivanandi River Lodge" },
  { id: 7, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_food.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_food.jpg", alt: "Fresh healthy homely food" },
  { id: 8, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_main_buildings.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_main_buildings.jpg", alt: "The main lodge buildings" },
  { id: 9, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_rainbow.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_rainbow.jpg", alt: "Rainbow by the river. Surreal feeling" },
  { id: 10, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_room_1.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_room_1.jpg", alt: "A room at Shivanandi River Lodge" },
  { id: 11, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_room_2.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_room_2.jpg", alt: "A room at Shivanandi River Lodge" },
  { id: 12, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_sunset.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_sunset.jpg", alt: "A surreal sunset at Shivanandi" },
  { id: 13, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/alaknanda_kayaking.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/alaknanda_kayaking.mp4", alt: "Kayaking POV in Alaknanda River" },
  { id: 14, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/eddy_practice.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/eddy_practice.mp4", alt: "Eddy practice" },
  { id: 15, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/mornings_in_front_of_shivanandi.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/mornings_in_front_of_shivanandi.mp4", alt: "Mornings in front of Shivanandi River Lodge" },
  { id: 16, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/pool_kayak_msr.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/pool_kayak_msr.mp4", alt: "Kayaking practice in the pool" },
  { id: 17, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/pool_roll_practice.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/pool_roll_practice.mp4", alt: "Practicing eskimo roll" },
  { id: 18, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/shivanandi_walk.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/shivanandi_walk.mp4", alt: "Walking around Shivanandi River Lodge" },
];

/** Shared gallery data for Shivanandi (compact view). */
export const SHIVANANDI_ITEMS: GalleryItem[] = [
  { id: 12, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_sunset.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_sunset.jpg", alt: "A surreal sunset at Shivanandi" },
  { id: 1, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_aerial_view.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_aerial_view.jpg", alt: "Shivanandi River Lodge Aerial View" },
  { id: 9, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_rainbow.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_rainbow.jpg", alt: "Rainbow by the river. Surreal feeling" },
  { id: 8, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_main_buildings.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_main_buildings.jpg", alt: "The main lodge buildings" },
];

type CourseGalleryProps = {
  items: GalleryItem[];
  columns?: 2 | 4;
};

export default function CourseGallery({ items, columns = 4 }: CourseGalleryProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const gridClass = columns === 2
    ? "grid grid-cols-2 gap-4"
    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

  const openGallery = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }, [items.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }, [items.length])

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
  }, [open, handleNext, handlePrevious])

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  })
  if (items.length === 0) return null

  const currentItem = items[currentIndex]

  return (
    <>
      <div className={gridClass}>
        {items.map((item, index) => (
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
              {currentIndex + 1} of {items.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
