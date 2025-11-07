import { Libre_Baskerville } from 'next/font/google'

export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  weight: ['400', '700'],
  display: 'swap'
})

export const fontVariables = `${libreBaskerville.variable}`
