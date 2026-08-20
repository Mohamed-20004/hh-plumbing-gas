"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
]

const serviceLinks = [
  { href: "/services/boiler-installations", label: "Boiler Installation" },
  { href: "/services/heat-pump-installations", label: "Heat Pump Installation" },
  { href: "/services/air-conditioning", label: "Air Conditioning" },
  { href: "/services/bathroom-installation", label: "Bathroom Installation" },
  { href: "/services/underfloor-heating-installation", label: "Underfloor Heating" },
  { href: "/services/cylinder-installation", label: "Cylinder Installation" },
  { href: "/services/drainage", label: "Drainage" },
  { href: "/services/emergency-repairs", label: "Emergency Repairs" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active =
              link.href === "/services" ? pathname.startsWith("/services") : pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium underline-offset-8 decoration-2 transition-colors",
                  active
                    ? "underline decoration-brand-yellow"
                    : "text-foreground/60 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="tel:02081021108"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold hover:text-foreground/70 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            0208 102 1108
          </a>
          <Link href="/get-a-quote" className="btn-primary !py-2.5">
            Get a quote
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-border"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-8 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border py-4 text-lg font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <p className="eyebrow mt-8 mb-2">Services</p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border py-3 text-sm text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/get-a-quote" className="btn-primary w-full">
                Get a free quote
              </Link>
              <a href="tel:02081021108" className="btn-outline w-full">
                <Phone className="h-4 w-4" />
                0208 102 1108
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
