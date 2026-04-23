import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Shield,
  PenToolIcon as Tool,
  AlertTriangle,
  PhoneCall,
  Flame,
  Droplet,
  ShieldCheck,
  Timer,
} from "lucide-react"
import { Header } from "../../components/header"
import { TopBar } from "../../components/top-bar"
import { SiteFooter } from "../../components/site-footer"

const plumbingIssues = [
  "Burst or leaking pipes",
  "Blocked toilets, sinks and drains",
  "Water heater failures",
  "Leaking taps and fixtures",
  "Active flooding",
  "Frozen pipes in winter",
  "Sewer line backups",
  "Pump failures",
]

const heatingIssues = [
  "Boiler breakdowns",
  "Central heating failures",
  "Suspected gas leaks",
  "Carbon monoxide concerns",
  "Radiator leaks",
  "Faulty thermostats",
  "Circulator pump failures",
  "No hot water",
]

const process = [
  {
    icon: PhoneCall,
    step: "1",
    title: "Call 07712 599254",
    description: "Tell us what's happening — we'll talk you through immediate safety steps and dispatch.",
  },
  {
    icon: Timer,
    step: "2",
    title: "Fast arrival",
    description: "Gas Safe engineers en route with fully stocked vans — most central London call-outs inside 90 minutes.",
  },
  {
    icon: Tool,
    step: "3",
    title: "Diagnose & fix",
    description: "Fixed-fee diagnosis, then a clear quote for the repair. Most fixed on the spot.",
  },
  {
    icon: Shield,
    step: "4",
    title: "Make-safe & advise",
    description: "If a full repair needs ordered parts, we'll make the property safe and schedule the follow-up.",
  },
]

const preventPlumbing = [
  "Know where your main stop valve is",
  "Don't pour fats or oils down drains",
  "Use drain guards for hair and debris",
  "Only flush toilet paper",
  "Fix small leaks promptly",
  "Insulate pipes in cold areas",
]

const preventHeating = [
  "Annual boiler service — on time",
  "Bleed radiators when they're cool at the top",
  "Keep system pressure between 1.0–1.5 bar",
  "Test CO detectors monthly",
  "Keep boiler area clear of clutter",
  "Consider a smart thermostat",
]

export default function EmergencyRepairsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <span className="eyebrow border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow">
                24/7 Emergency
              </span>
              <h1 className="display-xl mt-6 text-white">
                Leaks, no heat, breakdowns — we'll be there fast.
              </h1>
              <p className="lead mt-6 text-white/70 max-w-2xl">
                Gas Safe registered engineers, fully stocked vans, and a fixed-fee diagnosis. Call any time — we
                answer around the clock.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="tel:07712599254" className="btn-primary">
                  <PhoneCall className="h-4 w-4" />
                  Call 07712 599254
                </a>
                <Link href="/contact-us" className="btn-ghost-dark">
                  Contact form
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-yellow" />
                  Gas Safe · 630695
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-yellow" />
                  24/7 dispatch
                </span>
                <span className="inline-flex items-center gap-2">
                  <Tool className="h-4 w-4 text-brand-yellow" />
                  Fixed-fee diagnosis
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EMERGENCY BANNER ============ */}
        <section className="container mx-auto px-4 -mt-10 relative z-10">
          <div className="rounded-lg border border-brand-yellow/40 bg-brand-yellow p-6 md:p-8 text-black shadow-lift">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 shrink-0" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">If you smell gas</p>
                  <p className="mt-1 font-semibold">
                    Leave the property, open windows on your way out and call the National Gas Emergency line on
                    0800 111 999. Then call us.
                  </p>
                </div>
              </div>
              <a
                href="tel:07712599254"
                className="md:ml-auto inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <PhoneCall className="h-4 w-4" />
                Call us now
              </a>
            </div>
          </div>
        </section>

        {/* ============ ISSUES WE HANDLE ============ */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">What we fix</span>
              <h2 className="display-lg mt-4">From trickle leaks to total breakdowns.</h2>
              <p className="lead mt-4">
                Fully equipped vans handle most repairs on the spot. If we need parts, we'll make safe and return.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-lg border border-border bg-card p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/80">
                  <Droplet className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">Plumbing emergencies</h3>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                  {plumbingIssues.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground/80">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/80">
                  <Flame className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">Heating & gas emergencies</h3>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                  {heatingIssues.map((item) => (
                    <li key={item} className="flex items-start gap-2">
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

        {/* ============ PROCESS ============ */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">How we respond</span>
              <h2 className="display-lg mt-4">Four steps from call to fix.</h2>
            </div>

            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((p) => {
                const Icon = p.icon
                return (
                  <li
                    key={p.step}
                    className="relative rounded-lg border border-border bg-card p-6"
                  >
                    <span className="absolute -top-3 left-6 inline-flex items-center justify-center rounded-full bg-brand-yellow text-black text-xs font-bold px-3 py-1">
                      Step {p.step}
                    </span>
                    <div className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/80">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* ============ PREVENTION TIPS ============ */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Prevention</span>
              <h2 className="display-lg mt-4">Small habits, fewer call-outs.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="text-lg font-semibold">Plumbing prevention</h3>
                <ul className="mt-5 space-y-3">
                  {preventPlumbing.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground/80">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="text-lg font-semibold">Heating prevention</h3>
                <ul className="mt-5 space-y-3">
                  {preventHeating.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground/80">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
                  <span className="eyebrow border-white/15 bg-white/5 text-white/70">Need help right now?</span>
                  <h2 className="display-lg mt-4 text-white">We're on the phone 24/7.</h2>
                  <p className="lead mt-4 text-white/70 max-w-xl">
                    One call reaches a Gas Safe registered engineer — not a call centre. We'll get you safely back
                    on.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                  <a href="tel:07712599254" className="btn-primary">
                    <PhoneCall className="h-4 w-4" />
                    Call 07712 599254
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    All services
                    <ArrowUpRight className="h-4 w-4" />
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
