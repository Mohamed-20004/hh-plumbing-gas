import { ServicePage } from "../../components/service-page"

export default function EmergencyRepairsPage() {
  return (
    <ServicePage
      name="Emergency Repairs"
      title="Emergency Repairs"
      intro="Burst pipes, gas leaks, boiler breakdowns, no heat or hot water — 24/7 Gas Safe response across London."
      whatTitle="What counts as an emergency?"
      whatParas={[
        "Water where it shouldn't be, the smell of gas, a boiler that's cut out in the middle of winter, or no hot water in a house full of people — if it can't wait until morning, it's an emergency, and we answer the phone around the clock.",
        "The first priority is always making things safe: isolating the water, gas or electrics to stop the damage. Then we diagnose the fault and, wherever possible, fix it on the same visit — our vans carry the common parts for the boilers and systems London homes actually have.",
        "If a bigger repair or a part order is needed, you'll get a clear fixed quote on the spot — no surprises added on afterwards, and any gas work is tested and certified before we leave.",
      ]}
      image="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=900&h=675&fit=crop&auto=format"
      imageAlt="Engineer carrying out an urgent repair"
      stat={{ value: "24/7", label: "Nights, weekends and holidays — we answer" }}
      provideList={[
        "Boiler breakdowns and no-heat call-outs",
        "Burst pipes and active leaks",
        "Gas safety concerns — checked and made safe",
        "No hot water and low pressure problems",
        "Blocked drains and overflowing fixtures",
        "Fixed quote before any chargeable repair",
        "Gas work tested and certified on completion",
      ]}
    />
  )
}
