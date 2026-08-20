import { ServicePage } from "../../components/service-page"

export default function DrainagePage() {
  return (
    <ServicePage
      name="Drainage"
      title="Drainage"
      tagline="Found fast. Fixed properly."
      intro="Blocked drains cleared, CCTV surveys and lasting repairs — at fixed prices agreed before any work starts."
      heroImage="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=1800&h=1100&fit=crop&auto=format"
      whatTitle="Drain problems only get worse — the right time to deal with them is early."
      whatParas={[
        "Slow sinks, gurgling toilets, bad smells or water backing up outside are all signs of a blocked or damaged drain.",
        "Most blockages are cleared on the first visit with professional rodding or high-pressure water jetting. When a drain keeps blocking, we run a CCTV camera through the line to find the actual cause — roots, scale, a collapsed section — and show you the footage, so you're never asked to pay for guesswork.",
        "Where a repair is needed, we'll price it as a fixed quote before any work begins: from patch lining a damaged section to excavating and replacing a collapsed run.",
      ]}
      image="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=750&h=1000&fit=crop&crop=entropy&auto=format"
      imageAlt="Engineer working on pipework"
      stat={{ value: "Same-day", label: "Most blockages cleared on the first visit" }}
      provideList={[
        "Blocked sinks, toilets, baths and gullies",
        "External drains and soil stacks",
        "High-pressure jetting and rodding",
        "CCTV surveys with recorded footage",
        "Patch repairs and excavation work",
        "Fixed price agreed before we start",
      ]}
      steps={[
        {
          title: "Diagnose",
          desc: "We locate the blockage or damage — with a CCTV survey where the cause isn't obvious.",
        },
        {
          title: "Agree the fix",
          desc: "You get a clear, fixed price before any work starts. No surprises.",
        },
        {
          title: "Clear or repair",
          desc: "Jetting, rodding or repair work carried out cleanly — usually the same day for blockages.",
        },
        {
          title: "Prove it",
          desc: "We re-check the flow (and re-survey where needed) so you know the problem is actually gone.",
        },
      ]}
    />
  )
}
