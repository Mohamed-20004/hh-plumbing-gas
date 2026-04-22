import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Flame,
  Zap,
  Leaf,
  Clock,
  Shield,
  ShieldCheck,
} from "lucide-react"
import { Header } from "../../components/header"
import { TopBar } from "../../components/top-bar"
import { SiteFooter } from "../../components/site-footer"

const brands = [
  { src: "/images/vaillant-logo-new.png", alt: "Vaillant" },
  { src: "/images/worcester-bosch-new.png", alt: "Worcester Bosch" },
  { src: "/images/baxi-logo.png", alt: "Baxi" },
  { src: "/images/glow-worm-logo.png", alt: "Glow Worm" },
  { src: "/images/main-heating-logo.png", alt: "Main" },
  { src: "/images/ideal-logo.png", alt: "Ideal" },
]

const benefits = [
  {
    icon: Zap,
    title: "Up to 30% lower bills",
    description: "A-rated condensing boilers recover more heat from flue gases — less fuel for the same warmth.",
  },
  {
    icon: Flame,
    title: "Faster, steadier heat",
    description: "Modulating burners hold target temperature precisely — no more hot-cold cycling.",
  },
  {
    icon: Leaf,
    title: "Lower emissions",
    description: "Modern condensing boilers cut CO₂ output significantly versus 10+ year-old systems.",
  },
  {
    icon: Shield,
    title: "Up to 12-year warranty",
    description: "As manufacturer-approved installers we unlock the longest parts & labour warranties available.",
  },
  {
    icon: Clock,
    title: "Most jobs in a day",
    description: "Direct swaps typically completed same-day. Full refits with cylinder changes in 2–3 days.",
  },
  {
    icon: Check,
    title: "Protects resale value",
    description: "A new, warrantied boiler is a tick-box item for surveyors, agents and buyers.",
  },
]

const boilerTypes = [
  {
    name: "Combi boilers",
    description:
      "Hot water and heating from one compact unit — no cylinder needed. Ideal for flats and 1–2 bathroom homes.",
  },
  {
    name: "System boilers",
    description:
      "Work alongside an unvented cylinder for simultaneous showers. Best for 3+ bathrooms or larger families.",
  },
  {
    name: "Regular boilers",
    description:
      "Heat-only boilers that work with an existing cylinder + loft tank — perfect for keeping an older gravity system.",
  },
]

const process = [
  {
    step: "1",
    title: "Free home survey",
    description: "We measure your property, hot water demand and existing pipework to size the right unit.",
  },
  {
    step: "2",
    title: "Fixed, itemised quote",
    description: "Boiler, parts, labour and warranty — all in writing. No surprises.",
  },
  {
    step: "3",
    title: "Installed by Gas Safe",
    description: "Registered engineers, dust sheets down, clean finish — most swaps in a single day.",
  },
  {
    step: "4",
    title: "Commission & handover",
    description: "System balanced, gas tested, controls set. You get warranty docs and aftercare contact.",
  },
]

export default function BoilerInstallationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/15 bg-white/5 text-white/70">Boiler installations</span>
              <h1 className="display-xl mt-6 text-white">
                New boiler, <span className="text-brand-yellow">fitted right</span>, from £1,800.
              </h1>
              <p className="lead mt-6 text-white/70 max-w-2xl">
                Gas Safe registered engineers, manufacturer-approved installs and up to 12-year warranties on
                Worcester Bosch, Vaillant and Baxi boilers.
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
                  <ShieldCheck className="h-4 w-4 text-brand-yellow" />
                  Gas Safe · 630695
                </span>
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4 text-brand-yellow" />
                  Manufacturer approved
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-yellow" />
                  Most installs same day
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
                Combi, system or regular — <span className="text-brand-yellow">sized for your home.</span>
              </h2>
              <p className="lead mt-5">
                We specify every install from scratch — no generic packages. That means your new boiler is sized
                to your actual heat loss, hot water demand and pipework, so it runs efficiently for years.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Heat-loss calculation on every install",
                  "Magnetic filter and inhibitor included",
                  "Full system flush or power-flush where needed",
                  "Smart thermostats (Nest, Hive, Tado) supported",
                  "Gas Safe paperwork + Benchmark certificate",
                  "Manufacturer warranty registered for you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow/15 text-brand-yellow">
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
                Approved installer status lets us offer extended warranties, best-in-class pricing and
                direct manufacturer support.
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

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Boiler types
                </h4>
                <ul className="mt-4 space-y-4">
                  {boilerTypes.map((t) => (
                    <li key={t.name}>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{t.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Why upgrade</span>
              <h2 className="display-lg mt-4">A new boiler pays for itself.</h2>
              <p className="lead mt-4">
                Modern condensing boilers pair high efficiency with proper controls — the result is lower bills
                and more consistent warmth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.title}
                    className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
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
              <h2 className="display-lg mt-4">Four steps, zero surprises.</h2>
            </div>

            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((p) => (
                <li
                  key={p.step}
                  className="relative rounded-lg border border-border bg-card p-6"
                >
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
                  <span className="eyebrow border-white/15 bg-white/5 text-white/70">Get started</span>
                  <h2 className="display-lg mt-4 text-white">
                    Ready for a quote on your new boiler?
                  </h2>
                  <p className="lead mt-4 text-white/70 max-w-xl">
                    Answer a few questions — we'll send an itemised, fixed quote with the right boiler for your
                    home.
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
