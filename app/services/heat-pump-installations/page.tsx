import { ServicePage } from "../../components/service-page"

export default function HeatPumpInstallationsPage() {
  return (
    <ServicePage
      name="Heat Pump Installations"
      title="Heat Pump Installations"
      intro="Air and ground source heat pumps from Vaillant, Mitsubishi Electric and Daikin — MCS certified installations, with the £7,500 government grant handled for you."
      whatTitle="What is a heat pump?"
      whatParas={[
        "A heat pump is a low-carbon replacement for a gas boiler. Instead of burning fuel, it extracts heat from the outside air (or the ground) and uses it to warm your home and hot water — delivering three to four units of heat for every unit of electricity it uses.",
        "A good installation starts with the numbers: we carry out a room-by-room heat-loss calculation, check your radiators are compatible, and size the unit and cylinder to your actual demand. That design work is the difference between a heat pump that quietly saves money and one that struggles in January.",
        "Most homes qualify for the government's £7,500 Boiler Upgrade Scheme grant. We handle the entire application on your behalf, so the discount comes straight off your installation price.",
      ]}
      image="https://images.unsplash.com/photo-1776860150305-108ed577d7d4?w=900&h=675&fit=crop&auto=format"
      imageAlt="Air source heat pump outside a brick home"
      stat={{ value: "£7,500", label: "Boiler Upgrade Scheme grant — we handle the paperwork" }}
      provideList={[
        "Full room-by-room heat-loss survey and system design",
        "Air source and ground source systems",
        "Radiator and emitter compatibility check",
        "Cylinder and buffer sizing for your household",
        "MCS certified installation and commissioning",
        "£7,500 BUS grant application handled end to end",
        "Smart weather-compensating controls",
      ]}
    />
  )
}
