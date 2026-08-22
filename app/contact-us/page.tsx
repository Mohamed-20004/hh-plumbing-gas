import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"
import { EnquiryForm } from "../components/enquiry-form"

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    line1: "0208 102 1108",
    href: "tel:02081021108",
    line2: "24/7 for emergencies — leaks, breakdowns, no heat.",
  },
  {
    icon: Mail,
    title: "Email",
    line1: "office@hhplumbingandgas.com",
    href: "mailto:office@hhplumbingandgas.com",
    line2: "We reply within 24 hours.",
  },
  {
    icon: MapPin,
    title: "Office",
    line1: "167-169 Great Portland Street",
    line2: "5th Floor, London, W1W 5PF",
  },
  {
    icon: Clock,
    title: "Hours",
    line1: "Mon–Sat, 7am–7pm",
    line2: "Emergency call-outs: 24/7, every day.",
  },
]

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ HERO BAND ============ */}
        <section className="bg-brand-black text-white">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">Contact us</h1>
            <p className="mt-6 max-w-md text-lg text-white/65 leading-relaxed">
              Call, email or send a message — we answer quickly, and the emergency line never closes.
            </p>
          </div>
        </section>

        {/* ============ BREADCRUMB ============ */}
        <div className="container mx-auto px-4 pt-8">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="font-medium text-foreground hover:text-brand-yellow-deep transition-colors">
              Home
            </Link>{" "}
            <span aria-hidden>›</span> Contact
          </p>
        </div>

        {/* ============ CONTACT CARDS ============ */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="border border-border p-8">
                  <span className="inline-flex h-11 w-11 items-center justify-center bg-brand-yellow text-black">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-bold tracking-tight">{card.title}</h2>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-2 block font-semibold text-foreground hover:text-brand-yellow-deep transition-colors break-words"
                    >
                      {card.line1}
                    </a>
                  ) : (
                    <p className="mt-2 font-semibold">{card.line1}</p>
                  )}
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{card.line2}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ============ MESSAGE / ENQUIRY SPLIT ============ */}
        <section className="grid lg:grid-cols-2 border-t border-border">
          <div className="bg-foreground/[0.02]">
            <div className="flex h-full flex-col justify-center px-4 py-16 md:py-24 lg:pl-[max(1rem,calc((100vw-1280px)/2+1rem))] lg:pr-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow-deep">
                Send a message
              </p>
              <h2 className="mt-6 max-w-md text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-balance">
                Tell us about the job — we&rsquo;ll come back within 24 hours.
              </h2>
              <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
                A Gas Safe registered engineer will look at your enquiry and reply with honest advice
                and a fixed price. Prefer to talk it through? Call us any time.
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
