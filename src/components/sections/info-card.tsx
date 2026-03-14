import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

export interface InfoCardProps {
  icon: ReactNode
  title: string
  value?: ReactNode
  subtitle?: string
  children?: ReactNode
}

export default function InfoCard({ icon, title, value, subtitle, children }: InfoCardProps) {
  const content = children ?? value
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-charcoal">{icon}</span>
          <h3 className="font-serif text-xl font-bold">{title}</h3>
        </div>
        {content && <div className="[&>p]:mb-2">{content}</div>}
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </CardContent>
    </Card>
  )
}
