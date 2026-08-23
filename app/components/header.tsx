"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronDown, Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
]

const megaServices = [
  {
    href: "/services/bathroom-installation",
    label: "Bathroom Renovations",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=400&fit=crop&auto=format",
  },
  {
    href: "/services/boiler-installations",
    label: "Boiler Installations",
    image: "https://images.unsplash.com/photo-1751486289950-5c4898a4c773?w=500&h=400&fit=crop&auto=format",
  },
  {
    href: "/services/cylinder-installation",
    label: "Cylinder Installations",
    image: "https://images.unsplash.com/photo-1575299737366-39c143459bc5?w=500&h=400&fit=crop&auto=format",
  },
  {
    href: "/services/air-conditioning",
    label: "AC Installations",
    image: "https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=500&h=400&fit=crop&auto=format",
  },
  {
    href: "/services/heat-pump-installations",
    label: "Heat Pump Installations",
    image: "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?w=500&h=400&fit=crop&auto=format",
  },
  {
    href: "/services/underfloor-heating-installation",
    label: "Underfloor Heating",
    image: "https://images.unsplash.com/photo-1647105604066-86ea4247e217?w=500&h=400&fit=crop&auto=format",
  },
  {
    href: "/services/drainage",
    label: "Drainage",
    image: "https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=500&h=400&fit=crop&auto=format",
  },
  {
    href: "/services/emergency-repairs",
    label: "Emergency Repairs",
    image: "https://images.unsplash.com/photo-1751486289950-5c4898a4c773?w=500&h=400&fit=crop&crop=entropy&auto=format",
  },
]

const serviceLinks = megaServices.map(({ href, label }) => ({ href, label }))

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

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
    setMegaOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const enterMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const leaveMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150)
  }

  const transparent = overlay && !scrolled && !open && !megaOpen
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
            <span aria-hidden className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
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
          {/* Services mega-menu trigger */}
          <div onMouseEnter={enterMega} onMouseLeave={leaveMega}>
            <Link
              href="/services"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              onClick={() => setMegaOpen(false)}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                pathname.startsWith("/services")
                  ? cn(textMain, "underline decoration-brand-yellow decoration-2 underline-offset-8")
                  : megaOpen
                    ? textMain
                    : textDim,
              )}
            >
              Services
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform duration-200", megaOpen && "rotate-180")}
              />
            </Link>
          </div>

          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active
                    ? cn(textMain, "underline decoration-brand-yellow decoration-2 underline-offset-8")
                    : textDim,
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

      {/* Services mega menu (desktop) */}
      {megaOpen && (
        <div
          className="hidden md:block absolute inset-x-0 top-full bg-background border-b border-border shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)]"
          onMouseEnter={enterMega}
          onMouseLeave={leaveMega}
        >
          <div className="container mx-auto px-4 py-10 grid lg:grid-cols-[2.2fr_1fr] gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground border-b border-border pb-4">
                Our services
              </p>
              <div className="mt-6 grid grid-cols-2 xl:grid-cols-4 gap-4">
                {megaServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group relative block aspect-[5/4] overflow-hidden bg-brand-black"
                  >
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      className="object-cover opacity-75 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="font-semibold leading-snug text-white">{s.label}</p>
                      <ArrowRight className="mt-2 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Promo tile */}
            <Link
              href="/get-a-quote"
              className="group relative hidden lg:flex flex-col justify-end overflow-hidden bg-brand-black p-8 min-h-[320px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=700&h=800&fit=crop&auto=format"
                alt=""
                fill
                className="object-cover opacity-45 transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              />
              <div className="relative">
                <p className="text-xl font-bold tracking-tight text-white leading-snug">
                  Fixed-price quotes, back to you within the hour.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow">
                  Get a free quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[112px] bottom-0 z-40 overflow-y-auto border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-8 flex flex-col">
            <Link href="/services" className="border-b border-border py-4 text-lg font-semibold text-foreground">
              Services
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border py-4 text-lg font-semibold text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-8 mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Services
            </p>
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
