import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mouse } from "lucide-react"
import { Header } from "./components/header"
import { SiteFooter } from "./components/site-footer"

const services = [
  {
    title: "Bathroom Renovations",
    href: "/services/bathroom-installation",
    image: "/images/modern-bathroom.jpeg",
  },
  {
    title: "Boiler Installations",
    href: "/services/boiler-installations",
    image: "/placeholder.svg?height=800&width=1000&text=Boiler+installations",
  },
  {
    title: "Cylinder Installations",
    href: "/services/cylinder-installation",
    image: "/placeholder.svg?height=800&width=1000&text=Cylinder+installations",
  },
  {
    title: "AC Installations",
    href: "/services/air-conditioning",
    image: "/placeholder.svg?height=800&width=1000&text=AC+installations",
  },
  {
    title: "Heat Pump Installations",
    href: "/services/heat-pump-installations",
    image: "/placeholder.svg?height=800&width=1000&text=Heat+pump+installations",
  },
  {
    title: "Underfloor Heating",
    href: "/services/underfloor-heating-installation",
    image: "/placeholder.svg?height=800&width=1000&text=Underfloor+heating",
  },
]

const projects = [
  {
    title: "Bathroom Renovation",
    location: "Islington, N1",
    href: "/services/bathroom-installation",
    image: "/images/modern-bathroom.jpeg",
  },
  {
    title: "Boiler Replacement",
    location: "Hackney, E8",
    href: "/services/boiler-installations",
    image: "/placeholder.svg?height=600&width=900&text=Boiler+replacement",
  },
  {
    title: "Heat Pump Installation",
    location: "Richmond, TW9",
    href: "/services/heat-pump-installations",
    image: "/placeholder.svg?height=600&width=900&text=Heat+pump",
  },
  {
    title: "Wet Room",
    location: "Chelsea, SW3",
    href: "/services/bathroom-installation",
    image: "/placeholder.svg?height=600&width=900&text=Wet+room",
  },
  {
    title: "AC System",
    location: "Canary Wharf, E14",
    href: "/services/air-conditioning",
    image: "/placeholder.svg?height=600&width=900&text=AC+system",
  },
  {
    title: "Cylinder Install",
    location: "Brixton, SW2",
    href: "/services/cylinder-installation",
    image: "/placeholder.svg?height=600&width=900&text=Cylinder+install",
  },
]

const stats = [
  { value: "2,400+", label: "Installations completed" },
  { value: "15 years", label: "Serving London" },
  { value: "4.9 ★", label: "Customer rating" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header overlay />

      <main className="flex-1">
        {/* =================== HERO =================== */}
        <section className="relative min-h-[100svh] w-full overflow-hidden bg-brand-black">
          <Image
            src="https://images.unsplash.com/photo-1695002817411-203c7f19dfa3?w=1800&h=1200&fit=crop&auto=format"
            alt=""
            fill
            priority
            className="object-cover"
            aria-hidden
          />
          <div aria-hidden className="absolute inset-0 bg-black/55" />

          <div className="relative container mx-auto px-4 min-h-[100svh] flex flex-col justify-center pt-24 pb-24">
            <p className="eyebrow !text-white/70">Gas Safe registered · London</p>

            <h1 className="mt-7 max-w-3xl text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02] text-balance">
              <span className="block text-white">Quality work.</span>
              <span className="block text-brand-yellow">Every time.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg md:text-xl text-white/75 leading-relaxed text-pretty">
              London&rsquo;s trusted plumbing, gas and air conditioning specialists. Fixed-price
              quotes. Manufacturer-approved.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-brand-yellow px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#E6BE00] transition-colors"
              >
                Get a free quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:02081021108"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:border-white transition-colors"
              >
                0208 102 1108
              </a>
            </div>

            <div className="mt-14 max-w-xl border-t border-white/20 pt-8 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight text-white">{s.value}</p>
                  <p className="mt-1 text-xs md:text-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            aria-hidden
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60"
          >
            <Mouse className="h-6 w-6" strokeWidth={1.5} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll down</p>
          </div>
        </section>

        {/* =================== OUR SERVICES =================== */}
        <section>
          <div className="container mx-auto px-4 py-14 md:py-16 flex items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our services</h2>
            <Link
              href="/get-a-quote"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative block aspect-[4/3] overflow-hidden bg-brand-black"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10"
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <ArrowRight className="mt-3 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =================== RECENT PROJECTS =================== */}
        <section className="container mx-auto px-4 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent projects</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={`${project.title}-${project.location}`}
                href={project.href}
                className="group relative block aspect-[3/2] overflow-hidden bg-brand-black"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.location}`}
                  fill
                  className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-0.5 text-sm text-white/60">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =================== CTA =================== */}
        <section className="bg-brand-black text-white">
          <div className="container mx-auto px-4 py-20 md:py-24 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Ready to get started?
              </h2>
              <p className="mt-4 text-white/55 text-lg">
                We&rsquo;ll have a fixed quote back to you within the hour.
              </p>
            </div>
            <Link
              href="/get-a-quote"
              className="inline-flex shrink-0 items-center gap-2 bg-brand-yellow px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#E6BE00] transition-colors"
            >
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
