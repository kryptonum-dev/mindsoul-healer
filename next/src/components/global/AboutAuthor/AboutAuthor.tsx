import Heading from '@/components/ui/Heading';
import SocialLink from '@/components/ui/SocialLink';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './AboutAuthor.module.scss';
import type { AboutAuthorTypes } from './AboutAuthor.types';

export default function AboutAuthor({
  sectionHeading,
  paragraphMain,
  paragraphSecondary,
  image,
  socialMedia,
  list,
  index,
}: AboutAuthorTypes) {
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <Heading {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
      </header>
      <Markdown className={styles.main}>{paragraphMain}</Markdown>
      <Img data={image} sizes='(max-width: 679px) 242px, (max-width: 1079px) 314px,  (max-width: 1360px) 30vw, 372px' />
      <div className={styles.box}>
        <Markdown className={styles.secondary}>{paragraphSecondary}</Markdown>
        <div className={styles.founder}>
          <span>Founder</span>
          <div>
            {list.map(({ name, href }, i) => (
              <a key={i} href={href} target='_blank' rel='norefferer'>
                {name}
              </a>
            ))}
          </div>
        </div>
        <nav className={styles.socials}>
          {socialMedia.map(({ _type, url }, i) => (
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
    </section>
  );
}
