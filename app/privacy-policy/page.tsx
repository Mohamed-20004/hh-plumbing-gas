import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
            <div className="mt-8 space-y-5 text-sm text-muted-foreground leading-relaxed">
              <p>
                When you contact HH Plumbing &amp; Gas or request a quote, we collect the details you
                provide — such as your name, phone number, email address and information about the
                job — and use them only to respond to your enquiry and carry out the work you ask us
                to do.
              </p>
              <p>
                We do not sell your information or share it with third parties for marketing. To ask
                about the information we hold or to request its removal, contact us at{" "}
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
