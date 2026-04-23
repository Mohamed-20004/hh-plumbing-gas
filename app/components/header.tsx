"use client"

import { Logo } from "./logo"
import { Navigation } from "./navigation"
import { MobileMenu } from "./mobile-menu"
import { useEffect, useState } from "react"
import { Phone, ShieldCheck, Instagram } from "lucide-react"
import { TikTokIcon } from "./icons/tiktok-icon"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-background/70 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      {/* Trust strip — hides when scrolled to keep chrome minimal */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-9 text-[12px] border-b border-border/40">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-foreground/70" />
              <span className="font-medium tracking-wide">Gas Safe · 630695</span>
            </span>
            <span className="hidden lg:inline h-3 w-px bg-border" aria-hidden />
            <span className="hidden lg:inline">
              London&rsquo;s trusted plumbing &amp; gas specialists
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:07712599254"
              className="group inline-flex items-center gap-2 font-semibold text-foreground hover:text-muted-foreground transition-colors"
            >
              <Phone className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              <span className="tracking-wide">07712 599254</span>
            </a>
            <span className="h-3 w-px bg-border" aria-hidden />
            <div className="flex items-center gap-1">
              <a
                href="https://www.instagram.com/hhplumbingandgas"
                target="_blank"
                rel="noopener noreferrer"
                className="h-6 w-6 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.tiktok.com/@hussainhachem1"
                target="_blank"
                rel="noopener noreferrer"
                className="h-6 w-6 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main row — logo + nav + CTA */}
      <div className="container mx-auto px-4 flex items-center justify-between h-[72px]">
        <Logo />
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  )
}
