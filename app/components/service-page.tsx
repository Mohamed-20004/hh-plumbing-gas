import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Plus } from "lucide-react"
import { Header } from "./header"
import { SiteFooter } from "./site-footer"
import { CtaBand } from "./cta-band"

export type ServicePageProps = {
  name: string
  title: string
  tagline: string
  intro: string
  heroImage: string
  whatTitle: string
  whatParas: string[]
  image: string
  imageAlt: string
  stat?: { value: string; label: string }
  provideList: string[]
  steps: { title: string; desc: string }[]
}

export function ServicePage({
  name,
  title,
  tagline,
  intro,
  heroImage,
  whatTitle,
  whatParas,
  image,
  imageAlt,
  stat,
  provideList,
  steps,
}: ServicePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ IMAGE HERO ============ */}
        <section className="relative min-h-[72svh] w-full overflow-hidden bg-brand-black">
          <Image src={heroImage} alt="" fill priority className="object-cover" aria-hidden />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.25) 40%, rgba(10,10,10,0.85) 100%)",
            }}
          />
          <div className="relative container mx-auto px-4 min-h-[72svh] flex flex-col justify-end pb-14 pt-28">
            <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white text-balance">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-2xl md:text-3xl font-bold tracking-tight leading-snug text-brand-yellow text-balance">
              {tagline}
            </p>
            <p className="mt-5 max-w-xl text-base md:text-lg font-semibold text-white/85 leading-relaxed text-pretty">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
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
                <Phone className="h-4 w-4" />
                0208 102 1108
              </a>
            </div>
          </div>
        </section>

        {/* ============ BREADCRUMB ============ */}
        <div className="container mx-auto px-4 pt-8">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="font-medium text-foreground hover:text-brand-yellow-deep transition-colors">
              Home
            </Link>{" "}
            <span aria-hidden>›</span>{" "}
            <Link
              href="/services"
              className="font-medium text-foreground hover:text-brand-yellow-deep transition-colors"
            >
              Services
            </Link>{" "}
            <span aria-hidden>›</span> {name}
          </p>
        </div>

        {/* ============ ABOUT THIS SERVICE ============ */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.12] text-balance">
                {whatTitle}
              </h2>
              <p className="mt-10 text-xl font-bold tracking-tight">What it involves</p>
              {whatParas.map((para) => (
                <p key={para.slice(0, 32)} className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
              <Link
                href="/get-a-quote"
                className="mt-10 inline-flex items-center gap-2 bg-brand-yellow px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#E6BE00] transition-colors"
              >
                Get a fixed price for this job
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image src={image} alt={imageAlt} fill className="object-cover" />
              </div>
              {stat && (
                <div className="absolute bottom-8 left-0 lg:-left-10 max-w-[260px] bg-brand-black p-8">
                  <p className="text-2xl md:text-3xl font-bold tracking-tight text-brand-yellow">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{stat.label}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============ WHY CHOOSE US (cards over image) ============ */}
        <section className="relative overflow-hidden border-y border-border">
          <div aria-hidden className="absolute inset-y-0 right-0 hidden lg:block w-[45%]">
            <Image src={heroImage} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-white/25" />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <h2 className="max-w-md text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-balance">
              Why choose HH for this job?
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 gap-5 lg:max-w-[62%]">
              {provideList.map((item) => (
                <div key={item} className="bg-brand-yellow/20 backdrop-blur-sm p-7">
                  <p className="text-lg md:text-xl font-semibold tracking-tight leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS (numbered accordion) ============ */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight">How it works</h2>
          <div className="mx-auto mt-12 max-w-3xl">
            {steps.map((step, i) => (
              <details key={step.title} className="group border-b border-foreground/25">
                <summary className="flex cursor-pointer items-center gap-5 py-6 list-none [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-brand-yellow text-black font-bold">
                    {i + 1}
                  </span>
                  <span className="flex-1 text-lg md:text-xl font-bold tracking-tight">{step.title}</span>
                  <Plus
                    aria-hidden
                    className="h-5 w-5 shrink-0 text-foreground/60 transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="pb-7 pl-[60px] text-muted-foreground leading-relaxed">{step.desc}</p>
              </details>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
