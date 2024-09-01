import Heading from '@/components/ui/Heading';
import CtaButtonBox from '@/components/ui/ctaButtonBox/ctaButtonBox';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './PurchaseCtaSection.module.scss';
import type { PurchaseCtaSectionTypes } from './PurchaseCtaSection.types';

export default function PurchaseCtaSection({ image, sectionHeading, paragraph, cta, index }: PurchaseCtaSectionTypes) {
  return (
    <section className={styles.section}>
      <div className={`${styles.container}  max-width`}>
        <header>
          <Heading dark {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
          <Markdown>{paragraph}</Markdown>
        </header>

        <Img
          data={image}
          sizes='(max-width: 659px) 242px, (max-width: 769px) 48vw, (max-width: 1023px) 378px, (max-width: 1103px) 26vw, 278px'
        />

        <CtaButtonBox {...cta} dark />
      </div>
    </section>
  );
}
