import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="HH Plumbing and Gas — home">
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-black font-black text-sm shadow-[0_6px_20px_-8px_rgba(255,214,10,0.9)]">
        HH
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-tight">HH Plumbing</span>
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          &amp; Gas · London
        </span>
      </span>
    </Link>
  )
}
