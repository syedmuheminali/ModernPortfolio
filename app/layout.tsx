import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const baseUrl = 'https://syedmuhemin.dev'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Syed Muhemin Ali | MERN Stack & React Native Developer | Pakistan',
    template: '%s | Syed Muhemin Ali',
  },
  description:
    'Syed Muhemin Ali is an experienced MERN Stack & React Native Developer based in Karachi, Pakistan. Specialized in scalable full-stack web applications (MongoDB, Express.js, React.js, Node.js), Next.js, and high-performance iOS & Android mobile apps. Available for hire and remote roles worldwide.',
  applicationName: 'Syed Muhemin Ali Portfolio',
  authors: [{ name: 'Syed Muhemin Ali', url: baseUrl }],
  generator: 'Next.js',
  keywords: [
    // Core Roles
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Native Developer',
    'Node.js Developer',
    'React Developer',
    'React.js Developer',
    'Frontend Developer',
    'Next.js Developer',
    'Mobile App Developer',
    'Software Engineer',
    // Pakistan & Regional SEO
    'MERN Stack Developer Pakistan',
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
    'Hire MERN Stack Developer',
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
    'MongoDB Developer',
    'Express.js Developer',
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
    title: 'Syed Muhemin Ali | MERN Stack & React Native Developer | Pakistan',
    description:
      'Professional MERN Stack & React Native Developer in Pakistan building high-performance full-stack web and mobile apps with Next.js, MongoDB, Node.js & TypeScript. Open for hire and remote roles.',
    siteName: 'Syed Muhemin Ali Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Syed Muhemin Ali - MERN Stack & React Native Developer Pakistan',
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
    title: 'Syed Muhemin Ali | MERN Stack & React Native Developer | Pakistan',
    description:
      'Professional MERN Stack & React Native Developer based in Pakistan building scalable web platforms and mobile apps.',
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
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Syed Muhemin Ali',
      alternateName: ['Syed Muhemin', 'Muhemin Ali'],
      jobTitle: 'MERN Stack & React Native Developer',
      description:
        'Professional MERN Stack & React Native Developer based in Karachi, Pakistan, specializing in high-performance full-stack web apps, iOS and Android mobile apps, Next.js web applications, and full stack JavaScript/TypeScript systems.',
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
        'MERN Stack',
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
      name: 'Syed Muhemin Ali | MERN Stack & React Native Developer',
      description:
        'Portfolio and engineering projects of Syed Muhemin Ali, MERN Stack & React Native Developer based in Pakistan.',
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
