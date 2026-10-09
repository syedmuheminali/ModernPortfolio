import { ImageResponse } from 'next/og'

export const alt = 'Syed Muhemin Ali | React Native & Frontend Developer Pakistan'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 20px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '20px',
              color: '#34d399',
            }}
          >
            ● Available for Opportunities • Pakistan &amp; Worldwide Remote
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div
            style={{
              fontSize: '66px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: 0,
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            Syed Muhemin Ali
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: '#a1a1aa',
              margin: 0,
            }}
          >
            React Native &amp; React.js Developer
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['React Native', 'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Karachi, Pakistan'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '10px 22px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '20px',
                fontWeight: 500,
                color: '#e4e4e7',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
