import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

// Renders the same gold-square + trending-up mark used as the app logo in
// Sidebar.tsx, as a real generated PNG — replaces the default Next.js
// placeholder favicon. The trending-up geometry below is the exact path data
// from lucide-react's TrendingUp icon (its two <polyline>s converted to an
// equivalent <path>, since the OG image renderer doesn't support <polyline>).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#c9a000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 7 L13.5 15.5 L8.5 10.5 L2 17 M16 7 L22 7 L22 13"
            stroke="#0a0a0a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
