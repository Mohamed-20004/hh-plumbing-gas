import Link from "next/link"
import Image from "next/image"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"

const projects = [
  {
    title: "Bathroom Renovation",
    location: "Islington, N1",
    href: "/services/bathroom-installation",
    image: "/images/modern-bathroom.jpeg",
  },
  {
    title: "Boiler Replacement",
    location: "Hackney, E8",
    href: "/services/boiler-installations",
    image: "/placeholder.svg?height=600&width=900&text=Boiler+replacement",
  },
  {
    title: "Heat Pump Installation",
    location: "Richmond, TW9",
    href: "/services/heat-pump-installations",
    image: "/placeholder.svg?height=600&width=900&text=Heat+pump",
  },
  {
    title: "Wet Room",
    location: "Chelsea, SW3",
    href: "/services/bathroom-installation",
    image: "/placeholder.svg?height=600&width=900&text=Wet+room",
  },
  {
    title: "AC System",
    location: "Canary Wharf, E14",
    href: "/services/air-conditioning",
    image: "/placeholder.svg?height=600&width=900&text=AC+system",
  },
  {
    title: "Cylinder Install",
    location: "Brixton, SW2",
    href: "/services/cylinder-installation",
    image: "/placeholder.svg?height=600&width=900&text=Cylinder+install",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Recent projects</h1>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={`${project.title}-${project.location}`}
                href={project.href}
                className="group relative block aspect-[3/2] overflow-hidden bg-brand-black"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.location}`}
                  fill
                  className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h2 className="text-lg font-semibold tracking-tight text-white">{project.title}</h2>
                  <p className="mt-0.5 text-sm text-white/60">{project.location}</p>
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
