import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Flame,
  Thermometer,
  Droplet,
  Wrench,
  ShowerHead,
  Waves,
  Siren,
  CheckCircle2,
} from "lucide-react"
import { Header } from "./components/header"
import { SiteFooter } from "./components/site-footer"
import { ContactCTA } from "./components/contact-cta"
import { HeroCarousel } from "./components/hero-carousel"
import { BeforeAfter } from "./components/before-after"
import { ReviewsCarousel } from "./components/reviews-carousel"
import { Reveal, Stagger, StaggerItem, CountUp } from "./components/motion"

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
    desc: "Combi, system and regular boilers from Worcester, Vaillant, Baxi and more — fitted from £1,800.",
  },
  {
    title: "Heat Pump Installation",
    href: "/services/heat-pump-installations",
    icon: Thermometer,
    desc: "Air and ground source heat pumps for efficient, low-carbon heating — £7,500 BUS grant handled.",
  },
  {
    title: "Bathroom Installation",
    href: "/services/bathroom-installation",
    icon: ShowerHead,
    desc: "Full bathroom renovations — design, plumbing, tiling and electrics under one roof.",
  },
  {
    title: "Underfloor Heating",
    href: "/services/underfloor-heating-installation",
    icon: Waves,
    desc: "Wet and electric systems designed to replace radiators and save energy.",
  },
  {
    title: "Cylinder Installation",
    href: "/services/cylinder-installation",
    icon: Droplet,
    desc: "Direct and indirect hot water cylinders, including unvented Megaflo systems.",
  },
  {
    title: "Drainage",
    href: "/services/drainage",
    icon: Wrench,
    desc: "Blocked drains cleared and damaged drains repaired — with CCTV inspection included.",
  },
  {
    title: "Emergency Repairs",
    href: "/services/emergency-repairs",
    icon: Siren,
    desc: "Leaks, boiler breakdowns, no heat or hot water — 24/7 Gas Safe response across London.",
  },
]

const steps = [
  {
    n: "1",
    title: "Contact us",
    desc: "Call us or fill in the quote form and one of the team will come straight back to you.",
  },
  {
    n: "2",
    title: "Free fixed quote",
    desc: "We review the scope and send a transparent, itemised fixed-price quote — no obligation.",
  },
  {
    n: "3",
    title: "Certified install",
    desc: "Gas Safe engineers deliver the work with minimal disruption, pressure-tested and signed off.",
  },
  {
    n: "4",
    title: "Aftercare & warranty",
    desc: "Manufacturer warranties up to 12 years plus our own workmanship guarantee on every job.",
  },
]

const reviews = [
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
]

