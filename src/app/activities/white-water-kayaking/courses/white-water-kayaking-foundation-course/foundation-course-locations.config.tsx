/**
 * Foundation course location data – single source for all location pages.
 * Replace getFoundationCourseLocation() implementation with CMS fetch when ready.
 */

import React from "react"
import type { ScheduleTab } from "@/components/sections/schedule-tabs"

export interface FoundationCourseGalleryItem {
  id: number
  type: "image" | "video"
  thumbnail: string
  alt: string
  fullSize?: string
  videoSrc?: string
}

export interface FoundationCourseLocationMeta {
  title: string
  description: string
}

export interface FoundationCourseInfoCards {
  date: string
  dateSubtitle?: string
  location: string
  groupSize: string
  skillLevel: string
}

export interface FoundationCoursePricing {
  amount: string
  strikethroughAmount?: string
  amountDisclaimer?: string
  included: string[]
  notIncluded: string[]
  refundPolicy: { label: string; description: string }[]
  accommodation?: React.ReactNode
  otherCosts?: React.ReactNode
}

export interface FoundationCourseThingsToCarry {
  intro?: string
  essentialItems: string[]
  additionalItems?: string[]
  note?: string
}

export interface FoundationCourseInstructor {
  name: string
  bio: string
  imageSrc: string
  imageAlt: string
  title?: string
}

export interface FoundationCourseLocationData {
  slug: string
  listingLocationLabel: string
  locationLabel: string
  shortDescription?: string
  bannerImageSrc: string
  bannerImageAlt: string
  meta: FoundationCourseLocationMeta
  infoCards: FoundationCourseInfoCards
  schedule: ScheduleTab[]
  pricing: FoundationCoursePricing
  galleryItems: FoundationCourseGalleryItem[]
  galleryDescription?: string
  thingsToCarry: FoundationCourseThingsToCarry
  /** Single instructor (legacy). Ignored when `instructors` is provided. */
  instructor?: FoundationCourseInstructor
  /** Multiple instructor profiles (e.g. for location pages with several instructors). */
  instructors?: FoundationCourseInstructor[]
}

// Shared content (same for all locations)
export const FOUNDATION_COURSE_SHARED = {
  description: {
    title: "Course Description",
    paragraphs: [
      "Whitewater kayaking is a water sport where individuals navigate rivers using specialized kayaks to paddle through rapids, waves, and obstacles while maintaining control and balance.",
      "The course provides all the foundational knowledge for the student to pursue the highly exciting and rewarding journey of learning white water kayaking.",
      "The course aims to not just cover practical skills required for kayaking but also impart theoretical knowledge about dealing with river features, currents and water in general. The course will cover the basics of river safety and rescue techniques.",
      "Learning white water kayaking opens up doors to explore the world in unimaginable ways. It gives people the opportunity to reach prestine, untouched places that are only accessible by water. The sport also helps in building confidence in the outdoors, makes you more comfortable in water and helps build mental and physical resilience.",
    ],
  },
  outcomes: {
    title: "At the end of the course you will be able to:",
    items: [
      "Navigate a white water kayak in grade 2 rapids",
      "Perform basic self-rescue and rescue techniques",
      "Swim and float comfortably in grade 2 rapids",
      "Notice river features and learn to deal with them in a safe manner",
    ],
  },
  eligibility: {
    title: "Eligibility",
    items: [
      "Previous kayaking experience not required",
      "Above age 16",
      "Must not suffer from medical issues that prevents the participant from taking part in physical intensive activities",
      "Ability to swim and float comfortably in deep water with the help of a PFD",
      "Proven physical fitness",
    ],
  },
  safety: {
    title: "Safety",
    intro: "We understand that learning kayaking is an enjoyable experience when practice is conducted in the safest environment possible among highly experienced instructors and rescue professionals. Here are some highlights about safety during the course:",
    items: [
      "Practice sessions in a highly safe and secured environment",
      "Certified instructor with decades of experience in white water",
      "Certified rescue professionals on the river during the course",
      "Every instructor is a certified first aid and CPR provider",
      "High quality safety equipment like PFDs, throw ropes and helmets",
      "Beginners will not be taken in rapids above Grade 3",
    ],
  },
  curriculum: {
    title: "Curriculum",
    sections: [
      { heading: "White water kayaking introduction", items: ["Kayak design", "About kayaking equipment", "River safety briefing", "Seat positioning", "Kayak carrying technique"] },
      { heading: "Basic paddling skills", items: ["Forward stroke", "Back stroke", "Basic Rescue skills", "Wet exit", "Throw bag rescue", "T rescue", "White water swimming"] },
      { heading: "River features", items: ["Waves", "Holes", "Eddies", "Pour overs"] },
      { heading: "Core skills", items: ["Eddy in", "Eddy out", "Eskimo roll", "Ferrying", "Edge control"] },
      { heading: "Down river skills", items: ["Momentum", "Moving laterally", "Leaning", "Signals"] },
    ],
  },
} as const

