"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" aria-hidden />
  }

  const isDark = (resolvedTheme ?? theme) === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:border-foreground/30 transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <Sun className={`absolute h-4 w-4 transition-all ${isDark ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}`} />
      <Moon className={`absolute h-4 w-4 text-brand-yellow transition-all ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}`} />
    </button>
  )
}
