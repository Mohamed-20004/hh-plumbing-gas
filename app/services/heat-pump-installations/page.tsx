import { ServicePage } from "../../components/service-page"

export default function HeatPumpInstallationsPage() {
  return (
    <ServicePage
      eyebrow="Heat pump installation"
      title="Low-carbon heating, designed for your home."
      lead="Air and ground source heat pumps from Vaillant, Mitsubishi Electric and Daikin — designed around your home's actual heat loss, with the £7,500 Boiler Upgrade Scheme grant handled for you."
      included={[
        "Air source and ground source heat pumps",
        "Full heat-loss calculation and system design",
        "Radiator and emitter compatibility check",
        "Cylinder and buffer sizing for your household",
        "Weather-compensating smart controls",
        "BUS grant paperwork handled end to end",
      ]}
      process={[
        {
          title: "Home survey & heat-loss",
          desc: "A room-by-room heat-loss calculation to size the unit correctly and check your emitters.",
        },
        {
          title: "System design & quote",
          desc: "We design the full system — unit, cylinder, pipework, controls — and send a fixed itemised quote.",
        },
        {
          title: "Grant & installation",
          desc: "We apply for the £7,500 Boiler Upgrade Scheme grant on your behalf, then install with minimal disruption.",
        },
        {
          title: "Commissioning",
          desc: "The system is commissioned, balanced and demonstrated — ready to run efficiently for years.",
        },
      ]}
      note={{
        label: "£7,500 grant",
        text: "Most homes qualify for the government's Boiler Upgrade Scheme. We handle the application so the grant comes straight off your installation price.",
      }}
    />
  )
}
