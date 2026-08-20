import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"
import { ContactCTA } from "../components/contact-cta"

const values = [
  {
    title: "Gas Safe, always",
    desc: "Every gas job is carried out and signed off by Gas Safe registered engineers — register number 630695.",
  },
  {
    title: "Fixed, honest pricing",
    desc: "Itemised quotes agreed before work starts. The price you see is the price you pay.",
  },
  {
    title: "Clean, careful work",
    desc: "Floors protected, sites tidied, waste removed. We leave your home the way we found it — but working.",
  },
  {
    title: "Backed by warranty",
    desc: "Manufacturer warranties up to 12 years, plus our own workmanship guarantee on every installation.",
  },
]

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 pt-20 md:pt-28 pb-16 md:pb-20">
          <p className="eyebrow">About us</p>
          <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.08]">
            A London heating team that does things properly.
          </h1>
          <p className="lead mt-6 max-w-2xl text-pretty">
            HH Plumbing &amp; Gas is a London-based team of Gas Safe registered engineers with over a
            decade on the tools — installing boilers, heat pumps, air conditioning, cylinders and
            complete bathrooms across the city.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] border-t border-border pt-12">
            <h2 className="display-md">How we work</h2>
            <div>
              <ul>
                {values.map((v) => (
                  <li key={v.title} className="border-b border-border py-6 first:pt-0">
                    <h3 className="font-semibold tracking-tight">{v.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-xl">{v.desc}</p>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="link-accent mt-8 inline-flex items-center gap-2 text-sm">
                See what we do
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  )
}
