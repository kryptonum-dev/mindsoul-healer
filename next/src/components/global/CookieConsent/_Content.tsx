'use client';

import { useEffect, useRef, useState } from 'react';
import { getCookie } from '@/utils/get-cookie';
import { setCookie } from '@/utils/set-cookie';
import Button from '@/components/ui/Button';
import Switch from '@/components/ui/Switch';
import TextLink from '@/components/ui/TextLink';
import styles from './CookieConsent.module.scss';

type Consent = {
  necessary: boolean;
  marketing: boolean;
  analytics: boolean;
  preferences: boolean;
};

function setConsent(consent: Consent) {
  const consentMode = {
    functionality_storage: consent.necessary ? 'granted' : 'denied',
    security_storage: consent.necessary ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    personalization_storage: consent.preferences ? 'granted' : 'denied',
  } as const;
  gtag('consent', 'update', consentMode);
  setCookie('cookie-consent', JSON.stringify(consentMode), 365);
}

export default function Content() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (getCookie('cookie-consent') === null) {
      gtag('consent', 'default', {
        functionality_storage: 'denied',
        security_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        personalization_storage: 'denied',
      });
      setShowBanner(true);
    } else {
      gtag('consent', 'default', JSON.parse(getCookie('cookie-consent')!));
    }

    const timeoutId = setTimeout(async () => {
      try {
        gtag('event', 'view_item', {
          value: 97,
          currency: 'PLN',
          items: [
            {
              item_id: '7d1eddb6-4f60-4965-9914-c9ad05daf607',
              item_name: 'Mind&Soul Healer | Kurs Online',
              item_brand: 'Mind&Soul Healer',
              price: 97,
              quantity: 1,
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const acceptAll = () => {
    setConsent({
      necessary: true,
      marketing: true,
      analytics: true,
      preferences: true,
    });
    setShowBanner(false);
  };

  const rejectAll = () => {
    setConsent({
      necessary: false,
      marketing: false,
      analytics: false,
      preferences: false,
    });
    setShowBanner(false);
  };

  const acceptPart = () => {
    setConsent({
      necessary: true,
      marketing: wrapper.current?.querySelector<HTMLInputElement>('input[id="marketing"]')?.checked || false,
      analytics: wrapper.current?.querySelector<HTMLInputElement>('input[id="analytics"]')?.checked || false,
      preferences: wrapper.current?.querySelector<HTMLInputElement>('input[id="preferences"]')?.checked || false,
    });
    setShowBanner(false);
  };

  return (
    <div className={styles['Content']} aria-hidden={!showBanner} ref={wrapper}>
      <header>
        <h2>{showSettings ? 'Ustawienia Cookies' : 'Korzystając ze strony zgadzasz się na użycie ciasteczek'}</h2>
        <p className={styles.paragraph}>
          {showSettings
            ? 'Korzystając ze strony zgadzasz się na użycie tych ciasteczek.'
            : 'Korzystamy z cookie i podobnych technologii, by analizować ruch na stronie, dopasować ją do Ciebie i wyświetlać trafniejsze reklamy.'}
          &nbsp;
          <TextLink href='https://policies.google.com/technologies/cookies?hl=pl' target='_blank' rel='noreferrer'>
            Dowiedz się więcej
          </TextLink>
        </p>
      </header>
      <div
        className={styles.settings}
        style={{ display: showSettings ? undefined : 'none' }}
        data-visible={showSettings}
      >
        <Switch
          labelProps={{ className: styles.group }}
          inputProps={{
            checked: true,
            disabled: true,
          }}
        >
          <div className={styles.content}>
            <h3>Niezbędne</h3>
            <p>
              Niezbędne pliki cookie przyczyniają się do użyteczności strony poprzez umożliwianie podstawowych funkcji,
              takich jak nawigacja na stronie i dostęp do bezpiecznych obszarów strony internetowej. Strona www nie może
              funkcjonować poprawnie bez tych ciasteczek.
            </p>
          </div>
        </Switch>
        <Switch
          labelProps={{ className: styles.group }}
          inputProps={{
            id: 'preferences',
          }}
        >
          <div className={styles.content}>
            <h3>Preferencje</h3>
            <p>
              Pliki cookie dotyczące preferencji umożliwiają stronie zapamiętanie informacji, które zmieniają wygląd lub
              funkcjonowanie strony, np. preferowany język lub region, w którym znajduje się użytkownik.
            </p>
          </div>
        </Switch>
        <Switch
          labelProps={{ className: styles.group }}
          inputProps={{
            id: 'analytics',
          }}
        >
          <div className={styles.content}>
            <h3>Statystyka</h3>
            <p>
              Statystyczne pliki cookie pomagają właścicielom stron internetowych zrozumieć, w jaki sposób różni
              użytkownicy zachowują się na stronie, gromadząc i zgłaszając anonimowe informacje.
            </p>
          </div>
        </Switch>
        <Switch
          labelProps={{ className: styles.group }}
          inputProps={{
            id: 'marketing',
          }}
        >
          <div className={styles.content}>
            <h3>Marketing</h3>
            <p>
              Marketingowe pliki cookie stosowane są w celu śledzenia użytkowników na stronach internetowych. Ich celem
              jest wyświetlanie reklam, które są istotne i interesujące dla poszczególnych użytkowników i tym samym
              bardziej cenne dla wydawców oraz reklamodawców strony trzeciej.
            </p>
          </div>
        </Switch>
      </div>
      <div className={styles.controls}>
        <Button theme='primary' onClick={() => acceptAll()}>
          Zgoda na wszystkie
        </Button>
        <div className={styles.row}>
          {showSettings ? (
            <Button shade='dark' onClick={() => acceptPart()}>
              Zapisz
            </Button>
          ) : (
            <Button shade='dark' onClick={() => setShowSettings(true)}>
              Ustaw Preferencje
            </Button>
          )}

          <Button shade='dark' onClick={() => rejectAll()}>
            Odmowa
          </Button>
        </div>
      </div>
    </div>
  );
}
