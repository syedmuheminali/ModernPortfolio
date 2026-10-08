import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL('https://syedmuhemin.dev'),
  title: 'Syed Muhemin Ali | React Native & Frontend Developer',
  description: 'React Native & Frontend Developer building modern mobile and web applications with React Native, React.js, Next.js, TypeScript, and modern frontend technologies.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Syed Muhemin Ali | React Native & Frontend Developer',
    description: 'Building modern mobile and web applications with React Native, React.js, and Next.js.',
    type: 'website',
    url: 'https://syedmuhemin.dev',
    siteName: 'Syed Muhemin Ali',
  },
  twitter: { card: 'summary_large_image', title: 'Syed Muhemin Ali | React Native & Frontend Developer', description: 'Building modern mobile and web applications with React Native, React.js, and Next.js.' },
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
