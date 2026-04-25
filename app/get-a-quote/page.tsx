"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Star, Check, ArrowRight } from "lucide-react"
import { Header } from "../components/header"
import { SiteFooter } from "../components/site-footer"
import {
  CombiBoilerIcon,
  StandardBoilerIcon,
  SystemBoilerIcon,
  ElectricBoilerIcon,
  UnderfloorHeatingIcon,
  CylinderIcon,
  HeatPumpIcon,
  HybridHeatPumpIcon,
  InfoIcon,
} from "../components/icons/boiler-icons"
import { saveQuoteRequest } from "../utils/quote-storage"

const serviceTypes = [
  { id: "boiler-installation", name: "Boiler Installation", icon: <CombiBoilerIcon /> },
  { id: "heat-pump-installation", name: "Heat Pump Installation", icon: <HeatPumpIcon /> },
  { id: "underfloor-heating", name: "Underfloor Heating", icon: <UnderfloorHeatingIcon /> },
  { id: "cylinder-installation", name: "Cylinder Installation", icon: <CylinderIcon /> },
]

const boilerTypes = [
  {
    id: "combi",
    name: "Combi",
    icon: <CombiBoilerIcon />,
    description: "Provides hot water on demand without a cylinder",
    startingPrice: 1800,
  },
  {
    id: "standard",
    name: "Standard",
    icon: <StandardBoilerIcon />,
    description: "Works with a hot water cylinder and cold water tank",
    startingPrice: 2000,
  },
  {
    id: "system",
    name: "System",
    icon: <SystemBoilerIcon />,
    description: "Works with a hot water cylinder but no cold water tank",
    startingPrice: 2200,
  },
  {
    id: "electric",
    name: "Electric",
    icon: <ElectricBoilerIcon />,
    description: "Uses electricity to heat water without gas",
    startingPrice: 1900,
  },
]

const heatPumpTypes = [
  {
    id: "air-source",
    name: "Air Source",
    icon: <HeatPumpIcon />,
    description: "Extracts heat from the outside air",
    startingPrice: 3500,
  },
  {
    id: "ground-source",
    name: "Ground Source",
    icon: <HeatPumpIcon />,
    description: "Extracts heat from the ground via buried pipes",
    startingPrice: 6000,
  },
  {
    id: "hybrid",
    name: "Hybrid System",
    icon: <HybridHeatPumpIcon />,
    description: "Combines a heat pump with a traditional boiler",
    startingPrice: 4500,
  },
]

const cylinderTypes = [
  {
    id: "direct",
    name: "Direct",
    icon: <CylinderIcon />,
    description: "Heated directly by an immersion heater",
    startingPrice: 1200,
  },
  {
    id: "indirect",
    name: "Indirect",
    icon: <CylinderIcon />,
    description: "Heated indirectly via a coil from your boiler",
    startingPrice: 1400,
  },
]

const underfloorTypes = [
  {
    id: "wet",
    name: "Wet System",
    icon: <UnderfloorHeatingIcon />,
    description: "Uses hot water pipes under the floor",
    startingPrice: 3000,
  },
  {
    id: "electric",
    name: "Electric System",
    icon: <UnderfloorHeatingIcon />,
    description: "Uses electric heating elements under the floor",
    startingPrice: 2000,
  },
]

// Updated brands list - removed Ideal and Viessmann, added Main
const brands = [
  { id: "vaillant", name: "Vaillant", logo: "/images/vaillant-logo-new.png", startingPrice: 2100, recommended: true },
  { id: "worcester-bosch", name: "Worcester Bosch", logo: "/images/worcester-bosch-new.png", startingPrice: 2200 },
  { id: "baxi", name: "Baxi", logo: "/images/baxi-logo.png", startingPrice: 1900 },
  { id: "glow-worm", name: "Glow Worm", logo: "/images/glow-worm-logo.png", startingPrice: 1700 },
  { id: "main", name: "Main", logo: "/images/main-heating-logo.png", startingPrice: 1600 },
]

