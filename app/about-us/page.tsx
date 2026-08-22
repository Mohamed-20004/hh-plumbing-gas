import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"
import { CtaBand } from "../components/cta-band"

const stats = [
  { value: "15 years", label: "Serving London" },
  { value: "2,400+", label: "Installations completed" },
  { value: "4.9 ★", label: "Customer rating" },
  { value: "24/7", label: "Emergency cover" },
]

const accreditations = [
  {
    name: "Gas Safe Register",
    logo: "/images/gas-safe-logo.png",
    desc: "Registration no. 630695. Every engineer carrying out gas work on our team is Gas Safe registered and assessed.",
  },
  {
    name: "Vaillant Accredited Installer",
    logo: "/images/vaillant-logo-new.png",
    desc: "Manufacturer-accredited installation of Vaillant boilers and heat pumps, with access to extended warranties.",
  },
  {
    name: "Worcester Bosch Accredited Installer",
    logo: "/images/worcester-bosch-new.png",
    desc: "Accredited installer status with Worcester Bosch — trained, assessed and backed by extended guarantees.",
  },
  {
    name: "CSCS Certified",
    badge: "CSCS",
    desc: "Construction Skills Certification Scheme — our engineers are certified to work safely on any site.",
  },
  {
    name: "REFCOM F-Gas Certified",
    badge: "F-GAS",
    desc: "REFCOM certified for the safe handling of refrigerants — the legal requirement behind every air conditioning installation and service.",
  },
]

const values = [
  "Fixed, itemised prices — agreed before any work starts",
  "Clean, careful work — floors protected, sites tidied",
  "One team, start to finish — no juggling trades",
  "Every installation backed by a written guarantee",
]

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ HERO BAND ============ */}
        <section className="bg-brand-black text-white">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">About us</h1>
            <p className="mt-6 max-w-md text-lg text-white/65 leading-relaxed">
              Gas Safe registered plumbing, heating and air conditioning specialists — serving London
              for 15 years.
            </p>
          </div>
        </section>

        {/* ============ BREADCRUMB ============ */}
        <div className="container mx-auto px-4 pt-8">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="font-medium text-foreground hover:text-brand-yellow-deep transition-colors">
              Home
            </Link>{" "}
            <span aria-hidden>›</span> About
          </p>
        </div>

        {/* ============ STORY ============ */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow-deep">
                Who we are
              </p>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-[1.08] text-balance">
                Fifteen years keeping
                <br />
                London running.
              </h2>
              <p className="mt-9 text-lg text-muted-foreground leading-relaxed">
                HH Plumbing &amp; Gas has spent 15 years working across London — from single leaking
                pipes to full bathroom renovations, boiler swaps to ground source heat pumps and air
                conditioning. Different jobs, same approach: turn up on time, price it honestly, do it
                properly.
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our engineers are Gas Safe registered and manufacturer-trained, accredited by Vaillant
                and Worcester Bosch, CSCS certified for site work, and REFCOM F-Gas certified for air
                conditioning. Every installation leaves with the paperwork to prove it — and a written
                guarantee behind it.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 bg-brand-yellow px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#E6BE00] transition-colors"
                >
                  Get a free quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:02081021108"
                  className="inline-flex items-center gap-2 border border-border px-7 py-3.5 text-sm font-semibold hover:border-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  0208 102 1108
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=900&h=675&fit=crop&auto=format"
                  alt="HH Plumbing & Gas engineer at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-8 left-0 lg:-left-10 max-w-[260px] bg-brand-black p-8">
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-brand-yellow">15 years</p>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  of experience across London
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STATS BAND ============ */}
        <section className="bg-brand-black text-white">
          <div className="container mx-auto px-4 py-14 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-bold tracking-tight text-white">{s.value}</p>
                  <p className="mt-1.5 text-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ACCREDITATIONS ============ */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="max-w-lg text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-balance">
            Accredited, certified and accountable.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
            Anyone can say they do good work. These are the accreditations that let you check.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {accreditations.map((a) => (
              <div key={a.name} className="flex flex-col border border-border p-8">
                <div className="flex h-16 items-center">
                  {a.logo ? (
                    <Image
                      src={a.logo}
                      alt={a.name}
                      width={120}
                      height={56}
                      className="max-h-14 w-auto object-contain"
                    />
                  ) : (
                    <span className="inline-flex items-center justify-center bg-brand-black px-4 py-2.5 text-sm font-black tracking-[0.15em] text-brand-yellow">
                      {a.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-bold tracking-tight">{a.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ HOW WE WORK ============ */}
        <section className="bg-foreground/[0.02] border-y border-border">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="max-w-md text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]">
              How we work
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => (
                <div key={v} className="bg-brand-yellow/20 p-7">
                  <p className="text-lg md:text-xl font-semibold tracking-tight leading-snug">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
