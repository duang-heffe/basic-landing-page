import { Roboto, Libre_Baskerville } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'], // Regular + Bold
  display: 'swap',
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  weight: ['400', '700'], // Libre Baskerville supports 400 + 700 only
  display: 'swap',
});
