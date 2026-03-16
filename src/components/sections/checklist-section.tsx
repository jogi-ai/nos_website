import { CheckCircle } from "lucide-react"

export interface ChecklistSectionProps {
  title: string
  items: string[]
  intro?: string
}

export default function ChecklistSection({ title, items, intro }: ChecklistSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6">{title}</h2>
      {intro && <p className="text-lg text-gray-700 mb-6">{intro}</p>}
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className="h-6 w-6 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