// Cylinder brands remain the same
const cylinderBrands = [
  { id: "vaillant", name: "Vaillant", logo: "/images/vaillant-logo-new.png", startingPrice: 1600, recommended: true },
  { id: "megaflo", name: "Megaflo", logo: "/images/megaflo-logo.png", startingPrice: 1500 },
  { id: "gledhill", name: "Gledhill", logo: "/images/gledhill-logo.png", startingPrice: 1400 },
]

// Updated heat pump brands - removed Nibe, LG, Samsung, added Baxi and Bosch
const heatPumpBrands = [
  { id: "vaillant", name: "Vaillant", logo: "/images/vaillant-logo-new.png", startingPrice: 4100, recommended: true },
  { id: "mitsubishi", name: "Mitsubishi Electric", logo: "/images/mitsubishi-logo.png", startingPrice: 4000 },
  { id: "daikin", name: "Daikin", logo: "/images/daikin-logo.png", startingPrice: 4200 },
  { id: "baxi", name: "Baxi", logo: "/images/baxi-logo.png", startingPrice: 3900 },
  { id: "bosch", name: "Bosch", logo: "/images/worcester-bosch-new.png", startingPrice: 4300 },
]

// Updated underfloor brands to Warmup and Aumix
const underfloorBrands = [
  {
    id: "warmup-wet",
    name: "Warmup",
    logo: "/images/warmup-logo.png",
    startingPrice: 3900,
    recommended: true,
    type: "wet",
  },
  { id: "aumix-wet", name: "Aumix", logo: "/images/aumix-logo.png", startingPrice: 3500, type: "wet" },
  {
    id: "warmup-electric",
    name: "Warmup",
    logo: "/images/warmup-logo.png",
    startingPrice: 2200,
    recommended: true,
    type: "electric",
  },
]

