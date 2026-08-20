import { ServicePage } from "../../components/service-page"

export default function CylinderInstallationPage() {
  return (
    <ServicePage
      name="Cylinder Installations"
      title="Cylinder Installations"
      tagline="Strong showers. Every floor. Every morning."
      intro="Unvented and vented hot water cylinders from Megaflo, Gledhill and Vaillant — sized and installed for reliable hot water on every floor."
      heroImage="https://images.unsplash.com/photo-1575299737366-39c143459bc5?w=1800&h=1100&fit=crop&auto=format"
      whatTitle="A hot water cylinder keeps every tap and shower running at full strength — even all at once."
      whatParas={[
        "A cylinder stores heated water so several outlets can run simultaneously — the setup most larger homes and busy households rely on.",
        "Modern unvented cylinders (like Megaflo) work directly at mains pressure, which means proper, powerful showers upstairs without pumps or tanks in the loft. Older vented systems can be upgraded like-for-like or converted to unvented for a big jump in performance.",
        "Sizing matters: too small and you run out of hot water, too big and you pay to heat water you never use. We measure your incoming mains flow and your household's real usage before recommending a cylinder — and every unvented installation includes the required safety pipework and controls.",
      ]}
      image="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=750&h=1000&fit=crop&auto=format"
      imageAlt="Engineer working on a hot water cylinder"
      stat={{ value: "Mains pressure", label: "Powerful hot water — no pumps, no loft tanks" }}
      provideList={[
        "Unvented cylinders at full mains pressure",
        "Vented replacements and conversions",
        "Megaflo, Gledhill and Vaillant systems",
        "Sized to your mains flow and real usage",
        "Full safety pipework and controls",
        "Heat pump compatible cylinders available",
      ]}
      steps={[
        {
          title: "Survey",
          desc: "We check your incoming mains flow, available space and hot water usage to size the cylinder correctly.",
        },
        {
          title: "Fixed quote",
          desc: "An itemised quote covering the cylinder, pipework, controls and commissioning.",
        },
        {
          title: "Installation",
          desc: "Old cylinder removed, new one installed with safety pipework — usually completed in a single day.",
        },
        {
          title: "Commissioning",
          desc: "Pressures set, safety valves tested and the system demonstrated before handover.",
        },
      ]}
    />
  )
}
