import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Leaf,
  Zap,
  Thermometer,
  Home,
  Shield,
  ShieldCheck,
  BadgePoundSterling,
} from "lucide-react"
import { Header } from "../../components/header"
import { TopBar } from "../../components/top-bar"
import { SiteFooter } from "../../components/site-footer"

const brands = [
  { src: "/images/vaillant-logo-new.png", alt: "Vaillant" },
  { src: "/images/mitsubishi-electric-logo.png", alt: "Mitsubishi Electric" },
  { src: "/images/daikin-logo.png", alt: "Daikin" },
  { src: "/images/baxi-logo.png", alt: "Baxi" },
  { src: "/images/nibe-logo.png", alt: "NIBE" },
  { src: "/images/samsung-logo.png", alt: "Samsung" },
]

const benefits = [
  {
    icon: Leaf,
    title: "Up to 75% lower emissions",
    description: "Electric-driven heat swap replaces gas combustion — a huge cut in your home's carbon footprint.",
  },
  {
    icon: Zap,
    title: "300–400% efficient",
    description: "A heat pump delivers 3–4 kWh of heat for every 1 kWh of electricity it uses.",
  },
  {
    icon: Thermometer,
    title: "Heating + cooling",
    description: "Most air-source models reverse in summer to act as an efficient cooler. Year-round comfort.",
  },
  {
    icon: Home,
    title: "15–20 year lifespan",
    description: "Robust kit from Vaillant, Mitsubishi and Daikin — double the lifespan of some boilers.",
  },
  {
    icon: Shield,
    title: "Quiet, compact units",
    description: "Modern outdoor units run well below 45 dB — quieter than a fridge.",
  },
  {
    icon: BadgePoundSterling,
    title: "£7,500 BUS grant",
    description: "We handle the Boiler Upgrade Scheme paperwork so you claim the full grant towards your install.",
  },
]

const process = [
  {
    step: "1",
    title: "Home survey & heat-loss",
    description: "MCS-style heat-loss calculation to size the unit and check emitter compatibility.",
  },
  {
    step: "2",
    title: "System design & quote",
    description: "We design the full system — unit, cylinder, pipework, controls — and send a fixed itemised quote.",
  },
  {
    step: "3",
    title: "BUS grant + install",
    description: "We apply for the £7,500 grant on your behalf, then install with minimal disruption.",
  },
  {
    step: "4",
    title: "Commission & MCS certify",
    description: "Commissioned, balanced and certified — ready to claim your grant and run for years.",
  },
]

export default function HeatPumpInstallationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/15 bg-white/5 text-white/70">Heat pump installations</span>
              <h1 className="display-xl mt-6 text-white">
                Low-carbon heating, £7,500 off, MCS certified.
              </h1>
              <p className="lead mt-6 text-white/70 max-w-2xl">
                Air and ground source heat pumps from Vaillant, Mitsubishi and Daikin — designed, installed and
                grant-claimed by one trusted team.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/get-a-quote?service=heat-pump-installation" className="btn-primary">
                  Get a fixed quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:07712599254" className="btn-ghost-dark">
                  Call 07712 599254
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-yellow" />
                  MCS certified
                </span>
                <span className="inline-flex items-center gap-2">
                  <BadgePoundSterling className="h-4 w-4 text-brand-yellow" />
                  £7,500 BUS grant handled
                </span>
                <span className="inline-flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-brand-yellow" />
                  A++ efficiency
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ OVERVIEW + BRANDS ============ */}
        <section className="section">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="eyebrow">What we install</span>
              <h2 className="display-lg mt-4">
                Air source, ground source <br />
                or hybrid retrofit.
              </h2>
              <p className="lead mt-5">
                We specify heat pumps around your actual heat loss, radiators and hot water habits — not a
                one-size-fits-all package. That's why our systems keep running efficiently in real British winters.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "MCS-style heat-loss calculation included",
                  "Radiator/emitter check — upgrades only if genuinely needed",
                  "Buffer and cylinder sizing tailored to household demand",
                  "Smart weather-compensating controls",
                  "BUS grant paperwork handled end-to-end",
                  "Commissioning + MCS certification on completion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground/80">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-lg font-semibold">Brands we install</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We're partnered with leading heat pump manufacturers for premium kit and extended warranties.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {brands.map((b) => (
                  <div
                    key={b.alt}
                    className="flex items-center justify-center h-20 rounded-xl border border-border bg-background"
                  >
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={100}
                      height={50}
                      className="object-contain max-h-10 w-auto opacity-80"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Air source
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Most homes. Low install cost and minimal disruption.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Ground source
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Higher efficiency where ground access is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Why heat pumps</span>
              <h2 className="display-lg mt-4">The case is stronger than ever.</h2>
              <p className="lead mt-4">
                Grant support, rising gas prices and improved kit mean most homes save money from day one.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.title}
                    className="group rounded-lg border border-border bg-card p-6 transition-all duration-300"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/80 transition-colors group-hover:bg-foreground group-hover:text-background">
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
              <h2 className="display-lg mt-4">From survey to MCS certificate.</h2>
            </div>

            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((p) => (
                <li key={p.step} className="relative rounded-lg border border-border bg-card p-6">
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
            <div className="relative overflow-hidden rounded-lg border border-border bg-brand-black text-white p-10 md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background: "radial-gradient(600px circle at 20% 20%, rgba(255,214,10,0.18), transparent 55%)",
                }}
              />
              <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
                <div>
                  <span className="eyebrow border-white/15 bg-white/5 text-white/70">Ready to go low-carbon?</span>
                  <h2 className="display-lg mt-4 text-white">See if a heat pump fits your home.</h2>
                  <p className="lead mt-4 text-white/70 max-w-xl">
                    Send us a few details — we'll come back with honest guidance and a fixed quote,
                    grant-adjusted.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                  <Link href="/get-a-quote?service=heat-pump-installation" className="btn-primary">
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
