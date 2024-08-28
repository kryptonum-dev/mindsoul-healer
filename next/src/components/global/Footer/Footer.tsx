import getLegalLinks from '@/utils/get-legal-links';
import sanityFetch from '@/utils/sanity.fetch';
import { PlatformType } from '@/global/types';
import Logo from '@/components/ui/Logo';
import SocialLink from '@/components/ui/SocialLink';
import TextLink from '@/components/ui/TextLink';
import styles from './Footer.module.scss';

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
                aria-label={`Link do ${_type}`}
                platform={_type}
              />
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
              <TextLink href={termsAndConditions} target='_blank'>
                Regulamin
              </TextLink>
              <TextLink href={privacyPolicy} target='_blank'>
                Polityka Prywatności
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
