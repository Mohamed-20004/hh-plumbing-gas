import { ServicePage } from "../../components/service-page"

export default function UnderfloorHeatingPage() {
  return (
    <ServicePage
      name="Underfloor Heating"
      title="Underfloor Heating"
      intro="Wet and electric underfloor heating from Warmup and Aumix — for new builds, extensions and retrofits, with zoned controls for every room."
      whatTitle="What is underfloor heating?"
      whatParas={[
        "Underfloor heating turns the whole floor into a gentle radiator. Instead of hot spots by the wall and cold corners, the room warms evenly from the ground up — and with no radiators, you get your wall space back.",
        "There are two types. Wet systems circulate warm water through pipes in the floor and are ideal for whole floors, new builds and extensions — they run at low temperatures, which makes them a perfect partner for heat pumps as well as boilers. Electric systems use slim heating mats and suit single rooms like bathrooms and kitchens, where they can be laid with minimal build-up.",
        "Every installation is designed room by room, pressure-tested before the floor goes down, and finished with smart thermostats so each zone heats only when you need it.",
      ]}
      image="https://images.unsplash.com/photo-1647105604066-86ea4247e217?w=900&h=675&fit=crop&auto=format"
      imageAlt="Warm open-plan room with underfloor heating"
      stat={{ value: "Wet + electric", label: "The right system for each room, boiler or heat pump" }}
      provideList={[
        "Wet (water) systems for whole floors and extensions",
        "Electric mat systems for bathrooms and kitchens",
        "Slim retrofit profiles for existing floors",
        "Warmup and Aumix systems",
        "Room-by-room zoning with smart thermostats",
        "Pressure-tested before floors are laid",
        "Works with boilers and heat pumps alike",
      ]}
    />
  )
}
