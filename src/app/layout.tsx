import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-app-sans',
  subsets: ['latin']
})

const libreBaskerville = Libre_Baskerville({
  variable: '--font-app-serif',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

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
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${libreBaskerville.variable} antialiased`}>{children}</body>
    </html>
  )
}
