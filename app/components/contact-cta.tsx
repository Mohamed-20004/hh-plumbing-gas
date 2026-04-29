import Link from "next/link"
import { Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react"

type ContactCTAProps = {
  eyebrow?: string
  heading?: string
  subhead?: string
  quoteHref?: string
  quoteLabel?: string
}

export function ContactCTA({
  eyebrow = "Get in touch",
  heading = "Speak to an engineer or get a fixed-price quote.",
  subhead = "Gas Safe registered. Manufacturer approved. 24/7 emergency cover across London.",
  quoteHref = "/get-a-quote",
  quoteLabel = "Get a free quote",
}: ContactCTAProps) {
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="rounded-lg border border-border bg-brand-black text-white p-8 md:p-14">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="eyebrow text-white/60">{eyebrow}</span>
              <h2 className="display-md mt-4 text-white">{heading}</h2>
              <p className="mt-4 text-white/70 max-w-lg">{subhead}</p>
              <a
                href="tel:02081021108"
                className="mt-6 block text-3xl md:text-4xl font-bold tracking-tight hover:text-brand-yellow transition-colors"
              >
                0208 102&nbsp;1108
              </a>
              <ul className="mt-5 flex flex-wrap items-center gap-5 text-xs text-white/60">
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-yellow" />
                  Gas Safe · 630695
                </li>
                <li className="inline-flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-brand-yellow" />
                  24/7 emergency cover
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:0208 102 1108"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-yellow text-black px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#E6BE00]"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
              <Link
                href={quoteHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                {quoteLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
