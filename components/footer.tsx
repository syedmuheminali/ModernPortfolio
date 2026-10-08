import { Code2, ExternalLink, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-5 px-6 pb-10 pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <div>
        <span className="font-semibold text-foreground">Syed Muhemin Ali</span>
        <span className="mx-2">·</span>
        Building with intent.
      </div>
      <div className="flex items-center gap-4">
        <a
          aria-label="Email"
          href="https://mail.google.com/mail/?view=cm&amp;to=smuheminali%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/syedmuheminali/?isSelfProfile=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink />
        </a>
        <a
          aria-label="GitHub"
          href="https://github.com/syedmuheminali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code2 />
        </a>
        <span className="ml-2 text-xs">© 2026</span>
      </div>
    </footer>
  )
}
