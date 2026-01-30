import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Via6 AI Labs - AI Automation & Web Development'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Open Graph image generator
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0D2137 0%, #1a1a2e 100%)',
          position: 'relative',
        }}
      >
        {/* Background orbs */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,170,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* V6 Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 140,
            height: 140,
            borderRadius: 28,
            background: 'linear-gradient(135deg, #00D4AA 0%, #6366F1 50%, #A855F7 100%)',
            fontSize: 70,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 40,
          }}
        >
          V6
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Via6 AI Labs
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Complete Automation & Infrastructure Solutions | Toronto
        </div>

        {/* Tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 40,
            padding: '12px 24px',
            borderRadius: 20,
            background: 'rgba(0,212,170,0.1)',
            border: '2px solid rgba(0,212,170,0.3)',
            fontSize: 24,
            color: '#00D4AA',
            fontWeight: '600',
          }}
        >
          🇨🇦 Toronto-Based Technology Partner
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
