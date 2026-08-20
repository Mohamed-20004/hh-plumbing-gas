import { ServicePage } from "../../components/service-page"

export default function BathroomInstallationPage() {
  return (
    <ServicePage
      name="Bathroom Renovations"
      title="Bathroom Renovations"
      intro="Complete bathroom renovations — design, plumbing, tiling and electrics coordinated by one team, from first fix to final silicone."
      whatTitle="What does a full renovation involve?"
      whatParas={[
        "A bathroom renovation is more than new tiles and a suite — it's a strip-out back to the walls, first-fix plumbing and electrics run to the new layout, waterproofing in the wet zones, then tiling, sanitaryware, lighting and ventilation brought together to a clean finish.",
        "The difference with HH is that one team carries the whole job. No juggling a plumber, a tiler and an electrician who've never met — our engineers coordinate every trade, keep the site tidy, and give you a single fixed price and timeline for the entire renovation.",
        "Whether it's a family bathroom, an en-suite or a walk-in wet room, we'll help with layout and product choices before any work starts, so you know exactly what you're getting.",
      ]}
      image="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=900&h=675&fit=crop&auto=format"
      imageAlt="Newly renovated modern bathroom"
      stat={{ value: "One team", label: "Design, plumbing, tiling and electrics — one fixed price" }}
      provideList={[
        "Design advice and layout planning",
        "Full strip-out and first-fix plumbing",
        "Waterproofing, tiling and flooring",
        "Sanitaryware, showers, baths and wet rooms",
        "Electrics, lighting and ventilation",
        "Clear timeline and a fixed itemised price",
        "Snag-free handover with workmanship guarantee",
      ]}
      secondImage="https://images.unsplash.com/photo-1695002817411-203c7f19dfa3?w=900&h=675&fit=crop&auto=format"
      secondImageAlt="Marble bathroom with twin basins"
    />
  )
}
