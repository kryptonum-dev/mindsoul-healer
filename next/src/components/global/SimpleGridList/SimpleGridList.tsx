import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './SimpleGridList.module.scss';
import type { SimpleGridListTypes } from './SimpleGridList.types';

export default function SimpleGridList({ sectionHeading, list, image, preCtaText, cta, index }: SimpleGridListTypes) {
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <Heading {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
      </header>
      <div className={styles.container}>
        <Img data={image} sizes='(max-width: 376px) 85vw, 310px' />
        <div className={styles.box}>
          <ul className={styles.list}>
            {list.map((paragraph, i) => (
              <li key={i} className={styles.item}>
                <Markdown>{paragraph}</Markdown>
              </li>
            ))}
          </ul>
          <div className={styles.cta}>
            <Markdown className={styles.preCta}>{preCtaText}</Markdown>
            <Button icon='file' {...cta} />
          </div>
        </div>
      </div>
    </section>
  );
}
