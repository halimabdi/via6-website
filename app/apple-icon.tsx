import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Apple touch icon generator
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
        }}
      >
        <div
          style={{
            width: '140px',
            height: '140px',
            background: 'linear-gradient(135deg, #00D4AA 0%, #6366F1 100%)',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          V6
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
