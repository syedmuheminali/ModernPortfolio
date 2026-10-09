import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const baseUrl = 'https://syedmuhemin.dev'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Syed Muhemin Ali | React Native & React.js Developer | Pakistan',
    template: '%s | Syed Muhemin Ali',
  },
  description:
    'Syed Muhemin Ali is an experienced React Native & React.js Developer based in Karachi, Pakistan. Specialized in high-performance iOS & Android mobile apps, Next.js web apps, and modern frontend architecture. Available for hire and remote roles worldwide.',
  applicationName: 'Syed Muhemin Ali Portfolio',
  authors: [{ name: 'Syed Muhemin Ali', url: baseUrl }],
  generator: 'Next.js',
  keywords: [
    // Core Roles
    'React Native Developer',
    'React Developer',
    'React.js Developer',
    'Frontend Developer',
    'Next.js Developer',
    'Full Stack Developer',
    'MERN Stack Developer',
    'Mobile App Developer',
    'Software Engineer',
    // Pakistan & Regional SEO
    'React Native Developer Pakistan',
    'React Developer Pakistan',
    'React.js Developer Pakistan',
    'Frontend Developer Pakistan',
    'React Native Developer Karachi',
    'React Developer Karachi',
    'Web Developer Pakistan',
    'Mobile App Developer Pakistan',
    'Software Engineer Pakistan',
    // Hiring Intent
    'Hire React Native Developer',
    'Hire React Developer',
    'Hire React Developer Pakistan',
    'Hire Frontend Engineer',
    'Remote React Native Developer',
    'Remote React Developer',
    'Hire Mobile App Developer Pakistan',
    'Freelance React Developer',
    // Tech Stack
    'TypeScript Developer',
    'JavaScript Developer',
    'iOS App Development',
    'Android App Development',
    'Expo Developer',
    'Redux Toolkit',
    'Tailwind CSS',
    'Node.js Developer',
    'REST API Integration',
    'TanStack Table',
    // Personal Brand
    'Syed Muhemin Ali',
    'Syed Muhemin',
    'Syed Muhemin Ali Portfolio',
  ],
  creator: 'Syed Muhemin Ali',
  publisher: 'Syed Muhemin Ali',
  category: 'technology',
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Syed Muhemin Ali | React Native & React.js Developer | Pakistan',
    description:
      'Professional React Native & React.js Developer in Pakistan building high-performance mobile and web apps with Next.js & TypeScript. Open for hire and remote roles.',
    siteName: 'Syed Muhemin Ali Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Syed Muhemin Ali - React Native & Frontend Developer Pakistan',
      },
      {
        url: '/profile-photo.jpeg',
        width: 800,
        height: 800,
        alt: 'Syed Muhemin Ali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Muhemin Ali | React Native & React.js Developer | Pakistan',
    description:
      'Professional React Native & React.js Developer based in Pakistan building scalable mobile apps and modern web platforms.',
    images: ['/opengraph-image'],
    creator: '@syedmuheminali',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

// Structured Data (JSON-LD) for Schema.org SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Syed Muhemin Ali',
      alternateName: ['Syed Muhemin', 'Muhemin Ali'],
      jobTitle: 'React Native & React.js Developer',
      description:
        'Professional React Native & React.js Developer based in Karachi, Pakistan, specializing in high-performance iOS and Android mobile apps, Next.js web applications, and full stack JavaScript/TypeScript systems.',
      url: baseUrl,
      image: `${baseUrl}/profile-photo.jpeg`,
      email: 'mailto:smuheminali@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressRegion: 'Sindh',
        addressCountry: 'Pakistan',
      },
      nationality: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      sameAs: [
        'https://www.linkedin.com/in/syedmuheminali/',
        'https://github.com/syedmuheminali',
      ],
      knowsAbout: [
        'React Native',
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Mobile Application Development',
        'Frontend Engineering',
        'iOS App Development',
        'Android App Development',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'Redux Toolkit',
        'Tailwind CSS',
        'Full Stack Web Development',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Enkelbok',
        location: 'Karachi, Pakistan',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Syed Muhemin Ali | React Native & Frontend Developer',
      description:
        'Portfolio and engineering projects of Syed Muhemin Ali, React Native & Frontend Developer based in Pakistan.',
      publisher: {
        '@id': `${baseUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${baseUrl}/#profilepage`,
      url: baseUrl,
      name: 'Syed Muhemin Ali Portfolio',
      mainEntity: {
        '@id': `${baseUrl}/#person`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
