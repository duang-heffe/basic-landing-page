import type { Metadata } from 'next'
import { fontVariables } from './fonts';
import './globals.css'

export const metadata: Metadata = {
  title: 'HackEurope',
  description: 'Join 1,000 of Europe\'s brightest student builders for a weekend of innovation. February 21-22, 2026.',
  icons: {
    icon: [
      { url: '/icon.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '48x48', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '64x64', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '128x128', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '256x256', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
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