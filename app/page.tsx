import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  ShieldCheck,
  Clock,
  Star,
  Flame,
  Thermometer,
  ShowerHead,
  Waves,
  Droplet,
  Wrench,
  Siren,
  Snowflake,
} from "lucide-react"
import { Header } from "./components/header"
import { SiteFooter } from "./components/site-footer"
import { ContactCTA } from "./components/contact-cta"
import { Reveal, Stagger, StaggerItem, HeroText, FadeIn } from "./components/motion"

const services = [
  {
    title: "Boiler Installation",
    href: "/services/boiler-installations",
    icon: Flame,
    desc: "Combi, system and regular boilers from £1,800.",
  },
  {
    title: "Heat Pump Installation",
    href: "/services/heat-pump-installations",
    icon: Thermometer,
    desc: "Air and ground source — £7,500 BUS grant handled.",
  },
  {
    title: "Air Conditioning",
    href: "/services/air-conditioning",
    icon: Snowflake,
    desc: "Split and multi-split systems, installed and serviced.",
  },
  {
    title: "Bathroom Installation",
    href: "/services/bathroom-installation",
    icon: ShowerHead,
    desc: "Full renovations, design to final silicone.",
  },
  {
    title: "Underfloor Heating",
    href: "/services/underfloor-heating-installation",
    icon: Waves,
    desc: "Wet and electric systems, new build or retrofit.",
  },
  {
    title: "Cylinder Installation",
    href: "/services/cylinder-installation",
    icon: Droplet,
    desc: "Unvented and vented, including Megaflo.",
  },
  {
    title: "Drainage",
    href: "/services/drainage",
    icon: Wrench,
    desc: "Blockages cleared, CCTV surveys, repairs.",
  },
  {
    title: "Emergency Repairs",
    href: "/services/emergency-repairs",
    icon: Siren,
    desc: "24/7 Gas Safe response across London.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* =================== HERO =================== */}
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
            <div className="max-w-3xl text-white">
              <FadeIn delay={0.05} y={12}>
                <span className="eyebrow border-white/20 bg-white/5 text-white/80">
                  Trusted London heating engineers
                </span>
              </FadeIn>

              <HeroText
                text="Heating your home, done properly."
                className="display-xl mt-6 text-balance text-white"
                delay={0.15}
              />

              <FadeIn delay={0.55}>
                <p className="lead mt-6 max-w-xl text-white/80 text-pretty">
                  Gas Safe engineers installing boilers, heat pumps, air conditioning and complete
                  bathrooms across London — fixed prices, clean finishes, warranties up to 12 years.
                </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/get-a-quote" className="btn-primary group">
                    Get a free quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="tel:0208 102 1108"
                    className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call 0208 102 1108
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.85}>
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
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =================== SERVICES =================== */}
        <section className="section">
          <div className="container mx-auto px-4">
            <Reveal className="max-w-2xl">
              <h2 className="display-md">Our services</h2>
              <p className="lead mt-4">
                Design, installation and repair — handled end to end by one trusted team.
              </p>
            </Reveal>

            <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <StaggerItem key={service.href} className="h-full">
                    <Link
                      href={service.href}
                      className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 hover-lift"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-foreground/[0.05] text-foreground/80 transition-colors group-hover:bg-brand-yellow group-hover:text-black">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 font-semibold tracking-tight">{service.title}</h3>
                      <p className="mt-1.5 flex-1 text-sm text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 transition-colors group-hover:text-foreground">
                        Learn more
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </section>

        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  )
}
