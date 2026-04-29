import Link from "next/link"
import {
  ArrowRight,
  Check,
  Droplets,
  ShieldCheck,
  Clock,
  Wrench,
  AlertTriangle,
} from "lucide-react"
import { Header } from "../../components/header"
import { SiteFooter } from "../../components/site-footer"
import { ContactCTA } from "../../components/contact-cta"

const services = [
  {
    name: "Blocked drains",
    copy: "Sinks, toilets, showers, baths or outside gullies — we clear them fast with the right kit for the job.",
    points: ["High-pressure jetting", "Rodding & augering", "CCTV inspection"],
  },
  {
    name: "Drain repairs",
    copy: "Cracked, collapsed or displaced pipework found and fixed — with CCTV-verified before & after.",
    points: ["No-dig repair where possible", "Patch & line", "Full excavation if needed"],
  },
  {
    name: "Drain maintenance",
    copy: "Scheduled cleans for busy households, landlords and lettings. Keep drains flowing year-round.",
    points: ["One-off or recurring", "Written report", "Smell & flow checks"],
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Usually same-day",
    description: "Most blockages cleared on the first visit, often within hours of your call.",
  },
  {
    icon: Wrench,
    title: "Fully equipped vans",
    description: "Jetters, rods, CCTV and patch-repair kit on every van — no second trips.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed-fee diagnosis",
    description: "You'll know the price before we lift a drain cover. No hidden add-ons.",
  },
  {
    icon: Droplets,
    title: "Leaks & smells solved",
    description: "We trace the root cause — not just the symptom — so it doesn't come back.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency response",
    description: "Flooded bathroom or overflowing manhole? We'll be there 24/7.",
  },
  {
    icon: Check,
    title: "Insurance-ready reports",
    description: "CCTV footage and written reports supplied for home-insurance claims.",
  },
]

const process = [
  {
    step: "1",
    title: "Call & describe",
    description: "Tell us what's happening — we'll gauge urgency and book the right visit.",
  },
  {
    step: "2",
    title: "Diagnose on-site",
    description: "Fixed-fee inspection with CCTV where needed, and a clear quote to fix.",
  },
  {
    step: "3",
    title: "Clear or repair",
    description: "Most jobs solved on the first visit. Patch, line or full excavation as needed.",
  },
  {
    step: "4",
    title: "Verify & report",
    description: "Post-work CCTV confirms flow and condition. Full written report supplied.",
  },
]

export default function DrainagePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/15 bg-white/5 text-white/70">Drainage</span>
              <h1 className="display-xl mt-6 text-white">
                Blocked drains, cleared. Damaged drains, repaired.
              </h1>
              <p className="lead mt-6 text-white/70 max-w-2xl">
                Drain unblocking, CCTV inspections and repairs across London — fast, clean and fixed properly.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="tel:0208 102 1108" className="btn-primary">
                  Call 0208 102 1108
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/contact-us" className="btn-ghost-dark">
                  Send a message
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-yellow" />
                  Usually same-day
                </span>
                <span className="inline-flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-brand-yellow" />
                  CCTV inspection included
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-yellow" />
                  Fixed-fee diagnosis
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT WE HANDLE ============ */}
        <section className="section">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="eyebrow">What we handle</span>
              <h2 className="display-lg mt-4">
                From one-off blockages to full drain repairs.
              </h2>
              <p className="lead mt-5">
                Most drain problems are simple to fix when you've got the right kit. We turn up with everything
                needed to clear, inspect and repair on the first visit.
              </p>

              <div className="mt-8 grid gap-4">
                {services.map((s) => (
                  <div key={s.name} className="rounded-lg border border-border bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
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

            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-lg font-semibold">What's included as standard</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every drainage job comes with written records, fair pricing and proper clean-up.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Fixed-fee diagnosis before any work starts",
                  "CCTV inspection included on repair jobs",
                  "Jetting, rodding and patch-repair equipment on the van",
                  "Full written report with photos / footage",
                  "Drains tested for flow after work is finished",
                  "All waste removed, site left clean",
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
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Why choose us</span>
              <h2 className="display-lg mt-4">Drainage done properly.</h2>
              <p className="lead mt-4">
                Honest pricing, proper equipment, clean finish — and a written report you can keep.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.title}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/80">
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
              <h2 className="display-lg mt-4">Four steps from call to clear.</h2>
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

        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  )
}
