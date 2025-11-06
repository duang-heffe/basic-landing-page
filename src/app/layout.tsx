import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { roboto, libreBaskerville } from './fonts';
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
    <html lang='en' className={`${roboto.variable} ${libreBaskerville.variable}`}>
      <body>{children}</body>
    </html>
  )
}
