import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms</h1>
            <div className="mt-8 space-y-5 text-sm text-muted-foreground leading-relaxed">
              <p>
                All work is carried out by Gas Safe registered engineers (register number 630695).
                Quotes are fixed and itemised, agreed with you before any work begins. Installations
                are covered by the applicable manufacturer&rsquo;s warranty and our own workmanship
                guarantee.
              </p>
              <p>
                For any questions about a quote or completed work, contact us at{" "}
                <a href="mailto:office@hhplumbingandgas.com" className="link-accent">
                  office@hhplumbingandgas.com
                </a>{" "}
                or call 0208 102 1108.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
