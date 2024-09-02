import Heading from '@/components/ui/Heading';
import Markdown from '@/components/ui/markdown';
import styles from './FaqSection.module.scss';
import type { FaqSectionTypes } from './FaqSection.types';
import Faq from './_Faq';

export default function FaqSection({ sectionHeading, list, index }: FaqSectionTypes) {
  const _list = list.map(({ question, answer, cta, image }) => ({
    question: index === 0 ? <Markdown.h2>{question}</Markdown.h2> : <Markdown.h3>{question}</Markdown.h3>,
    answer: <Markdown className={styles.answer}>{answer}</Markdown>,
    cta,
    image,
  }));
  console.log(sectionHeading);
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <Heading {...sectionHeading} hierarchy={index === 0 ? 'h1' : 'h2'} />
      </header>
      <Faq
        list={_list}
        PlusIcon={<PlusIcon />}
        MinusIcon={<MinusIcon />}
        UserIcon={<UserIcon />}
        CartIcon={<CartIcon />}
      />
    </section>
  );
}

const PlusIcon = () => (
  <svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g fillRule='evenodd' clipRule='evenodd' fill='#696969'>
      <path d='M2.668 8c0-.368.298-.667.667-.667h9.333a.667.667 0 1 1 0 1.334H3.335A.667.667 0 0 1 2.668 8Z' />
      <path d='M7.999 2.667c.368 0 .666.298.666.666v9.334a.667.667 0 1 1-1.333 0V3.332c0-.368.299-.667.667-.667Z' />
    </g>
  </svg>
);

const MinusIcon = () => (
  <svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.668 8c0-.368.298-.667.667-.667h9.333a.667.667 0 1 1 0 1.334H3.335A.667.667 0 0 1 2.668 8Z'
      fill='#696969'
    />
  </svg>
);

const UserIcon = () => (
  <svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g fillRule='evenodd' clipRule='evenodd' fill='#696969'>
      <path d='M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM.833 10a9.167 9.167 0 1 1 18.333 0A9.167 9.167 0 0 1 .833 10Z' />
      <path d='M10 6.667A1.667 1.667 0 1 0 10 10a1.667 1.667 0 0 0 0-3.333ZM6.667 8.333a3.333 3.333 0 1 1 6.667 0 3.333 3.333 0 0 1-6.667 0ZM7.5 15a.833.833 0 0 0-.833.833v1.385a.833.833 0 0 1-1.667 0v-1.385a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v1.385a.833.833 0 0 1-1.667 0v-1.385A.833.833 0 0 0 12.5 15h-5Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h20v20H0z' />
      </clipPath>
    </defs>
  </svg>
);

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
