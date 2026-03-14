import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export interface SectionAlertProps {
  message: string
  variant?: "default" | "amber"
  badge?: string
}

export default function SectionAlert({ message, variant = "amber", badge }: SectionAlertProps) {
  return (
    <Alert className={`mb-8 ${variant === "amber" ? "border-amber-500 bg-amber-50" : ""}`}>
      <AlertTriangle className="h-5 w-5 text-amber-500" />
      <AlertDescription className="flex items-center justify-between">
        <span className="text-amber-800 font-medium">{message}</span>
        {badge && (
          <span className="rounded border border-amber-300 bg-amber-100 px-2 py-0.5 text-sm text-amber-800">
            {badge}
          </span>
        )}
      </AlertDescription>
    </Alert>
  )
}
