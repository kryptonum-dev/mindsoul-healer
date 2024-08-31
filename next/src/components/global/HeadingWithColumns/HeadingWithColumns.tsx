import Heading from '@/components/ui/Heading';
import Markdown from '@/components/ui/markdown';
import styles from './HeadingWithColumns.module.scss';
import type { HeadingWithColumnsTypes } from './HeadingWithColumns.types';

export default function HeadingWithColumns({ sectionHeading, columns, index }: HeadingWithColumnsTypes) {
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <Heading {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
      </header>
      {columns.map(({ heading, content }, i) => (
        <div key={i} className={styles.content}>
          <Subheading className={styles.heading}>{heading}</Subheading>
          <Markdown>{content}</Markdown>
        </div>
      ))}
    </section>
  );
}
