import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Thermometer,
  Zap,
  Droplet,
  Home,
  Ban,
  Waves,
} from "lucide-react"
import { Header } from "../../components/header"
import { TopBar } from "../../components/top-bar"
import { SiteFooter } from "../../components/site-footer"

const brands = [
  { src: "/images/warmup-logo.png", alt: "Warmup" },
  { src: "/images/aumix-logo.png", alt: "Aumix" },
  { src: "/images/fischer-logo.png", alt: "Fischer" },
]

const benefits = [
  {
    icon: Thermometer,
    title: "Even, draft-free warmth",
    description: "The whole floor radiates gently — no cold spots, no stuffy hot air.",
  },
  {
    icon: Zap,
    title: "Runs at lower flow temps",
    description: "Perfect for heat pumps and modern condensing boilers — saving 10–25% on heating bills.",
  },
  {
    icon: Home,
    title: "Frees wall space",
    description: "Goodbye radiators. More furniture layouts, cleaner walls, tidier rooms.",
  },
  {
    icon: Droplet,
    title: "Healthier air",
    description: "Convection is minimal — less dust circulation, better for allergy-sensitive homes.",
  },
  {
    icon: Ban,
    title: "Hidden + silent",
    description: "No ticking pipes, no visible kit. Just warm floors when you walk in.",
  },
  {
    icon: Check,
    title: "Works with any floor",
    description: "Tile, stone, engineered wood, LVT, laminate or carpet — we'll spec for it.",
  },
]

const systems = [
  {
    name: "Wet systems",
    copy: "Warm water through low-profile PEX loops. Pairs beautifully with boilers or heat pumps — best value over time on large floors and new builds.",
    points: ["Lower running costs", "Heat pump ready", "Ideal for new builds & extensions"],
  },
  {
    name: "Electric systems",
    copy: "Heating mats or loose wire laid into adhesive under tile, stone or wood. Ideal for a single bathroom or kitchen retrofit — minimal build-up, fast to install.",
    points: ["Best for retrofits", "Single-room control", "Slim 3mm build-up available"],
  },
]

const process = [
  {
    step: "1",
    title: "Home survey",
    description: "We measure floor area, build-up height and heat source — wet or electric, we'll size it right.",
  },
  {
    step: "2",
    title: "Design & quote",
    description: "Loop layouts, manifolds or matting plan, zoning and controls — laid out clearly in your quote.",
  },
  {
    step: "3",
    title: "Installation",
    description: "Pipework or matting down, insulation and screed or self-levelling — coordinated with flooring.",
  },
  {
    step: "4",
    title: "Commission & handover",
    description: "System pressure-tested, controls paired, floor temperature curve programmed for you.",
  },
]

export default function UnderfloorHeatingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/15 bg-white/5 text-white/70">Underfloor heating</span>
              <h1 className="display-xl mt-6 text-white">
                Warm floors, <span className="text-brand-yellow">cleaner rooms</span>, lower bills.
              </h1>
              <p className="lead mt-6 text-white/70 max-w-2xl">
                Wet and electric underfloor heating installed by specialists — from single-room retrofits to
                whole-house new builds.
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
                  <Waves className="h-4 w-4 text-brand-yellow" />
                  Wet or electric
                </span>
                <span className="inline-flex items-center gap-2">
                  <Zap className="h-4 w-4 text-brand-yellow" />
                  Heat pump ready
                </span>
                <span className="inline-flex items-center gap-2">
                  <Home className="h-4 w-4 text-brand-yellow" />
                  Slim 12mm profile available
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ OVERVIEW + SYSTEMS ============ */}
        <section className="section">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="eyebrow">What we install</span>
              <h2 className="display-lg mt-4">
                Two systems, <span className="text-brand-yellow">tailored to your room.</span>
              </h2>
              <p className="lead mt-5">
                Underfloor heating isn't one size fits all. We'll walk through your floor build-up, heat loss and
                goals — then spec the system that works best.
              </p>

              <div className="mt-8 grid gap-4">
                {systems.map((s) => (
                  <div key={s.name} className="rounded-2xl border border-border bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-yellow">
                      {s.name}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-border bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold">Brands we install</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                High-quality components with strong manufacturer warranties — the parts you don't see matter most.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
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
                  Included as standard
                </h4>
                <ul className="mt-4 space-y-3">
                  {[
                    "Thermal insulation & edge strip",
                    "Wiring centre and room thermostats",
                    "Smart Wi-Fi controls (optional)",
                    "Commissioning certificate",
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
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Why upgrade</span>
              <h2 className="display-lg mt-4">It changes how a room feels.</h2>
              <p className="lead mt-4">
                Warm toes, free walls, quieter rooms — the perks go far beyond the bill savings.
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
              <h2 className="display-lg mt-4">Designed, fitted, dialled in.</h2>
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
                  <span className="eyebrow border-white/15 bg-white/5 text-white/70">Ready for warm floors?</span>
                  <h2 className="display-lg mt-4 text-white">Get a bespoke underfloor quote.</h2>
                  <p className="lead mt-4 text-white/70 max-w-xl">
                    A few questions — and we'll send a transparent, fixed price for your rooms.
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
