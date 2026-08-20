"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"
import { ChevronsLeftRight } from "lucide-react"

type BeforeAfterProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

/**
 * Draggable before/after image comparison. Drag the handle (or use
 * arrow keys when focused) to sweep between the two images.
 */
export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  className,
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(96, Math.max(4, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    setFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4))
    if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4))
  }

  return (
    <div
      ref={ref}
      className={`group relative aspect-[4/3] w-full select-none overflow-hidden rounded-lg border border-white/10 ${className ?? ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ touchAction: "none" }}
    >
      {/* After (full) */}
      <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />

      {/* Before (clipped to left of handle) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden
      >
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
      </div>

      {/* Labels */}
      <span className="absolute left-4 top-4 rounded-sm bg-black/60 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-sm bg-brand-yellow px-2.5 py-1 text-xs font-bold uppercase tracking-[0.15em] text-black">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-10"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]" />
      </div>
      <button
        type="button"
        role="slider"
        aria-label="Compare before and after"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 inline-flex h-11 w-11 cursor-ew-resize items-center justify-center rounded-full bg-brand-yellow text-black shadow-lift transition-transform group-hover:scale-105 focus-visible:scale-105"
        style={{ left: `${pos}%` }}
      >
        <ChevronsLeftRight className="h-5 w-5" />
      </button>
    </div>
  )
}
