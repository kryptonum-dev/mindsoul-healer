import localFont from 'next/font/local';

export const Gentium = localFont({
  src: [
    { path: '../../public/fonts/GentiumPlus-Regular.woff2', weight: '400' },
    { path: '../../public/fonts/GentiumPlus-Bold.woff2', weight: '700' },
    { path: '../../public/fonts/GentiumPlus-Regular.woff', weight: '400' },
    { path: '../../public/fonts/GentiumPlus-Bold.woff', weight: '700' },
    { path: '../../public/fonts/GentiumPlus-Regular.ttf', weight: '400' },
    { path: '../../public/fonts/GentiumPlus-Bold.ttf', weight: '700' },
  ],
  adjustFontFallback: 'Times New Roman',
  variable: '--font-gentium',
});
