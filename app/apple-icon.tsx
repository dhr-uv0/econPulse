import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// Same mark as icon.tsx, scaled up for iOS home-screen/bookmark use. No
// border-radius — Apple applies its own corner mask, so a pre-rounded icon
// gets double-rounded. Replaces the previously-broken manual apple-touch-icon
// link in layout.tsx, which pointed at a /icons/icon-192x192.png that was
// never actually generated.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#c9a000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 7 L13.5 15.5 L8.5 10.5 L2 17 M16 7 L22 7 L22 13"
            stroke="#0a0a0a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
