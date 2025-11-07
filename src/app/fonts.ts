import { Roboto, Libre_Baskerville } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '700'],
  display: 'swap'
})

export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  weight: ['400', '700'],
  display: 'swap'
})

export const fontVariables = `${roboto.variable} ${libreBaskerville.variable}`
