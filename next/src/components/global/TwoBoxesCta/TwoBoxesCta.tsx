import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Markdown from '@/components/ui/markdown';
import styles from './TwoBoxesCta.module.scss';
import type { TwoBoxesCtaTypes } from './TwoBoxesCta.types';

export default function TwoBoxesCta({ sectionHeading, list, index }: TwoBoxesCtaTypes) {
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <Heading {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
      </header>{' '}
      {list.map((item, i) => (
        <div className={styles.box} key={i} data-cta={item._type === 'ctaBlock'}>
          <Subheading>{item.heading}</Subheading>
          <Markdown className={item._type === 'ctaBlock' ? 'dark' : ''}>{item.content}</Markdown>
          {item._type === 'ctaBlock' && <Button {...item.cta} icon={<CartIcon />} />}
        </div>
      ))}
    </section>
  );
}

const CartIcon = () => (
  <svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#a)' fillRule='evenodd' clipRule='evenodd' fill='currentColor'>
      <path d='M4 14a1.333 1.333 0 1 1 2.667 0A1.333 1.333 0 0 1 4 14ZM11.333 14A1.333 1.333 0 1 1 14 14a1.333 1.333 0 0 1-2.667 0ZM.7 1.367C.7.998 1 .7 1.367.7H2.7c.315 0 .586.22.652.527l.601 2.806h10.774a.667.667 0 0 1 .65.812l-1.1 4.952s.001 0 0 0a2.001 2.001 0 0 1-1.95 1.57H5.815a2 2 0 0 1-1.992-1.58L2.769 4.87a.66.66 0 0 1-.013-.06l-.595-2.777h-.794A.667.667 0 0 1 .7 1.367Zm3.539 4 .886 4.14a.667.667 0 0 0 .667.527h6.534a.667.667 0 0 0 .65-.524l.92-4.143H4.239Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
