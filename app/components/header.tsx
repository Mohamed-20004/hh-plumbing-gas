"use client"

import { Logo } from "./logo"
import { Navigation } from "./navigation"
import { MobileMenu } from "./mobile-menu"
import { ScrollProgress } from "./motion"
import { useEffect, useRef, useState } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      // Hide when scrolling down past the header, reveal on any scroll up
      if (y > lastY.current && y > 160) {
        setHidden(true)
      } else if (y < lastY.current - 2) {
        setHidden(false)
      }
      lastY.current = y
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
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
      <ScrollProgress />
    </header>
  )
}
