import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Droplets,
  Gauge,
  ShieldCheck,
  Zap,
  BadgeCheck,
  Timer,
} from "lucide-react"
import { Header } from "../../components/header"
import { SiteFooter } from "../../components/site-footer"
import { ContactCTA } from "../../components/contact-cta"

const brands = [
  { src: "/images/megaflo-logo.png", alt: "Megaflo" },
  { src: "/images/vaillant-logo-new.png", alt: "Vaillant" },
  { src: "/images/gledhill-logo.png", alt: "Gledhill" },
]

const cylinderTypes = [
  {
    name: "Unvented cylinders",
    copy: "Mains-pressure hot water to every outlet — strong showers upstairs, proper flow in the ensuite. Our speciality.",
    points: ["G3 certified", "Mains pressure", "No cold tank needed"],
  },
  {
    name: "Vented cylinders",
    copy: "Gravity-fed from a cold water tank. A solid, cost-effective option for keeping an existing system going.",
    points: ["Lower cost", "Simple parts", "Easy to maintain"],
  },
  {
    name: "Heat pump cylinders",
    copy: "Purpose-built cylinders with larger coils for heat pump systems — essential for efficient low-temp DHW.",
    points: ["Low-temp optimised", "Larger coil surface", "MCS-ready"],
  },
]

const benefits = [
  {
    icon: Gauge,
    title: "Full mains pressure",
    description: "No more weak upstairs showers. Unvented cylinders push hot water at mains PSI to every tap.",
  },
  {
    icon: Droplets,
    title: "Multiple outlets at once",
    description: "Run a shower, kitchen tap and bath with no drop in pressure — properly sized for real households.",
  },
  {
    icon: Zap,
    title: "Better recovery time",
    description: "Modern high-performance coils heat the cylinder faster — less waiting between showers.",
  },
  {
    icon: ShieldCheck,
    title: "G3 certified engineers",
    description: "Unvented work is regulated. We're properly qualified and sign every install off.",
  },
  {
    icon: BadgeCheck,
    title: "Building Reg compliant",
    description: "Full Part G / G3 compliance with expansion, discharge and tundish done correctly.",
  },
  {
    icon: Timer,
    title: "Long-life stainless",
    description: "Duplex stainless tanks with 25-year warranties on leading brands.",
  },
]

const process = [
  {
    step: "1",
    title: "Survey & sizing",
    description: "We check incoming mains pressure, flow rate and bathroom count to size the cylinder properly.",
  },
  {
    step: "2",
    title: "Fixed quote",
    description: "Cylinder, fittings, labour and certification — fully itemised in writing.",
  },
  {
    step: "3",
    title: "Clean install",
    description: "Airing cupboard cleared, old cylinder out, new one plumbed — dust sheets throughout.",
  },
  {
    step: "4",
    title: "Test, certify, hand over",
    description: "G3 pressure test, commissioning, Benchmark paperwork — you get the full pack.",
  },
]

export default function CylinderInstallationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/15 bg-white/5 text-white/70">Cylinder installation</span>
              <h1 className="display-xl mt-6 text-white">
                Proper mains-pressure hot water, everywhere.
              </h1>
              <p className="lead mt-6 text-white/70 max-w-2xl">
                Unvented, vented and heat pump cylinders from Megaflo, Vaillant and Gledhill — installed and
                certified by G3-qualified engineers.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/get-a-quote?service=cylinder-installation" className="btn-primary">
                  Get a fixed quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:0208 102 1108" className="btn-ghost-dark">
                  Call 0208 102 1108
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-yellow" />
                  G3 certified
                </span>
                <span className="inline-flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-brand-yellow" />
                  Full mains pressure
                </span>
                <span className="inline-flex items-center gap-2">
                  <Timer className="h-4 w-4 text-brand-yellow" />
                  25-year tank warranty
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ OVERVIEW + TYPES ============ */}
        <section className="section">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="eyebrow">What we install</span>
              <h2 className="display-lg mt-4">
                Three cylinder types, all done properly.
              </h2>
              <p className="lead mt-5">
                The cylinder is the heart of your hot water. Get the sizing, pressure and controls right and you
                won't think about it for years — that's exactly our goal.
              </p>

              <div className="mt-8 grid gap-4">
                {cylinderTypes.map((c) => (
                  <div key={c.name} className="rounded-lg border border-border bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {c.name}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.copy}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {c.points.map((p) => (
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

            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-lg font-semibold">Brands we install</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Stainless steel tanks with long manufacturer warranties — installed to Part G / G3.
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
                    "Expansion vessel and PRV",
                    "Tundish and discharge pipework",
                    "Immersion heater and thermostat",
                    "G3 commissioning certificate",
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
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Why it matters</span>
              <h2 className="display-lg mt-4">A better cylinder = a better shower.</h2>
              <p className="lead mt-4">
                The difference between a weak trickle and a spa-grade shower usually isn't the showerhead.
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
              <h2 className="display-lg mt-4">Sized, installed, certified.</h2>
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

        <ContactCTA quoteHref="/get-a-quote?service=cylinder-installation" />
      </main>

      <SiteFooter />
    </div>
  )
}
