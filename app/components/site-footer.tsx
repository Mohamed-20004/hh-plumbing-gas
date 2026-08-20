import Link from "next/link"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"

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

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Gas Safe registered plumbing, heating and gas engineers serving homes across London.
            </p>
            <p className="mt-5 text-xs text-muted-foreground">Gas Safe register no. 630695</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/70 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Company
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link href="/about-us" className="text-foreground/70 hover:text-foreground transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="text-foreground/70 hover:text-foreground transition-colors">
                  Get a free quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-foreground/70">
              <li>
                <a href="tel:02081021108" className="hover:text-foreground transition-colors">
                  0208 102 1108
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@hhplumbingandgas.com"
                  className="hover:text-foreground transition-colors"
                >
                  office@hhplumbingandgas.com
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                5th Floor 167-169 Great Portland Street
                <br />
                London, W1W 5PF
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} HH Plumbing &amp; Gas. All rights reserved.</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
