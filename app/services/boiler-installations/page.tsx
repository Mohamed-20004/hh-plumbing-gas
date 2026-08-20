import { ServicePage } from "../../components/service-page"

export default function BoilerInstallationsPage() {
  return (
    <ServicePage
      eyebrow="Boiler installation"
      title="A new boiler, fitted right."
      lead="Combi, system and regular boilers from Worcester Bosch, Vaillant, Baxi and more — installed by Gas Safe engineers with fixed, itemised quotes and warranties up to 12 years."
      included={[
        "Combi, system and regular boiler installations",
        "Worcester Bosch, Vaillant, Baxi and other leading brands",
        "System flush and magnetic filter included",
        "Benchmark certification and warranty registration",
        "Removal and disposal of your old boiler",
        "Same-week installation on most jobs",
      ]}
      process={[
        {
          title: "Survey",
          desc: "We assess your current system, hot water demand and pipework to recommend the right boiler.",
        },
        {
          title: "Fixed quote",
          desc: "A transparent, itemised quote covering parts, labour, filter and warranty — the price you see is the price you pay.",
        },
        {
          title: "Installation",
          desc: "Most combi swaps are completed in a single day, with the system flushed, pressure-tested and left clean.",
        },
        {
          title: "Certification & handover",
          desc: "Benchmark documentation completed, warranty registered and controls demonstrated before we leave.",
        },
      ]}
      note={{
        label: "Pricing",
        text: "Combi boiler swaps start from £1,800 installed. Higher-output and system boilers from around £2,400 — every quote fixed and itemised.",
      }}
    />
  )
}
