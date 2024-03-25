import { Noto_Sans } from 'next/font/google';

export const notoSans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-notoSans',
  display: 'swap',
  fallback: ['sans-serif']
});