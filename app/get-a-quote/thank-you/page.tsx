import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Header } from "../../components/header"
import { SiteFooter } from "../../components/site-footer"

const next = [
  {
    title: "We'll be in touch",
    desc: "Within 24 hours we'll reach out by phone or email to book in a surveyor at a time that suits you.",
  },
  {
    title: "Surveyor visit",
    desc: "Our surveyor comes to see the project — measuring up, checking the details and talking through your options.",
  },
  {
    title: "Your fixed quote",
    desc: "You get a fixed, fully itemised quote in writing — accept it and we book the work in.",
  },
]

export default function QuoteThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 pt-20 md:pt-28 pb-20 md:pb-28">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <span className="mt-10 inline-flex h-12 w-12 items-center justify-center bg-brand-yellow text-black">
              <Check className="h-5 w-5" />
            </span>

            <h1 className="mt-8 text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.08]">Quote received.</h1>
            <p className="lead mt-5 text-pretty">
              Thanks — we&rsquo;ll be in contact soon to book in a surveyor to come and see the
              project.
            </p>

            <ol className="mt-12 border-t border-border">
              {next.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[auto_1fr] gap-6 border-b border-border py-6">
                  <span className="text-sm font-semibold text-muted-foreground tabular-nums pt-0.5">
                    0{i + 1}
                  </span>
                  <div>
                    <h2 className="font-semibold tracking-tight">{step.title}</h2>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-sm text-muted-foreground">
              Need us sooner? Call{" "}
              <a href="tel:02081021108" className="link-accent">
                0208 102 1108
              </a>{" "}
              — 24/7 for emergencies.
            </p>

            <Link href="/services" className="btn-outline mt-10 inline-flex">
              Explore our services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
