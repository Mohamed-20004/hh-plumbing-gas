import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Droplet,
  PenToolIcon as Tool,
  Clock,
  Shield,
  Star,
  Bath,
  Palette,
} from "lucide-react"
import { Header } from "../../components/header"
import { TopBar } from "../../components/top-bar"
import { SiteFooter } from "../../components/site-footer"

const benefits = [
  {
    icon: Palette,
    title: "Design-led layout",
    description: "We help plan a room that's pleasing to live with — not just a stack of fixtures.",
  },
  {
    icon: Tool,
    title: "One coordinated team",
    description: "Plumbers, electricians and tilers under one contact — no scheduling roulette.",
  },
  {
    icon: Clock,
    title: "Fixed timeline",
    description: "A clear start and handover date — most bathrooms completed in 2–3 weeks.",
  },
  {
    icon: Shield,
    title: "Warrantied workmanship",
    description: "Manufacturer warranty on kit plus our own workmanship guarantee.",
  },
  {
    icon: Star,
    title: "Adds property value",
    description: "A well-designed bathroom is one of the highest ROI renovations in a UK home.",
  },
  {
    icon: Droplet,
    title: "Proper plumbing",
    description: "Gas Safe + G3 qualified — mains pressure, safe cylinders, no leaks.",
  },
]

const packages = [
  {
    name: "Full renovation",
    copy: "Strip-out to re-tile, start to finish. Design, plumbing, electrics, tiling, decorating — handled by us.",
    points: [
      "Design & spec",
      "Strip-out & dispose",
      "First & second fix plumbing",
      "Electrics & lighting",
      "Tiling & decoration",
      "Final commissioning",
    ],
  },
  {
    name: "Bathroom update",
    copy: "Refresh without the full rebuild. Replace shower, suite or tiling and leave what still works.",
    points: [
      "Shower replacement",
      "Bath to walk-in shower",
      "Vanity & basin swap",
      "Toilet replacement",
      "Partial re-tiling",
      "Underfloor heating add-on",
    ],
  },
]

const process = [
  {
    step: "1",
    title: "Consult & measure",
    description: "We discuss your style, budget and must-haves — then measure and photograph the room.",
  },
  {
    step: "2",
    title: "Design & itemised quote",
    description: "A clear layout, product list and fixed price. No open-ended day rates.",
  },
  {
    step: "3",
    title: "Strip out & install",
    description: "Dust sheets, floor protection, and daily clean-up. We respect your home.",
  },
  {
    step: "4",
    title: "Snagging & handover",
    description: "We walk the room with you, fix any small snags, and hand over warranties.",
  },
]

export default function BathroomInstallationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-foreground text-white">
          <Image
            src="/images/modern-bathroom.jpeg"
            alt=""
            fill
            className="object-cover opacity-35"
            priority
            aria-hidden
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0.95) 100%)",
            }}
          />
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/15 bg-white/5 text-white/70">Bathroom installation</span>
              <h1 className="display-xl mt-6 text-white">
                A bathroom you'll love to <span className="text-brand-yellow">start the day in</span>.
              </h1>
              <p className="lead mt-6 text-white/70 max-w-2xl">
                Design-led bathroom renovations and updates across London. One team, one timeline, one
                transparent price.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/get-a-quote" className="btn-primary">
                  Get a fixed quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:07712599254" className="btn-ghost-dark">
                  Call 07712 599254
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Bath className="h-4 w-4 text-brand-yellow" />
                  Full renovations or updates
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-yellow" />
                  2–3 week typical timeline
                </span>
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4 text-brand-yellow" />
                  Workmanship guaranteed
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PACKAGES ============ */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">How we work</span>
              <h2 className="display-lg mt-4">Two clear packages.</h2>
              <p className="lead mt-4">
                Whether you want a full design-and-build or a targeted refresh — we'll scope it plainly and price
                it fairly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {packages.map((pkg) => (
                <div key={pkg.name} className="rounded-3xl border border-border bg-card p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                    {pkg.name}
                  </p>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{pkg.copy}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {pkg.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow/15 text-brand-yellow">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Why it matters</span>
              <h2 className="display-lg mt-4">Quality you can feel, every day.</h2>
              <p className="lead mt-4">
                A good bathroom is about the details — silicone lines, tile alignment, how a tap feels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.title}
                    className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellow transition-colors group-hover:bg-brand-yellow group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">How it works</span>
              <h2 className="display-lg mt-4">Measured, designed, fitted.</h2>
            </div>

            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((p) => (
                <li key={p.step} className="relative rounded-2xl border border-border bg-card p-6">
                  <span className="absolute -top-3 left-6 inline-flex items-center justify-center rounded-full bg-brand-yellow text-black text-xs font-bold px-3 py-1">
                    Step {p.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-brand-black text-white p-10 md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background: "radial-gradient(600px circle at 20% 20%, rgba(255,214,10,0.18), transparent 55%)",
                }}
              />
              <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
                <div>
                  <span className="eyebrow border-white/15 bg-white/5 text-white/70">Ready to renovate?</span>
                  <h2 className="display-lg mt-4 text-white">Book your bathroom consultation.</h2>
                  <p className="lead mt-4 text-white/70 max-w-xl">
                    A quick chat about your ideas — and we'll come back with a fixed, itemised quote.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                  <Link href="/get-a-quote" className="btn-primary">
                    Start quote
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    All services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
