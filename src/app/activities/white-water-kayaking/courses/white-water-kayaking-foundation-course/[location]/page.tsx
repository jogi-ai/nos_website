import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  getFoundationCourseLocation,
  getFoundationCourseLocationSlugs,
  FOUNDATION_COURSE_SHARED,
} from "../foundation-course-locations.config"
import CourseRegistrationForm from "@/components/course-registration-form"
import RegisterButton from "@/components/register-button"
import InfoCard from "@/components/sections/info-card"
import SectionAlert from "@/components/sections/section-alert"
import RichTextSection from "@/components/sections/rich-text-section"
import ChecklistSection from "@/components/sections/checklist-section"
import StructuredListSection from "@/components/sections/structured-list-section"
import ScheduleTabs from "@/components/sections/schedule-tabs"
import PricingSection from "@/components/sections/pricing-section"
import ImageGallery from "@/components/sections/image-gallery"
import ItemListSection from "@/components/sections/item-list-section"
import ProfileCard from "@/components/sections/profile-card"
import { Calendar, MapPin, Users, Award } from "lucide-react"
import type { Metadata } from "next"

const COURSE_BASE_PATH = "/activities/white-water-kayaking/courses/white-water-kayaking-foundation-course"
const SITE_URL = "https://nationaloutdoorschool.com"

interface PageProps {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return getFoundationCourseLocationSlugs().map((location) => ({ location }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: slug } = await params
  const data = getFoundationCourseLocation(slug)
  if (!data) return { title: "Course | National Outdoor School" }
  return {
    title: data.meta.title,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `${SITE_URL}${COURSE_BASE_PATH}/${data.slug}`,
      siteName: "National Outdoor School",
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}${COURSE_BASE_PATH}/${data.slug}`,
    },
  }
}

export default async function FoundationCourseLocationPage({ params }: PageProps) {
  const { location: slug } = await params
  const data = getFoundationCourseLocation(slug)
  if (!data) notFound()

  const shared = FOUNDATION_COURSE_SHARED

  return (
    <>
      <div className="relative w-full h-[70vh]">
        <div className="absolute inset-0 bg-black/10 z-10 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              White Water Kayaking Foundation Course - Level 1
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium drop-shadow-lg">
              {data.locationLabel}
            </p>
            <p className="mt-4 text-white/90">
              <Link href={COURSE_BASE_PATH} className="underline">
                View other locations
              </Link>
            </p>
          </div>
        </div>
        <Image
          src="/kayaking-course-bg.jpg"
          alt="White Water Kayaking"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionAlert message="Limited availability for this course!" />
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <RichTextSection
                title={shared.description.title}
                paragraphs={shared.description.paragraphs.slice()}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <InfoCard
                  icon={<Calendar className="h-6 w-6 text-charcoal" />}
                  title="Upcoming course date"
                  value={data.infoCards.date}
                  subtitle={data.infoCards.dateSubtitle}
                />
                <InfoCard
                  icon={<MapPin className="h-6 w-6 text-charcoal" />}
                  title="Location"
                  value={data.infoCards.location}
                />
                <InfoCard
                  icon={<Users className="h-6 w-6 text-charcoal" />}
                  title="Group Size"
                  value={data.infoCards.groupSize}
                />
                <InfoCard
                  icon={<Award className="h-6 w-6 text-charcoal" />}
                  title="Skill Level"
                  value={data.infoCards.skillLevel}
                />
              </div>

              <ChecklistSection title={shared.outcomes.title} items={[...shared.outcomes.items]} />
              <ChecklistSection title={shared.eligibility.title} items={[...shared.eligibility.items]} />

              <ChecklistSection
                title={shared.safety.title}
                intro={shared.safety.intro}
                items={[...shared.safety.items]}
              />

              <StructuredListSection
                title={shared.curriculum.title}
                sections={shared.curriculum.sections.map((s) => ({ heading: s.heading, items: [...s.items] }))}
              />

              {data.schedule.some((t) => t.items.length > 0) && (
                <ScheduleTabs tabs={data.schedule} />
              )}

              <PricingSection
                amount={data.pricing.amount}
                strikethroughAmount={data.pricing.strikethroughAmount}
                included={data.pricing.included}
                notIncluded={data.pricing.notIncluded}
                refundPolicy={data.pricing.refundPolicy}
                accommodation={data.pricing.accommodation}
                otherCosts={data.pricing.otherCosts}
              />

              <ImageGallery
                galleryName={data.galleryName}
                title="Gallery"
                description={data.galleryDescription}
              />

              <ItemListSection
                title="Things to Carry"
                intro={data.thingsToCarry.intro}
                essentialItems={data.thingsToCarry.essentialItems}
                additionalItems={data.thingsToCarry.additionalItems}
                note={data.thingsToCarry.note}
              />

              <ProfileCard
                name={data.instructor.name}
                bio={data.instructor.bio}
                imageSrc={data.instructor.imageSrc}
                imageAlt={data.instructor.imageAlt}
                title={data.instructor.title}
              />
            </div>

            <div className="lg:w-1/3 course-registration-form">
              <div className="sticky top-20 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary text-white p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Enquiry form</h3>
                  <p className="text-green-100">Register your interest and we will get back as soon as possible</p>
                </div>
                <div className="p-6">
                  <CourseRegistrationForm
                    courseName="White Water Kayaking Foundation Course"
                    location={data.locationLabel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegisterButton />
    </>
  )
}
