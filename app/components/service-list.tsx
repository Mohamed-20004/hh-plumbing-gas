import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const services = [
  {
    title: "Boiler Installation",
    href: "/services/boiler-installations",
    desc: "Combi, system and regular boilers from Worcester Bosch, Vaillant and Baxi — from £1,800.",
  },
  {
    title: "Heat Pump Installation",
    href: "/services/heat-pump-installations",
    desc: "Air and ground source heat pumps, with the £7,500 BUS grant handled for you.",
  },
  {
    title: "Air Conditioning",
    href: "/services/air-conditioning",
    desc: "Split and multi-split systems that cool in summer and heat in winter.",
  },
  {
    title: "Bathroom Installation",
    href: "/services/bathroom-installation",
    desc: "Complete renovations — design, plumbing, tiling and electrics by one team.",
  },
  {
    title: "Underfloor Heating",
    href: "/services/underfloor-heating-installation",
    desc: "Wet and electric systems for new builds, extensions and retrofits.",
  },
  {
    title: "Cylinder Installation",
    href: "/services/cylinder-installation",
    desc: "Unvented and vented hot water cylinders, including Megaflo systems.",
  },
  {
    title: "Drainage",
    href: "/services/drainage",
    desc: "Blocked drains cleared, CCTV surveys and lasting repairs.",
  },
  {
    title: "Emergency Repairs",
    href: "/services/emergency-repairs",
    desc: "Leaks, breakdowns, no heat or hot water — 24/7 response across London.",
  },
]

export function ServiceList() {
  return (
    <ul className="border-t border-border">
      {services.map((service) => (
        <li key={service.href}>
          <Link
            href={service.href}
            className="group grid gap-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] md:items-center md:gap-8 border-b border-border py-6 transition-colors hover:bg-foreground/[0.02]"
          >
            <h3 className="font-semibold tracking-tight">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            <ArrowRight
              className="hidden md:block h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
