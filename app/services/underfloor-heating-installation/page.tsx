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
import { SiteFooter } from "../../components/site-footer"
import { ContactCTA } from "../../components/contact-cta"
import {
  Reveal,
  Stagger,
  StaggerItem,
  Parallax,
  HeroText,
  FadeIn,
} from "../../components/motion"

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
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <FadeIn delay={0.05} y={12}>
                <span className="eyebrow border-white/15 bg-white/5 text-white/70">Underfloor heating</span>
              </FadeIn>
              <HeroText
                text="Warm floors, cleaner rooms, lower bills."
                className="display-xl mt-6 text-white"
                delay={0.15}
              />
              <FadeIn delay={0.55}>
                <p className="lead mt-6 text-white/70 max-w-2xl">
                  Wet and electric underfloor heating installed by specialists — from single-room retrofits to
                  whole-house new builds.
                </p>
              </FadeIn>
              <FadeIn delay={0.7}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/get-a-quote?service=underfloor-heating" className="btn-primary group">
                    Get a fixed quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a href="tel:0208 102 1108" className="btn-ghost-dark">
                    Call 0208 102 1108
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.85}>
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
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ============ OVERVIEW + SYSTEMS ============ */}
        <section className="section">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Reveal>
                <span className="eyebrow">What we install</span>
                <h2 className="display-lg mt-4">
                  Two systems, tailored to your room.
                </h2>
                <p className="lead mt-5">
                  Underfloor heating isn't one size fits all. We'll walk through your floor build-up, heat loss and
                  goals — then spec the system that works best.
                </p>
              </Reveal>

              <Stagger className="mt-8 grid gap-4">
                {systems.map((s) => (
                  <StaggerItem key={s.name}>
                    <div className="rounded-lg border border-border bg-card p-5 hover-lift">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {s.name}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="rounded-none border border-border bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Parallax amount={24}>
              <Reveal delay={0.15}>
                <div className="rounded-lg border border-border bg-card p-8">
                  <h3 className="text-lg font-semibold">Brands we install</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    High-quality components with strong manufacturer warranties — the parts you don't see matter most.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {brands.map((b) => (
                      <div
                        key={b.alt}
                        className="flex items-center justify-center h-20 rounded-none border border-border bg-background"
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
                          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-none bg-foreground/[0.06] text-foreground/80">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </Parallax>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Reveal className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Why upgrade</span>
              <h2 className="display-lg mt-4">It changes how a room feels.</h2>
              <p className="lead mt-4">
                Warm toes, free walls, quieter rooms — the perks go far beyond the bill savings.
              </p>
            </Reveal>

            <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <StaggerItem key={b.title} className="h-full">
                    <div className="group h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover-lift">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-none bg-foreground/[0.06] text-foreground/80 transition-colors group-hover:bg-foreground group-hover:text-background">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight">{b.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                    </div>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="section">
          <div className="container mx-auto px-4">
            <Reveal className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">How it works</span>
              <h2 className="display-lg mt-4">Designed, fitted, dialled in.</h2>
            </Reveal>

            <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((p) => (
                <StaggerItem key={p.step} className="h-full">
                  <div className="relative h-full rounded-lg border border-border bg-card p-6 hover-lift">
                    <span className="absolute -top-3 left-6 inline-flex items-center justify-center rounded-none bg-brand-yellow text-black text-xs font-bold px-3 py-1">
                      Step {p.step}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <ContactCTA quoteHref="/get-a-quote?service=underfloor-heating" />
      </main>

      <SiteFooter />
    </div>
  )
}
