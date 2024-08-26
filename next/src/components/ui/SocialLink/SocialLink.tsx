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
  <svg width={12} height={12} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g id='External-link'>
      <path
        id='Vector'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.5 3.5C2.36739 3.5 2.24021 3.55268 2.14645 3.64645C2.05268 3.74021 2 3.86739 2 4V9.5C2 9.63261 2.05268 9.75979 2.14645 9.85355C2.24021 9.94732 2.36739 10 2.5 10H8C8.13261 10 8.25978 9.94732 8.35355 9.85355C8.44732 9.75978 8.5 9.63261 8.5 9.5V6.5C8.5 6.22386 8.72386 6 9 6C9.27614 6 9.5 6.22386 9.5 6.5V9.5C9.5 9.89783 9.34196 10.2794 9.06066 10.5607C8.77936 10.842 8.39783 11 8 11H2.5C2.10217 11 1.72064 10.842 1.43934 10.5607C1.15804 10.2794 1 9.89782 1 9.5V4C1 3.60218 1.15804 3.22064 1.43934 2.93934C1.72064 2.65804 2.10218 2.5 2.5 2.5H5.5C5.77614 2.5 6 2.72386 6 3C6 3.27614 5.77614 3.5 5.5 3.5H2.5Z'
        fill='#070101'
      />
      <path
        id='Vector_2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 1.5C7 1.22386 7.22386 1 7.5 1H10.5C10.7761 1 11 1.22386 11 1.5V4.5C11 4.77614 10.7761 5 10.5 5C10.2239 5 10 4.77614 10 4.5V2H7.5C7.22386 2 7 1.77614 7 1.5Z'
        fill='#070101'
      />
      <path
        id='Vector_3'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.8536 1.14645C11.0488 1.34171 11.0488 1.65829 10.8536 1.85355L5.35355 7.35355C5.15829 7.54882 4.84171 7.54882 4.64645 7.35355C4.45118 7.15829 4.45118 6.84171 4.64645 6.64645L10.1464 1.14645C10.3417 0.951184 10.6583 0.951184 10.8536 1.14645Z'
        fill='#070101'
      />
    </g>
  </svg>
);
