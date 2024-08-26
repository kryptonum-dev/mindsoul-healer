import styles from './SocialLink.module.scss';
import type { SocialLinkTypes } from './SocialLink.types';

export default function SocialLink({ children, ...props }: SocialLinkTypes) {
  return (
    <a className={styles.link} {...props}>
      <span className={styles.content}>{children}</span>
      <span className={styles.arrow}>
        <ArrowIcon />
      </span>
    </a>
  );
}

const ArrowIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={12} height={12} fill='none' viewBox='0 0 12 12'>
    <g id='External-link' fill='#070101' fillRule='evenodd' clipRule='evenodd'>
      <path
        id='Vector'
        d='M3 4H2v6h7V7a1 1 0 0 1 1 0v3a2 2 0 0 1-2 1H3a1 1 0 0 1-2-1V4a2 2 0 0 1 2-1h3a1 1 0 0 1 0 1H3Z'
      />
      <path id='Vector_2' d='m7 2 1-1h3v4a1 1 0 0 1-1 0V2H7Z' />
      <path id='Vector_3' d='M11 1v1L5 7l5-6h1Z' />
    </g>
  </svg>
);
