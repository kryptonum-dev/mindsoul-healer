import localFont from 'next/font/local';

export const Gentium = localFont({
  src: [
    { path: '../../assets/fonts/GentiumPlus-Regular.woff2', weight: '400' },
    { path: '../../assets/fonts/GentiumPlus-Bold.woff2', weight: '700' },
  ],
  variable: '--font-gentium',
  display: 'swap',
});
