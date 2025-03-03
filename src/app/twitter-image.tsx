import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'
export const alt = 'Rival - AI Model Comparison Platform'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // Font
  const jacquardFont = fetch(
    new URL('https://fonts.googleapis.com/css2?family=Jacquard+24:wght@400;700&display=swap')
  ).then((res) => res.arrayBuffer())
  
  const spaceGrotesk = fetch(
    new URL('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap')
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(125deg, #000000, #0f172a 40%, #0f1f3d 80%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Space Grotesk',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Pattern grid background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'repeat(6, 1fr)',
            opacity: 0.3,
          }}
        >
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={`v-${i}`}
              style={{
                position: 'absolute',
                left: `${(i / 12) * 100}%`,
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'rgba(100, 116, 139, 0.4)',
              }}
            />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`h-${i}`}
              style={{
                position: 'absolute',
                top: `${(i / 6) * 100}%`,
                left: 0,
                right: 0,
                height: '1px',
                background: 'rgba(100, 116, 139, 0.4)',
              }}
            />
          ))}
        </div>
        
        {/* Subtle radial gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.4) 100%)',
            opacity: 0.7,
          }}
        />
        
        {/* Retro scanlines effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3) 50%)',
            backgroundSize: '100% 4px',
            opacity: 0.2,
            mixBlendMode: 'overlay',
            zIndex: 2,
          }}
        />
        
        {/* Twitter icon */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            fontSize: 32,
            color: '#1DA1F2',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'rgba(29, 161, 242, 0.1)',
            border: '1px solid rgba(29, 161, 242, 0.3)',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            letterSpacing: '0.2em',
          }}
        >
          𝕏
        </div>
        
        {/* AI Model Icons */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            opacity: 0.05,
            padding: '50px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #5cb85c, #4cae4c)',
              boxShadow: '0 0 20px rgba(92, 184, 92, 0.5)',
            }} />
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #d9534f, #c9302c)',
              boxShadow: '0 0 20px rgba(217, 83, 79, 0.5)',
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #5bc0de, #46b8da)',
              boxShadow: '0 0 20px rgba(91, 192, 222, 0.5)',
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ 
              width: '90px', 
              height: '90px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #f0ad4e, #eea236)',
              boxShadow: '0 0 20px rgba(240, 173, 78, 0.5)',
            }} />
            <div style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #428bca, #3071a9)',
              boxShadow: '0 0 20px rgba(66, 139, 202, 0.5)',
            }} />
          </div>
        </div>
        
        {/* Pixel Dot Grid Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(#ffffff22 1px, transparent 0)',
            backgroundSize: '30px 30px',
            opacity: 0.2,
            zIndex: 1,
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            fontFamily: 'Jacquard 24',
            fontSize: 150,
            letterSpacing: '0.02em',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 30,
            background: 'linear-gradient(to right, #10b981, #3b82f6)',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))',
            textShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
            zIndex: 10,
            position: 'relative',
          }}
        >
          RIVAL
        </div>
        
        {/* Logo Glow Effect */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '100px',
            background: 'linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))',
            filter: 'blur(60px)',
            zIndex: 5,
            top: '45%',
            transform: 'translateY(-50%)',
          }}
        />
        
        {/* Tagline */}
        <div
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: 36,
            letterSpacing: '-0.02em',
            fontWeight: 500,
            textAlign: 'center',
            color: '#e2e8f0',
            maxWidth: '85%',
            zIndex: 10,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          See how AI models stack up against each other
        </div>
        
        {/* Model highlights */}
        <div
          style={{
            display: 'flex',
            marginTop: 40,
            gap: 15,
            zIndex: 10,
          }}
        >
          {['GPT-4o', 'Claude 3.7', 'Grok-3', 'O1'].map((model, i) => (
            <div
              key={i}
              style={{
                padding: '12px 24px',
                borderRadius: 8,
                fontSize: 24,
                fontFamily: 'Space Grotesk',
                fontWeight: 500,
                background: 'rgba(30, 41, 59, 0.7)',
                border: '1px solid rgba(100, 116, 139, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                color: i === 0 ? '#3b82f6' : 
                       i === 1 ? '#10b981' : 
                       i === 2 ? '#ef4444' : '#a855f7',
              }}
            >
              {model}
            </div>
          ))}
        </div>
        
        {/* Bottom tag */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontFamily: 'Space Grotesk',
            fontSize: 22,
            color: '#64748b',
            letterSpacing: '0.05em',
            zIndex: 10,
          }}
        >
          rival.tips
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Jacquard 24',
          data: await jacquardFont,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Space Grotesk',
          data: await spaceGrotesk,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
} 