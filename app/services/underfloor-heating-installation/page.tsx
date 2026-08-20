import { ServicePage } from "../../components/service-page"

export default function UnderfloorHeatingPage() {
  return (
    <ServicePage
      name="Underfloor Heating"
      title="Underfloor Heating"
      tagline="Even warmth. Invisible heating."
      intro="Wet and electric underfloor heating from Warmup and Aumix — for new builds, extensions and retrofits, with zoned controls for every room."
      heroImage="https://images.unsplash.com/photo-1647105604066-86ea4247e217?w=1800&h=1100&fit=crop&auto=format"
      whatTitle="Underfloor heating turns the whole floor into a gentle radiator — and gives you your walls back."
      whatParas={[
        "Instead of hot spots by the wall and cold corners, the room warms evenly from the ground up — and with no radiators, every wall is free for furniture.",
        "There are two types. Wet systems circulate warm water through pipes in the floor and are ideal for whole floors, new builds and extensions — they run at low temperatures, which makes them a perfect partner for heat pumps as well as boilers. Electric systems use slim heating mats and suit single rooms like bathrooms and kitchens, where they can be laid with minimal build-up.",
        "Every installation is designed room by room, pressure-tested before the floor goes down, and finished with smart thermostats so each zone heats only when you need it.",
      ]}
      image="https://images.unsplash.com/photo-1647105604066-86ea4247e217?w=750&h=1000&fit=crop&crop=entropy&auto=format"
      imageAlt="Warm open-plan room with underfloor heating"
      stat={{ value: "Wet + electric", label: "The right system for each room — boiler or heat pump" }}
      provideList={[
        "Wet systems for whole floors and extensions",
        "Electric mats for bathrooms and kitchens",
        "Slim retrofit profiles for existing floors",
        "Warmup and Aumix systems",
        "Room-by-room smart thermostat zoning",
        "Pressure-tested before floors are laid",
      ]}
      steps={[
        {
          title: "Survey & heat check",
          desc: "We check the floor build-up, insulation and heat requirement to choose the right system.",
        },
        {
          title: "Design & fixed quote",
          desc: "Pipe or mat layout designed per room, with a fixed itemised quote for the full job.",
        },
        {
          title: "Installation",
          desc: "First fix, manifold and controls installed and pressure-tested before the floors go down.",
        },
        {
          title: "Commissioning",
          desc: "Zones balanced, thermostats set up and the system demonstrated room by room.",
        },
      ]}
    />
  )
}
