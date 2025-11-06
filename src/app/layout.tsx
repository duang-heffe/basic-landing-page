import type { Metadata } from 'next'
import { fontVariables } from './fonts';
import './globals.css'

export const metadata: Metadata = {
  title: 'HackEurope',
  description: 'Join 1,000 of Europe\'s brightest student builders for a weekend of innovation. February 21-22, 2026.'
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