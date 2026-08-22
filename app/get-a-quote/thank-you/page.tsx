import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Phone } from "lucide-react"
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
        {/* ============ HERO BAND ============ */}
        <section className="bg-brand-black text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-yellow text-black">
              <Check className="h-6 w-6" strokeWidth={3} />
            </span>
            <h1 className="mt-7 text-5xl md:text-6xl font-bold tracking-tight text-white">
              Quote received.
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/65 leading-relaxed">
              Thanks — we&rsquo;ll be in contact soon to book in a surveyor to come and see the
              project.
            </p>
          </div>
        </section>

        {/* ============ BREADCRUMB ============ */}
        <div className="container mx-auto px-4 pt-8">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="font-medium text-foreground hover:text-brand-yellow-deep transition-colors">
              Home
            </Link>{" "}
            <span aria-hidden>›</span> Quote received
          </p>
        </div>

        {/* ============ WHAT HAPPENS NEXT ============ */}
        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-14 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What happens next</h2>
              <ol className="mt-10">
                {next.map((step, i) => (
                  <li
                    key={step.title}
                    className="grid grid-cols-[auto_1fr] gap-6 border-b border-foreground/25 py-7 first:border-t"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center bg-brand-yellow text-black font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-brand-yellow px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#E6BE00] transition-colors"
                >
                  Explore our services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-border px-7 py-3.5 text-sm font-semibold hover:border-foreground transition-colors"
                >
                  Back to home
                </Link>
              </div>
            </div>

            {/* Side panel */}
            <div className="flex flex-col gap-5">
              <div className="bg-brand-black p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow">
                  Need us sooner?
                </p>
                <a
                  href="tel:02081021108"
                  className="mt-4 inline-flex items-center gap-3 text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-brand-yellow transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  0208 102 1108
                </a>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">
                  24/7 for emergencies — burst pipes, gas leaks, boiler breakdowns.
                </p>
              </div>

              <div className="border border-border p-8">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0">
                    <Image src="/images/gas-safe-logo.png" alt="Gas Safe Register" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Gas Safe Register</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Registration no. 630695</p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                  Every quote is prepared and delivered by a Gas Safe registered engineer — fixed,
                  itemised and backed by a written guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
