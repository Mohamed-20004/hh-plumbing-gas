import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Award,
  Shield,
  ThumbsUp,
  Zap,
  Wrench,
  ShieldCheck,
  Clock,
} from "lucide-react"
import { Header } from "../components/header"
import { TopBar } from "../components/top-bar"
import { SiteFooter } from "../components/site-footer"

const values = [
  {
    icon: Award,
    title: "Certified Professionals",
    description:
      "Gas Safe registered engineers and MCS certified professionals — every install meets safety and quality standards that go beyond the minimum.",
  },
  {
    icon: ThumbsUp,
    title: "Approved by Leading Brands",
    description:
      "Proud approved installers for Vaillant, Worcester Bosch, Baxi and more — meaning longer manufacturer warranties on your kit.",
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    description:
      "Transparent, itemised quotes. No call-out surprises, no hidden fees — only work we've agreed in writing.",
  },
  {
    icon: Wrench,
    title: "Comprehensive Services",
    description:
      "From a single cylinder swap to a whole-home heating refit — one team, one contact, one clear scope.",
  },
  {
    icon: Shield,
    title: "Guaranteed Workmanship",
    description:
      "Every installation carries our workmanship guarantee alongside the manufacturer's parts & labour warranty.",
  },
  {
    icon: Check,
    title: "Customer Satisfaction",
    description:
      "We earn our repeat business by communicating clearly, tidying up daily, and turning up when we say we will.",
  },
]

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* ============== HERO ============== */}
        <section className="page-hero">
          <div className="relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/15 bg-white/5 text-white/70">About HH Plumbing &amp; Gas</span>
              <h1 className="display-xl mt-6 text-white">
                Craft, care and clean installs — for London homes.
              </h1>
              <p className="lead mt-6 text-white/70 max-w-2xl">
                We're a small team of Gas Safe registered engineers building a reputation for reliable plumbing,
                heating and gas work that just keeps working — long after the dust has settled.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/get-a-quote" className="btn-primary">
                  Get a quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-ghost-dark">
                  See our services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============== WHO WE ARE ============== */}
        <section className="section">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="eyebrow">Who we are</span>
              <h2 className="display-lg mt-4">
                Local expertise. <br />
                Manufacturer-grade install.
              </h2>
              <p className="lead mt-5">
                HH Plumbing and Gas is a trusted provider of professional plumbing and heating services across
                London. With years on the tools, we've built our reputation on exceptional workmanship, reliable
                service and fair pricing.
              </p>
              <p className="lead mt-4">
                Our engineers are committed to the highest standards — every installation, repair and maintenance
                job is completed with care and signed off against manufacturer specifications.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-card p-5">
                  <ShieldCheck className="h-6 w-6 text-brand-yellow" />
                  <p className="mt-4 font-semibold">Gas Safe Registered</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Register number 630695 — every gas job is safe, legal and certified.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-5">
                  <Award className="h-6 w-6 text-brand-yellow" />
                  <p className="mt-4 font-semibold">Manufacturer Approved</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Approved installers for Vaillant, Worcester Bosch, Baxi and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-yellow/15 blur-2xl" aria-hidden />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border shadow-lift">
                <Image
                  src="/images/modern-bathroom.jpeg"
                  alt="HH Plumbing and Gas — professional install"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                />
                <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6 rounded-lg border border-white/15 bg-black/60 backdrop-blur-md p-5 text-white">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 rounded-xl bg-white p-1.5">
                      <Image
                        src="/images/gas-safe-logo.png"
                        alt="Gas Safe Registered"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Certified
                      </p>
                      <p className="font-semibold">Gas Safe Register · 630695</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== VALUES GRID ============== */}
        <section className="bg-foreground/[0.02] border-y border-border py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="eyebrow">Why customers choose us</span>
              <h2 className="display-lg mt-4">Work that speaks for itself.</h2>
              <p className="lead mt-4 text-pretty">
                Six reasons homeowners, landlords and letting agents across London rely on us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="group rounded-lg border border-border bg-card p-6 transition-all duration-300"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/80 transition-colors group-hover:bg-foreground group-hover:text-background">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============== CTA ============== */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-lg border border-border bg-brand-black text-white p-10 md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(600px circle at 20% 20%, rgba(255,214,10,0.18), transparent 55%)",
                }}
              />
              <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
                <div>
                  <span className="eyebrow border-white/15 bg-white/5 text-white/70">Our expertise</span>
                  <h2 className="display-lg mt-4 text-white">
                    From boilers to whole-home heating — we do it all.
                  </h2>
                  <p className="lead mt-4 text-white/70 max-w-xl">
                    Boiler installations, heat pumps, underfloor heating and more — at fair prices, with certified
                    engineers you can trust.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                  <Link href="/services" className="btn-primary">
                    Explore services
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <div className="inline-flex items-center gap-2 text-sm text-white/60">
                    <Clock className="h-4 w-4 text-brand-yellow" />
                    24/7 emergency cover
                  </div>
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
