"use client"

import { useState } from "react"
import Link from "next/link"
import { User } from "lucide-react"

export function EmployeeTab() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-0 right-6 z-30 print:hidden">
      <Link
        href="/admin/login"
        className={`flex items-center gap-2 border border-border border-b-0 bg-background/80 backdrop-blur-md hover:bg-background text-muted-foreground hover:text-foreground text-xs font-medium py-1.5 px-3 rounded-t-lg transition-all duration-300 shadow-soft ${isHovered ? "pr-5" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <User className="h-3.5 w-3.5" />
        {isHovered && <span>Employee Access</span>}
      </Link>
    </div>
  )
}
