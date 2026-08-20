import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, ShieldCheck, Clock } from "lucide-react"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"
import { ContactCTA } from "../components/contact-cta"
import { Stagger, StaggerItem, FadeIn, Reveal } from "../components/motion"

const services = [
  {
    title: "Boiler Installation",
    tagline: "Combi · System · Regular",
    link: "/services/boiler-installations",
    image: "/placeholder.svg?height=700&width=1000&text=Boiler+installation",
  },
  {
    title: "Heat Pump Installation",
    tagline: "Air · Ground · Hybrid",
    link: "/services/heat-pump-installations",
    image: "/placeholder.svg?height=700&width=1000&text=Heat+pump",
  },
  {
    title: "Bathroom Installation",
    tagline: "Design & full fit",
    link: "/services/bathroom-installation",
    image: "/images/modern-bathroom.jpeg",
  },
  {
    title: "Underfloor Heating",
    tagline: "Wet · Electric systems",
    link: "/services/underfloor-heating-installation",
    image: "/placeholder.svg?height=700&width=1000&text=Underfloor+heating",
  },
  {
    title: "Cylinder Installation",
    tagline: "Unvented · Vented · Megaflo",
    link: "/services/cylinder-installation",
    image: "/placeholder.svg?height=700&width=1000&text=Hot+water+cylinder",
  },
  {
    title: "Drainage",
    tagline: "Unblocking · CCTV · Repairs",
    link: "/services/drainage",
    image: "/placeholder.svg?height=700&width=1000&text=Drainage",
  },
  {
    title: "Emergency Repairs",
    tagline: "24/7 Gas Safe response",
    link: "/services/emergency-repairs",
    image: "/placeholder.svg?height=700&width=1000&text=Emergency+repairs",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ BREADCRUMB STRIP ============ */}
        <div className="border-b border-border bg-foreground/[0.03]">
          <div className="container mx-auto px-4 py-3 text-sm text-muted-foreground">
            <span className="font-medium">Location:</span>{" "}
            <Link href="/" className="font-semibold text-foreground hover:text-brand-yellow-deep transition-colors">
              Home
            </Link>{" "}
            <span aria-hidden>»</span> <span>Services</span>
          </div>
        </div>

        {/* ============ TITLE + INTRO ============ */}
        <section className="container mx-auto px-4 pt-12 md:pt-16 pb-4">
          <FadeIn delay={0.05} y={12}>
            <h1 className="display-xl">Services</h1>
            <span aria-hidden className="mt-6 block h-1 w-16 rounded-full bg-brand-yellow" />
          </FadeIn>

          <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
                We cover all aspects of plumbing, heating and gas — spanning from boiler swaps and hot
                water cylinders to heat pumps, underfloor heating and complete bathroom renovations.
                With our high attention to detail and thorough approach, we deliver a high-quality,
                attentive service on every project. Every job is carried out by Gas Safe registered
                engineers using manufacturer-approved parts, backed by fixed itemised quotes and
                warranties of up to 12 years.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="border-l border-dashed border-foreground/25 pl-6 text-sm text-muted-foreground leading-relaxed">
                We cover residential properties across Central, West and Greater London — including
                Ealing, Hammersmith, Fulham and the surrounding areas, with 24/7 emergency response
                across the city.
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============ IMAGE-TILE GRID ============ */}
        <section className="container mx-auto px-4 py-14 md:py-20">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <StaggerItem key={service.title} className="h-full">
                <Link
                  href={service.link}
                  className="group relative flex h-72 flex-col items-center justify-center overflow-hidden rounded-lg border border-border text-center"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-brand-black/60 transition-colors duration-300 group-hover:bg-brand-black/45"
                  />
                  <div className="relative z-10 px-6">
                    <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.18em] text-white text-balance">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      {service.tagline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-brand-yellow group-hover:border-brand-yellow group-hover:text-black">
                      More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}

            {/* CTA tile completes the 3-column grid */}
            <StaggerItem className="h-full">
              <Link
                href="/get-a-quote"
                className="group relative flex h-72 flex-col items-center justify-center overflow-hidden rounded-lg bg-brand-yellow text-center text-black transition-colors"
              >
                <div className="relative z-10 px-6">
                  <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.18em] text-balance">
                    Not sure where to start?
                  </h2>
                  <p className="mt-2 text-sm font-medium text-black/70">
                    Tell us about the job — we'll recommend the right fix and price it up.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-[1.03]">
                    Get a free quote
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          </Stagger>
        </section>

        {/* ============ TRUST BAND ============ */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <Reveal>
            <Stagger className="grid gap-4 md:grid-cols-3">
              <StaggerItem className="h-full">
                <div className="h-full rounded-lg border border-border bg-card p-6 hover-lift">
                  <ShieldCheck className="h-6 w-6 text-brand-yellow" />
                  <p className="mt-4 font-semibold">Gas Safe Registered</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Register 630695 — every gas job safe, legal and certified.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="h-full">
                <div className="h-full rounded-lg border border-border bg-card p-6 hover-lift">
                  <Clock className="h-6 w-6 text-brand-yellow" />
                  <p className="mt-4 font-semibold">24/7 Emergency Cover</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Leaks, breakdowns or no heat — we answer out of hours.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="h-full">
                <div className="h-full rounded-lg border border-border bg-card p-6 hover-lift">
                  <ArrowUpRight className="h-6 w-6 text-brand-yellow" />
                  <p className="mt-4 font-semibold">Manufacturer Approved</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Approved installers for Vaillant, Worcester Bosch and Baxi.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </Reveal>
        </section>

        <ContactCTA quoteHref="/get-a-quote" />
      </main>

      <SiteFooter />
    </div>
  )
}
