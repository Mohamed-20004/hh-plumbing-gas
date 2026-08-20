import Link from "next/link"
import { Check, Phone, Mail, Clock, ArrowRight, ArrowLeft } from "lucide-react"
import { Header } from "../../components/header"
import { SiteFooter } from "../../components/site-footer"
import { FadeIn, Stagger, StaggerItem } from "../../components/motion"

export default function QuoteThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <FadeIn delay={0.05} y={12}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-md border border-border bg-foreground/[0.04] text-foreground">
                <Check className="h-6 w-6" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="display-lg mt-8">Thanks — your quote request is in.</h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="lead mt-5">
                A Gas Safe registered engineer will review your details and come back to you with an itemised
                fixed-price quote shortly.
              </p>
            </FadeIn>

            <Stagger className="mt-12 rounded-lg border border-border bg-card divide-y divide-border">
              <StaggerItem className="flex items-start gap-4 p-6">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-foreground/[0.06] text-foreground/80">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold">Within 24 hours</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We&rsquo;ll reach out by phone or email to confirm details and answer any questions.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="flex items-start gap-4 p-6">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-foreground/[0.06] text-foreground/80">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold">Itemised quote, sent in writing</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    No surprises on the day — every quote is fully itemised with parts, labour and warranty.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="flex items-start gap-4 p-6">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-foreground/[0.06] text-foreground/80">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold">Book your install</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Once you accept the quote we&rsquo;ll book a date that works for you and turn up on time.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>

            <FadeIn delay={0.45}>
              <div className="mt-12">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Need us sooner?
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:0208 102 1108"
                    className="inline-flex items-center justify-between gap-2 rounded-md border border-border bg-card p-4 hover:border-foreground/40 transition-colors hover-lift"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Phone className="h-4 w-4 text-foreground" />
                      <span className="font-semibold">0208 102 1108</span>
                    </span>
                    <span className="text-xs text-muted-foreground">24/7 emergency</span>
                  </a>
                  <a
                    href="mailto:office@hhplumbingandgas.com"
                    className="inline-flex items-center justify-between gap-2 rounded-md border border-border bg-card p-4 hover:border-foreground/40 transition-colors hover-lift"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Mail className="h-4 w-4 text-foreground" />
                      <span className="font-semibold">office@hhplumbingandgas.com</span>
                    </span>
                    <span className="text-xs text-muted-foreground">Within 24h</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.55}>
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <Link href="/services" className="btn-secondary group">
                  Explore our services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Back to home
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
