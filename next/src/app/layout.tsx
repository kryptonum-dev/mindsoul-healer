import type { Metadata } from 'next';
import { LOCALE } from '@/global/constants';
import { Gentium } from '@/global/fonts';
import '@/global/global.scss';
import SchemaOrganization from '@/global/schema/Organization';
import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={LOCALE}>
      <body className={Gentium.variable}>
        <Header />
        <main id='main'>{children}</main>
        <Footer />
        <SchemaOrganization />
      </body>
    </html>
  );
}
