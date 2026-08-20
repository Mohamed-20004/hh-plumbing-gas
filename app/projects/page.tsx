"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"

type Project = {
  title: string
  location: string
  area: string
  service: string
  href: string
  image: string
}

const projects: Project[] = [
  {
    title: "Bathroom Renovation",
    location: "Islington, N1",
    area: "Islington",
    service: "Bathroom Renovations",
    href: "/services/bathroom-installation",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=1000&fit=crop&auto=format",
  },
  {
    title: "Boiler Replacement",
    location: "Hackney, E8",
    area: "Hackney",
    service: "Boiler Installations",
    href: "/services/boiler-installations",
    image: "https://images.unsplash.com/photo-1751486289950-5c4898a4c773?w=800&h=1000&fit=crop&auto=format",
  },
  {
    title: "Heat Pump Installation",
    location: "Richmond, TW9",
    area: "Richmond",
    service: "Heat Pump Installations",
    href: "/services/heat-pump-installations",
    image: "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?w=800&h=1000&fit=crop&auto=format",
  },
  {
    title: "Wet Room",
    location: "Chelsea, SW3",
    area: "Chelsea",
    service: "Bathroom Renovations",
    href: "/services/bathroom-installation",
    image: "https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=800&h=1000&fit=crop&auto=format",
  },
  {
    title: "AC System",
    location: "Canary Wharf, E14",
    area: "Canary Wharf",
    service: "AC Installations",
    href: "/services/air-conditioning",
    image: "https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=800&h=1000&fit=crop&auto=format",
  },
  {
    title: "Cylinder Install",
    location: "Brixton, SW2",
    area: "Brixton",
    service: "Cylinder Installations",
    href: "/services/cylinder-installation",
    image: "https://images.unsplash.com/photo-1575299737366-39c143459bc5?w=800&h=1000&fit=crop&auto=format",
  },
]

const services = [...new Set(projects.map((p) => p.service))]
const areas = [...new Set(projects.map((p) => p.area))]

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="appearance-none border border-border bg-background px-5 py-3 pr-12 text-sm font-medium text-foreground focus:border-foreground focus:outline-none min-w-[180px]"
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
      />
    </div>
  )
}

export default function ProjectsPage() {
  const [service, setService] = useState("")
  const [area, setArea] = useState("")

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => (!service || p.service === service) && (!area || p.area === area),
      ),
    [service, area],
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ============ HERO BAND ============ */}
        <section className="bg-brand-black text-white">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">Our projects</h1>
            <p className="mt-6 max-w-md text-lg text-white/65 leading-relaxed">
              Recent installations and renovations, completed properly across London.
            </p>
          </div>
        </section>

        {/* ============ BREADCRUMB + FILTERS ============ */}
        <section className="container mx-auto px-4 pt-8">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="font-medium text-foreground hover:text-brand-yellow-deep transition-colors">
              Home
            </Link>{" "}
            <span aria-hidden>›</span> Projects
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <FilterSelect label="Service" value={service} options={services} onChange={setService} />
            <FilterSelect label="Location" value={area} options={areas} onChange={setArea} />
            {(service || area) && (
              <button
                onClick={() => {
                  setService("")
                  setArea("")
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                Clear filters
              </button>
            )}
          </div>
        </section>

        {/* ============ PROJECT GRID ============ */}
        <section className="container mx-auto px-4 py-10 pb-20 md:pb-28">
          {filtered.length === 0 ? (
            <div className="border border-border p-12 text-center">
              <p className="text-lg font-semibold">No projects match those filters.</p>
              <button
                onClick={() => {
                  setService("")
                  setArea("")
                }}
                className="mt-4 text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <Link
                  key={`${project.title}-${project.location}`}
                  href={project.href}
                  className="group relative block aspect-[4/5] overflow-hidden bg-brand-black"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.location}`}
                    fill
                    className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-white/60">{project.location}</p>
                    <ArrowRight className="mt-3 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
