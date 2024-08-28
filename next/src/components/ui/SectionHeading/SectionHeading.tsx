import Markdown from '../markdown';
import styles from './SectionHeading.module.scss';
import type { SectionHeadingTypes } from './SectionHeading.types';

export default function SectionHeading({ heading, subheading, index, dark = false }: SectionHeadingTypes) {
  const Heading = index === 0 ? 'h1' : 'h2';

  return (
    <Heading data-dark={dark} className={styles.heading}>
      <Markdown.span className={styles.main}>{heading}</Markdown.span>
      {Boolean(subheading) && <Markdown.span className={styles.sub}>{subheading!}</Markdown.span>}
    </Heading>
  );
}
