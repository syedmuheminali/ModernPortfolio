import { Code2, ExternalLink, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-0">
          <span className="font-semibold text-foreground">Syed Muhemin Ali</span>
          <span className="mx-2 hidden sm:inline">·</span>
          <span className="text-xs sm:text-sm">MERN Stack &amp; Mobile App Developer</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            aria-label="Email"
            href="https://mail.google.com/mail/?view=cm&amp;to=smuheminali%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition hover:bg-muted hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/syedmuheminali/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition hover:bg-muted hover:text-foreground"
          >
            <ExternalLink className="size-4" />
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/syedmuheminali"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition hover:bg-muted hover:text-foreground"
          >
            <Code2 className="size-4" />
          </a>
          <span className="ml-1 text-xs">© 2026</span>
        </div>
      </div>
    </footer>
  )
}
