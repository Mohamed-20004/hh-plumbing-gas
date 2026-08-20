import Link from "next/link"
import Image from "next/image"

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

export function SiteFooter() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="HH Plumbing and Gas — home">
              <Image src="/images/hhpg-logo.png" alt="" width={49} height={52} className="h-12 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-tight text-white">HH Plumbing &amp; Gas</span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                  London
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm text-white/55 leading-relaxed">
              Gas Safe registered plumbing, heating, and air conditioning specialists. Serving all
              London postcodes.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Services</p>
            <ul className="mt-6 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-white/65">
              <li>
                <a href="tel:02081021108" className="hover:text-white transition-colors">
                  0208 102 1108
                </a>
              </li>
              <li>
                <a href="mailto:office@hhplumbingandgas.com" className="hover:text-white transition-colors">
                  office@hhplumbingandgas.com
                </a>
              </li>
              <li>Mon–Sat, 7am–7pm</li>
              <li className="pt-3 text-white/40">Gas Safe Reg. No. 630695</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45">
          <p>© {new Date().getFullYear()} HH Plumbing &amp; Gas Ltd. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
