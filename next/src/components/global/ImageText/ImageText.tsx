import Heading from '@/components/ui/Heading';
import CtaButtonBox from '@/components/ui/ctaButtonBox/ctaButtonBox';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './ImageText.module.scss';
import type { ImageTextTypes } from './ImageText.types';

export default function ImageText({ sectionHeading, paragraph, image, cta, index }: ImageTextTypes) {
  return (
    <section className={`${styles['ImageText']} max-width`}>
      <Img data={image} sizes='' />
      <header className={styles.header}>
        <Heading {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <CtaButtonBox {...cta} />
      </header>
    </section>
  );
}
