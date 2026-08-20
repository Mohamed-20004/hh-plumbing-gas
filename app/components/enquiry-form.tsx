"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

const enquiryTypes = [
  "Boiler Installation",
  "Heat Pump Installation",
  "Air Conditioning",
  "Bathroom Installation",
  "Underfloor Heating",
  "Cylinder Installation",
  "Drainage",
  "Emergency Repair",
  "Something else",
]

const inputClass =
  "w-full bg-white/95 text-black placeholder:text-black/45 px-4 py-3 text-sm border border-transparent focus:border-brand-yellow focus:outline-none"

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus("sending")
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus("sent")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-start justify-center">
        <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-yellow text-black">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
          Thanks — we&rsquo;ve got it.
        </h3>
        <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm">
          An engineer will come back to you within 24 hours. Need us sooner? Call{" "}
          <a href="tel:02081021108" className="font-semibold text-white hover:text-brand-yellow transition-colors">
            0208 102 1108
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
        Talk to an engineer
      </h3>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Name*" aria-label="Name" className={inputClass} />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone*"
          aria-label="Phone"
          className={inputClass}
        />
      </div>
      <div className="mt-4">
        <input
          name="email"
          required
          type="email"
          placeholder="Email*"
          aria-label="Email"
          className={inputClass}
        />
      </div>
      <div className="mt-4">
        <select
          name="serviceType"
          defaultValue=""
          aria-label="Type of enquiry"
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Type of enquiry
          </option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us a little about the job"
          aria-label="Your message"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-300">
          Something went wrong — please try again, or call 0208 102 1108.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-yellow mt-6 disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send enquiry"}
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs text-white/50 leading-relaxed">
        We only use your details to respond to your enquiry.
      </p>
    </form>
  )
}
