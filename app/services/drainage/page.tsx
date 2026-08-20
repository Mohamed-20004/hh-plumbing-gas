import { ServicePage } from "../../components/service-page"

export default function DrainagePage() {
  return (
    <ServicePage
      name="Drainage"
      title="Drainage"
      intro="Blocked drains cleared, CCTV surveys and lasting repairs — at fixed prices agreed before any work starts."
      whatTitle="What does our drainage service cover?"
      whatParas={[
        "Slow sinks, gurgling toilets, bad smells or water backing up outside are all signs of a blocked or damaged drain. Left alone they get worse — and messier — so the right time to deal with a drain problem is early.",
        "Most blockages are cleared on the first visit with professional rodding or high-pressure water jetting. When a drain keeps blocking, we run a CCTV camera through the line to find the actual cause — roots, scale, a collapsed section — and show you the footage, so you're never asked to pay for guesswork.",
        "Where a repair is needed, we'll price it as a fixed quote before any work begins: from patch lining a damaged section to excavating and replacing a collapsed run.",
      ]}
      image="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=900&h=675&fit=crop&auto=format"
      imageAlt="Engineer working on pipework"
      stat={{ value: "Same-day", label: "Most blockages cleared on the first visit" }}
      provideList={[
        "Blocked sinks, toilets, baths and gullies",
        "External drains and soil stacks",
        "High-pressure water jetting and rodding",
        "CCTV drain surveys with recorded footage",
        "Patch repairs and excavation work",
        "Fixed-fee diagnosis — price agreed before we start",
        "Re-checked and proven clear before we leave",
      ]}
    />
  )
}
