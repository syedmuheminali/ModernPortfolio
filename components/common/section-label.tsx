import React from 'react'

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[.18em] text-muted-foreground">
      {children}
    </p>
  )
}
