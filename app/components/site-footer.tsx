import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import { TikTokIcon } from "./icons/tiktok-icon"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-brand-black text-white">
      <div className="relative container mx-auto px-4 pt-16 pb-10">
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
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:text-brand-yellow transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@hussainhachem1"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:text-brand-yellow transition-colors"
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
                  Heat Pump Installation
                </Link>
              </li>
              <li>
                <Link href="/services/bathroom-installation" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Bathroom Installation
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
              <li>
                <Link href="/services/drainage" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Drainage
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-repairs" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Emergency Repairs
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
                  <p>5th Floor 167-169 Great Portland Street</p>
                  <p className="text-white/60">London, W1W 5PF</p>
                </div>
              </div>
              <a href="tel:0208 102 1108" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Phone className="h-4 w-4 text-brand-yellow" />
                0208 102 1108
              </a>
              <a href="mailto:office@hhplumbingandgas.com" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Mail className="h-4 w-4 text-brand-yellow" />
                office@hhplumbingandgas.com
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