// Brand-specific models
const brandModels = {
  // Boiler models
  "vaillant-boiler": [
    {
      id: "ecotec-pro",
      name: "ecoTEC pro",
      description: "High efficiency combi boiler",
      startingPrice: 2100,
    },
    {
      id: "ecotec-plus",
      name: "ecoTEC plus",
      description: "Premium combi boiler with higher flow rates",
      startingPrice: 2400,
    },
    {
      id: "ecotec-exclusive",
      name: "ecoTEC exclusive",
      description: "Top of the range with smart features",
      startingPrice: 2800,
    },
  ],
  "worcester-bosch-boiler": [
    {
      id: "greenstar-i",
      name: "Greenstar i",
      description: "Compact and reliable combi boiler",
      startingPrice: 2200,
    },
    { id: "greenstar-cdi", name: "Greenstar CDi", description: "High performance combi boiler", startingPrice: 2500 },
    {
      id: "greenstar-life",
      name: "Greenstar Life",
      description: "Smart connectivity and high efficiency",
      startingPrice: 2700,
    },
  ],
  "baxi-boiler": [
    { id: "duo-tec", name: "Duo-tec", description: "Easy to use combi boiler", startingPrice: 1900 },
    { id: "platinum", name: "Platinum", description: "Premium range with extended warranty", startingPrice: 2200 },
  ],
  "glow-worm-boiler": [
    {
      id: "energy",
      name: "Energy",
      description: "Reliable and affordable combi boiler",
      startingPrice: 1700,
    },
    { id: "ultimate", name: "Ultimate", description: "Premium range with higher output", startingPrice: 2000 },
  ],
  "main-boiler": [
    {
      id: "eco-compact",
      name: "Eco Compact",
      description: "Compact and efficient combi boiler",
      startingPrice: 1600,
    },
    {
      id: "eco-elite",
      name: "Eco Elite",
      description: "High performance with excellent efficiency",
      startingPrice: 1800,
    },
  ],

  // Heat pump models
  "vaillant-heat": [
    {
      id: "arotherm-plus",
      name: "aroTHERM plus",
      description: "High efficiency air source heat pump",
      startingPrice: 4100,
    },
    {
      id: "flexotherm",
      name: "flexoTHERM",
      description: "Ground source heat pump with high performance",
      startingPrice: 6500,
    },
    {
      id: "arotherm-hybrid",
      name: "aroTHERM Hybrid",
      description: "Hybrid system with integrated boiler",
      startingPrice: 4800,
    },
  ],
  "mitsubishi-heat": [
    {
      id: "ecodan",
      name: "Ecodan",
      description: "Market-leading air source heat pump",
      startingPrice: 4000,
    },
    { id: "ecodan-monobloc", name: "Ecodan Monobloc", description: "Compact all-in-one unit", startingPrice: 4300 },
    {
      id: "ecodan-hybrid",
      name: "Ecodan Hybrid",
      description: "Combined heat pump and boiler system",
      startingPrice: 4600,
    },
  ],
  "daikin-heat": [
    {
      id: "altherma",
      name: "Altherma",
      description: "Efficient air-to-water heat pump",
      startingPrice: 4200,
    },
    {
      id: "altherma-hybrid",
      name: "Altherma Hybrid",
      description: "Hybrid heat pump with gas boiler backup",
      startingPrice: 4700,
    },
  ],
  "baxi-heat": [
    {
      id: "assure",
      name: "Assure",
      description: "Reliable air source heat pump",
      startingPrice: 3900,
    },
    {
      id: "assure-hybrid",
      name: "Assure Hybrid",
      description: "Hybrid system with Baxi boiler",
      startingPrice: 4500,
    },
  ],
  "bosch-heat": [
    {
      id: "compress-3000",
      name: "Compress 3000",
      description: "Entry-level air source heat pump",
      startingPrice: 4300,
    },
    {
      id: "compress-7000i",
      name: "Compress 7000i",
      description: "Premium heat pump with smart controls",
      startingPrice: 4800,
    },
    {
      id: "hybrid-7000i",
      name: "Hybrid 7000i",
      description: "Hybrid system with Greenstar boiler",
      startingPrice: 5200,
    },
  ],

  // Cylinder models
  "vaillant-cylinder": [
    {
      id: "unistor",
      name: "uniSTOR",
      description: "High quality hot water cylinder",
      startingPrice: 1600,
    },
    { id: "actostore", name: "actoSTOR", description: "Advanced cylinder with faster recovery", startingPrice: 1900 },
  ],
  "megaflo-cylinder": [
    {
      id: "eco",
      name: "Megaflo Eco",
      description: "Market-leading unvented cylinder",
      startingPrice: 1500,
    },
    {
      id: "eco-plus",
      name: "Megaflo Eco Plus",
      description: "Enhanced model with faster recovery",
      startingPrice: 1700,
    },
  ],

  // Underfloor heating models
  "warmup-wet-underfloor": [
    {
      id: "total-16",
      name: "Total-16",
      description: "Low profile wet underfloor heating system",
      startingPrice: 3900,
    },
    {
      id: "clypso",
      name: "Clypso System",
      description: "Traditional screed-based system",
      startingPrice: 4200,
    },
  ],
  "aumix-wet-underfloor": [
    {
      id: "standard",
      name: "Standard System",
      description: "Quality wet underfloor heating system",
      startingPrice: 3500,
    },
    {
      id: "premium",
      name: "Premium System",
      description: "Enhanced system with zoning controls",
      startingPrice: 3800,
    },
  ],
  "warmup-electric-underfloor": [
    {
      id: "dcm-pro",
      name: "DCM-PRO",
      description: "Membrane system for fast installation",
      startingPrice: 2200,
    },
    {
      id: "sticky-mat",
      name: "StickyMat System",
      description: "Self-adhesive mat for easy installation",
      startingPrice: 2000,
    },
    {
      id: "loose-wire",
      name: "Loose Wire System",
      description: "Flexible system for irregular spaces",
      startingPrice: 1800,
    },
  ],
}

