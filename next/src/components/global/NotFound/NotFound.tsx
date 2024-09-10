import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Markdown from '@/components/ui/markdown';
import styles from './NotFound.module.scss';
import type { NotFoundTypes } from './NotFound.types';

export default function NotFound({ sectionHeading, paragraph, cta }: NotFoundTypes) {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} max-width`}>
        <Heading dark {...sectionHeading} hierarchy='h1' />
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Button {...cta} />
      </div>
    </section>
  );
}
