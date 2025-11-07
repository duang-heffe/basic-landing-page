import localFont from 'next/font/local'
import { Libre_Baskerville } from 'next/font/google'

export const helveticaNeue = localFont({
  src: [
    {
      path: '../../helvetica-neue-5/HelveticaNeueLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../helvetica-neue-5/HelveticaNeueRoman.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../helvetica-neue-5/HelveticaNeueBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-neue',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
})

export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  weight: ['400', '700'],
  display: 'swap',
})

export const fontVariables = `${helveticaNeue.variable} ${libreBaskerville.variable}`
