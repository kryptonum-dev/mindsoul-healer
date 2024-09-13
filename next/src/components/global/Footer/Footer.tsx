import getLegalLinks from '@/utils/get-legal-links';
import sanityFetch from '@/utils/sanity.fetch';
import type { PlatformType } from '@/global/types';
import Logo from '@/components/ui/Logo';
import SocialLink from '@/components/ui/SocialLink';
import TextLink from '@/components/ui/TextLink';
import styles from './Footer.module.scss';
import CookieButton from './_CookieButton';

type FooterSocialsTypes = { _type: PlatformType; url: string }[];

async function fetchSocials(): Promise<FooterSocialsTypes> {
  return await sanityFetch({
    query: /* groq */ `
     *[_id == 'global'][0].footer.socialMedia
    `,
    tags: ['global'],
  });
}

export default async function Footer() {
  const { termsAndConditions, privacyPolicy } = await getLegalLinks();
  const socials = await fetchSocials();

  return (
    <footer className={styles.footer}>
      <div className='max-width'>
        <div className={styles.row}>
          <Logo />
          <nav className={styles.socials}>
            {socials.map(({ _type, url }, i) => (
              <SocialLink
                style={{ zIndex: `${20 - i}` }}
                key={i}
                href={url}
                target='_blank'
                rel='norefferer'
                aria-label={`Link do ${_type}`}
                platform={_type}
              />
            ))}
          </nav>
        </div>
        <div className={styles.legals}>
          <div className={styles.created}>
            <span className={styles.year}>{new Date().getFullYear()}</span>
            <p>
              Stworzone przez
              <TextLink target='_blank' rel='norefferer' href='https://kryptonum.eu/pl'>
                Kryptonum
              </TextLink>
            </p>
          </div>
          <div className={styles.links}>
            <CookieButton />
            <TextLink href={termsAndConditions} target='_blank' rel='norefferer'>
              Regulamin
            </TextLink>
            <TextLink href={privacyPolicy} target='_blank' rel='norefferer'>
              Polityka Prywatności
            </TextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
