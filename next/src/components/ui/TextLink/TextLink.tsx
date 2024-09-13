import Link from 'next/link';
import { isExternalLink } from '@/utils/is-external-link';
import styles from './TextLink.module.scss';
import type { TextLinkTypes } from './TextLink.types';

export default function TextLink({ children, href, ...props }: TextLinkTypes) {
  return (
    <Link href={href} className={styles.link} {...props}>
      {children}
      {isExternalLink(href) && <ArrowIcon />}
    </Link>
  );
}

const ArrowIcon = () => (
  <svg width={12} height={13} viewBox='0 0 12 13' xmlns='http://www.w3.org/2000/svg'>
    <g id='External-link'>
      <path
        id='Vector'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.5 4C2.36739 4 2.24021 4.05268 2.14645 4.14645C2.05268 4.24021 2 4.36739 2 4.5V10C2 10.1326 2.05268 10.2598 2.14645 10.3536C2.24021 10.4473 2.36739 10.5 2.5 10.5H8C8.13261 10.5 8.25978 10.4473 8.35355 10.3536C8.44732 10.2598 8.5 10.1326 8.5 10V7C8.5 6.72386 8.72386 6.5 9 6.5C9.27614 6.5 9.5 6.72386 9.5 7V10C9.5 10.3978 9.34196 10.7794 9.06066 11.0607C8.77936 11.342 8.39783 11.5 8 11.5H2.5C2.10217 11.5 1.72064 11.342 1.43934 11.0607C1.15804 10.7794 1 10.3978 1 10V4.5C1 4.10218 1.15804 3.72064 1.43934 3.43934C1.72064 3.15804 2.10218 3 2.5 3H5.5C5.77614 3 6 3.22386 6 3.5C6 3.77614 5.77614 4 5.5 4H2.5Z'
        fill='currentColor'
      />
      <path
        id='Vector_2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 2C7 1.72386 7.22386 1.5 7.5 1.5H10.5C10.7761 1.5 11 1.72386 11 2V5C11 5.27614 10.7761 5.5 10.5 5.5C10.2239 5.5 10 5.27614 10 5V2.5H7.5C7.22386 2.5 7 2.27614 7 2Z'
        fill='currentColor'
      />
      <path
        id='Vector_3'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.8536 1.64645C11.0488 1.84171 11.0488 2.15829 10.8536 2.35355L5.35355 7.85355C5.15829 8.04882 4.84171 8.04882 4.64645 7.85355C4.45118 7.65829 4.45118 7.34171 4.64645 7.14645L10.1464 1.64645C10.3417 1.45118 10.6583 1.45118 10.8536 1.64645Z'
        fill='currentColor'
      />
    </g>
  </svg>
);