const FOUNDATION_COURSE_GALLERY_ITEMS: FoundationCourseGalleryItem[] = [
  { id: 6, type: "image", thumbnail: "/kali-river-ariel-view.jpg", fullSize: "/kali-river-ariel-view.jpg", alt: "Aerial view of the Kali River" },
  { id: 7, type: "image", thumbnail: "/first-rapid.jpg", fullSize: "/first-rapid.jpg", alt: "First rapid ariel view" },
  { id: 2, type: "image", thumbnail: "/navigating-a-rapid-in-a-kayak.jpg", fullSize: "/navigating-a-rapid-in-a-kayak.jpg", alt: "Navigating the Kali River in a kayak" },
  { id: 4, type: "video", thumbnail: "/rapid-run.png", videoSrc: "/kali-rapid-run.mp4", alt: "Rapid run" },
  { id: 5, type: "image", thumbnail: "/rapid-run-2.jpg", fullSize: "/rapid-run-2.jpg", alt: "Running the first rapid" },
  { id: 8, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/bracing.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/bracing.mp4", alt: "Student learning bracing technique" },
  { id: 9, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/class-2-rapid-run.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/class-2-rapid-run.mp4", alt: "Class 2 rapid run" },
  { id: 10, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/eddy-out-and-in.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/eddy-out-and-in.mp4", alt: "Learners trying eddy out and in technique" },
  { id: 11, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/eddy-out.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/eddy-out.mp4", alt: "Learners trying eddy out and in technique" },
  { id: 12, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/forward.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/forward.mp4", alt: "Learners practicing paddling" },
  { id: 13, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/pool-practice-1.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/pool-practice-1.mov", alt: "Practicing roll in swimming pool" },
  { id: 14, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/pool-practice-2.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/pool-practice-2.mov", alt: "Practicing roll in swimming pool" },
  { id: 15, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/progress.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/progress.mov", alt: "Student making progress" },
  { id: 16, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-1.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-1.mp4", alt: "Rapid run" },
  { id: 17, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-2.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-2.mp4", alt: "River run" },
  { id: 18, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-3.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-3.mp4", alt: "River run" },
  { id: 19, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-4.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-4.mp4", alt: "River run" },
  { id: 21, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-6.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run-6.mp4", alt: "River run" },
  { id: 22, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/rapid-run.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/rapid-run.mp4", alt: "River run" },
  { id: 23, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/simple-boof-practice.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/simple-boof-practice.mp4", alt: "Boof practice" },
  { id: 24, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/simple-ferry-practice.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/simple-ferry-practice.mp4", alt: "Ferry practice" },
  { id: 25, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-1.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-1.mov", alt: "White water swimming" },
  { id: 26, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-2.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-2.mov", alt: "White water swimming" },
  { id: 27, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-3.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/course/white-water-swimming-practice-3.mov", alt: "White water swimming" },
]
const KODANCHERRY_GALLERY_ITEMS: FoundationCourseGalleryItem[] = [
  {
    id: 1,
    type: "image",
    thumbnail: "https://igutafeeling.com/uploads/nos_media/river_view.jpg",
    fullSize: "https://igutafeeling.com/uploads/nos_media/river_view.jpg",
    alt: "View of river from the bridge",
  },
  {
    id: 2,
    type: "image",
    thumbnail: "https://igutafeeling.com/uploads/nos_media/kodancherry_top_view.jpg",
    fullSize: "https://igutafeeling.com/uploads/nos_media/kodancherry_top_view.jpg",
    alt: "Kodancherry ariel view",
  },
  {  
    id: 3,
    type: "video",
    thumbnail: "https://igutafeeling.com/uploads/nos_media/game_of_thorns_thumb.jpg",
    videoSrc: "https://igutafeeling.com/uploads/nos_media/game_of_thorns.mp4", 
    alt: "Game of thorns rapid",
  },
  {  
    id: 4,
    type: "video",
    thumbnail: "https://igutafeeling.com/uploads/nos_media/pool_roll_thumb.jpg",
    videoSrc: "https://igutafeeling.com/uploads/nos_media/pool_roll.mp4", 
    alt: "Pool roll practice",
  },
  {  
    id: 5,
    type: "video",
    thumbnail: "https://igutafeeling.com/uploads/nos_media/river_roll_thumb.jpg",
    videoSrc: "https://igutafeeling.com/uploads/nos_media/river_roll.mp4", 
    alt: "Student rolling in the river",
  },
  {  
    id: 6,
    type: "video",
    thumbnail: "https://igutafeeling.com/uploads/nos_media/river_run_thumb.jpg",
    videoSrc: "https://igutafeeling.com/uploads/nos_media/river_run.mp4", 
    alt: "Students running rapids",
  },
  {  
    id: 7,
    type: "video",
    thumbnail: "https://igutafeeling.com/uploads/nos_media/bracing_thumb.jpg",
    videoSrc: "https://igutafeeling.com/uploads/nos_media/bracing.mp4", 
    alt: "Bracing technique practice",
  },
  {  
    id: 7,
    type: "video",
    thumbnail: "https://igutafeeling.com/uploads/nos_media/white_water_swimming_thumb.jpg",
    videoSrc: "https://igutafeeling.com/uploads/nos_media/white_water_swimming.mp4", 
    alt: "White water swimming practice",
  },
]
const SHIVANANDI_GALLERY_ITEMS: FoundationCourseGalleryItem[] = [
  { id: 1, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/shivanandi_kayaking/alaknanda_kayaking_1.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/shivanandi_kayaking/alaknanda_kayaking_1.mp4", alt: "Kayaking POV in Alaknanda River" },
  { id: 2, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/shivanandi_kayaking/alaknanda_kayaking_2.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/shivanandi_kayaking/alaknanda_kayaking_2.mp4", alt: "Kayaking POV in Alaknanda River" },
  { id: 3, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/kayaks_arranged.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/kayaks_arranged.jpg", alt: "Kayaks arranged in front of the lodge" },
  { id: 5, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/pool_view_msr.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/pool_view_msr.jpg", alt: "Pro kayaker practicing in the pool" },
  { id: 6, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_dogs.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_dogs.jpg", alt: "Pets at Shivanandi River Lodge" },
  { id: 7, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_food.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_food.jpg", alt: "Fresh healthy homely food" },
  { id: 8, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_main_buildings.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_main_buildings.jpg", alt: "The main lodge buildings" },
  { id: 9, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_rainbow.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_rainbow.jpg", alt: "Rainbow by the river. Surreal feeling" },
  { id: 10, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_room_1.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_room_1.jpg", alt: "A room at Shivanandi River Lodge" },
  { id: 11, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_room_2.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_room_2.jpg", alt: "A room at Shivanandi River Lodge" },
  { id: 12, type: "image", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_sunset.jpg", fullSize: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/shivanandi_sunset.jpg", alt: "A surreal sunset at Shivanandi" },
  { id: 13, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/alaknanda_kayaking.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/alaknanda_kayaking.mp4", alt: "Kayaking POV in Alaknanda River" },
  { id: 15, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/mornings_in_front_of_shivanandi.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/mornings_in_front_of_shivanandi.mp4", alt: "Mornings in front of Shivanandi River Lodge" },
  { id: 16, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/pool_kayak_msr.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/pool_kayak_msr.mp4", alt: "Pro kayaker practicing in the pool" },
  { id: 17, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/pool_roll_practice.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/pool_roll_practice.mp4", alt: "Practicing eskimo roll" },
  { id: 18, type: "video", thumbnail: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/shivanandi_walk.jpg", videoSrc: "https://igutafeeling.com/uploads/nos_media/kids_kayaking/videos/shivanandi_walk.mp4", alt: "Walking around Shivanandi River Lodge" },
]
const LOCATIONS: FoundationCourseLocationData[] = [
  {
    slug: "kali-river-dandeli-karnataka",
    listingLocationLabel: "Dandeli, Karnataka",
    locationLabel: "Kali River, Dandeli, Karnataka",
    shortDescription: "A perfect destination for beginners to learn white water kayaking in the serene surroundings of the Western Ghats.",
    bannerImageSrc: "/kayaking-course-bg.jpg",
    bannerImageAlt: "White water kayaking on the Kali River in Dandeli",
    meta: {
      title: "White Water Kayaking Foundation Course in Dandeli, Karnataka | National Outdoor School",
      description: "Master the fundamentals of white water kayaking on the Kali River, Dandeli. 4-day foundation course with certified instructors.",
    },
    infoCards: {
      date: "Jan, Feb, Mar, Sept, Oct, Nov",
      dateSubtitle: "",
      location: "Kali River, Dandeli, Karnataka",
      groupSize: "Maximum 5 participants per batch",
      skillLevel: "Beginner",
    },
    schedule: [
      {
        value: "all-days",
        label: "All days",
        items: [
          { time: "6:30am - 7:00am", title: "Exercise / Warm up / Yoga" },
          { time: "7:00am - 7:30am", title: "Breakfast" },
          { time: "7:45am - 8:15am", title: "Travel to training location" },
          { time: "8:30am - 1:00pm", title: "Theory & Practical Sessions on the river (with 30 minutes break)" },
          { time: "1:30pm - 2:30pm", title: "Lunch" },
          { time: "2:30pm onwards", title: "Practice / Pool Sessions (optional)" },
        ],
      }
    ],
    pricing: {
      amount: "₹4,500 / head / day",
      strikethroughAmount: "₹5000",
      included: [
        "Professional instruction from certified kayaking instructors",
        "All kayaking equipment (kayak, paddle, spray skirt, helmet, life jacket)",
        "Safety equipment and first aid",
        "Course completion certificate",
      ],
      notIncluded: ["Accommodation", "Transportation to course location", "Food & Beverages"],
      refundPolicy: [
        { label: "100% refund:", description: "If cancelled 20+ days before course start date" },
        { label: "50% refund:", description: "If cancelled 15-19 days before course start date" },
        { label: "30% refund:", description: "If cancelled 7-14 days before course start date" },
        { label: "No refund:", description: "If cancelled less than 7 days before course start date" },
      ],
      accommodation: (
        <>
          <p className="font-medium"><strong>Accommodation:</strong></p>
          <p>Approximately Rs. 1500 per head per day including meals at:</p>
          <p>
            <a href="https://share.google/C1RVf6KqtvnOFuvi2" target="_blank" rel="noopener noreferrer" className="underline">
              Fireflies Resort, Ganesh Gudi, Dandeli (1.5 km from the training location)
            </a>
          </p>
          <p>You are free to choose your own accommodation anywhere in Ganesh Gudi.</p>
          <p><strong>Permit to access the river:</strong></p>
          <p>Rs. 350 - Rs. 500 / head / day depending on the length of the river section accessed.</p>
          <p>Rs. 700 / head / day if 11km stretch is accessed (Only open to experienced paddlers).</p>
          <p><strong>Transportation and other logistics</strong></p>
          <p>Approximately Rs. 150 / head (Only on the days when we do river runs which typically happens on 3rd and 4th day of the course depending on progress and river conditions)</p>
        </>
      ),
    },
    galleryItems: FOUNDATION_COURSE_GALLERY_ITEMS,
    galleryDescription: "Get a glimpse of the exciting experiences that await you on our White Water Kayaking Foundation Course. These images showcase the beautiful river environments, learning moments, and the thrill of kayaking.",
    thingsToCarry: {
      intro: "To ensure you have a comfortable experience during the White Water Kayaking Foundation Course, please bring the following items with you:",
      essentialItems: [
        "Quick-dry clothing (synthetic or wool, avoid cotton)",
        "Swimming shorts/trunks",
        "Water shoes or sneakers (that can get wet)",
        "Sunscreen (water-resistant, SPF 30+)",
        "Towel",
        "Water bottle (1 liter minimum)",
        "ID Proof",
      ],
      additionalItems: [
        "Sunglasses",
        "Hat or cap",
        "Lightweight rain jacket",
        "Dry bag for personal items",
        "Insect repellent",
        "Personal medications",
        "Camera (waterproof)",
        "Snacks for energy between meals",
        "Small first aid kit",
      ],
      note: "All specialized kayaking equipment (kayak, paddle, spray skirt, helmet, life jacket) will be provided by National Outdoor School. Please do not bring valuables that cannot be secured, as we cannot be responsible for lost or damaged items during river activities.",
    },
    instructor: {
      name: "Jogi Nayak",
      imageSrc: "/jogi-instructor-dp.jpg",
      imageAlt: "Jogi Nayak",
      title: "Instructor Profile",
      bio: `Jogi is a passionate kayaker and an advocate for the sport. His passion for the sport has made him explore more than 20+ rivers across India, Nepal and USA. He believes that kayaking is not just a sport, but a way of life that connects people with nature and helps them discover their true potential. He is committed to sharing his knowledge and experience with others, and helping them develop their skills and confidence on the water.

He is certified as a White Water Rescue Technician from Rescue 3 international, Swift Water Rescue Technician from ITRA and river guide from US National White Water Center. He has previously trained over 100 students at General Thimayya National Academy of Adventure and various other kayaking schools in India.

His mission with National Outdoor School is to make white water kayaking accessible to all, create a community of kayakers who are passionate about the sport and the environment, and produce athletes in India that reach the world stage.`,
    },
  },
  {
    slug: "kodancherry-kerala",
    listingLocationLabel: "Kodancherry, Kerala",
    locationLabel: "Kodancherry, Kerala",
    shortDescription: "Perfect location for beginners and intermediate paddlers to step up their kayaking skills.",
    bannerImageSrc: "/kayaking-course-bg.jpg",
    bannerImageAlt: "White water kayaking course in Kodancherry, Kerala",
    meta: {
      title: "White Water Kayaking Foundation Course in Kodancherry, Kerala | National Outdoor School",
      description: "Learn white water kayaking in Kodancherry, Kerala. 4-day foundation course with certified instructors. Paddling, safety, and river skills.",
    },
    infoCards: {
      date: "Jun, Jul, Aug, Sept",
      location: "Kodancherry, Kerala",
      groupSize: "Maximum 5 participants per batch",
      skillLevel: "Beginner",
    },
    schedule: [
      {
        value: "all-days",
        label: "All days",
        items: [
          { time: "6:30am - 7:00am", title: "Exercise / Warm up / Yoga" },
          { time: "7:00am - 7:30am", title: "Breakfast" },
          { time: "7:45am - 8:15am", title: "Travel to training location" },
          { time: "8:30am - 1:00pm", title: "Theory & Practical Sessions on the river (with 30 minutes break)" },
          { time: "1:30pm - 2:30pm", title: "Lunch" },
          { time: "2:30pm onwards", title: "Practice / Pool Sessions (optional)" },
        ],
      },
    ],
    pricing: {
      amount: "₹4,500 / head / day",
      strikethroughAmount: "₹5000",
      included: [
        "Professional instruction from certified kayaking instructors",
        "All kayaking equipment (kayak, paddle, spray skirt, helmet, life jacket)",
        "Safety equipment and first aid",
        "Course completion certificate",
      ],
      notIncluded: ["Accommodation", "Transportation to course location", "Food & Beverages"],
      refundPolicy: [
        { label: "100% refund:", description: "If cancelled 20+ days before course start date" },
        { label: "50% refund:", description: "If cancelled 15-19 days before course start date" },
        { label: "30% refund:", description: "If cancelled 7-14 days before course start date" },
        { label: "No refund:", description: "If cancelled less than 7 days before course start date" },
      ]
    },
    galleryItems: KODANCHERRY_GALLERY_ITEMS,
    thingsToCarry: {
      intro: "To ensure you have a comfortable experience during the White Water Kayaking Foundation Course, please bring the following items with you:",
      essentialItems: [
        "Quick-dry clothing (synthetic or wool, avoid cotton)",
        "Swimming shorts/trunks",
        "Water shoes or sneakers (that can get wet)",
        "Sunscreen (water-resistant, SPF 30+)",
        "Towel",
        "Water bottle (1 liter minimum)",
        "ID Proof",
      ],
      additionalItems: ["Sunglasses", "Hat or cap", "Lightweight rain jacket", "Dry bag", "Insect repellent", "Personal medications", "Camera (waterproof)", "Snacks", "Small first aid kit"],
      note: "All specialized kayaking equipment will be provided by National Outdoor School.",
    },
    instructor: {
      name: "Jogi Nayak",
      imageSrc: "/jogi-instructor-dp.jpg",
      imageAlt: "Jogi Nayak",
      title: "Instructor Profile",
      bio: `Jogi is a passionate kayaker and an advocate for the sport. His passion for the sport has made him explore more than 20+ rivers across India, Nepal and USA. He believes that kayaking is not just a sport, but a way of life that connects people with nature and helps them discover their true potential. He is committed to sharing his knowledge and experience with others, and helping them develop their skills and confidence on the water.
He is certified as a White Water Rescue Technician from Rescue 3 international, Swift Water Rescue Technician from ITRA and river guide from US National White Water Center. He has previously trained over 100 students at General Thimayya National Academy of Adventure and various other kayaking schools in India.
His mission with National Outdoor School is to make white water kayaking accessible to all, create a community of kayakers who are passionate about the sport and the environment, and produce athletes in India that reach the world stage.`,
    },
  },
  {
    slug: "shivanandi-river-lodge-rudraprayag-uttarakhand",
    listingLocationLabel: "Rudraprayag, Uttarakhand",
    locationLabel: "Shivanandi River Lodge, Rudraprayag, Uttarakhand",
    shortDescription: "An all inclusive course in the Alaknanda river valley with food and accommodation at our base in Shivanandi River Lodge.",
    bannerImageSrc: "https://igutafeeling.com/uploads/nos_media/shivanandi_kayaking/course_banner.jpg",
    bannerImageAlt: "White water kayaking at Shivanandi River Lodge in Rudraprayag, Uttarakhand",
    meta: {
      title: "White Water Kayaking Foundation Course with base at Shivanandi River Lodge, Rudraprayag, Uttarakhand | National Outdoor School",
      description: "An all inclusive white water kayaking foundation course in the Alaknanda river valley with food and accommodation at our base in Shivanandi River Lodge.",
    },
    infoCards: {
      date: "Apr, May, Oct, Nov",
      location: "Shivanandi River Lodge, Rudraprayag, Uttarakhand",
      groupSize: "Maximum 5 participants per batch",
      skillLevel: "Beginner",
    },
    schedule: [
      // {
      //   value: "all-days",
      //   label: "All days",
      //   items: [
      //     { time: "6:30am - 7:00am", title: "Exercise / Warm up / Yoga" },
      //     { time: "7:00am - 7:30am", title: "Breakfast" },
      //     { time: "7:45am - 8:15am", title: "Travel to training location" },
      //     { time: "8:30am - 1:00pm", title: "Theory & Practical Sessions on the river (with 30 minutes break)" },
      //     { time: "1:30pm - 2:30pm", title: "Lunch" },
      //     { time: "2:30pm onwards", title: "Practice / Pool Sessions (optional)" },
      //   ],
      // },
    ],
    pricing: {
      amount: "₹9,000 / head / day", 
      strikethroughAmount: "₹10,000",
      amountDisclaimer: "*Special discount for past customers - reach out to us for more details*",
      included: [
        "Professional instruction from highly experienced and certified kayaking instructors",
        "All whitewater kayaking (kayak, paddle, spray skirt, helmet, life jacket, dry top) and safety equipment ",
        "Safety kayakers on river trips",
        "Accommodation in a room at Shivanandi River Lodge",
        "Breakfast, Lunch, Dinner and Evening Chai",
        "Transportation for River Trips on the Alaknanda River",
        "Course completion certificate from National Outdoor School"
      ],
      notIncluded: [ "Transportation to course location", "Beverages"],
      refundPolicy: [
        { label: "100% refund:", description: "If cancelled 20+ days before course start date" },
        { label: "50% refund:", description: "If cancelled 15-19 days before course start date" },
        { label: "30% refund:", description: "If cancelled 7-14 days before course start date" },
        { label: "No refund:", description: "If cancelled less than 7 days before course start date" },
      ]
    },
    galleryItems: SHIVANANDI_GALLERY_ITEMS,
    thingsToCarry: {
      intro: "To ensure you have a comfortable experience during the White Water Kayaking Foundation Course, please bring the following items with you:",
      essentialItems: [
        "Quick-dry clothing (synthetic or wool, avoid cotton)",
        "Swimming shorts/trunks",
        "Water shoes or sneakers (that can get wet)",
        "Sunscreen (water-resistant, SPF 30+)",
        "Towel",
        "Water bottle (1 liter minimum)",
        "ID Proof",
      ],
      additionalItems: ["Sunglasses", "Hat or cap", "Lightweight rain jacket", "Dry bag", "Insect repellent", "Personal medications", "Camera (waterproof)", "Snacks", "Small first aid kit"],
      note: "All specialized kayaking equipment will be provided by National Outdoor School.",
    },
    instructors: [
      {
        name: "Shalabh Gahlaut",
        imageSrc: "https://igutafeeling.com/uploads/nos_media/shalabh.jpg",
        imageAlt: "Shalabh Gahlaut",
        bio: `Shalabh is a pioneer of white water kayaking in India with decades of experience in the sport and is the first to kayak a number of rivers in the Indian sub-continent.

Shalabh has vast experience in teaching children. He is a father of 2 daughters and has helped his children to become passionate kayakers and environmentally conscious individuals with a deep love for nature and the outdoors.

His family built Shivanandi River Lodge together wishing it to be a place of relaxation, a place close to the mountains and rivers, and a home for the family. The family home evolved into a lodge and a popular destination among adventure and outdoors enthusiasts, especially among kayakers from across the world.`,
      },
      {
        name: "Arjun Sagoi",
        imageSrc: "https://igutafeeling.com/uploads/nos_media/arjun.jpg",
        imageAlt: "Arjun Sagoi",
        bio: `Arjun is a highly accomplished white water kayaker in India. He is the founder along with Shalabh Gahlaut of Alakananda Whitewater, a leading white water kayaking and rafting company in India. Arjun has vast experience working as a river guide and rescue professional in reputed white water kayaking and rafting companies in India and Iceland.

Arjun wishes to share his vast knowledge about kayaking, rivers and mountains with children and help them to become better individuals.`,
      },
      {
        name: "Jogi Nayak",
        imageSrc: "/jogi-instructor-dp.jpg",
        imageAlt: "Jogi Nayak",
        bio: `Jogi is a passionate kayaker and an advocate for the sport. His passion for white water kayaking has made him explore more than 25+ rivers across various countries.

He is certified as a White Water Rescue Technician from Rescue 3 international, Level 2 Swift Water Rescue Professional from ITRA and a certified river guide from US National White Water Center, which is the training ground for olympic level athletes.

He believes that white water kayaking is not just a sport, but a way of life that connects people with nature and helps them discover their true potential. He is committed to sharing his knowledge and experience with others, and helping them develop their skills and confidence on the water and outdoors.

Jogi's mission with National Outdoor School is to make quality outdoor education accessible to all and build a community of nature lovers, outdoor sports enthusiasts and world class athletes.`,
      },
      {
        name: "Daman Singh",
        imageSrc: "/Daman-Dp.jpg",
        imageAlt: "Daman Singh",
        bio: `Daman Singh is a highly accomplished white water kayaker in India. He has won accolades in International competitions and has vast experience across rivers in India, Nepal and Iceland. He loves sharing his knowledge and experience with others, guiding them into becoming better paddlers. He is among top white water kayakers in the country.

Daman is also a certified white water rescue professional. He has vast experience working as a river guide in reputed companies like Alakananda Whitewater, India and Arctic Rafting, Iceland.`,
      },
    ],
  },
]

const LOCATIONS_BY_SLUG = new Map(LOCATIONS.map((loc) => [loc.slug, loc]))

/** Get a single location by slug. Replace this with CMS fetch when ready. */
export function getFoundationCourseLocation(slug: string): FoundationCourseLocationData | null {
  return LOCATIONS_BY_SLUG.get(slug) ?? null
}

/** Get list of locations for overview page. */
export function getFoundationCourseLocationList(): { slug: string; listingLocationLabel: string; locationLabel: string; shortDescription?: string }[] {
  return LOCATIONS.map(({ slug, listingLocationLabel, locationLabel, shortDescription }) => ({
    slug,
    listingLocationLabel,
    locationLabel,
    shortDescription,
  }))
}

/** All valid location slugs for generateStaticParams. */
export function getFoundationCourseLocationSlugs(): string[] {
  return LOCATIONS.map((loc) => loc.slug)
}
