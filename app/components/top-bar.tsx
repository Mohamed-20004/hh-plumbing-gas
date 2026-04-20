import { Phone, Mail, Instagram, ShieldCheck } from "lucide-react"
import { TikTokIcon } from "./icons/tiktok-icon"

export function TopBar() {
  return (
    <div className="hidden md:block bg-brand-black text-white border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center h-10 text-xs">
        <div className="flex items-center gap-6 text-white/80">
          <a href="tel:07712599254" className="group inline-flex items-center gap-2 hover:text-brand-yellow transition-colors">
            <Phone className="h-3.5 w-3.5 text-brand-yellow" />
            <span className="tracking-wide">07712 599254</span>
          </a>
          <span className="h-3 w-px bg-white/15" aria-hidden />
          <a href="mailto:info@hhplumbing.com" className="group inline-flex items-center gap-2 hover:text-brand-yellow transition-colors">
            <Mail className="h-3.5 w-3.5 text-brand-yellow" />
            <span>info@hhplumbing.com</span>
          </a>
          <span className="h-3 w-px bg-white/15" aria-hidden />
          <span className="inline-flex items-center gap-2 text-white/70">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-yellow" />
            Gas Safe Registered · 630695
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/hhplumbingandgas"
            target="_blank"
            rel="noopener noreferrer"
            className="h-7 w-7 inline-flex items-center justify-center rounded-full border border-white/10 hover:border-brand-yellow/60 hover:text-brand-yellow transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://www.tiktok.com/@hussainhachem1"
            target="_blank"
            rel="noopener noreferrer"
            className="h-7 w-7 inline-flex items-center justify-center rounded-full border border-white/10 hover:border-brand-yellow/60 hover:text-brand-yellow transition-colors"
            aria-label="Follow us on TikTok"
          >
            <TikTokIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
