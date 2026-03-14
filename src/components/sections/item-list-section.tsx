import { Check } from "lucide-react"

export interface ItemListSectionProps {
  title?: string
  intro?: string
  essentialItems: string[]
  additionalItems?: string[]
  note?: string
}

export default function ItemListSection({
  title = "Things to Carry",
  intro,
  essentialItems,
  additionalItems = [],
  note,
}: ItemListSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6">{title}</h2>
      <div className="bg-white rounded-lg border p-6 mb-12">
        {intro && <p className="text-lg text-gray-700 mb-6">{intro}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Essential Items</h3>
            <ul className="space-y-2">
              {essentialItems.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {additionalItems.length > 0 && (
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Additional Good To Have Items</h3>
              <ul className="space-y-2">
                {additionalItems.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {note && (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="font-serif text-lg font-bold text-amber-800 mb-2">Important Note</h3>
            <p>{note}</p>
          </div>
        )}
      </div>
    </div>
  )
}
