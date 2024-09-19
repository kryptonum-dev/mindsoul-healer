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
        <div className={styles.col}>
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
              <Button icon={<FileIcon />} {...cta} shade='light' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FileIcon = () => (
  <svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.334 7.333h-4M6.667 10H5.334m5.333-5.333H5.334m8-.134v6.934c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V4.533c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874c.428-.218.988-.218 2.108-.218h4.267c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108Z'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
