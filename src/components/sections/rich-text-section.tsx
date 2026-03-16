import type { ReactNode } from "react"

export interface RichTextSectionProps {
  title: string
  children?: ReactNode
  paragraphs?: string[]
}

export default function RichTextSection({ title, children, paragraphs }: RichTextSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6">{title}</h2>
      {children}
      {paragraphs?.map((p, i) => (
        <p key={i} className="text-lg text-gray-700 mb-6">
          {p}
        </p>
      ))}
    </div>
  )
}
