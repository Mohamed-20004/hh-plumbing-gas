import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, ArrowRight } from "lucide-react"
import { TikTokIcon } from "./icons/tiktok-icon"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-brand-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(800px circle at 0% 0%, rgba(255,214,10,0.12), transparent 55%), radial-gradient(600px circle at 100% 100%, rgba(255,214,10,0.06), transparent 55%)",
        }}
      />

      <div className="relative container mx-auto px-4 pt-20 pb-10">
        {/* CTA band */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <span className="eyebrow border-white/15 bg-white/5 text-white/70">Ready when you are</span>
              <h2 className="display-md mt-4 text-white">
                Planning a new system? <span className="text-brand-yellow">Get a tailored quote</span> in minutes.
              </h2>
              <p className="lead mt-3 text-white/70 max-w-xl">
                Gas Safe registered engineers, manufacturer-approved installs, and transparent pricing — from
                first call to final handover.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
              <Link href="/get-a-quote" className="btn-primary group">
                Get a free quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="tel:07712599254" className="btn-ghost-dark">
                <Phone className="h-4 w-4" />
                07712 599254
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-yellow text-black font-black">
                HH
              </span>
              <span className="font-bold text-lg tracking-tight">Plumbing &amp; Gas</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Professional plumbing, heating and gas services across London — built on craftsmanship, safety, and
              service.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/hhplumbingandgas"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:text-brand-yellow hover:border-brand-yellow/40 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@hussainhachem1"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:text-brand-yellow hover:border-brand-yellow/40 transition-colors"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-white/50 mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/boiler-installations" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Boiler Installations
                </Link>
              </li>
              <li>
                <Link href="/services/heat-pump-installations" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Heat Pump Installations
                </Link>
              </li>
              <li>
                <Link href="/services/underfloor-heating-installation" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Underfloor Heating
                </Link>
              </li>
              <li>
                <Link href="/services/cylinder-installation" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Cylinder Installation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-white/50 mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about-us" className="text-white/80 hover:text-brand-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-brand-yellow transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-white/50 mb-5">Contact</h4>
            <address className="not-italic space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-yellow" />
                <div>
                  <p>2 Broomfield Road</p>
                  <p className="text-white/60">London, W13 9AP</p>
                </div>
              </div>
              <a href="tel:07712599254" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Phone className="h-4 w-4 text-brand-yellow" />
                07712 599254
              </a>
              <a href="mailto:info@hhplumbing.com" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Mail className="h-4 w-4 text-brand-yellow" />
                info@hhplumbing.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© {year} HH Plumbing and Gas. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Gas Safe Registered · 630695
            </span>
            <span className="hidden sm:inline">Manufacturer-approved installer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
