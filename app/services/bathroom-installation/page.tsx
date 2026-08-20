import { ServicePage } from "../../components/service-page"

export default function BathroomInstallationPage() {
  return (
    <ServicePage
      name="Bathroom Renovations"
      title="Bathroom Renovations"
      tagline="Designed around you. Built by one team."
      intro="Complete bathroom renovations — design, plumbing, tiling and electrics coordinated by one team, from first fix to final silicone."
      heroImage="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1800&h=1100&fit=crop&auto=format"
      whatTitle="A renovation is more than new tiles — it's your bathroom rebuilt properly, from the pipework out."
      whatParas={[
        "A full renovation means a strip-out back to the walls, first-fix plumbing and electrics run to the new layout, waterproofing in the wet zones, then tiling, sanitaryware, lighting and ventilation brought together to a clean finish.",
        "The difference with HH is that one team carries the whole job. No juggling a plumber, a tiler and an electrician who've never met — our engineers coordinate every trade, keep the site tidy, and give you a single fixed price and timeline for the entire renovation.",
        "Whether it's a family bathroom, an en-suite or a walk-in wet room, we'll help with layout and product choices before any work starts, so you know exactly what you're getting.",
      ]}
      image="https://images.unsplash.com/photo-1695002817411-203c7f19dfa3?w=750&h=1000&fit=crop&auto=format"
      imageAlt="Marble bathroom with twin basins"
      stat={{ value: "One team", label: "Design, plumbing, tiling and electrics — one fixed price" }}
      provideList={[
        "Design advice and layout planning",
        "Full strip-out and first-fix plumbing",
        "Waterproofing, tiling and flooring",
        "Showers, baths, wet rooms and sanitaryware",
        "Electrics, lighting and ventilation",
        "Fixed itemised price and clear timeline",
      ]}
      steps={[
        {
          title: "Design & survey",
          desc: "We measure up, talk through your ideas and agree a layout and product list that works for the space.",
        },
        {
          title: "Fixed quote & schedule",
          desc: "An itemised quote with a clear timeline, so you know exactly what happens when.",
        },
        {
          title: "The build",
          desc: "Strip-out, first fix, tiling and fit-out — one team on site, kept clean and tidy throughout.",
        },
        {
          title: "Finish & handover",
          desc: "Final silicone, a snag check and a full clean before we hand your new bathroom over.",
        },
      ]}
    />
  )
}
