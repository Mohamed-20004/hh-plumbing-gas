import { ServicePage } from "../../components/service-page"

export default function EmergencyRepairsPage() {
  return (
    <ServicePage
      eyebrow="Emergency repairs"
      title="Leaks, no heat, breakdowns — we'll be there fast."
      lead="24/7 Gas Safe emergency response across central, west and greater London. Call any time, day or night, and we'll get you safely back up and running."
      included={[
        "Boiler breakdowns and no-heat call-outs",
        "Burst pipes and active leaks",
        "No hot water and pressure problems",
        "Gas safety concerns — checked and made safe",
        "Blocked drains and overflowing fixtures",
        "Out-of-hours, weekends and holidays covered",
      ]}
      process={[
        {
          title: "Call us",
          desc: "Describe the problem and we'll tell you straight away when an engineer can be with you.",
        },
        {
          title: "Make safe",
          desc: "First priority is stopping the damage — isolating water, gas or electrics as needed.",
        },
        {
          title: "Fix",
          desc: "Wherever possible we repair on the first visit; if parts are needed, you get a fixed quote first.",
        },
        {
          title: "Check & certify",
          desc: "The system is tested, and any gas work is certified before we leave.",
        },
      ]}
      note={{
        label: "Emergency line",
        text: "Call 0208 102 1108 any time — 24 hours a day, 7 days a week.",
      }}
    />
  )
}
