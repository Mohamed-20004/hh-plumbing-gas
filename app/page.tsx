import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Header } from "./components/header"
import { SiteFooter } from "./components/site-footer"
import { ContactCTA } from "./components/contact-cta"
import { ServiceList } from "./components/service-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* =================== HERO =================== */}
        <section className="container mx-auto px-4 pt-20 md:pt-28 pb-16 md:pb-20">
          <p className="eyebrow">Gas Safe registered · London</p>
          <h1 className="display-xl mt-6 max-w-3xl text-balance">
            Plumbing, heating &amp; gas. Done properly.
          </h1>
          <p className="lead mt-6 max-w-xl text-pretty">
            Boilers, heat pumps, air conditioning and complete bathrooms — installed and repaired by
            Gas Safe engineers, with fixed prices and warranties up to 12 years.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/get-a-quote" className="btn-primary">
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:02081021108" className="btn-outline">
              <Phone className="h-4 w-4" />
              0208 102 1108
            </a>
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            4.9★ from local customers &nbsp;·&nbsp; 24/7 emergency cover &nbsp;·&nbsp; Gas Safe 630695
          </p>
        </section>

        {/* =================== IMAGE BAND =================== */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="relative aspect-[16/7] w-full overflow-hidden bg-muted">
            <Image
              src="/images/modern-bathroom.jpeg"
              alt="Bathroom installed by HH Plumbing & Gas"
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        {/* =================== SERVICES =================== */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="display-md">What we do</h2>
            <Link href="/services" className="link-accent hidden sm:inline-block text-sm">
              All services
            </Link>
          </div>
          <ServiceList />
          <Link href="/services" className="link-accent mt-8 inline-block text-sm sm:hidden">
            All services
          </Link>
        </section>

        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  )
}
