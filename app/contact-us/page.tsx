import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 pt-20 md:pt-28 pb-16 md:pb-20">
          <p className="eyebrow">Contact us</p>
          <h1 className="display-xl mt-6 max-w-3xl text-balance">Get in touch with our team.</h1>
          <p className="lead mt-6 max-w-2xl text-pretty">
            Call, email or request a quote — we respond quickly, and the emergency line is open around
            the clock.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="border-t border-border">
            <div className="grid gap-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8 border-b border-border py-8">
              <h2 className="font-semibold tracking-tight">Phone</h2>
              <div>
                <a
                  href="tel:02081021108"
                  className="text-2xl md:text-3xl font-semibold tracking-tight hover:text-foreground/70 transition-colors"
                >
                  0208 102 1108
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  24/7 for emergencies — leaks, breakdowns, no heat or hot water.
                </p>
              </div>
            </div>

            <div className="grid gap-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8 border-b border-border py-8">
              <h2 className="font-semibold tracking-tight">Email</h2>
              <div>
                <a
                  href="mailto:office@hhplumbingandgas.com"
                  className="text-lg font-medium hover:text-foreground/70 transition-colors"
                >
                  office@hhplumbingandgas.com
                </a>
                <p className="mt-2 text-sm text-muted-foreground">We reply within 24 hours.</p>
              </div>
            </div>

            <div className="grid gap-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8 border-b border-border py-8">
              <h2 className="font-semibold tracking-tight">Office</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                5th Floor 167-169 Great Portland Street
                <br />
                London, W1W 5PF
              </p>
            </div>

            <div className="grid gap-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8 border-b border-border py-8">
              <h2 className="font-semibold tracking-tight">Quotes</h2>
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  Tell us about the job through the quote form and a Gas Safe engineer will come back
                  to you with a fixed, itemised price.
                </p>
                <Link href="/get-a-quote" className="btn-primary mt-5 inline-flex">
                  Get a free quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
