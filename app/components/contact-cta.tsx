import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ContactCTAProps = {
  heading?: string
  quoteHref?: string
}

export function ContactCTA({
  heading = "Speak to an engineer today.",
  quoteHref = "/get-a-quote",
}: ContactCTAProps) {
  return (
    <section className="bg-brand-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="display-md text-white">{heading}</h2>
            <a
              href="tel:02081021108"
              className="mt-3 inline-block text-2xl md:text-3xl font-semibold tracking-tight text-white/80 hover:text-brand-yellow transition-colors"
            >
              0208 102&nbsp;1108
            </a>
            <p className="mt-3 text-sm text-white/50">
              Gas Safe registered · 24/7 emergency cover across London
            </p>
          </div>
          <Link href={quoteHref} className="btn-yellow shrink-0 self-start md:self-center">
            Get a free quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
