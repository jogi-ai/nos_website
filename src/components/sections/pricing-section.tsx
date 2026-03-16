import type { ReactNode } from "react"
import { Check, X } from "lucide-react"

export interface PricingSectionProps {
  title?: string
  amount: ReactNode
  strikethroughAmount?: string
  amountDisclaimer?: string
  included: string[]
  notIncluded: string[]
  refundPolicy: { label: string; description: string }[]
  accommodation?: ReactNode
  otherCosts?: ReactNode
}

export default function PricingSection({
  title = "Fees",
  amount,
  strikethroughAmount,
  amountDisclaimer,
  included,
  notIncluded,
  refundPolicy,
  accommodation,
  otherCosts,
}: PricingSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6" id="fees">
        {title}
      </h2>
      <div className="bg-white rounded-lg border p-6 mb-8">
        <h3 className="font-serif text-xl font-bold mb-4">Course fees</h3>
        <div className="text-xl font-bold mb-6">
          {strikethroughAmount && <span className="line-through">{strikethroughAmount}</span>} {amount}
        </div>
        {amountDisclaimer && <div className="text-sm text-gray-600 mb-6">{amountDisclaimer}</div>}
        <div className="mb-6">
          <h3 className="font-serif text-xl font-bold mb-4">What&apos;s Included</h3>
          <ul className="space-y-3">
            {included.map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-serif text-xl font-bold mb-4">What&apos;s Not Included</h3>
          <ul className="space-y-3">
            {notIncluded.map((item, i) => (
              <li key={i} className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-serif text-xl font-bold mb-4">Refund Policy</h3>
          <ul className="space-y-3">
            {refundPolicy.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="font-medium mr-2">{item.label}</span>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
        {accommodation && (
          <div className="mb-6">
            <h3 className="font-serif text-xl font-bold mb-4">Other costs</h3>
            <div className="space-y-3">{accommodation}</div>
          </div>
        )}
        {otherCosts && <div className="space-y-3">{otherCosts}</div>}
      </div>
    </div>
  )
}
