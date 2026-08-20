import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Header } from "./components/header"
import { SiteFooter } from "./components/site-footer"
import { ServiceList } from "./components/service-list"
import { EnquiryForm } from "./components/enquiry-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* =================== HERO =================== */}
        <section className="relative min-h-[86svh] w-full overflow-hidden bg-brand-black">
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
                "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.85) 100%)",
            }}
          />

          <div className="relative container mx-auto px-4 min-h-[86svh] flex flex-col justify-center pt-16 pb-20">
            <h1 className="max-w-4xl text-balance">
              <span className="block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                Plumbing, done properly.
              </span>
              <span className="mt-2 block font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] text-brand-yellow">
                Heating homes across London.
              </span>
            </h1>
            <p className="lead mt-8 max-w-xl text-white/80 text-pretty">
              We&rsquo;re the trusted team for boilers, heat pumps, air conditioning and complete
              bathrooms — Gas Safe engineers, fixed prices and warranties up to 12 years.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/get-a-quote" className="btn-yellow">
                Get a free quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:02081021108"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-white/30 text-white hover:border-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                0208 102 1108
              </a>
            </div>
          </div>
        </section>

        {/* =================== STATEMENT BAND =================== */}
        <section className="bg-brand-black text-white">
          <div className="container mx-auto px-4 py-20 md:py-28 text-center">
            <h2 className="mx-auto max-w-3xl text-balance text-3xl sm:text-4xl md:text-5xl leading-[1.15]">
              <span className="font-serif font-medium">Trusted for over a decade.</span>{" "}
              <span className="font-bold tracking-tight">Delivered by Gas Safe engineers.</span>
            </h2>
            <p className="lead mx-auto mt-6 max-w-2xl text-white/70">
              From a leaking tap to a full heating system, every job gets the same treatment — honest
              advice, fixed itemised quotes and clean, careful workmanship. Gas Safe register 630695.
            </p>
            <Link href="/about-us" className="btn-yellow mt-9 inline-flex">
              About us
            </Link>
          </div>
        </section>

        {/* =================== SERVICES =================== */}
        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="display-md">
              What we <span className="font-serif font-medium">do.</span>
            </h2>
            <Link href="/services" className="link-accent hidden sm:inline-block text-sm">
              All services
            </Link>
          </div>
          <ServiceList />
        </section>

        {/* =================== TALK TO AN ENGINEER =================== */}
        <section className="grid lg:grid-cols-2">
          <div className="bg-[#F6F3EC] dark:bg-secondary">
            <div className="flex h-full flex-col justify-center px-4 py-16 md:py-24 lg:pl-[max(1rem,calc((100vw-1280px)/2+1rem))] lg:pr-16">
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-6 max-w-md font-serif text-4xl md:text-5xl font-medium leading-[1.12] text-balance">
                Keeping London homes warm, cool and running.
              </h2>
              <p className="lead mt-6 max-w-md text-pretty">
                Tell us about the job and a Gas Safe registered engineer will come back to you within
                24 hours with honest advice and a fixed price.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0">
                  <Image src="/images/gas-safe-logo.png" alt="Gas Safe Register" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Gas Safe Register</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Registration no. 630695</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-black">
            <div className="px-4 py-16 md:py-24 lg:pr-[max(1rem,calc((100vw-1280px)/2+1rem))] lg:pl-16">
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
