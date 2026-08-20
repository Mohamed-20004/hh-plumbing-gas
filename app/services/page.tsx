import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"
import { ContactCTA } from "../components/contact-cta"
import { ServiceList } from "../components/service-list"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 pt-20 md:pt-28 pb-16 md:pb-20">
          <p className="eyebrow">Services</p>
          <h1 className="display-xl mt-6 max-w-3xl text-balance">
            Every service, one trusted team.
          </h1>
          <p className="lead mt-6 max-w-2xl text-pretty">
            From a single boiler swap to a full bathroom refit — Gas Safe registered engineers
            covering residential properties across central, west and greater London, with 24/7
            emergency response.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <ServiceList />
        </section>

        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  )
}
