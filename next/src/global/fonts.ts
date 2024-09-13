import localFont from 'next/font/local';

export const Gentium = localFont({
  src: [
    { path: '../../public/fonts/GentiumPlus-Regular.woff2', weight: '400' },
    { path: '../../public/fonts/GentiumPlus-Bold.woff2', weight: '700' },
  ],
  fallback: [
    '../../public/fonts/GentiumPlus-Regular.woff',
    '../../public/fonts/GentiumPlus-Bold.woff',
    '../../public/fonts/GentiumPlus-Regular.ttf',
    '../../public/fonts/GentiumPlus-Bold.ttf',
  ],
  adjustFontFallback: 'Times New Roman',
  variable: '--font-gentium',
  display: 'swap',
});
