import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Flame,
  Thermometer,
  Waves,
  Droplets,
  Bath,
  Siren,
  ShieldCheck,
  Clock,
} from "lucide-react"
import { TopBar } from "../components/top-bar"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"
import { ContactCTA } from "../components/contact-cta"

const services = [
  {
    title: "Boiler Installation",
    tagline: "Worcester Bosch, Vaillant, Baxi — approved installer",
    description:
      "High-efficiency combi, system and regular boilers installed to manufacturer spec — with up to 12 years parts & labour warranty.",
    icon: Flame,
    link: "/services/boiler-installations",
    highlights: ["From £1,800", "12-year warranty", "Same-week install"],
  },
  {
    title: "Heat Pump Installation",
    tagline: "Air & ground source — MCS certified",
    description:
      "Quiet, low-carbon heating from Vaillant, Mitsubishi and Daikin. BUS grant applications handled for you.",
    icon: Thermometer,
    link: "/services/heat-pump-installations",
    highlights: ["£7,500 grant", "MCS certified", "A++ efficiency"],
  },
  {
    title: "Underfloor Heating",
    tagline: "Wet & electric systems, new build or retrofit",
    description:
      "Whole-floor warmth with Warmup and Aumix systems — perfect for bathrooms, kitchens and extensions.",
    icon: Waves,
    link: "/services/underfloor-heating-installation",
    highlights: ["Wet or electric", "Zoned controls", "Slim 12mm profile"],
  },
  {
    title: "Cylinder Installation",
    tagline: "Unvented, vented and heat pump cylinders",
    description:
      "Megaflo, Gledhill and Vaillant cylinders sized and installed for reliable, mains-pressure hot water.",
    icon: Droplets,
    link: "/services/cylinder-installation",
    highlights: ["Unvented specialists", "G3 certified", "Zero airlocks"],
  },
  {
    title: "Bathroom Installation",
    tagline: "End-to-end design & fit",
    description:
      "Full bathroom renovations — from first fix to final silicone. Tiling, plumbing and electrics coordinated under one roof.",
    icon: Bath,
    link: "/services/bathroom-installation",
    highlights: ["Design service", "Project managed", "Fixed timeline"],
  },
  {
    title: "Emergency Repairs",
    tagline: "24/7 Gas Safe response",
    description:
      "Leaks, boiler breakdowns, no heating or hot water — we'll be with you fast and get you safely back on.",
    icon: Siren,
    link: "/services/emergency-repairs",
    highlights: ["24/7 call-out", "Gas Safe engineers", "Fixed-fee diagnosis"],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-yellow" />
          <div className="relative container mx-auto px-4 pt-16 md:pt-24 pb-12">
            <div className="max-w-3xl">
              <span className="eyebrow">Plumbing, heating &amp; gas</span>
              <h1 className="display-xl mt-6">
                Every service, <span className="text-foreground">one trusted team</span>.
              </h1>
              <p className="lead mt-6 max-w-2xl">
                From a single boiler swap to a full bathroom refit — Gas Safe registered engineers handling every
                step with manufacturer-grade care.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/get-a-quote" className="btn-primary">
                  Get a free quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:07712599254"
                  className="btn-secondary"
                >
                  Call 07712 599254
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SERVICES GRID ============ */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/80 transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-border bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-semibold">Learn more</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ============ TRUST BAND ============ */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <ShieldCheck className="h-6 w-6 text-brand-yellow" />
              <p className="mt-4 font-semibold">Gas Safe Registered</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Register 630695 — every gas job safe, legal and certified.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Clock className="h-6 w-6 text-brand-yellow" />
              <p className="mt-4 font-semibold">24/7 Emergency Cover</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Leaks, breakdowns or no heat — we answer out of hours.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <ArrowUpRight className="h-6 w-6 text-brand-yellow" />
              <p className="mt-4 font-semibold">Manufacturer Approved</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Approved installers for Vaillant, Worcester Bosch and Baxi.
              </p>
            </div>
          </div>
        </section>

        <ContactCTA quoteHref="/get-a-quote" />
      </main>

      <SiteFooter />
    </div>
  )
}
