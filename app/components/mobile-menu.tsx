"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowUpRight, Phone } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const EASE = [0.22, 1, 0.36, 1] as const

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesExpanded, setIsServicesExpanded] = useState(false)
  const pathname = usePathname()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "All Services" },
    { href: "/contact-us", label: "Contact Us" },
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

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
  }
  const itemVariants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center h-10 w-10 rounded-none border border-border hover:border-foreground/30 text-foreground transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="container mx-auto px-4 flex items-center justify-between h-[72px] border-b border-border/60">
              <span className="font-semibold tracking-tight">Menu</span>
              <button
                onClick={closeMenu}
                className="inline-flex items-center justify-center h-10 w-10 rounded-none border border-border hover:border-foreground/30 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.nav
              className="container mx-auto px-4 py-8 flex-1 overflow-y-auto flex flex-col gap-1"
              variants={listVariants}
              initial="hidden"
              animate="show"
            >
              {mainLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center justify-between py-4 px-4 rounded-lg text-lg font-semibold transition-colors",
                      pathname === link.href
                        ? "bg-brand-yellow text-black"
                        : "hover:bg-foreground/[0.04]",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="h-5 w-5 opacity-60" />
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="mt-2 rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                  className="flex w-full items-center justify-between px-4 py-4 text-lg font-semibold"
                  aria-expanded={isServicesExpanded}
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isServicesExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isServicesExpanded && (
                    <motion.div
                      className="border-t border-border bg-foreground/[0.02] overflow-hidden"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeMenu}
                          className="block px-4 py-3 text-base border-b last:border-b-0 border-border/60 hover:text-brand-yellow transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/get-a-quote"
                  onClick={closeMenu}
                  className="btn-primary mt-6 !py-4 !text-base w-full justify-center"
                >
                  Get a Free Quote
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <a
                  href="tel:0208 102 1108"
                  className="btn-secondary mt-3 !py-4 !text-base w-full justify-center"
                >
                  <Phone className="h-4 w-4" />
                  0208 102 1108
                </a>
              </motion.div>

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-border">
                <span className="text-sm text-muted-foreground">Appearance</span>
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
