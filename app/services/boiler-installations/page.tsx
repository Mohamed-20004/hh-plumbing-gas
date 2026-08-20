import { ServicePage } from "../../components/service-page"

export default function BoilerInstallationsPage() {
  return (
    <ServicePage
      name="Boiler Installations"
      title="Boiler Installations"
      intro="Combi, system and regular boilers from Worcester Bosch, Vaillant and Baxi — installed by Gas Safe engineers with fixed prices and warranties up to 12 years."
      whatTitle="What is a boiler installation?"
      whatParas={[
        "Your boiler is the heart of your home's heating and hot water. A boiler installation replaces your old or failing unit with a modern, high-efficiency model — properly sized for your home's rooms, radiators and hot water demand.",
        "Most homes choose a combi boiler, which heats water on demand with no tank or cylinder. Larger homes with more than one bathroom often suit a system or regular boiler paired with a hot water cylinder. We survey your home first and recommend what actually fits — not what's easiest to sell.",
        "A straightforward swap is usually completed in a single day, including a system flush, a magnetic filter, Benchmark certification and registration of your manufacturer warranty.",
      ]}
      image="https://images.unsplash.com/photo-1751486289950-5c4898a4c773?w=900&h=675&fit=crop&auto=format"
      imageAlt="Boiler and heating pipework"
      stat={{ value: "From £1,800", label: "Fixed price, fully installed" }}
      provideList={[
        "Free survey and honest advice on the right boiler type",
        "Combi, system and regular boilers from leading brands",
        "System flush and magnetic filter included",
        "Removal and disposal of your old boiler",
        "Benchmark certificate and warranty registration",
        "Manufacturer warranties up to 12 years",
        "Same-week installation on most jobs",
      ]}
      secondImage="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=900&h=675&fit=crop&auto=format"
      secondImageAlt="Engineer working on heating pipework"
    />
  )
}