const recentProjects = [
  {
    title: "Ealing, West London",
    tag: "Boiler replacement",
    desc: "Ageing boiler swapped for a new Vaillant combi — installed, flushed and warrantied in a single day.",
    href: "/services/boiler-installations",
    image: "/placeholder.svg?height=600&width=800&text=Boiler+replacement",
  },
  {
    title: "Hammersmith, West London",
    tag: "Bathroom renovation",
    desc: "Full bathroom refit — design, plumbing, tiling and electrics handled end to end by one team.",
    href: "/services/bathroom-installation",
    image: "/images/modern-bathroom.jpeg",
  },
  {
    title: "Fulham, South West London",
    tag: "Emergency call-out",
    desc: "10pm Sunday emergency — heating restored within the hour by our 24/7 Gas Safe response team.",
    href: "/services/emergency-repairs",
    image: "/placeholder.svg?height=600&width=800&text=Emergency+repair",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* =================== HERO CAROUSEL =================== */}
        <HeroCarousel />

        {/* =================== CENTRED INTRO STATEMENT =================== */}
        <section className="section">
          <div className="container mx-auto px-4">
            <Reveal className="mx-auto max-w-4xl text-center">
              <h2 className="display-lg">London Plumbing, Heating &amp; Gas Services</h2>
              <p className="mt-4 text-xl md:text-2xl font-bold text-brand-yellow-deep dark:text-brand-yellow">
                Exceeding customer expectations for over 10 years
              </p>
              <span
                aria-hidden
                className="mt-6 inline-block h-1 w-16 rounded-none bg-brand-yellow"
              />
              <p className="lead mt-6 mx-auto max-w-3xl text-pretty">
                HH Plumbing &amp; Gas is a London-based heating and plumbing company offering a complete
                range of services — boiler installations, heat pumps, hot water cylinders, underfloor
                heating, full bathroom renovations, drainage and 24/7 emergency repairs. Every job is
                carried out by Gas Safe registered engineers (register number 630695) using
                manufacturer-approved parts, with fixed itemised quotes and warranties of up to 12 years.
              </p>
            </Reveal>
          </div>
        </section>

        {/* =================== OUR SERVICES =================== */}
        <section className="bg-foreground/[0.02] border-y border-border py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="display-md">Our services</h2>
              <span aria-hidden className="mt-5 block h-1 w-16 rounded-none bg-brand-yellow" />
            </Reveal>

            <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <StaggerItem key={service.href} className="h-full">
                    <div className="flex h-full flex-col rounded-lg border border-border bg-card p-7 hover-lift">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-yellow/15 text-brand-yellow-deep dark:text-brand-yellow">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                      </div>
                      <p className="mt-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                      <Link href={service.href} className="btn-primary group mt-6 self-start !px-4 !py-2">
                        More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </StaggerItem>
                )
              })}

              {/* Filler CTA card keeps the 7-card grid balanced */}
              <StaggerItem className="h-full hidden lg:block">
                <div className="flex h-full flex-col justify-center rounded-lg border border-dashed border-foreground/20 p-7 text-center">
                  <p className="text-sm text-muted-foreground">Not sure which service you need?</p>
                  <Link
                    href="/contact-us"
                    className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold border-b border-brand-yellow pb-1 self-center hover:text-brand-yellow-deep transition-colors"
                  >
                    Talk it through with an engineer
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* =================== DARK QUALITY + BEFORE/AFTER =================== */}
        <section className="relative overflow-hidden bg-brand-black text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(600px circle at 20% 30%, rgba(255,214,10,0.14), transparent 55%), radial-gradient(600px circle at 80% 80%, rgba(255,214,10,0.07), transparent 55%)",
            }}
          />
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-center">
              <Reveal>
                <h2 className="display-md text-white">
                  High quality &amp; reliable plumbing, heating &amp; gas work
                </h2>
                <span aria-hidden className="mt-6 block h-1 w-16 rounded-none bg-brand-yellow" />
                <p className="mt-6 text-white/70 leading-relaxed">
                  Our approach is meticulous and thorough — every installation is carried out by Gas
                  Safe registered engineers using manufacturer-approved parts, with pressure-tests,
                  Benchmark certificates and warranty registration completed before we leave.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Fixed, itemised quotes — the price you see is the price you pay",
                    "Clean finishes and tidy sites, every visit",
                    "Manufacturer warranties up to 12 years",
                    "24/7 emergency cover across London",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Drag the slider — before and after from a recent bathroom project
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <BeforeAfter
                  beforeSrc="/placeholder.svg?height=900&width=1200&text=Before"
                  afterSrc="/images/modern-bathroom.jpeg"
                  beforeAlt="Bathroom before renovation"
                  afterAlt="Bathroom after renovation by HH Plumbing & Gas"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* =================== TRUST STATS BAND =================== */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-14 md:py-16">
            <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
              {[
                { value: "1,200+", label: "Homes installed" },
                { value: "4.9★", label: "Average customer rating" },
                { value: "12 yrs", label: "Manufacturer warranty" },
                { value: "24/7", label: "Emergency cover" },
              ].map((s) => (
                <StaggerItem key={s.label} className="flex flex-col items-center">
                  <dl className="flex flex-col items-center">
                    <dt className="order-2 mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {s.label}
                    </dt>
                    <dd className="order-1 text-4xl md:text-5xl font-extrabold tracking-tight">
                      <CountUp value={s.value} />
                    </dd>
                  </dl>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* =================== REVIEWS CAROUSEL =================== */}
        <section className="section">
          <div className="container mx-auto px-4">
            <Reveal className="text-center mb-12">
              <h2 className="display-md">HH Plumbing &amp; Gas reviews</h2>
              <span aria-hidden className="mt-5 inline-block h-1 w-16 rounded-none bg-brand-yellow" />
              <div className="mt-5 flex items-center justify-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">4.9</span> from local customers
                </p>
              </div>
            </Reveal>

            <ReviewsCarousel reviews={reviews} />
          </div>
        </section>

        {/* =================== 4 EASY STEPS (yellow band) =================== */}
        <section className="bg-brand-yellow text-black">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <Reveal className="text-center mb-12">
              <h2 className="display-md text-black">
                4 easy steps to get your project started&hellip;
              </h2>
              <span aria-hidden className="mt-5 inline-block h-1 w-16 rounded-none bg-black" />
            </Reveal>

            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step) => (
                <StaggerItem key={step.n} className="h-full">
                  <div className="flex h-full flex-col rounded-lg border-2 border-black/15 bg-black/[0.04] p-7 transition-colors hover:border-black/40">
                    <span className="text-5xl font-extrabold tracking-tight">{step.n}</span>
                    <h3 className="mt-4 text-lg font-bold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black/70">{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* =================== RECENT PROJECTS =================== */}
        <section className="section">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="display-md">Some of our recent projects</h2>
              <span aria-hidden className="mt-5 block h-1 w-16 rounded-none bg-brand-yellow" />
            </Reveal>

            <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
              {recentProjects.map((project) => (
                <StaggerItem key={project.title} className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card hover-lift">
                    <div className="relative aspect-[5/3] overflow-hidden bg-foreground/[0.04]">
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.tag}`}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute left-4 top-4 rounded-none bg-brand-yellow px-3 py-1 text-xs font-semibold text-black">
                        {project.tag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                        {project.desc}
                      </p>
                      <Link
                        href={project.href}
                        className="btn-primary group mt-6 self-start !px-4 !py-2"
                      >
                        View service
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* =================== PARTNER MARQUEE =================== */}
        <section className="py-10 md:py-14 border-y border-border bg-foreground/[0.02]">
          <div className="container mx-auto px-4">
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-8">
                Approved installer for leading brands
              </p>
            </Reveal>
            <div className="relative mask-fade-x overflow-hidden marquee-track">
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

        {/* =================== FAQ =================== */}
        <section className="section">
          <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <h2 className="display-md">
                Answers before <br />
                you book.
              </h2>
              <span aria-hidden className="mt-5 block h-1 w-16 rounded-none bg-brand-yellow" />
              <p className="lead mt-6 max-w-md">
                Can't find what you're looking for? Call us on{" "}
                <a href="tel:0208 102 1108" className="font-semibold underline underline-offset-4 decoration-brand-yellow">
                  0208 102 1108
                </a>{" "}
                — we're happy to talk it through.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
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
                  <details key={item.q} className="group faq-item">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 list-none transition-colors hover:bg-foreground/[0.02]">
                      <span className="font-semibold text-base">{item.q}</span>
                      <span
                        aria-hidden
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-none border border-border text-muted-foreground transition-all duration-300 group-open:bg-brand-yellow group-open:border-brand-yellow group-open:text-black group-open:rotate-45"
                      >
                        <span className="text-lg leading-none">+</span>
                      </span>
                    </summary>
                    <div className="faq-body px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  )
}
