import { ServicePage } from "../../components/service-page"

export default function CylinderInstallationPage() {
  return (
    <ServicePage
      eyebrow="Cylinder installation"
      title="Proper mains-pressure hot water, everywhere."
      lead="Unvented and vented hot water cylinders from Megaflo, Gledhill and Vaillant — sized and installed for strong, reliable hot water on every floor."
      included={[
        "Unvented cylinders at full mains pressure",
        "Vented cylinder replacements and upgrades",
        "Megaflo, Gledhill and Vaillant systems",
        "Sizing matched to your household's demand",
        "Safety discharge pipework and controls",
        "Heat pump compatible cylinders available",
      ]}
      process={[
        {
          title: "Survey",
          desc: "We check your incoming mains flow, space and hot water usage to size the cylinder correctly.",
        },
        {
          title: "Fixed quote",
          desc: "An itemised quote covering the cylinder, pipework, controls and commissioning.",
        },
        {
          title: "Installation",
          desc: "Old cylinder removed, new one installed with safety pipework — usually completed in a day.",
        },
        {
          title: "Commissioning",
          desc: "Pressures set, safety valves tested and the system demonstrated before handover.",
        },
      ]}
    />
  )
}
