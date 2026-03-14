"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock } from "lucide-react"

export interface ScheduleItem {
  time: string
  title: string
  description?: string
}

export interface ScheduleTab {
  value: string
  label: string
  items: ScheduleItem[]
}

export interface ScheduleTabsProps {
  title?: string
  tabs: ScheduleTab[]
  defaultTab?: string
}

export default function ScheduleTabs({ title = "Daily Schedule", tabs, defaultTab }: ScheduleTabsProps) {
  const firstValue = defaultTab ?? tabs[0]?.value
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold mb-6">{title}</h2>
      <Tabs defaultValue={firstValue} className="mb-12">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="border rounded-lg p-6">
            <h3 className="font-serif text-xl font-bold text-gray-600 mb-4">
              {tab.label} Schedule
            </h3>
            <ul className="space-y-4">
              {tab.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">{item.time}</span>
                    <p>{item.title}</p>
                    {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
