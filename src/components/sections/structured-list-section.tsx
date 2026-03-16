export interface StructuredListSectionProps {
  title: string
  sections: { heading: string; items: string[] }[]
}

export default function StructuredListSection({ title, sections }: StructuredListSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6">{title}</h2>
      <div className="space-y-8">
        {sections.map((sec, i) => (
          <div key={i}>
            <h3 className="font-serif text-xl font-bold text-gray-600 mb-3">{sec.heading}</h3>
            <ul className="space-y-2 pl-6">
              {sec.items.map((item, j) => (
                <li key={j} className="list-disc text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
