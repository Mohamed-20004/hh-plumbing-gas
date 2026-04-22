import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Star,
  Clock,
  Flame,
  Thermometer,
  Droplet,
  Wrench,
  CheckCircle2,
  Phone,
} from "lucide-react"
import { Header } from "./components/header"
import { TopBar } from "./components/top-bar"
import { SiteFooter } from "./components/site-footer"

const partnerLogos = [
  { src: "/images/vaillant-logo-new.png", alt: "Vaillant" },
  { src: "/images/worcester-bosch-new.png", alt: "Worcester Bosch" },
  { src: "/images/glow-worm-logo.png", alt: "Glow-worm" },
  { src: "/images/baxi-logo.png", alt: "Baxi" },
  { src: "/images/main-heating-logo.png", alt: "Main" },
  { src: "/images/megaflo-logo.png", alt: "Megaflo" },
  { src: "/images/mitsubishi-electric-logo.png", alt: "Mitsubishi Electric" },
  { src: "/images/daikin-logo.png", alt: "Daikin" },
  { src: "/images/warmup-logo.png", alt: "Warmup" },
]

const services = [
  {
    title: "Boiler Installations",
    href: "/services/boiler-installations",
    icon: Flame,
    desc: "Combi, system and regular boilers from Worcester, Vaillant, Baxi and more.",
  },
  {
    title: "Heat Pump Installations",
    href: "/services/heat-pump-installations",
    icon: Thermometer,
    desc: "Air and ground source heat pumps for efficient, low-carbon heating.",
  },
  {
    title: "Underfloor Heating",
    href: "/services/underfloor-heating-installation",
    icon: Droplet,
    desc: "Wet and electric systems designed to replace radiators and save energy.",
  },
  {
    title: "Cylinder Installation",
    href: "/services/cylinder-installation",
    icon: Wrench,
    desc: "Direct and indirect hot water cylinders, including unvented Megaflo systems.",
  },
]

const stats = [
  { value: "10+", label: "Years on the tools" },
  { value: "500+", label: "Installations completed" },
  { value: "24/7", label: "Emergency cover" },
  { value: "A+", label: "Gas Safe rating" },
]

