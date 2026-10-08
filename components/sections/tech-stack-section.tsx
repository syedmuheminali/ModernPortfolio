import { stack } from '@/components/data/portfolio-data'

export function TechStackSection() {
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-5 text-center text-xs font-medium uppercase tracking-[.14em] text-muted-foreground">
          Technologies I work with
        </div>
        <div className="flex flex-nowrap justify-start gap-2.5 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center">
          {stack.map(item => (
            <span
              key={item}
              className="shrink-0 whitespace-nowrap rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
