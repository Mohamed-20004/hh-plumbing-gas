import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Check,
  Snowflake,
  Thermometer,
  Volume2,
  Wind,
  Zap,
  SmartphoneNfc,
} from "lucide-react"
import { Header } from "../../components/header"
import { SiteFooter } from "../../components/site-footer"
import { ContactCTA } from "../../components/contact-cta"
import { Reveal, Stagger, StaggerItem, HeroText, FadeIn } from "../../components/motion"

const brands = [
  { src: "/images/mitsubishi-electric-logo.png", alt: "Mitsubishi Electric" },
  { src: "/images/daikin-logo.png", alt: "Daikin" },
  { src: "/images/lg-logo.png", alt: "LG" },
  { src: "/images/samsung-logo.png", alt: "Samsung" },
]

const benefits = [
  {
    icon: Snowflake,
    title: "Cooling on demand",
    description: "Wall-mounted split systems that keep bedrooms, lofts and living spaces comfortable through the hottest weeks.",
  },
  {
    icon: Thermometer,
    title: "Heating too",
    description: "Modern units reverse in winter, giving you efficient electric heating from the same system.",
  },
  {
    icon: Volume2,
    title: "Whisper quiet",
    description: "Indoor units from leading brands run quietly enough for bedrooms and home offices.",
  },
  {
    icon: Wind,
    title: "Cleaner air",
    description: "Built-in filtration reduces dust, pollen and allergens as the air circulates.",
  },
  {
    icon: Zap,
    title: "Energy efficient",
    description: "High-efficiency inverter compressors adjust output to the room instead of cycling on and off.",
  },
  {
    icon: SmartphoneNfc,
    title: "Smart control",
    description: "Control temperature and schedules from your phone, or per-room with multi-split zoning.",
  },
]

const process = [
  {
    step: "1",
    title: "Site survey",
    description: "We assess the rooms, positioning and pipework routes to spec the right unit sizes.",
  },
  {
    step: "2",
    title: "Fixed quote",
    description: "A transparent, itemised quote for the full installation — units, pipework, electrics and commissioning.",
  },
  {
    step: "3",
    title: "Tidy install",
    description: "Neat wall runs and discreet outdoor unit placement, with minimal disruption to your home.",
  },
  {
    step: "4",
    title: "Handover & aftercare",
    description: "Full demonstration, warranty registration and servicing to keep the system at peak efficiency.",
  },
]

export default function AirConditioningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <FadeIn delay={0.05} y={12}>
                <span className="eyebrow border-white/15 bg-white/5 text-white/70">Air conditioning</span>
              </FadeIn>
              <HeroText
                text="Cool in summer. Warm in winter."
                className="display-xl mt-6 text-white"
                delay={0.15}
              />
              <FadeIn delay={0.55}>
                <p className="lead mt-6 text-white/70 max-w-2xl">
                  Split and multi-split air conditioning from Mitsubishi Electric, Daikin, LG and Samsung —
                  designed, installed and serviced by one trusted team.
                </p>
              </FadeIn>
              <FadeIn delay={0.7}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/get-a-quote" className="btn-primary group">
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
                    <Snowflake className="h-4 w-4 text-brand-yellow" />
                    Split & multi-split systems
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-brand-yellow" />
                    Heating & cooling units
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Zap className="h-4 w-4 text-brand-yellow" />
                    High-efficiency inverters
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ============ OVERVIEW + BRANDS ============ */}
        <section className="section">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <span className="eyebrow">What we install</span>
              <h2 className="display-lg mt-4">
                Single rooms or <br />
                whole-home comfort.
              </h2>
              <p className="lead mt-5">
                From a single bedroom split to a multi-split system zoning every floor, we design around
                your rooms, usage and budget — not a one-size-fits-all package.
              </p>

              <Stagger className="mt-8 space-y-3">
                {[
                  "Wall-mounted split systems for single rooms",
                  "Multi-split systems — one outdoor unit, several rooms",
                  "Heating and cooling from the same unit",
                  "Neat, discreet pipework and outdoor unit placement",
                  "Smart controls and per-room zoning",
                  "Annual servicing to protect efficiency and warranty",
                ].map((item) => (
                  <StaggerItem key={item}>
                    <span className="flex items-start gap-3">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-none bg-foreground/[0.06] text-foreground/80">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="text-lg font-semibold">Brands we install</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We install premium air conditioning systems from the industry's leading manufacturers.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
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

                <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Split systems
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      One indoor unit, one outdoor unit — ideal for single rooms.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Multi-split
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Several rooms served by a single outdoor unit.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Reveal className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Why air conditioning</span>
              <h2 className="display-lg mt-4">Comfort all year round.</h2>
              <p className="lead mt-4">
                Hotter summers have made cooling a must-have — and modern units heat efficiently in winter too.
              </p>
            </Reveal>

            <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <StaggerItem key={b.title} className="h-full">
                    <div className="group h-full rounded-lg border border-border bg-card p-6 hover-lift">
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
              <h2 className="display-lg mt-4">From survey to switch-on.</h2>
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

        <ContactCTA quoteHref="/get-a-quote" />
      </main>

      <SiteFooter />
    </div>
  )
}
