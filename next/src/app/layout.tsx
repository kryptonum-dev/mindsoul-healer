import { GoogleTagManager } from '@next/third-parties/google';
import { Toaster } from 'sonner';
import { LOCALE } from '@/global/constants';
import '@/global/global.scss';
import SchemaOrganization from '@/global/schema/Organization';
import CookieConsent from '@/components/global/CookieConsent';
import Header from '@/components/global/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={LOCALE}>
      <body>
        <Header />
        {children}
        <SchemaOrganization />
        <Toaster richColors position='bottom-center' />
        <CookieConsent />
        {process.env.NODE_ENV === 'production' && <GoogleTagManager gtmId='GTM-M6FZ4BW6' />}
      </body>
    </html>
  );
}
