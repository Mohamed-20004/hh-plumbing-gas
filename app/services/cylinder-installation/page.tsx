import { ServicePage } from "../../components/service-page"

export default function CylinderInstallationPage() {
  return (
    <ServicePage
      name="Cylinder Installations"
      title="Cylinder Installations"
      intro="Unvented and vented hot water cylinders from Megaflo, Gledhill and Vaillant — sized and installed for strong, reliable hot water on every floor."
      whatTitle="What is a hot water cylinder?"
      whatParas={[
        "A hot water cylinder stores heated water so several taps and showers can run at full strength at the same time — the setup most larger homes and busy households rely on.",
        "Modern unvented cylinders (like Megaflo) work directly at mains pressure, which means proper, powerful showers upstairs without pumps or tanks in the loft. Older vented systems can be upgraded like-for-like or converted to unvented for a big jump in performance.",
        "Sizing matters: too small and you run out of hot water, too big and you pay to heat water you never use. We measure your incoming mains flow and your household's real usage before recommending a cylinder — and every unvented installation includes the required safety pipework and controls.",
      ]}
      image="https://images.unsplash.com/photo-1575299737366-39c143459bc5?w=900&h=675&fit=crop&auto=format"
      imageAlt="Hot water cylinder installation"
      stat={{ value: "Mains pressure", label: "Powerful hot water on every floor — no pumps, no loft tanks" }}
      provideList={[
        "Unvented cylinders at full mains pressure",
        "Vented replacements and unvented conversions",
        "Megaflo, Gledhill and Vaillant systems",
        "Sizing based on your mains flow and real usage",
        "Full safety discharge pipework and controls",
        "Heat pump compatible cylinders available",
        "Usually installed in a single day",
      ]}
      secondImage="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=900&h=675&fit=crop&auto=format"
      secondImageAlt="Engineer working on a hot water cylinder"
    />
  )
}
