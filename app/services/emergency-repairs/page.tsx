import { ServicePage } from "../../components/service-page"

export default function EmergencyRepairsPage() {
  return (
    <ServicePage
      name="Emergency Repairs"
      title="Emergency Repairs"
      tagline="Day or night. We answer."
      intro="Burst pipes, gas leaks, boiler breakdowns, no heat or hot water — 24/7 Gas Safe response across London."
      heroImage="https://images.unsplash.com/photo-1751486289950-5c4898a4c773?w=1800&h=1100&fit=crop&crop=entropy&auto=format"
      whatTitle="If it can't wait until morning, it's an emergency — and we answer the phone around the clock."
      whatParas={[
        "Water where it shouldn't be, the smell of gas, a boiler that's cut out in the middle of winter, or no hot water in a house full of people — that's what our emergency line is for.",
        "The first priority is always making things safe: isolating the water, gas or electrics to stop the damage. Then we diagnose the fault and, wherever possible, fix it on the same visit — our vans carry the common parts for the boilers and systems London homes actually have.",
        "If a bigger repair or a part order is needed, you'll get a clear fixed quote on the spot — no surprises added afterwards, and any gas work is tested and certified before we leave.",
      ]}
      image="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=750&h=1000&fit=crop&auto=format"
      imageAlt="Engineer carrying out an urgent repair"
      stat={{ value: "24/7", label: "Nights, weekends and holidays — we answer" }}
      provideList={[
        "Boiler breakdowns and no-heat call-outs",
        "Burst pipes and active leaks",
        "Gas safety concerns made safe",
        "No hot water and pressure problems",
        "Fixed quote before any chargeable repair",
        "Gas work tested and certified",
      ]}
      steps={[
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
    />
  )
}
