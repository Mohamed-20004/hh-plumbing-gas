import { ServicePage } from "../../components/service-page"

export default function DrainagePage() {
  return (
    <ServicePage
      eyebrow="Drainage"
      title="Blocked drains, cleared. Damaged drains, repaired."
      lead="Blockages cleared on the first visit wherever possible, with CCTV surveys to find the real cause and lasting repairs — all at fixed, agreed prices."
      included={[
        "Blocked sinks, toilets, baths and gullies",
        "External drain and soil stack blockages",
        "CCTV drain surveys with recorded footage",
        "High-pressure water jetting",
        "Patch repairs and excavation work",
        "Fixed-fee diagnosis on every job",
      ]}
      process={[
        {
          title: "Diagnose",
          desc: "We locate the blockage or damage — with a CCTV survey where it isn't obvious.",
        },
        {
          title: "Agree the fix",
          desc: "You get a clear, fixed price before any work starts. No surprises.",
        },
        {
          title: "Clear or repair",
          desc: "Jetting, rodding or repair work carried out cleanly, usually the same day for blockages.",
        },
        {
          title: "Prove it",
          desc: "We re-check the flow (and re-survey where needed) so you know the problem is actually gone.",
        },
      ]}
    />
  )
}
