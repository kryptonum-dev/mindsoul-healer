import SectionHeading from '@/components/ui/SectionHeading';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './SimpleStaggeredGrid.module.scss';
import type { SimpleStaggeredGridTypes } from './SimpleStaggeredGrid.types';

export default function SimpleStaggeredGrid({ sectionHeading, imagesGrid, content, index }: SimpleStaggeredGridTypes) {
  const Heading = index === 0 ? Markdown.h2 : Markdown.h3;
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <SectionHeading {...sectionHeading} index={index} />
      </header>
      <div className={styles.columns}>
        {imagesGrid.map(({ topParagraph, bottomParagraph, imageContainer }, i) => (
          <div className={styles.item} key={i}>
            {!!topParagraph && (
              <div className={styles.paragraph}>
                <CheckIcon />
                <Markdown>{topParagraph}</Markdown>
              </div>
            )}
            <div className={styles.box}>
              <Img data={imageContainer.image} sizes='' />
              <Markdown className={styles.boxText}>{imageContainer.imageText}</Markdown>
            </div>
            {!!bottomParagraph && (
              <div className={styles.paragraph}>
                <CheckIcon />
                <Markdown>{bottomParagraph}</Markdown>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <Heading>{content.title}</Heading>
        <Markdown className={styles.text}>{content.paragraph}</Markdown>
      </div>
    </section>
  );
}

const CheckIcon = () => (
  <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.8047 3.52858C14.0651 3.78892 14.0651 4.21103 13.8047 4.47138L6.4714 11.8047C6.21106 12.0651 5.78894 12.0651 5.5286 11.8047L2.19526 8.47138C1.93491 8.21103 1.93491 7.78892 2.19526 7.52858C2.45561 7.26823 2.87772 7.26823 3.13807 7.52858L6 10.3905L12.8619 3.52858C13.1223 3.26823 13.5444 3.26823 13.8047 3.52858Z'
        fill='currentColor'
      />
    </g>
  </svg>
);
