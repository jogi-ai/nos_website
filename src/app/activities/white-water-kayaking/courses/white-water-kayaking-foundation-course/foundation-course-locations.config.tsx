/**
 * Foundation course location data – single source for all location pages.
 * Replace getFoundationCourseLocation() implementation with CMS fetch when ready.
 */

import React from "react"
import type { ScheduleTab } from "@/components/sections/schedule-tabs"

// Gallery names must match CourseGallery's GalleryName type
export type FoundationCourseGalleryName = "foundation-course" | "kali-kayaking-trip" | "kids-kayaking-camp" | "shivanandi"

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
  locationLabel: string
  shortDescription?: string
  meta: FoundationCourseLocationMeta
  infoCards: FoundationCourseInfoCards
  schedule: ScheduleTab[]
  pricing: FoundationCoursePricing
  galleryName: FoundationCourseGalleryName
  galleryDescription?: string
  thingsToCarry: FoundationCourseThingsToCarry
  instructor: FoundationCourseInstructor
}

// Shared content (same for all locations)
export const FOUNDATION_COURSE_SHARED = {
  description: {
    title: "Course Description",
    paragraphs: [
      "Whitewater kayaking is a water sport where individuals navigate rivers using specialized kayaks to paddle through rapids, waves, and obstacles while maintaining control and balance.",
      "The course provides all the foundational knowledge for the student to pursue the highly exciting and rewarding journey of learning white water kayaking.",
      "The course aims to not just cover practical skills required for kayaking but also impart theoretical knowledge through off-the-river sessions to understand river features and currents, which we believe aids in faster learning.",
    ],
  },
  outcomes: {
    title: "At the end of the course you will be able to:",
    items: [
      "Navigate a white water kayak in grade 2 rapids",
      "Perform basic rescue and self-rescue techniques",
      "Swim and float comfortably in grade 2 rapids",
      "Notice river features and learn to deal with them",
    ],
  },
  eligibility: {
    title: "Eligibility",
    items: [
      "Previous kayaking experience not required",
      "Above age 15",
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
      "Certified instructor with 13 years of experience in white water",
      "Certified rescue professionals on the river during the course along with the instructor",
      "High quality safety equipment like PFDs, throw ropes, helmet and airbags",
      "Beginners will not be taken in rapids above Grade 3",
    ],
  },
  curriculum: {
    title: "Curriculum",
    sections: [
      { heading: "White water kayaking introduction", items: ["Kayak design", "About kayaking equipment", "River safety briefing", "Seat positioning", "Kayak carrying technique"] },
      { heading: "Basic paddling skills", items: ["Forward stroke", "Back stroke", "Basic Rescue skills", "Wet exit", "Throw bag rescue", "T rescue", "White water swimming"] },
      { heading: "River features", items: ["Waves", "Holes", "Eddies", "Pour overs"] },
      { heading: "Core skills", items: ["Eddy in", "Eddy out", "Eskimo roll", "Ferrying"] },
      { heading: "Down river skills", items: ["Momentum", "Moving laterally", "Leaning", "Signals"] },
    ],
  },
} as const

