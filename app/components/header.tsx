"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
]

const serviceLinks = [
  { href: "/services/bathroom-installation", label: "Bathroom Renovations" },
  { href: "/services/boiler-installations", label: "Boiler Installations" },
  { href: "/services/cylinder-installation", label: "Cylinder Installations" },
  { href: "/services/air-conditioning", label: "AC Installations" },
  { href: "/services/heat-pump-installations", label: "Heat Pump Installations" },
  { href: "/services/underfloor-heating-installation", label: "Underfloor Heating" },
  { href: "/services/drainage", label: "Drainage" },
  { href: "/services/emergency-repairs", label: "Emergency Repairs" },
]

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!overlay) return
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [overlay])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const transparent = overlay && !scrolled && !open
  const textMain = transparent ? "text-white" : "text-foreground"
  const textDim = transparent ? "text-white/75 hover:text-white" : "text-foreground/60 hover:text-foreground"

  return (
    <header
      className={cn(
        "top-0 z-40 w-full transition-colors duration-200",
        overlay ? "fixed" : "sticky",
        transparent ? "bg-transparent" : "bg-background border-b border-border",
      )}
    >
      {/* Emergency banner */}
      <div className="bg-[#171614] text-white">
        <div className="container mx-auto px-4 flex h-10 items-center justify-between gap-4 text-sm">
          <p className="flex items-center gap-2.5 min-w-0">
            <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
            <span className="truncate">
              <span className="font-semibold">Emergency call-out available 24/7</span>
              <span className="hidden sm:inline text-white/60">
                {" "}
                — burst pipes, gas leaks, boiler breakdowns
              </span>
            </span>
          </p>
          <a
            href="tel:02081021108"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-brand-yellow hover:text-brand-yellow-soft transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            0208 102 1108
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 flex h-[72px] items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="HH Plumbing and Gas — home">
          <Image
            src="/images/hhpg-logo.png"
            alt=""
            width={49}
            height={52}
            priority
            className="h-12 w-auto"
          />
          <span className="flex flex-col leading-none">
            <span className={cn("text-[15px] font-bold tracking-tight", textMain)}>
              HH Plumbing &amp; Gas
            </span>
            <span
              className={cn(
                "mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em]",
                transparent ? "text-white/60" : "text-muted-foreground",
              )}
            >
              London
            </span>
          </span>
        </Link>

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
                  "text-sm font-medium transition-colors",
                  active ? cn(textMain, "underline decoration-brand-yellow decoration-2 underline-offset-8") : textDim,
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="tel:02081021108"
            className={cn(
              "hidden lg:inline-flex items-center gap-2 text-sm font-semibold transition-colors",
              transparent ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-foreground",
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            0208 102 1108
          </a>
          <Link
            href="/get-a-quote"
            className={cn(
              "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors",
              transparent
                ? "bg-brand-yellow text-black hover:bg-[#E6BE00]"
                : "bg-foreground text-background hover:bg-foreground/85",
            )}
          >
            Get a quote
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "md:hidden inline-flex h-10 w-10 items-center justify-center border",
            transparent ? "border-white/40 text-white" : "border-border text-foreground",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[112px] bottom-0 z-40 overflow-y-auto border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-8 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border py-4 text-lg font-semibold text-foreground"
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
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-brand-yellow text-black"
              >
                Get a free quote
              </Link>
              <a
                href="tel:02081021108"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold border border-border text-foreground"
              >
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
