import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Syed Muhemin Ali | MERN Stack & React Native Developer',
    short_name: 'Syed Muhemin',
    description:
      'Professional MERN Stack & React Native Developer based in Karachi, Pakistan. Building scalable full-stack web and mobile applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#09090b',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
