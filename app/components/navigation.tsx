"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { ChevronDown, ArrowUpRight } from "lucide-react"
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
      label: "Boiler Installation",
      hint: "Combi · System · Regular",
    },
    {
      href: "/services/heat-pump-installations",
      label: "Heat Pump Installation",
      hint: "Air · Ground · Hybrid",
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
  ]

  return (
    <nav className="hidden md:flex items-center gap-1">
      <div className="flex items-center rounded-full border border-border/70 bg-background/50 backdrop-blur px-1 py-1">
        {mainLinks.map((link) => {
          const active = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                active
                  ? "bg-foreground text-background"
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/[0.04]",
              )}
            >
              {link.label}
            </Link>
          )
        })}

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={cn(
              "group flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
              pathname.startsWith("/services")
                ? "bg-foreground text-background"
                : "text-foreground/70 hover:text-foreground hover:bg-foreground/[0.04]",
            )}
            aria-expanded={isServicesOpen}
            aria-haspopup="true"
          >
            Services
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isServicesOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[380px] rounded-2xl border border-border bg-popover text-popover-foreground shadow-lift z-50 overflow-hidden animate-fade-up">
              <div className="p-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 hover:bg-foreground/[0.04] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div>
                      <p className="text-sm font-semibold">{service.label}</p>
                      <p className="text-xs text-muted-foreground">{service.hint}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                ))}
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

      <Link href="/get-a-quote" className="btn-primary ml-2 !py-2 !px-5 !text-[13px]">
        Get a Quote
      </Link>

      <div className="ml-2 pl-2 border-l border-border/60">
        <ThemeToggle />
      </div>
    </nav>
  )
}
