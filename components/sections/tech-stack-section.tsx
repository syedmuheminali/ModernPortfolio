import { stack } from '@/components/data/portfolio-data'

export function TechStackSection() {
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-5 text-center text-xs font-medium uppercase tracking-[.14em] text-muted-foreground">
          Technologies I work with
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {stack.map(item => (
            <span
              key={item}
              className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:text-foreground sm:px-4 sm:py-2 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
