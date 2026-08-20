"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

type Review = {
  quote: string
  name: string
  area: string
}

const INTERVAL = 6000

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir)
      setIndex((i) => (i + dir + reviews.length) % reviews.length)
    },
    [reviews.length],
  )

  useEffect(() => {
    if (reduce || paused) return
    timer.current = setInterval(() => go(1), INTERVAL)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [go, paused, reduce])

  const review = reviews[index]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto max-w-3xl min-h-[280px] md:min-h-[240px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.figure
            key={index}
            custom={direction}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex" aria-label="5 star review">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-yellow text-brand-yellow" />
              ))}
            </div>
            <blockquote className="mt-6 text-xl md:text-2xl font-medium leading-relaxed text-foreground/90 text-balance">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold">{review.name}</p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {review.area}
              </p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous review"
          className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 rounded-none transition-all duration-300 ${
                i === index ? "w-6 bg-brand-yellow" : "w-2 bg-border hover:bg-foreground/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next review"
          className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