const LOCATIONS: FoundationCourseLocationData[] = [
  {
    slug: "kali-river-dandeli-karnataka",
    locationLabel: "Kali River, Dandeli, Karnataka",
    shortDescription: "Kayak on the Kali River in the Western Ghats.",
    meta: {
      title: "White Water Kayaking Foundation Course in Dandeli, Karnataka | National Outdoor School",
      description: "Master the fundamentals of white water kayaking on the Kali River, Dandeli. 4-day foundation course with certified instructors. Learn paddling, safety, and eskimo roll.",
    },
    infoCards: {
      date: "Feb 22nd - March 8th 2026",
      dateSubtitle: "*Join any 4 days",
      location: "Kali River, Dandeli, Karnataka",
      groupSize: "Maximum 5 participants per batch",
      skillLevel: "Beginner",
    },
    schedule: [
      {
        value: "weekday",
        label: "Thursday - Saturday",
        items: [
          { time: "6:30am - 7:00am", title: "Exercise / Warm up / Yoga" },
          { time: "7:00am - 7:30am", title: "Breakfast" },
          { time: "7:45am - 8:15am", title: "Travel to training location" },
          { time: "8:30am - 1:00pm", title: "Theory & Practical Sessions on the river (with 30 minutes break)" },
          { time: "1:30pm - 2:30pm", title: "Lunch" },
          { time: "2:30pm onwards", title: "Practice / Pool Sessions (optional)" },
        ],
      },
      {
        value: "weekend",
        label: "Sunday",
        items: [
          { time: "6:30am - 7:00am", title: "Exercise / Warm up / Yoga" },
          { time: "7:00am - 7:30am", title: "Breakfast" },
          { time: "7:45am - 8:15am", title: "Travel to training location" },
          { time: "8:30am - 1:00pm", title: "Theory & Practical Sessions on the river (with 30 minutes break)" },
          { time: "1:30pm - 2:30pm", title: "Lunch" },
          { time: "3:00pm - 4:30pm", title: "River run" },
        ],
      },
    ],
    pricing: {
      amount: "₹18,000/- per head (Rs. 4,500 per day)",
      strikethroughAmount: "₹22,000",
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
    galleryName: "foundation-course",
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
    slug: "kondencherry-kerala",
    locationLabel: "Kondencherry, Kerala",
    shortDescription: "White water kayaking in the scenic rivers of Kerala.",
    meta: {
      title: "White Water Kayaking Foundation Course in Kondencherry, Kerala | National Outdoor School",
      description: "Learn white water kayaking in Kondencherry, Kerala. 4-day foundation course with certified instructors. Paddling, safety, and river skills.",
    },
    infoCards: {
      date: "TBD",
      location: "Kondencherry, Kerala",
      groupSize: "Maximum 5 participants per batch",
      skillLevel: "Beginner",
    },
    schedule: [
      { value: "weekday", label: "Thursday - Saturday", items: [] },
      { value: "weekend", label: "Sunday", items: [] },
    ],
    pricing: {
      amount: "TBD",
      included: [],
      notIncluded: ["Accommodation", "Transportation", "Food & Beverages"],
      refundPolicy: [],
    },
    galleryName: "foundation-course",
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
      bio: "Certified instructor with 13+ years of experience. Details TBD for this location.",
    },
  },
  {
    slug: "shivanandi-river-lodge-rudraprayag-uttarakhand",
    locationLabel: "Shivanandi River Lodge, Rudraprayag, Uttarakhand",
    shortDescription: "Foundation course at Shivanandi River Lodge in the Himalayas.",
    meta: {
      title: "White Water Kayaking Foundation Course in Rudraprayag, Uttarakhand | National Outdoor School",
      description: "Learn white water kayaking at Shivanandi River Lodge, Rudraprayag. 4-day foundation course in the Himalayas with certified instructors.",
    },
    infoCards: {
      date: "TBD",
      location: "Shivanandi River Lodge, Rudraprayag, Uttarakhand",
      groupSize: "Maximum 5 participants per batch",
      skillLevel: "Beginner",
    },
    schedule: [
      { value: "weekday", label: "Thursday - Saturday", items: [] },
      { value: "weekend", label: "Sunday", items: [] },
    ],
    pricing: {
      amount: "TBD",
      included: [],
      notIncluded: ["Accommodation", "Transportation", "Food & Beverages"],
      refundPolicy: [],
    },
    galleryName: "foundation-course",
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
      bio: "Certified instructor with 13+ years of experience. Details TBD for this location.",
    },
  },
]

const LOCATIONS_BY_SLUG = new Map(LOCATIONS.map((loc) => [loc.slug, loc]))

/** Get a single location by slug. Replace this with CMS fetch when ready. */
export function getFoundationCourseLocation(slug: string): FoundationCourseLocationData | null {
  return LOCATIONS_BY_SLUG.get(slug) ?? null
}

/** Get list of locations for overview page. */
export function getFoundationCourseLocationList(): { slug: string; locationLabel: string; shortDescription?: string }[] {
  return LOCATIONS.map(({ slug, locationLabel, shortDescription }) => ({
    slug,
    locationLabel,
    shortDescription,
  }))
}

/** All valid location slugs for generateStaticParams. */
export function getFoundationCourseLocationSlugs(): string[] {
  return LOCATIONS.map((loc) => loc.slug)
}
