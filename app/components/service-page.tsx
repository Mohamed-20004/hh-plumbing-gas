import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Phone } from "lucide-react"
import { Header } from "./header"
import { SiteFooter } from "./site-footer"
import { CtaBand } from "./cta-band"

export type ServicePageProps = {
  name: string
  title: string
  intro: string
  whatTitle: string
  whatParas: string[]
  image: string
  imageAlt: string
  stat?: { value: string; label: string }
  provideList: string[]
  secondImage?: string
  secondImageAlt?: string
}

export function ServicePage({
  name,
  title,
  intro,
  whatTitle,
  whatParas,
  image,
  imageAlt,
  stat,
  provideList,
  secondImage,
  secondImageAlt,
}: ServicePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ HERO BAND ============ */}
        <section className="bg-brand-black text-white">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow">
              Our services
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white text-balance">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/65 leading-relaxed text-pretty">{intro}</p>
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

        {/* ============ WHAT IS IT ============ */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow-deep">
                About this service
              </p>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-balance">
                {whatTitle}
              </h2>
              {whatParas.map((para) => (
                <p key={para.slice(0, 32)} className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
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

        {/* ============ WHAT WE PROVIDE ============ */}
        <section className="bg-foreground/[0.02] border-y border-border">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
              {secondImage ? (
                <div className="relative order-last lg:order-first aspect-[4/3] overflow-hidden bg-muted">
                  <Image src={secondImage} alt={secondImageAlt ?? ""} fill className="object-cover" />
                </div>
              ) : null}

              <div className={secondImage ? "" : "max-w-2xl"}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow-deep">
                  What we provide
                </p>
                <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">
                  Everything handled, start to finish.
                </h2>
                <ul className="mt-9 space-y-4">
                  {provideList.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-brand-yellow text-black">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
