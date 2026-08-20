import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="HH Plumbing and Gas — home">
      <span className="inline-flex h-9 w-9 items-center justify-center bg-brand-yellow text-black font-black text-sm">
        HH
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-tight">HH Plumbing</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          &amp; Gas · London
        </span>
      </span>
    </Link>
  )
}
