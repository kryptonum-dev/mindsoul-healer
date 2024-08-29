import Markdown from '../markdown';
import styles from './Heading.module.scss';
import type { HeadingTypes } from './Heading.types';

export default function Heading({ heading, subheading, hierarchy = 'h1', dark }: HeadingTypes) {
  const Heading = hierarchy;

  return (
    <Heading data-dark={dark} className={styles.heading}>
      <Markdown.span className={styles.main}>{heading}</Markdown.span>
      {!!subheading && <Markdown.span className={styles.sub}>{subheading}</Markdown.span>}
    </Heading>
  );
}
