import type { Metadata } from 'next'
import { fontVariables } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'HackEurope',
  description: "Join 1,000 of Europe's brightest student builders for a weekend of innovation. February 21-22, 2026.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={fontVariables}>
      <body>{children}</body>
    </html>
  )
}
