import { ServicePage } from "../../components/service-page"

export default function AirConditioningPage() {
  return (
    <ServicePage
      eyebrow="Air conditioning"
      title="Cool in summer. Warm in winter."
      lead="Split and multi-split air conditioning from Mitsubishi Electric, Daikin, LG and Samsung — designed, installed and serviced by one trusted team."
      included={[
        "Wall-mounted split systems for single rooms",
        "Multi-split systems serving several rooms",
        "Heating and cooling from the same unit",
        "Neat pipework and discreet outdoor unit placement",
        "Smart controls and per-room zoning",
        "Annual servicing to protect efficiency and warranty",
      ]}
      process={[
        {
          title: "Site survey",
          desc: "We assess the rooms, unit positioning and pipe routes to spec the right system sizes.",
        },
        {
          title: "Fixed quote",
          desc: "A transparent, itemised quote for the full installation — units, pipework, electrics and commissioning.",
        },
        {
          title: "Tidy install",
          desc: "Neat wall runs and discreet placement, with minimal disruption to your home.",
        },
        {
          title: "Handover & aftercare",
          desc: "Full demonstration, warranty registration and ongoing servicing to keep the system at its best.",
        },
      ]}
    />
  )
}
