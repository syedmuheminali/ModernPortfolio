import { Code2, ExternalLink, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-10 pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div>
        <span className="font-semibold text-foreground">Syed Muhemin Ali</span>
        <span className="mx-2">·</span>
        MERN Stack &amp; Mobile App Developer
      </div>
      <div className="flex items-center gap-4">
        <a
          aria-label="Email"
          href="https://mail.google.com/mail/?view=cm&amp;to=smuheminali%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-foreground"
        >
          <Mail className="size-4" />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/syedmuheminali/?isSelfProfile=true"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-foreground"
        >
          <ExternalLink className="size-4" />
        </a>
        <a
          aria-label="GitHub"
          href="https://github.com/syedmuheminali"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-foreground"
        >
          <Code2 className="size-4" />
        </a>
        <span className="ml-2 text-xs">© 2026</span>
      </div>
    </footer>
  )
}
