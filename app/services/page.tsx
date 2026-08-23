import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"

const services = [
  {
    title: "Bathroom Renovations",
    href: "/services/bathroom-installation",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Boiler Installations",
    href: "/services/boiler-installations",
    image: "https://images.unsplash.com/photo-1751486289950-5c4898a4c773?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Cylinder Installations",
    href: "/services/cylinder-installation",
    image: "https://images.unsplash.com/photo-1575299737366-39c143459bc5?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "AC Installations",
    href: "/services/air-conditioning",
    image: "https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Heat Pump Installations",
    href: "/services/heat-pump-installations",
    image: "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Underfloor Heating",
    href: "/services/underfloor-heating-installation",
    image: "https://images.unsplash.com/photo-1647105604066-86ea4247e217?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Drainage",
    href: "/services/drainage",
    image: "https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Emergency Repairs",
    href: "/services/emergency-repairs",
    image: "https://images.unsplash.com/photo-1751486289950-5c4898a4c773?w=800&h=600&fit=crop&crop=entropy&auto=format",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ HERO BAND ============ */}
        <section className="bg-brand-black text-white">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">Our services</h1>
            <p className="mt-6 max-w-md text-lg text-white/65 leading-relaxed">
              Plumbing, heating, gas and air conditioning — every job handled end to end by Gas Safe
              registered engineers.
            </p>
          </div>
        </section>

        {/* ============ BREADCRUMB ============ */}
        <div className="container mx-auto px-4 pt-8">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="font-medium text-foreground hover:text-brand-yellow-deep transition-colors">
              Home
            </Link>{" "}
            <span aria-hidden>›</span> Services
          </p>
        </div>

        {/* ============ SERVICE TILES ============ */}
        <section className="container mx-auto px-4 py-10 pb-20 md:pb-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative block aspect-[4/3] overflow-hidden bg-brand-black"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10"
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h2>
                  <ArrowRight className="mt-3 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
