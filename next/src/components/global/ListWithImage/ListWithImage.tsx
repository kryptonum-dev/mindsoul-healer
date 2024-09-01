import Heading from '@/components/ui/Heading';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './ListWithImage.module.scss';
import type { ListWithImageTypes } from './ListWithImage.types';

export default function ListWithImage({ list, index }: ListWithImageTypes) {
  return (
    <section className={styles.section}>
      {list.map(({ sectionHeading, image, content }, i) => (
        <div key={i} className={styles.container}>
          <header>
            <Heading {...sectionHeading} hierarchy={index === 0 && i === 0 ? 'h1' : 'h2'} />
            <Markdown className={styles.content}>{content}</Markdown>
          </header>
          <Img data={image} sizes='(max-width: 899px) 100vw, (max-width: 1229px) 58vw, 699px' />
        </div>
      ))}
    </section>
  );
}
