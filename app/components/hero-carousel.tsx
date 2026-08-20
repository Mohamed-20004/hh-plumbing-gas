"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, Clock, Phone, ShieldCheck } from "lucide-react"
import { FadeIn, HeroText, ScrollHint, EASE } from "./motion"

type Slide = { src: string; alt: string }

const SLIDES: Slide[] = [
  { src: "/images/modern-bathroom.jpeg", alt: "Modern bathroom installation" },
  { src: "/placeholder.svg?height=1200&width=1920&text=Boiler+installation", alt: "Boiler installation" },
  { src: "/placeholder.svg?height=1200&width=1920&text=Heat+pump+system", alt: "Heat pump installation" },
  { src: "/placeholder.svg?height=1200&width=1920&text=Underfloor+heating", alt: "Underfloor heating installation" },
]

const INTERVAL = 6500

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (reduce || paused) return
    timer.current = setInterval(() => go(1), INTERVAL)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [go, paused, reduce])

  return (
    <section
      className="relative min-h-[92svh] w-full overflow-hidden bg-brand-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: EASE }}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className={`object-cover ${i === index && !reduce ? "ken-burns" : ""}`}
          />
        </motion.div>
      ))}

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.62) 0%, rgba(10,10,10,0.38) 42%, rgba(10,10,10,0.9) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 min-h-[92svh] flex flex-col items-center justify-center text-center text-white pt-24 pb-28">
        <FadeIn delay={0.05} y={12}>
          <span className="eyebrow border-white/20 bg-white/5 text-white/80">
            Trusted London heating engineers
          </span>
        </FadeIn>

        <HeroText
          text="Heating your home, done properly."
          className="display-xl mt-6 max-w-4xl text-balance text-white"
          delay={0.15}
        />

        <FadeIn delay={0.55}>
          <p className="lead mt-6 max-w-2xl text-white/80 text-pretty">
            Gas Safe engineers designing and installing boilers, heat pumps, cylinders and complete
            bathrooms across London — fixed prices, clean finishes, manufacturer-approved warranties.
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/get-a-quote" className="btn-primary group">
              Get a free quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="tel:0208 102 1108"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call 0208 102 1108
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.85}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-yellow" />
              Gas Safe · 630695
            </span>
            <span className="hidden sm:inline h-4 w-px bg-white/20" aria-hidden />
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-yellow" />
              24/7 emergency response
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Slide counter + arrows + scroll hint */}
      <div className="absolute inset-x-0 bottom-6 z-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-white/25 bg-white/5 text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-semibold tracking-[0.2em] text-white" aria-live="polite">
              <span className="text-brand-yellow">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-white/40">|</span>
              <span className="text-white/60">{String(SLIDES.length).padStart(2, "0")}</span>
            </p>
            <ScrollHint className="hidden md:block" />
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-white/25 bg-white/5 text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
