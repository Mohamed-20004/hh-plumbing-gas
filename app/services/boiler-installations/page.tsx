import { ServicePage } from "../../components/service-page"

export default function BoilerInstallationsPage() {
  return (
    <ServicePage
      name="Boiler Installations"
      title="Boiler Installations"
      tagline="Warm home. Hot water. No drama."
      intro="Combi, system and regular boilers from Worcester Bosch, Vaillant and Baxi — installed by Gas Safe engineers with fixed prices and warranties up to 12 years."
      heroImage="https://images.unsplash.com/photo-1751486289950-5c4898a4c773?w=1800&h=1100&fit=crop&auto=format"
      whatTitle="Your boiler is the heart of your home — replacing it should be simple, honest and done in a day."
      whatParas={[
        "A boiler installation replaces your old or failing unit with a modern, high-efficiency model — properly sized for your home's rooms, radiators and hot water demand.",
        "Most homes choose a combi boiler, which heats water on demand with no tank or cylinder. Larger homes with more than one bathroom often suit a system or regular boiler paired with a hot water cylinder. We survey your home first and recommend what actually fits — not what's easiest to sell.",
        "A straightforward swap is usually completed in a single day, including a system flush, a magnetic filter, Benchmark certification and registration of your manufacturer warranty.",
      ]}
      image="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=750&h=1000&fit=crop&auto=format"
      imageAlt="Engineer working on heating pipework"
      stat={{ value: "From £1,800", label: "Fixed price, fully installed" }}
      provideList={[
        "Free survey and honest advice on the right boiler",
        "Leading brands — Worcester Bosch, Vaillant, Baxi",
        "System flush and magnetic filter included",
        "Old boiler removed and disposed of",
        "Benchmark certificate and warranty registration",
        "Manufacturer warranties up to 12 years",
      ]}
      steps={[
        {
          title: "Survey",
          desc: "We assess your current system, hot water demand and pipework to recommend the right boiler for your home.",
        },
        {
          title: "Fixed quote",
          desc: "A transparent, itemised quote covering parts, labour, filter and warranty — the price you see is the price you pay.",
        },
        {
          title: "Installation day",
          desc: "Most combi swaps are completed in a single day, with the system flushed, pressure-tested and left clean and tidy.",
        },
        {
          title: "Certification & handover",
          desc: "Benchmark documentation completed, warranty registered and the controls demonstrated before we leave.",
        },
      ]}
    />
  )
}
