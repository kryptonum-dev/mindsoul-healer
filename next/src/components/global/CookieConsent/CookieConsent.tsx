import Script from 'next/script';
import styles from './CookieConsent.module.scss';
import Content from './_Content';

export default function CookieConsent() {
  return (
    <>
      <Script id='gtag'>
        {'window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}'}
      </Script>
      <aside className={styles['CookieConsent']}>
        <Content {...CookieConsent} />
      </aside>
    </>
  );
}
