import Image from "next/image"

export interface ProfileCardProps {
  name: string
  bio: string
  imageSrc: string
  imageAlt: string
  title?: string
}

export default function ProfileCard({ name, bio, imageSrc, imageAlt, title }: ProfileCardProps) {
  return (
    <div className="mb-12">
      {title && (
        <h2 className="font-serif text-3xl font-bold mb-6" id="instructor-profile">
          {title}
        </h2>
      )}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="md:w-1/3 w-full">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>
        <div className="md:w-2/3 w-full">
          <h3 className="font-serif text-2xl font-bold text-gray-600 mb-2">{name}</h3>
          <div className="text-lg text-gray-700 whitespace-pre-line">{bio}</div>
        </div>
      </div>
    </div>
  )
}
