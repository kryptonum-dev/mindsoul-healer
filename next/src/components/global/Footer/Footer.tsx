import Logo from '@/components/ui/Logo';
import SocialLink from '@/components/ui/SocialLink';
import TextLink from '@/components/ui/TextLink';
import styles from './Footer.module.scss';

const links = ['Tiktok', 'Instagram', 'Youtube'];

export default function Footer() {
  return (
    <footer className={`${styles.footer} max-width`}>
      <div className={styles.row}>
        <Logo />
        <nav className={styles.socials}>
          {links.map((name, i) => (
            <SocialLink
              style={{ zIndex: `${20 - i}` }}
              key={i}
              href='https://example.com'
              target='_blank'
              aria-label={name}
            >
              <TiktokIcon />
            </SocialLink>
          ))}
        </nav>
      </div>
      <div className={styles.legals}>
        <p>
          Stworzone przez
          <TextLink target='_blank' href='https://kryptonum.eu/pl'>
            Kryptonum
          </TextLink>
        </p>
        <div>
          <span className={styles.year}>{new Date().getFullYear()}</span>
          <div className={styles.links}>
            <TextLink href='/example.com' target='_blank'>
              Regulamin
            </TextLink>
            <TextLink href='/example.com' target='_blank'>
              Polityka Prywatności
            </TextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

const TiktokIcon = () => (
  <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.227 0h-3.37v13.623c0 1.623-1.297 2.957-2.91 2.957-1.613 0-2.91-1.334-2.91-2.957 0-1.594 1.268-2.898 2.824-2.956v-3.42c-3.428.057-6.194 2.869-6.194 6.376C1.667 17.16 4.49 20 7.976 20s6.309-2.87 6.309-6.377V6.638a7.805 7.805 0 0 0 4.465 1.507v-3.42C16.215 4.638 14.227 2.55 14.227 0Z'
      fill='#070101'
    />
  </svg>
);
