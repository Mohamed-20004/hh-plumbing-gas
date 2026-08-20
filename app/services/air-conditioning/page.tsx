import { ServicePage } from "../../components/service-page"

export default function AirConditioningPage() {
  return (
    <ServicePage
      name="AC Installations"
      title="AC Installations"
      intro="Split and multi-split air conditioning from Mitsubishi Electric, Daikin, LG and Samsung — designed, installed and serviced by one trusted team."
      whatTitle="What is a split AC system?"
      whatParas={[
        "A split system is the modern way to cool a home: a discreet outdoor unit connected to one or more slim indoor units mounted high on the wall. It cools quickly, runs quietly enough for bedrooms, and filters dust and pollen as the air circulates.",
        "Modern units also work in reverse — in winter they heat the room as efficiently as they cool it in summer, which makes them a genuinely useful year-round upgrade rather than a summer luxury.",
        "One outdoor unit can serve a single room (a split) or several rooms at once (a multi-split), each with its own temperature control. We survey your rooms and pipe routes first, so units end up where they work best and pipework stays neat and discreet.",
      ]}
      image="https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=900&h=675&fit=crop&auto=format"
      imageAlt="Air conditioning outdoor unit installed at a home"
      stat={{ value: "Cool + heat", label: "One system, comfortable all year round" }}
      provideList={[
        "Free site survey and room-by-room system design",
        "Wall-mounted splits and multi-split systems",
        "Mitsubishi Electric, Daikin, LG and Samsung units",
        "Neat pipework and discreet outdoor unit placement",
        "Heating and cooling from the same system",
        "Smart controls and per-room zoning",
        "Annual servicing to protect efficiency and warranty",
      ]}
    />
  )
}