const steps = [
  { title: "Share the details", desc: "Pick a service and tell us a little about your property." },
  { title: "Free fixed quote", desc: "We review the scope and send a transparent, itemised quote." },
  { title: "Certified install", desc: "Gas Safe engineers deliver the work with minimal disruption." },
  { title: "Aftercare & warranty", desc: "Enjoy manufacturer warranties and our workmanship guarantee." },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* =================== HERO =================== */}
        <section className="relative overflow-hidden">
          {/* Backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-radial-yellow"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid-faint dark:bg-grid-dark bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />

          <div className="relative container mx-auto px-4 pt-16 md:pt-24 pb-20 md:pb-28">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
              <div className="animate-fade-up">
                <span className="eyebrow">Gas Safe registered · London</span>

                <h1 className="display-xl mt-6">
                  Plumbing &amp; gas,{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text-yellow">engineered right</span>
                    <svg
                      aria-hidden
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 300 12"
                      fill="none"
                    >
                      <path
                        d="M2 8C70 3 140 3 298 8"
                        stroke="#FFD60A"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  the first time.
                </h1>

                <p className="lead mt-6 max-w-xl text-pretty">
                  We design and install boilers, heat pumps, underfloor heating and hot water systems across
                  London — with certified engineers, manufacturer-approved parts and a fixed-price promise.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/get-a-quote" className="btn-primary group">
                    Get a free quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a href="tel:07712599254" className="btn-secondary">
                    <Phone className="h-4 w-4" />
                    Call 07712 599254
                  </a>
                </div>

                {/* Trust row */}
                <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                      ))}
                    </div>
                    <span className="font-medium text-foreground">5.0</span>
                    <span>from local customers</span>
                  </div>
                  <span className="hidden sm:inline h-4 w-px bg-border" aria-hidden />
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-yellow" />
                    Gas Safe · 630695
                  </div>
                  <span className="hidden sm:inline h-4 w-px bg-border" aria-hidden />
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-yellow" />
                    24/7 emergency response
                  </div>
                </div>
              </div>

              {/* Image frame */}
              <div className="relative animate-fade-up [animation-delay:120ms]">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-yellow/20 blur-2xl" aria-hidden />
                <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[2rem] overflow-hidden border border-border bg-background shadow-lift">
                  <Image
                    src="/images/modern-bathroom.jpeg"
                    alt="Modern bathroom installation by HH Plumbing and Gas"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  />
                  {/* Floating callout card */}
                  <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6 rounded-2xl border border-white/15 bg-black/60 backdrop-blur-md p-4 text-white">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">Recent project</p>
                        <p className="mt-1 font-semibold">Complete bathroom refit · W13</p>
                      </div>
                      <Link
                        href="/services/bathroom-installation"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-black transition-transform hover:-translate-y-0.5"
                        aria-label="See bathroom installation details"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute left-4 top-4 md:left-6 md:top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-yellow" />
                    Manufacturer approved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== PARTNER MARQUEE =================== */}
        <section className="py-10 md:py-14 border-y border-border bg-foreground/[0.02]">
          <div className="container mx-auto px-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-8">
              Approved installer for leading brands
            </p>
            <div className="relative mask-fade-x overflow-hidden">
              <div className="flex gap-12 animate-marquee w-max">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div
                    key={`${logo.alt}-${i}`}
                    className="relative h-10 w-36 shrink-0 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  >
                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =================== SERVICES =================== */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <span className="eyebrow">What we do</span>
                <h2 className="display-lg mt-4">
                  Quality installs for every part of{" "}
                  <span className="text-brand-yellow">your home system</span>.
                </h2>
              </div>
              <p className="lead max-w-md">
                From single-component upgrades to full heating refits, we handle the design, install and sign-off
                end to end.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lift"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellow transition-colors group-hover:bg-brand-yellow group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                )
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold border-b border-brand-yellow pb-1 hover:text-brand-yellow transition-colors"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =================== DARK QUALITY SECTION =================== */}
        <section className="relative overflow-hidden bg-brand-black text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(600px circle at 20% 30%, rgba(255,214,10,0.18), transparent 55%), radial-gradient(600px circle at 80% 80%, rgba(255,214,10,0.08), transparent 55%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
          />

          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="eyebrow border-white/15 bg-white/5 text-white/70">Quality you can trust</span>
                <h2 className="display-lg mt-4 text-white">
                  Certified engineers. <br />
                  <span className="text-brand-yellow">Zero shortcuts.</span>
                </h2>
                <p className="lead mt-5 text-white/70 max-w-lg">
                  Every installation is carried out by Gas Safe registered engineers using manufacturer-approved
                  parts — with pressure-tests, benchmark certificates and warranty registration before we leave.
                </p>

                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {[
                    "Boiler Installations",
                    "Heat Pump Installations",
                    "Underfloor Heating",
                    "Cylinder Installation",
                    "Bathroom Installation",
                    "Emergency Repairs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex items-center gap-4">
                  <Link href="/services" className="btn-primary">
                    Explore services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/about-us" className="btn-ghost-dark">
                    About our team
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="glass-panel p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                        Registered with
                      </p>
                      <p className="mt-1 text-2xl font-bold">Gas Safe Register</p>
                    </div>
                    <div className="relative h-14 w-14">
                      <Image src="/images/gas-safe-logo.png" alt="Gas Safe" fill className="object-contain" />
                    </div>
                  </div>
                  <div className="relative mt-8 aspect-[5/4] rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src="/images/gas-safe-register.png"
                      alt="Gas Safe Registered · 630695"
                      fill
                      className="object-contain p-4 bg-white"
                    />
                  </div>
                  <dl className="mt-8 grid grid-cols-2 gap-6">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="text-xs uppercase tracking-[0.18em] text-white/50">{stat.label}</dt>
                        <dd className="mt-1 text-2xl font-bold">
                          <span className="text-brand-yellow">{stat.value}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== PROCESS =================== */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">How it works</span>
              <h2 className="display-lg mt-4">A simple path from quote to handover.</h2>
              <p className="lead mt-4 text-pretty">
                We keep the process transparent at every step — no hidden fees, no nasty surprises on the day.
              </p>
            </div>

            <ol className="relative grid md:grid-cols-4 gap-6">
              <div
                aria-hidden
                className="hidden md:block absolute top-5 left-[8%] right-[8%] h-px bg-border"
              />
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-black font-bold text-sm">
                      0{i + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-brand-yellow" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* =================== CTA BANNER =================== */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-brand-yellow p-10 md:p-16 text-black">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(600px circle at 100% 0%, rgba(255,255,255,0.55), transparent 55%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-black/10"
            />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                  Free no-obligation quote
                </span>
                <h2 className="display-md mt-4">
                  Ready to upgrade your heating or hot water?
                </h2>
                <p className="mt-3 max-w-lg text-black/70">
                  Get an itemised fixed-price quote in minutes — no pressure, just clear options.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Start my quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:07712599254"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-transparent px-6 py-3 text-sm font-semibold hover:bg-black/5 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  07712 599254
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
