import { ServicePage } from "../../components/service-page"

export default function BathroomInstallationPage() {
  return (
    <ServicePage
      eyebrow="Bathroom installation"
      title="A bathroom you'll love to start the day in."
      lead="Complete bathroom renovations — design, plumbing, tiling and electrics coordinated by one team, from first fix to final silicone."
      included={[
        "Design advice and layout planning",
        "Full strip-out and first-fix plumbing",
        "Tiling, flooring and waterproofing",
        "Sanitaryware, showers and bath installation",
        "Electrics, lighting and ventilation",
        "Snag-free finish with a workmanship guarantee",
      ]}
      process={[
        {
          title: "Design & survey",
          desc: "We measure up, talk through your ideas and agree a layout that works for the space.",
        },
        {
          title: "Fixed quote & schedule",
          desc: "An itemised quote with a clear timeline, so you know exactly what happens when.",
        },
        {
          title: "Installation",
          desc: "Strip-out, first fix, tiling and fit-out — one team on site, kept clean and tidy throughout.",
        },
        {
          title: "Finish & handover",
          desc: "Final silicone, snag check and a full clean before we hand your new bathroom over.",
        },
      ]}
    />
  )
}
