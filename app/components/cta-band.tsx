import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBand() {
  return (
    <section className="bg-brand-black text-white">
      <div className="container mx-auto px-4 py-20 md:py-24 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-white/55 text-lg">
            We&rsquo;ll have a fixed quote back to you within the hour.
          </p>
        </div>
        <Link
          href="/get-a-quote"
          className="inline-flex shrink-0 items-center gap-2 bg-brand-yellow px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#E6BE00] transition-colors"
        >
          Get a free quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
