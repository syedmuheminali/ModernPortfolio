import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Syed Muhemin Ali | React Native & Frontend Developer',
    short_name: 'Syed Muhemin',
    description:
      'Professional React Native & React.js Developer based in Karachi, Pakistan. Building scalable mobile & web applications.',
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
