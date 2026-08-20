import { ServicePage } from "../../components/service-page"

export default function HeatPumpInstallationsPage() {
  return (
    <ServicePage
      name="Heat Pump Installations"
      title="Heat Pump Installations"
      tagline="Low carbon. Low bills. Built for British winters."
      intro="Air and ground source heat pumps from Vaillant, Mitsubishi Electric and Daikin — MCS certified installations, with the £7,500 government grant handled for you."
      heroImage="https://images.unsplash.com/photo-1776860150305-108ed577d7d4?w=1800&h=1100&fit=crop&auto=format"
      whatTitle="A heat pump replaces your gas boiler with clean, efficient heating — designed properly, it thrives in a British winter."
      whatParas={[
        "Instead of burning fuel, a heat pump extracts warmth from the outside air (or the ground) and uses it to heat your home and hot water — delivering three to four units of heat for every unit of electricity it uses.",
        "A good installation starts with the numbers: we carry out a room-by-room heat-loss calculation, check your radiators are compatible, and size the unit and cylinder to your actual demand. That design work is the difference between a heat pump that quietly saves money and one that struggles in January.",
        "Most homes qualify for the government's £7,500 Boiler Upgrade Scheme grant. We handle the entire application on your behalf, so the discount comes straight off your installation price.",
      ]}
      image="https://images.unsplash.com/photo-1776860150305-108ed577d7d4?w=750&h=1000&fit=crop&crop=entropy&auto=format"
      imageAlt="Air source heat pump outside a brick home"
      stat={{ value: "£7,500", label: "Boiler Upgrade Scheme grant — we handle the paperwork" }}
      provideList={[
        "Room-by-room heat-loss survey and design",
        "Air source and ground source systems",
        "Radiator and cylinder compatibility checked",
        "MCS certified installation and commissioning",
        "£7,500 BUS grant handled end to end",
        "Smart weather-compensating controls",
      ]}
      steps={[
        {
          title: "Home survey & heat-loss calculation",
          desc: "A room-by-room assessment to size the unit correctly and check your radiators and cylinder are compatible.",
        },
        {
          title: "System design & fixed quote",
          desc: "We design the full system — unit, cylinder, pipework and controls — and send a fixed, itemised quote.",
        },
        {
          title: "Grant application & installation",
          desc: "We apply for the £7,500 Boiler Upgrade Scheme grant on your behalf, then install with minimal disruption.",
        },
        {
          title: "Commissioning & handover",
          desc: "The system is commissioned, balanced and demonstrated — set up to run efficiently for years.",
        },
      ]}
    />
  )
}