export default function GetAQuote() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedModel, setSelectedModel] = useState<string | null>(null)
  const [startingPrice, setStartingPrice] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
  const router = useRouter()

  // Deep-link: pre-select service from ?service=<id> and skip to step 2
  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    const serviceParam = params.get("service")
    if (serviceParam && serviceTypes.some((s) => s.id === serviceParam)) {
      setSelectedService(serviceParam)
      setStep(2)
    }
  }, [])

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setSelectedType(null)
    setSelectedBrand(null)
    setSelectedModel(null)
    setStartingPrice(null)
    setStep(2)
  }

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId)
    setSelectedBrand(null)
    setSelectedModel(null)

    // Set initial starting price based on type
    let selectedTypeObj
    if (selectedService === "boiler-installation") {
      selectedTypeObj = boilerTypes.find((type) => type.id === typeId)
    } else if (selectedService === "heat-pump-installation") {
      selectedTypeObj = heatPumpTypes.find((type) => type.id === typeId)
    } else if (selectedService === "cylinder-installation") {
      selectedTypeObj = cylinderTypes.find((type) => type.id === typeId)
    } else if (selectedService === "underfloor-heating") {
      selectedTypeObj = underfloorTypes.find((type) => type.id === typeId)
    }

    if (selectedTypeObj) {
      setStartingPrice(selectedTypeObj.startingPrice)
    }

    setStep(3)
  }

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId)
    setSelectedModel(null)

    // Update price based on brand
    let brand
    if (selectedService === "boiler-installation") {
      brand = brands.find((b) => b.id === brandId)
    } else if (selectedService === "heat-pump-installation") {
      brand = heatPumpBrands.find((b) => b.id === brandId)
    } else if (selectedService === "cylinder-installation") {
      brand = cylinderBrands.find((b) => b.id === brandId)
    } else if (selectedService === "underfloor-heating") {
      brand = underfloorBrands.find((b) => b.id === brandId)
    }

    if (brand) {
      setStartingPrice(brand.startingPrice)
    }

    setStep(4)
  }

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId)

    // Get the model key based on selected service and brand
    const servicePrefix = selectedService?.split("-")[0] || ""
    let brandModelKey = `${selectedBrand}-${servicePrefix}`

    // Special case for underfloor heating which has type-specific brands
    if (selectedService === "underfloor-heating") {
      const brand = underfloorBrands.find((b) => b.id === selectedBrand)
      if (brand) {
        brandModelKey = `${selectedBrand}-${servicePrefix}`
      }
    }

    // Find the selected model and update price
    const models = brandModels[brandModelKey as keyof typeof brandModels] || []
    const selectedModelObj = models.find((model) => model.id === modelId)

    if (selectedModelObj) {
      setStartingPrice(selectedModelObj.startingPrice)
    }

    setStep(5)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Get service name
      const service = serviceTypes.find((s) => s.id === selectedService)?.name || ""

      // Get type name
      let typeName = ""
      if (selectedService === "boiler-installation") {
        typeName = boilerTypes.find((b) => b.id === selectedType)?.name || ""
      } else if (selectedService === "heat-pump-installation") {
        typeName = heatPumpTypes.find((b) => b.id === selectedType)?.name || ""
      } else if (selectedService === "cylinder-installation") {
        typeName = cylinderTypes.find((b) => b.id === selectedType)?.name || ""
      } else if (selectedService === "underfloor-heating") {
        typeName = underfloorTypes.find((b) => b.id === selectedType)?.name || ""
      }

      // Get brand name
      let brandName = ""
      if (selectedService === "boiler-installation") {
        brandName = brands.find((b) => b.id === selectedBrand)?.name || ""
      } else if (selectedService === "heat-pump-installation") {
        brandName = heatPumpBrands.find((b) => b.id === selectedBrand)?.name || ""
      } else if (selectedService === "cylinder-installation") {
        brandName = cylinderBrands.find((b) => b.id === selectedBrand)?.name || ""
      } else if (selectedService === "underfloor-heating") {
        brandName = underfloorBrands.find((b) => b.id === selectedBrand)?.name || ""
      }

      // Get model name
      const servicePrefix = selectedService?.split("-")[0] || ""
      let brandModelKey = `${selectedBrand}-${servicePrefix}`

      // Special case for underfloor heating
      if (selectedService === "underfloor-heating") {
        const brand = underfloorBrands.find((b) => b.id === selectedBrand)
        if (brand) {
          brandModelKey = `${selectedBrand}-${servicePrefix}`
        }
      }

      const models = brandModels[brandModelKey as keyof typeof brandModels] || []
      const modelName = models.find((model) => model.id === selectedModel)?.name || ""

      // Save quote request to localStorage
      const quoteData = {
        ...formData,
        serviceType: service,
        type: typeName,
        brand: brandName,
        model: modelName,
        startingPrice: startingPrice || 0,
      }

      console.log("Saving quote data:", quoteData)
      const savedQuote = saveQuoteRequest(quoteData)

      if (savedQuote) {
        router.push("/get-a-quote/thank-you")
      } else {
        alert("There was an error submitting your quote request. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your quote request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const getAvailableBrands = () => {
    if (selectedService === "boiler-installation") {
      return brands
    } else if (selectedService === "heat-pump-installation") {
      return heatPumpBrands
    } else if (selectedService === "cylinder-installation") {
      return cylinderBrands
    } else if (selectedService === "underfloor-heating") {
      // Filter underfloor brands by selected type
      return underfloorBrands.filter((brand) => brand.type === selectedType)
    }
    return []
  }

  const getTypeOptions = () => {
    if (selectedService === "boiler-installation") {
      return boilerTypes
    } else if (selectedService === "heat-pump-installation") {
      return heatPumpTypes
    } else if (selectedService === "cylinder-installation") {
      return cylinderTypes
    } else if (selectedService === "underfloor-heating") {
      return underfloorTypes
    }
    return []
  }

  const getModelOptions = () => {
    if (!selectedBrand || !selectedService) return []

    const servicePrefix = selectedService.split("-")[0]
    let brandModelKey = `${selectedBrand}-${servicePrefix}`

    // Special case for underfloor heating
    if (selectedService === "underfloor-heating") {
      brandModelKey = `${selectedBrand}-${servicePrefix}`
    }

    return brandModels[brandModelKey as keyof typeof brandModels] || []
  }

  const toggleTooltip = (id: string) => {
    if (showTooltip === id) {
      setShowTooltip(null)
    } else {
      setShowTooltip(id)
    }
  }

  const progressSteps = [
    { id: 1, label: "Service" },
    { id: 2, label: "Type" },
    { id: 3, label: "Brand" },
    { id: 4, label: "Model" },
    { id: 5, label: "Details" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-yellow" />
          <div className="relative container mx-auto px-4 pt-12 md:pt-16 pb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1.5 text-xs font-semibold hover:border-foreground/30 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </Link>
            <div className="mt-6 max-w-3xl">
              <span className="eyebrow">Free no-obligation quote</span>
              <h1 className="display-lg mt-4">
                Get your <span className="text-foreground">tailored quote</span> in minutes.
              </h1>
              <p className="lead mt-4 max-w-2xl">
                Answer a few quick questions and we'll send a fixed, itemised quote with manufacturer-approved
                options.
              </p>
            </div>
          </div>
        </section>

        {/* Quote card */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="mx-auto max-w-5xl rounded-lg border border-border bg-card shadow-lift overflow-hidden">
            {/* Progress Steps */}
            <div className="relative bg-foreground/[0.02] border-b border-border px-6 md:px-10 py-6">
              <div className="relative flex items-center justify-between gap-2">
                <div aria-hidden className="absolute top-4 left-[10%] right-[10%] h-px bg-border" />
                <div
                  aria-hidden
                  className="absolute top-4 left-[10%] h-px bg-brand-yellow transition-all duration-500"
                  style={{ width: `${Math.max(0, ((step - 1) / 4) * 80)}%` }}
                />
                {progressSteps.map((s) => {
                  const active = step >= s.id
                  const current = step === s.id
                  return (
                    <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          active
                            ? "bg-brand-yellow text-black "
                            : "bg-background border border-border text-muted-foreground"
                        } ${current ? "ring-4 ring-brand-yellow/20" : ""}`}
                      >
                        {step > s.id ? <Check className="h-4 w-4" /> : s.id}
                      </div>
                      <span
                        className={`text-[11px] font-semibold tracking-wide transition-colors ${
                          active ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Step 1 of 5
                  </p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
                    What service do you need?
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Pick a category and we'll tailor the options from there.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      className={`group relative flex flex-col items-center rounded-lg border p-7 text-center transition-all duration-300 ${
                        selectedService === service.id
                          ? "border-foreground bg-foreground/[0.04]"
                          : "border-border bg-card hover:border-foreground/30"
                      }`}
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <div className="h-20 w-20 mb-4 flex items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground/80 group-hover:bg-foreground group-hover:text-background transition-colors">
                        <div className="h-14 w-14">{service.icon}</div>
                      </div>
                      <h3 className="font-semibold tracking-tight">{service.name}</h3>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground group-hover:text-foreground">
                        Select
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && selectedService && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Step 2 of 5
                    </p>
                    <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
                      What type of {selectedService.split("-")[0]} do you need?
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Not sure? Tap the info icon on each card for a quick rundown.
                    </p>
                  </div>
                  <button
                    onClick={handleBack}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:border-foreground/30 transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {getTypeOptions().map((typeOption) => (
                    <div
                      key={typeOption.id}
                      className={`group relative rounded-lg border p-7 cursor-pointer transition-all duration-300 flex flex-col items-center ${
                        selectedType === typeOption.id
                          ? "border-foreground bg-foreground/[0.04]"
                          : "border-border bg-card hover:border-foreground/30"
                      }`}
                      onClick={() => handleTypeSelect(typeOption.id)}
                    >
                      <button
                        type="button"
                        className="absolute top-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleTooltip(typeOption.id)
                        }}
                        aria-label={`More info about ${typeOption.name}`}
                      >
                        <InfoIcon />
                      </button>

                      <div className="h-20 w-20 mb-4 flex items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground/80 group-hover:bg-foreground group-hover:text-background transition-colors">
                        <div className="h-14 w-14">{typeOption.icon}</div>
                      </div>
                      <h3 className="font-semibold tracking-tight text-center">{typeOption.name}</h3>
                      <p className="mt-2 text-xs text-muted-foreground text-center">
                        from <span className="font-semibold text-foreground">£{typeOption.startingPrice}</span>
                      </p>

                      {showTooltip === typeOption.id && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-60 rounded-xl border border-border bg-popover p-4 text-left shadow-lift z-20">
                          <p className="text-xs text-muted-foreground leading-relaxed">{typeOption.description}</p>
                          <p className="mt-3 text-xs font-semibold">
                            Starting from{" "}
                            £{typeOption.startingPrice}
                          </p>
                          <div
                            aria-hidden
                            className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-r border-b border-border bg-popover"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && selectedService && selectedType && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Step 3 of 5
                    </p>
                    <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">Select a brand</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We're approved installers for every brand listed.
                    </p>
                  </div>
                  <button
                    onClick={handleBack}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:border-foreground/30 transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {getAvailableBrands().map((brand) => {
                    const isSelected = selectedBrand === brand.id
                    return (
                      <button
                        key={brand.id}
                        type="button"
                        className={`group relative flex items-center gap-4 rounded-md border p-4 text-left transition-colors ${
                          isSelected
                            ? "border-foreground bg-foreground/[0.03]"
                            : "border-border bg-card hover:border-foreground/40"
                        }`}
                        onClick={() => handleBrandSelect(brand.id)}
                      >
                        <div className="relative h-12 w-20 shrink-0 flex items-center justify-center">
                          <img
                            src={brand.logo || "/placeholder.svg"}
                            alt={brand.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold tracking-tight">{brand.name}</h3>
                            {brand.recommended && (
                              <span className="inline-flex items-center gap-1 rounded-sm bg-brand-yellow text-black text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5">
                                <Star className="h-2.5 w-2.5 fill-current" />
                                Recommended
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">
                            From{" "}
                            <span className="font-semibold text-foreground">
                              £{brand.startingPrice.toLocaleString()}
                            </span>
                          </p>
                        </div>

                        <span
                          aria-hidden
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isSelected
                              ? "border-foreground bg-foreground text-background"
                              : "border-border bg-background"
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3" />}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 4 && selectedService && selectedType && selectedBrand && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Step 4 of 5
                    </p>
                    <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">Select a model</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Each model is a great fit — the price shown is a starting point.
                    </p>
                  </div>
                  <button
                    onClick={handleBack}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:border-foreground/30 transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {getModelOptions().map((model) => {
                    const isSelected = selectedModel === model.id
                    return (
                      <button
                        key={model.id}
                        type="button"
                        className={`group relative flex items-start gap-4 rounded-md border p-5 text-left transition-colors ${
                          isSelected
                            ? "border-foreground bg-foreground/[0.03]"
                            : "border-border bg-card hover:border-foreground/40"
                        }`}
                        onClick={() => handleModelSelect(model.id)}
                      >
                        <span
                          aria-hidden
                          className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isSelected
                              ? "border-foreground bg-foreground text-background"
                              : "border-border bg-background"
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3" />}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="text-base font-semibold tracking-tight">{model.name}</h3>
                            <p className="text-sm">
                              <span className="text-muted-foreground">From </span>
                              <span className="font-semibold text-foreground">
                                £{model.startingPrice.toLocaleString()}
                              </span>
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {model.description}
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Step 5 of 5
                    </p>
                    <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">Your details</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Last step — leave your contact info and we'll send a fixed-price quote shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleBack}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:border-foreground/30 transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back
                  </button>
                </div>

                <div className="mb-8 overflow-hidden rounded-md border border-border bg-card">
                  <div className="flex items-center justify-between border-b border-border bg-foreground/[0.02] px-5 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Quote summary
                    </p>
                  </div>
                  <dl className="divide-y divide-border text-sm">
                    <div className="flex items-center justify-between px-5 py-3">
                      <dt className="text-muted-foreground">Service</dt>
                      <dd className="font-semibold">
                        {serviceTypes.find((s) => s.id === selectedService)?.name}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between px-5 py-3">
                      <dt className="text-muted-foreground">Type</dt>
                      <dd className="font-semibold">
                        {getTypeOptions().find((t) => t.id === selectedType)?.name}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between px-5 py-3">
                      <dt className="text-muted-foreground">Brand</dt>
                      <dd className="font-semibold">
                        {getAvailableBrands().find((b) => b.id === selectedBrand)?.name}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between px-5 py-3">
                      <dt className="text-muted-foreground">Model</dt>
                      <dd className="font-semibold">
                        {getModelOptions().find((m) => m.id === selectedModel)?.name}
                      </dd>
                    </div>
                    {startingPrice && (
                      <div className="flex items-center justify-between px-5 py-4 bg-foreground/[0.02]">
                        <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          Starting from
                        </dt>
                        <dd className="text-xl font-bold">
                          £{startingPrice.toLocaleString()}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="rounded-lg border border-border bg-card p-6 md:p-8"
                >
                  <h3 className="text-lg font-semibold tracking-tight">Contact information</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We only use these details to send your quote — nothing more.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-sm transition-colors focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-sm transition-colors focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-sm transition-colors focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="postcode" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                        Postcode
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-sm transition-colors focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-sm transition-colors focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-between gap-3 border-t border-border pt-6">
                    <p className="text-xs text-muted-foreground">
                      By submitting you agree to be contacted by HH Plumbing &amp; Gas about your quote.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit quote request"}
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
