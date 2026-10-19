import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://syedmuheminali.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Syed Muhemin Ali | Full Stack, MERN & React Native Developer | Karachi, Pakistan',
    template: '%s | Syed Muhemin Ali',
  },
  description:
    'Syed Muhemin Ali is an experienced Full Stack Developer, MERN Stack & React Native Specialist based in Karachi, Pakistan. Specialized in scalable full-stack web applications (MongoDB, Express.js, React.js, Node.js), Next.js, and high-performance iOS & Android mobile apps. Available for hire and remote roles worldwide.',
  applicationName: 'Syed Muhemin Ali',
  authors: [{ name: 'Syed Muhemin Ali', url: baseUrl }],
  generator: 'Next.js',
  keywords: [
    // Core Roles
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Native Developer',
    'React Developer',
    'React.js Developer',
    'Node.js Developer',
    'Next.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'Mobile App Developer',
    'Software Engineer',
    'Web Developer',
    // Pakistan & Karachi Local SEO
    'Full Stack Developer Karachi',
    'Full Stack Developer Pakistan',
    'MERN Stack Developer Karachi',
    'MERN Stack Developer Pakistan',
    'React Native Developer Karachi',
    'React Native Developer Pakistan',
    'React Developer Karachi',
    'React.js Developer Pakistan',
    'Next.js Developer Karachi',
    'Frontend Developer Karachi',
    'Frontend Developer Pakistan',
    'Software Engineer Karachi',
    'Software Engineer Pakistan',
    'Web Developer Karachi',
    'Mobile App Developer Pakistan',
    // Hiring & Recruiter Intent
    'Hire Full Stack Developer',
    'Hire MERN Stack Developer',
    'Hire React Native Developer',
    'Hire React Developer',
    'Hire React Developer Pakistan',
    'Hire Frontend Engineer',
    'Hire Software Engineer Karachi',
    'Remote Full Stack Developer',
    'Remote React Native Developer',
    'Remote React Developer',
    'Hire Mobile App Developer Pakistan',
    'Full Stack Engineer for Hire',
    'Freelance React Developer',
    'Contract Developer Karachi',
    // Tech Stack
    'TypeScript Developer',
    'JavaScript Developer',
    'MongoDB Developer',
    'Express.js Developer',
    'iOS App Development',
    'Android App Development',
    'Expo Developer',
    'Redux Toolkit',
    'Tailwind CSS',
    'REST API Integration',
    'TanStack Table',
    // Personal Brand
    'Syed Muhemin Ali',
    'Syed Muhemin',
    'Muhemin Ali',
    'Syed Muhemin Ali Portfolio',
    'syedmuheminali',
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
    title: 'Syed Muhemin Ali | Full Stack, MERN & React Native Developer | Karachi, Pakistan',
    description:
      'Professional Full Stack Developer, MERN Stack & React Native specialist in Karachi, Pakistan building high-performance web platforms and mobile apps with Next.js, MongoDB, Node.js & TypeScript. Open for hire.',
    siteName: 'Syed Muhemin Ali',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Syed Muhemin Ali - Full Stack & MERN Developer Pakistan',
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
    title: 'Syed Muhemin Ali | Full Stack, MERN & React Native Developer | Karachi, Pakistan',
    description:
      'Professional Full Stack, MERN Stack & React Native Developer based in Karachi, Pakistan building scalable web platforms and mobile apps.',
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
  other: {
    'geo.region': 'PK-SD',
    'geo.placename': 'Karachi',
    'geo.position': '24.8607;67.0011',
    'ICBM': '24.8607, 67.0011',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Syed Muhemin Ali',
      alternateName: ['Syed Muhemin Ali Portfolio', 'Syed Muhemin', 'Muhemin Ali'],
      description:
        'Official portfolio of Syed Muhemin Ali, Full Stack, MERN Stack & React Native Developer based in Karachi, Pakistan.',
      publisher: {
        '@id': `${baseUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Syed Muhemin Ali',
      alternateName: ['Syed Muhemin', 'Muhemin Ali'],
      jobTitle: ['Full Stack Developer', 'MERN Stack Developer', 'React Native Developer'],
      description:
        'Professional Full Stack Developer, MERN Stack & React Native Specialist based in Karachi, Pakistan, specializing in high-performance full-stack web apps, iOS and Android mobile apps, Next.js web applications, and full stack JavaScript/TypeScript systems.',
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
        'Full Stack Web Development',
        'MERN Stack',
        'React Native',
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Mobile Application Development',
        'Frontend Engineering',
        'Backend Engineering',
        'iOS App Development',
        'Android App Development',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'Redux Toolkit',
        'Tailwind CSS',
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Full Stack Developer',
        occupationLocation: {
          '@type': 'City',
          name: 'Karachi',
        },
        skills: 'Full Stack Web Development, MERN Stack, React Native, Node.js, Next.js, TypeScript',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Enkelbok',
        location: 'Karachi, Pakistan',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${baseUrl}/#profilepage`,
      url: baseUrl,
      name: 'Syed Muhemin Ali | Full Stack Developer Portfolio',
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
