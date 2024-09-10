'use client';

import { setCookie } from '@/utils/set-cookie';
import styles from './Footer.module.scss';

export default function CookieButton() {
  return (
    <button
      className={styles.cookies}
      onClick={() => {
        setCookie('cookie-consent', '', -1);
        window.location.reload();
      }}
    >
      Zarządzaj plikami cookies
    </button>
  );
}
