"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { ChevronDown, ArrowUpRight, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/contact-us", label: "Contact" },
  ]

  const serviceLinks = [
    {
      href: "/services/boiler-installations",
      label: "Gas Installation & Repair",
      hint: "Boilers · Cookers · Pipework",
    },
    {
      href: "/services/heat-pump-installations",
      label: "Heat Pump Installation",
      hint: "Air · Ground · Hybrid",
    },
    {
      href: "/services/bathroom-installation",
      label: "Bathroom Installation",
      hint: "Design & full fit",
    },
    {
      href: "/services/underfloor-heating-installation",
      label: "Underfloor Heating",
      hint: "Wet · Electric systems",
    },
    {
      href: "/services/cylinder-installation",
      label: "Cylinder Installation",
      hint: "Direct · Indirect",
    },
    {
      href: "/services/drainage",
      label: "Drainage",
      hint: "Unblocking · CCTV · Repairs",
    },
    {
      href: "/services/emergency-repairs",
      label: "Emergency Repairs",
      hint: "24/7 Gas Safe response",
    },
  ]

  const isServicesActive = pathname.startsWith("/services")

  return (
    <nav className="hidden md:flex items-center gap-1">
      <div className="flex items-center gap-1">
        {mainLinks.map((link) => {
          const active = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground",
              )}
            >
              {link.label}
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-brand-yellow transition-all duration-300",
                  active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 origin-center",
                )}
              />
            </Link>
          )
        })}

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={cn(
              "relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
              isServicesActive
                ? "text-foreground"
                : "text-foreground/60 hover:text-foreground",
            )}
            aria-expanded={isServicesOpen}
            aria-haspopup="true"
          >
            Services
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                isServicesOpen && "rotate-180",
              )}
            />
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-brand-yellow transition-all duration-300",
                isServicesActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 origin-center",
              )}
            />
          </button>

          {isServicesOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[420px] rounded-lg border border-border bg-popover text-popover-foreground shadow-lift z-50 overflow-hidden animate-fade-up">
              <div className="p-2">
                {serviceLinks.map((service) => {
                  const active = pathname === service.href
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={cn(
                        "group flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors",
                        active
                          ? "bg-brand-yellow/10"
                          : "hover:bg-foreground/[0.04]",
                      )}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div>
                        <p className="text-sm font-semibold">{service.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{service.hint}</p>
                      </div>
                      <ArrowUpRight
                        className={cn(
                          "h-4 w-4 transition-all",
                          active
                            ? "text-brand-yellow opacity-100"
                            : "text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
                        )}
                      />
                    </Link>
                  )
                })}
              </div>
              <div className="border-t border-border bg-foreground/[0.02] px-4 py-3">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-semibold"
                  onClick={() => setIsServicesOpen(false)}
                >
                  <span className="border-b border-brand-yellow pb-0.5">View all services</span>
                  <ArrowUpRight className="h-4 w-4 text-brand-yellow transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <a
        href="tel:07712599254"
        className="ml-6 hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-foreground/75 hover:text-foreground transition-colors"
      >
        <Phone className="h-3.5 w-3.5" />
        07712 599254
      </a>

      <Link
        href="/get-a-quote"
        className="group ml-4 inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2 text-sm font-semibold transition-colors hover:bg-foreground/90"
      >
        Get a quote
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>

      <div className="ml-2 pl-2 border-l border-border/60">
        <ThemeToggle />
      </div>
    </nav>
  )
}
