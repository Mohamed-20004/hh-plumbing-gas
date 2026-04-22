import { Phone, Instagram, ShieldCheck } from "lucide-react"
import { TikTokIcon } from "./icons/tiktok-icon"

export function TopBar() {
  return (
    <div className="hidden md:block bg-brand-black text-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-10 text-[13px]">
        {/* Left — trust */}
        <div className="flex items-center gap-5 text-white/80">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-yellow" />
            <span className="font-medium tracking-wide">Gas Safe · 630695</span>
          </span>
          <span className="hidden lg:inline h-3 w-px bg-white/15" aria-hidden />
          <span className="hidden lg:inline text-white/55">
            London&rsquo;s trusted plumbing &amp; gas specialists
          </span>
        </div>

        {/* Right — phone + socials */}
        <div className="flex items-center gap-4">
          <a
            href="tel:07712599254"
            className="group inline-flex items-center gap-2 font-semibold hover:text-brand-yellow transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-brand-yellow transition-transform group-hover:-translate-y-0.5" />
            <span className="tracking-wide">07712 599254</span>
          </a>
          <span className="h-4 w-px bg-white/15" aria-hidden />
          <div className="flex items-center gap-1">
            <a
              href="https://www.instagram.com/hhplumbingandgas"
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 inline-flex items-center justify-center rounded-full text-white/60 hover:text-brand-yellow hover:bg-white/5 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.tiktok.com/@hussainhachem1"
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 inline-flex items-center justify-center rounded-full text-white/60 hover:text-brand-yellow hover:bg-white/5 transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
