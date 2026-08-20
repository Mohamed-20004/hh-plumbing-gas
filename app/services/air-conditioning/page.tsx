import { ServicePage } from "../../components/service-page"

export default function AirConditioningPage() {
  return (
    <ServicePage
      name="AC Installations"
      title="AC Installations"
      tagline="Cool in July. Warm in January."
      intro="Split and multi-split air conditioning from Mitsubishi Electric, Daikin, LG and Samsung — designed, installed and serviced by one trusted team."
      heroImage="https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=1800&h=1100&fit=crop&auto=format"
      whatTitle="Modern air conditioning is a year-round comfort upgrade — quiet, discreet and efficient in both directions."
      whatParas={[
        "A split system is the modern way to cool a home: a discreet outdoor unit connected to one or more slim indoor units mounted high on the wall. It cools quickly, runs quietly enough for bedrooms, and filters dust and pollen as the air circulates.",
        "Modern units also work in reverse — in winter they heat the room as efficiently as they cool it in summer, which makes them a genuinely useful year-round upgrade rather than a summer luxury.",
        "One outdoor unit can serve a single room (a split) or several rooms at once (a multi-split), each with its own temperature control. We survey your rooms and pipe routes first, so units end up where they work best and pipework stays neat.",
      ]}
      image="https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=750&h=1000&fit=crop&crop=entropy&auto=format"
      imageAlt="Air conditioning outdoor unit installed at a home"
      stat={{ value: "Cool + heat", label: "One system, comfortable all year round" }}
      provideList={[
        "Free site survey and room-by-room design",
        "Splits and multi-splits from leading brands",
        "Neat pipework, discreet unit placement",
        "Heating and cooling from the same system",
        "Smart controls and per-room zoning",
        "Annual servicing to protect the warranty",
      ]}
      steps={[
        {
          title: "Site survey",
          desc: "We assess your rooms, unit positioning and pipe routes to spec the right system sizes.",
        },
        {
          title: "Fixed quote",
          desc: "A transparent, itemised quote for the full installation — units, pipework, electrics and commissioning.",
        },
        {
          title: "Tidy installation",
          desc: "Neat wall runs and discreet outdoor unit placement, with minimal disruption to your home.",
        },
        {
          title: "Handover & aftercare",
          desc: "Full demonstration, warranty registration and annual servicing to keep the system at its best.",
        },
      ]}
    />
  )
}
