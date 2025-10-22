"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

// Navigation structure types
interface NavItem {
  name: string
  href: string
  children?: NavItem[]
}

interface BreadcrumbItem {
  label: string
  href: string
}

export default function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Set<string>>(new Set())
  const ticking = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (path: string): BreadcrumbItem[] => {
    const segments = path.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ]

    let currentPath = ""
    for (const segment of segments) {
      currentPath += `/${segment}`
      
      // Convert URL segments to readable labels
      let label = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      
      // Special cases for better labels
      switch (segment) {
        case "white-water-kayaking":
          label = "White Water Kayaking"
          break
        case "kali-river-dandeli":
          label = "Kali River, Dandeli"
          break
        case "beginner-white-water-kayaking-course":
          label = "Beginner White Water Kayaking Course (Level 1)"
          break
        case "intermediate-white-water-kayaking-course":
          label = "Intermediate White Water Kayaking Course (Level 2)"
          break
        case "guided-day-trips":
          label = "Guided Day Trips"
          break
        case "equipment-rental":
          label = "Equipment Rental"
          break
        case "rent-equipment":
          label = "Rent Equipment"
          break
        case "multi-day-expeditions":
          label = "Multi-day Expeditions"
          break
      }
      
      breadcrumbs.push({ label, href: currentPath })
    }

    return breadcrumbs
  }

  const showBreadcrumbs = pathname && pathname !== "/"
  const breadcrumbs = showBreadcrumbs ? generateBreadcrumbs(pathname) : []

  useEffect(() => {
    // Initial scroll position
    setPrevScrollPos(window.scrollY)

    const handleScroll = () => {
      // Use requestAnimationFrame to throttle scroll events
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY

          // Only update state if there's a significant change (10px threshold)
          // This reduces the number of renders during scrolling
          if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
            // Make navbar visible when scrolling up or at the top
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
            setPrevScrollPos(currentScrollPos)
          }

          ticking.current = false
        })

        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Navigation structure
  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "Activities",
      href: "/activities",
      children: [
        {
          name: "White Water Kayaking",
          href: "/activities/white-water-kayaking",
          children: [
            // {
            //   name: "Locations",
            //   href: "/activities/white-water-kayaking/locations",
            //   children: [
            //     {
            //       name: "Dandeli, Karnataka",
            //       href: "/activities/white-water-kayaking/locations/kali-river-dandeli",
            //     },
            //     {
            //       name: "Kodencherry, Kerala",
            //       href: "/activities/white-water-kayaking/locations/kodencherry-kerala",
            //     }
            //   ]
            // },
            {
              name: "Courses",
              href: "/activities/white-water-kayaking/courses",
              children: [
                {
                  name: "Beginner White Water Kayaking Course (Level 1)",
                  href: "/activities/white-water-kayaking/courses/beginner-white-water-kayaking-course",
                },
                // {
                //   name: "Intermediate White Water Kayaking Course (Level 2)",
                //   href: "/activities/white-water-kayaking/courses/intermediate-white-water-kayaking-course",
                // }
              ]
            },
            {
              name: "Guided trips",
              href: "/activities/white-water-kayaking/guided-trips",
            },
            {
              name: "Expeditions",
              href: "/activities/white-water-kayaking/multi-day-expeditions",
            },
            {
              name: "Rent equipment",
              href: "/activities/white-water-kayaking/rent-equipment",
            }
          ]
        }
      ]
    },
    // { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ]

  const handleMegaMenuEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMegaMenu(itemName)
  }

  const handleMegaMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 150)
  }

  const toggleMobileItem = (itemName: string) => {
    const newExpanded = new Set(mobileExpandedItems)
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName)
    } else {
      newExpanded.add(itemName)
    }
    setMobileExpandedItems(newExpanded)
  }

  // Recursive component for rendering nested menu items
  const MegaMenuItem = ({ item, level = 0 }: { item: NavItem; level?: number }) => (
    <div className={`${level === 0 ? 'mb-6' : 'mb-3'}`}>
      <Link
        href={item.href}
        className={`block font-medium hover:text-green-200 transition-colors ${
          level === 0 ? 'text-lg text-white border-b border-gray-600 pb-2' : 
          level === 1 ? 'text-base text-gray-200 ml-4' : 
          level === 2 ? 'text-sm text-gray-300 ml-8' : 
          'text-sm text-gray-400 ml-12'
        }`}
      >
        {item.name}
      </Link>
      {item.children && (
        <div className="mt-2">
          {item.children.map((child, index) => (
            <MegaMenuItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )

  // Mobile navigation item component
  const MobileNavItem = ({ item, level = 0 }: { item: NavItem; level?: number }) => (
    <div className={`${level > 0 ? 'ml-4' : ''}`}>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={`block py-2 font-medium hover:text-green-200 transition-colors ${
            level === 0 ? 'text-lg' : level === 1 ? 'text-base' : 'text-sm'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
        {item.children && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleMobileItem(item.name)}
            className="text-white p-1"
          >
            {mobileExpandedItems.has(item.name) ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
      {item.children && mobileExpandedItems.has(item.name) && (
        <div className="mt-1">
          {item.children.map((child, index) => (
            <MobileNavItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <>
      <header
        className={`fixed w-full bg-black text-white z-50 transition-transform duration-300 will-change-transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
      >
        {/* Main Navigation */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wide">
            <Image src="/logo_new.svg" alt="National Outdoor School Logo" width="100" height="71" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && handleMegaMenuEnter(item.name)}
                onMouseLeave={handleMegaMenuLeave}
              >
                <Link
                  href={item.href}
                  className="font-medium hover:text-green-200 transition-colors flex items-center"
                >
                  {item.name}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white px-5 w-80">
              <nav className="flex flex-col space-y-2 mt-12">
                {navItems.map((item, index) => (
                  <MobileNavItem key={index} item={item} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Breadcrumb/Back Button Section */}
        {showBreadcrumbs && (
          <div className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-3">
              {/* Desktop: Full Breadcrumbs */}
              <nav className="hidden md:flex items-center space-x-2 text-sm">
                {breadcrumbs.map((item, index) => (
                  <div key={item.href} className="flex items-center space-x-2">
                    {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-gray-900 font-medium">{item.label}</span>
                    ) : (
                      <Link 
                        href={item.href} 
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile: Back Button */}
              {breadcrumbs.length > 1 && (
                <Link 
                  href={breadcrumbs[breadcrumbs.length - 2].href}
                  className="md:hidden inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span>Back to {breadcrumbs[breadcrumbs.length - 2].label}</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Full Width Mega Menu */}
      {activeMegaMenu && (
        <div
          className={`fixed w-full bg-black border-t border-gray-700 shadow-xl z-60 transition-transform duration-300 ${
            visible ? "translate-y-[103px]" : "-translate-y-full"
          }`}
          onMouseEnter={() => activeMegaMenu && handleMegaMenuEnter(activeMegaMenu)}
          onMouseLeave={handleMegaMenuLeave}
        >
          <div className="container mx-auto px-4 py-8">
            {navItems.find(item => item.name === activeMegaMenu)?.children && (
              <div className="grid grid-cols-4 gap-8">
                {navItems.find(item => item.name === activeMegaMenu)?.children?.map((child, index) => (
                  <div key={index} className="space-y-4">
                    <Link
                      href={child.href}
                      className="block text-lg font-semibold text-white hover:text-green-200 transition-colors border-b border-gray-600 pb-2"
                    >
                      {child.name}
                    </Link>
                    {child.children && (
                      <div className="space-y-3">
                        {child.children.map((subItem, subIndex) => (
                          <div key={subIndex} className="space-y-2">
                            <Link
                              href={subItem.href}
                              className="block text-base font-medium text-gray-200 hover:text-green-200 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                            {subItem.children && (
                              <div className="ml-4 space-y-2">
                                {subItem.children.map((locationItem, locationIndex) => (
                                  <div key={locationIndex} className="space-y-1">
                                    <Link
                                      href={locationItem.href}
                                      className="block text-sm font-medium text-gray-300 hover:text-green-200 transition-colors"
                                    >
                                      {locationItem.name}
                                    </Link>
                                    {locationItem.children && (
                                      <div className="ml-4 space-y-1">
                                        {locationItem.children.map((deepItem, deepIndex) => (
                                          <div key={deepIndex} className="space-y-1">
                                            <Link
                                              href={deepItem.href}
                                              className="block text-sm text-gray-400 hover:text-green-200 transition-colors"
                                            >
                                              {deepItem.name}
                                            </Link>
                                            {deepItem.children && (
                                              <div className="ml-4 space-y-1">
                                                {deepItem.children.map((courseItem, courseIndex) => (
                                                  <Link
                                                    key={courseIndex}
                                                    href={courseItem.href}
                                                    className="block text-xs text-gray-500 hover:text-green-200 transition-colors"
                                                  >
                                                    {courseItem.name}
                                                  </Link>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

