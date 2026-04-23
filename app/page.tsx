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
import { SiteFooter } from "./components/site-footer"
import { ContactCTA } from "./components/contact-cta"

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
    image: "/placeholder.svg?height=600&width=800&text=Boiler+install",
    price: "from £1,800",
  },
  {
    title: "Heat Pump Installations",
    href: "/services/heat-pump-installations",
    icon: Thermometer,
    desc: "Air and ground source heat pumps for efficient, low-carbon heating.",
    image: "/placeholder.svg?height=600&width=800&text=Heat+pump",
    price: "£7,500 BUS grant",
  },
  {
    title: "Underfloor Heating",
    href: "/services/underfloor-heating-installation",
    icon: Droplet,
    desc: "Wet and electric systems designed to replace radiators and save energy.",
    image: "/placeholder.svg?height=600&width=800&text=Underfloor+heating",
    price: "Wet or electric",
  },
  {
    title: "Cylinder Installation",
    href: "/services/cylinder-installation",
    icon: Wrench,
    desc: "Direct and indirect hot water cylinders, including unvented Megaflo systems.",
    image: "/placeholder.svg?height=600&width=800&text=Hot+water+cylinder",
    price: "Unvented specialists",
  },
  {
    title: "Bathroom Installation",
    href: "/services/bathroom-installation",
    icon: Droplet,
    desc: "Full bathroom renovations — design, plumbing, tiling and electrics under one roof.",
    image: "/images/modern-bathroom.jpeg",
    price: "Design-led",
  },
  {
    title: "Emergency Repairs",
    href: "/services/emergency-repairs",
    icon: Wrench,
    desc: "Leaks, boiler breakdowns, no heat or hot water — 24/7 Gas Safe response across London.",
    image: "/placeholder.svg?height=600&width=800&text=Emergency+repairs",
    price: "24/7 call-out",
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
      <Header />

      <main className="flex-1">
        {/* =================== HERO (full-screen image) =================== */}
        <section className="relative min-h-[92svh] w-full overflow-hidden bg-brand-black">
          <Image
            src="/images/modern-bathroom.jpeg"
            alt=""
            fill
            priority
            className="object-cover"
            aria-hidden
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 40%, rgba(10,10,10,0.92) 100%)",
            }}
          />

          <div className="relative h-full container mx-auto px-4 pt-20 md:pt-28 pb-14 md:pb-20 flex flex-col justify-end min-h-[inherit]">
            <div className="max-w-3xl text-white animate-fade-up">
              <span className="eyebrow border-white/20 bg-white/5 text-white/80">
                Trusted London heating engineers
              </span>

              <h1 className="display-xl mt-6 text-balance text-white">
                Heating your home, done properly.
              </h1>

              <p className="lead mt-6 max-w-xl text-white/80 text-pretty">
                Gas Safe engineers designing and installing boilers, heat pumps, cylinders and complete bathrooms
                across London — fixed prices, clean finishes, manufacturer-approved warranties.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/get-a-quote" className="btn-primary group">
                  Get a free quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="tel:07712599254"
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call 07712 599254
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">5.0</span>
                  <span className="text-white/60">from local customers</span>
                </div>
                <span className="hidden sm:inline h-4 w-px bg-white/20" aria-hidden />
                <div className="flex items-center gap-2 text-white/80">
                  <ShieldCheck className="h-4 w-4 text-brand-yellow" />
                  Gas Safe · 630695
                </div>
                <span className="hidden sm:inline h-4 w-px bg-white/20" aria-hidden />
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="h-4 w-4 text-brand-yellow" />
                  24/7 emergency response
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== TRUST STATS BAND =================== */}
        <section className="relative bg-brand-black text-white">
          <div className="container mx-auto px-4 py-14 md:py-16">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
              {[
                { value: "1,200+", label: "Homes installed" },
                { value: "4.9★", label: "Average customer rating" },
                { value: "12 yrs", label: "Manufacturer warranty" },
                { value: "24/7", label: "Emergency cover" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <dt className="order-2 mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    {s.label}
                  </dt>
                  <dd className="order-1 text-4xl md:text-5xl font-extrabold tracking-tight">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
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
                  your home system.
                </h2>
              </div>
              <p className="lead max-w-md">
                From single-component upgrades to full heating refits, we handle the design, install and sign-off
                end to end.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300"
                  >
                    <div className="relative aspect-[5/3] overflow-hidden bg-foreground/[0.04]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                      />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-yellow text-black px-3 py-1 text-xs font-semibold">
                        <Icon className="h-3.5 w-3.5" />
                        {service.price}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                      <span className="mt-6 inline-flex items-center justify-between text-sm font-semibold">
                        <span>Learn more</span>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </span>
                    </div>
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
                  Zero shortcuts.
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
                  <div className="relative mt-8 aspect-[5/4] rounded-lg overflow-hidden border border-white/10">
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
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== TESTIMONIALS =================== */}
        <section className="section bg-foreground/[0.02] border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <span className="eyebrow">What customers say</span>
                <h2 className="display-lg mt-4">
                  Kind words from London homes.
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">4.9</span> from local customers
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  quote:
                    "Swapped our ancient boiler for a new Vaillant — engineers were spotless, finished in a day, and the quote was exactly what I paid.",
                  name: "Sarah K.",
                  area: "Ealing · Boiler replacement",
                },
                {
                  quote:
                    "Full bathroom refit from first meeting to final silicone. Tidy, professional, on time. Would absolutely recommend.",
                  name: "David M.",
                  area: "Hammersmith · Bathroom renovation",
                },
                {
                  quote:
                    "Called them in an emergency at 10pm on a Sunday. Someone was at the door within the hour and had the heating back on.",
                  name: "Priya S.",
                  area: "Fulham · Emergency call-out",
                },
              ].map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col rounded-lg border border-border bg-card p-8 shadow-soft"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                  <blockquote className="text-base leading-relaxed text-foreground/90 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.area}</p>
                  </figcaption>
                </figure>
              ))}
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
                  className="relative rounded-lg border border-border bg-card p-6 shadow-soft"
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

        {/* =================== FAQ =================== */}
        <section className="section">
          <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <span className="eyebrow">Frequently asked</span>
              <h2 className="display-lg mt-4">
                Answers before <br />
                you book.
              </h2>
              <p className="lead mt-5 max-w-md">
                Can't find what you're looking for? Call us on{" "}
                <a href="tel:07712599254" className="font-semibold underline underline-offset-4 decoration-brand-yellow">
                  07712 599254
                </a>{" "}
                — we're happy to talk it through.
              </p>
            </div>

            <div className="divide-y divide-border rounded-lg border border-border bg-card overflow-hidden">
              {[
                {
                  q: "How much does a new boiler cost installed?",
                  a: "Most combi boiler swaps start from £1,800 installed, with higher-output or system boilers from around £2,400. Every quote is fixed, itemised and includes parts, labour, a magnetic filter and warranty registration.",
                },
                {
                  q: "Are you Gas Safe registered?",
                  a: "Yes — we're Gas Safe registered (register number 630695). Every gas job is signed off and you'll receive Benchmark documentation on completion.",
                },
                {
                  q: "Do you install heat pumps and handle the BUS grant?",
                  a: "Yes. We install air and ground source heat pumps from Vaillant, Mitsubishi and Daikin, and we handle the £7,500 Boiler Upgrade Scheme grant application on your behalf.",
                },
                {
                  q: "How long does a boiler installation take?",
                  a: "Most straightforward combi replacements are completed in a single day. A system change (new cylinder, re-piped) typically takes 2–3 days.",
                },
                {
                  q: "What warranty do you offer?",
                  a: "Manufacturer warranties of up to 12 years on leading brands, plus our own workmanship guarantee on every installation.",
                },
                {
                  q: "Do you cover emergencies out of hours?",
                  a: "Yes — 24/7 Gas Safe emergency response across central, west and greater London. Call 07712 599254 any time.",
                },
              ].map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 list-none transition-colors hover:bg-foreground/[0.02]">
                    <span className="font-semibold text-base">{item.q}</span>
                    <span
                      aria-hidden
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-open:bg-brand-yellow group-open:border-brand-yellow group-open:text-black group-open:rotate-45"
                    >
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  )
}
