import { ServicePage } from "../../components/service-page"

export default function UnderfloorHeatingPage() {
  return (
    <ServicePage
      eyebrow="Underfloor heating"
      title="Warm floors, cleaner rooms, lower bills."
      lead="Wet and electric underfloor heating from Warmup and Aumix — designed for new builds, extensions and retrofits, with zoned controls for every room."
      included={[
        "Wet (water-based) systems for whole floors",
        "Electric systems for bathrooms and kitchens",
        "Slim retrofit profiles for existing floors",
        "Room-by-room zoned smart controls",
        "Screed, overlay and joisted floor installs",
        "Works with boilers and heat pumps alike",
      ]}
      process={[
        {
          title: "Survey & heat check",
          desc: "We check floor build-up, insulation and heat requirements to choose the right system.",
        },
        {
          title: "Design & quote",
          desc: "Pipe or mat layout designed per room, with a fixed itemised quote for the full job.",
        },
        {
          title: "Installation",
          desc: "First fix, manifold and controls installed and pressure-tested before floors go down.",
        },
        {
          title: "Commissioning",
          desc: "Zones balanced, thermostats set up and the system demonstrated room by room.",
        },
      ]}
    />
  )
}
