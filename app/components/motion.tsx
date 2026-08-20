"use client"

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"

/* ----------------------------------------------------------------
 * Shared easing — one curve across the whole site so motion feels
 * like a single hand designed it.
 * ---------------------------------------------------------------- */
export const EASE = [0.22, 1, 0.36, 1] as const

/* ----------------------------------------------------------------
 * <Reveal> — fades + rises content when it scrolls into view.
 * ---------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  once?: boolean
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* ----------------------------------------------------------------
 * <Stagger> + <StaggerItem> — reveal a group of children one after
 * another (cards, list items, stats).
 * ---------------------------------------------------------------- */
const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export function Stagger({
  children,
  className,
  once = true,
}: {
  children: ReactNode
  className?: string
  once?: boolean
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  )
}

/* ----------------------------------------------------------------
 * <CountUp> — animates a number from 0 when it enters the viewport.
 * Handles values like "1,200+", "4.9", "£7,500", "12 yrs".
 * Non-numeric values ("24/7", "A+") render as-is.
 * ---------------------------------------------------------------- */
export function CountUp({
  value,
  duration = 1.6,
  className,
}: {
  value: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState<string | null>(null)

  const match = value.match(/^([^0-9]*)([\d,]+(?:\.\d+)?)(.*)$/)

  useEffect(() => {
    if (!match || reduce || !inView) return
    const prefix = match[1]
    const target = Number.parseFloat(match[2].replace(/,/g, ""))
    const suffix = match[3]
    const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0
    const start = performance.now()
    let raf: number

    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      // ease-out-expo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      const current = target * eased
      setDisplay(
        `${prefix}${current.toLocaleString("en-GB", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}${suffix}`,
      )
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, duration, value]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!match || reduce) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    )
  }

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden>{display ?? `${match[1]}0${match[3]}`}</span>
    </span>
  )
}

/* ----------------------------------------------------------------
 * <Parallax> — subtle vertical drift as the element scrolls past.
 * Use small amounts (16–40px) for depth without seasickness.
 * ---------------------------------------------------------------- */
export function Parallax({
  children,
  amount = 28,
  className,
}: {
  children: ReactNode
  amount?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount])

  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

/* ----------------------------------------------------------------
 * <ScrollProgress> — thin yellow bar under the header tracking
 * how far down the page you've read.
 * ---------------------------------------------------------------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  })
  const reduce = useReducedMotion()
  if (reduce) return null
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-brand-yellow"
    />
  )
}

/* ----------------------------------------------------------------
 * <HeroText> — staggered word-by-word headline entrance for heroes.
 * Words rise from behind a masked line, editorial style.
 * ---------------------------------------------------------------- */
export function HeroText({
  text,
  className,
  as: Tag = "h1",
  delay = 0.1,
}: {
  text: string
  className?: string
  as?: "h1" | "h2"
  delay?: number
}) {
  const reduce = useReducedMotion()
  const words = text.split(" ")

  if (reduce) return <Tag className={className}>{text}</Tag>

  const MotionTag = Tag === "h1" ? motion.h1 : motion.h2
  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom" aria-hidden>
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%" },
              show: { y: 0, transition: { duration: 0.75, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  )
}

/* ----------------------------------------------------------------
 * <FadeIn> — plain opacity fade for hero sub-content that follows
 * a HeroText headline (runs on mount, not on scroll).
 * ---------------------------------------------------------------- */
export function FadeIn({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* ----------------------------------------------------------------
 * <ScrollHint> — animated "scroll down" indicator for full-height
 * heroes: a small line that draws itself repeatedly.
 * ---------------------------------------------------------------- */
export function ScrollHint({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return null
  return (
    <div className={className} aria-hidden>
      <div className="relative h-12 w-px overflow-hidden bg-white/15">
        <motion.div
          className="absolute inset-x-0 top-0 h-1/2 bg-brand-yellow"
          animate={{ y: ["-100%", "220%"] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}
