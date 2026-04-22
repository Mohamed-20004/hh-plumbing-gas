import Link from "next/link"
import { Phone, Mail, Instagram, Clock, ArrowRight, MapPin, ShieldCheck } from "lucide-react"
import { Header } from "../components/header"
import { TopBar } from "../components/top-bar"
import { SiteFooter } from "../components/site-footer"
import { TikTokIcon } from "../components/icons/tiktok-icon"

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-yellow" />
          <div className="relative container mx-auto px-4 pt-16 md:pt-20 pb-10">
            <div className="max-w-3xl">
              <span className="eyebrow">We're here to help</span>
              <h1 className="display-xl mt-6">
                Get in touch with <span className="gradient-text-yellow">our team</span>.
              </h1>
              <p className="lead mt-6 max-w-2xl">
                Fast, friendly and local. Call for urgent work, drop an email for quotes, or slide into our
                DMs — we'll get back fast.
              </p>
            </div>
          </div>
        </section>

        {/* ============ CALL PANEL ============ */}
        <section className="container mx-auto px-4 pb-16">
          <div className="relative overflow-hidden rounded-lg border border-border bg-brand-yellow p-10 md:p-14 text-black">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(600px circle at 100% 0%, rgba(255,255,255,0.55), transparent 55%), radial-gradient(500px circle at 0% 100%, rgba(0,0,0,0.08), transparent 55%)",
              }}
            />
            <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                  <Phone className="h-3 w-3" />
                  Call us directly
                </span>
                <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">
                  07712&nbsp;599254
                </h2>
                <p className="mt-3 text-black/70 max-w-md">
                  Speak to a Gas Safe registered engineer — no call centres, no gatekeepers. Available 24/7
                  for genuine emergencies.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:07712599254"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Phone className="h-4 w-4" />
                    Call now
                  </a>
                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-transparent px-6 py-3 text-sm font-semibold hover:bg-black/5 transition-colors"
                  >
                    Get a free quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <ul className="grid gap-3 text-sm">
                <li className="flex items-start gap-3 rounded-lg border border-black/15 bg-white/40 backdrop-blur-sm p-4">
                  <Clock className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-semibold">Mon – Fri</p>
                    <p className="text-black/70">8AM – 6PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-lg border border-black/15 bg-white/40 backdrop-blur-sm p-4">
                  <Clock className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-semibold">Saturday</p>
                    <p className="text-black/70">9AM – 4PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-lg border border-black/15 bg-white/40 backdrop-blur-sm p-4">
                  <ShieldCheck className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-semibold">Sunday &amp; out of hours</p>
                    <p className="text-black/70">Emergency only — call 24/7</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ CONTACT GRID ============ */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellow">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Email us</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                For quotes, follow-ups or non-urgent questions.
              </p>
              <a
                href="mailto:info@hhplumbing.com"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold border-b border-brand-yellow pb-0.5 hover:text-brand-yellow transition-colors"
              >
                info@hhplumbing.com
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-xs text-muted-foreground">Response within 24 hours.</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellow">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Our base</h3>
              <address className="not-italic mt-1 text-sm text-muted-foreground">
                2 Broomfield Road
                <br />
                London, W13 9AP
              </address>
              <p className="mt-4 text-xs text-muted-foreground">
                Covering central, west and greater London.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellow">
                <Instagram className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Follow along</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Recent installs, tips and before-and-afters.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href="https://www.instagram.com/hhplumbingandgas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-brand-yellow/60 hover:text-brand-yellow transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@hussainhachem1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-brand-yellow/60 hover:text-brand-yellow transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
