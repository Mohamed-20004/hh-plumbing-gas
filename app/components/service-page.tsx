import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Header } from "./header"
import { SiteFooter } from "./site-footer"
import { ContactCTA } from "./contact-cta"

export type ServicePageProps = {
  eyebrow: string
  title: string
  lead: string
  included: string[]
  process: { title: string; desc: string }[]
  note?: { label: string; text: string }
}

export function ServicePage({ eyebrow, title, lead, included, process, note }: ServicePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ INTRO ============ */}
        <section className="container mx-auto px-4 pt-20 md:pt-28 pb-14 md:pb-20">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.08]">
            {title}
          </h1>
          <p className="lead mt-6 max-w-2xl text-pretty">{lead}</p>
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
        </section>

        {/* ============ WHAT'S INCLUDED ============ */}
        <section className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] border-t border-border pt-12">
            <h2 className="display-md">What&rsquo;s included</h2>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] border-t border-border pt-12">
            <h2 className="display-md">How it works</h2>
            <ol>
              {process.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-6 border-b border-border py-6 first:pt-0"
                >
                  <span className="text-sm font-semibold text-muted-foreground tabular-nums pt-0.5">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ NOTE ============ */}
        {note && (
          <section className="container mx-auto px-4 pb-20 md:pb-28">
            <div className="border border-border p-8 md:p-10 max-w-3xl">
              <p className="eyebrow">{note.label}</p>
              <p className="mt-4 text-lg font-medium leading-relaxed">{note.text}</p>
            </div>
          </section>
        )}

        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  )
}
