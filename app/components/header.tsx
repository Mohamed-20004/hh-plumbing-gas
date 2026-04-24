"use client"

import { Logo } from "./logo"
import { Navigation } from "./navigation"
import { MobileMenu } from "./mobile-menu"
import { useEffect, useState } from "react"

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
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-background/80 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-[68px]">
        <Logo />
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  )
}
