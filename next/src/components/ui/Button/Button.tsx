import Link from 'next/link';
import { isExternalLink } from '@/utils/is-external-link';
import styles from './Button.module.scss';
import type { ButtonTypes } from './Button.types';

export default function Button({
  href,
  theme = 'primary',
  children,
  text,
  shade = 'light',
  icon,
  ...props
}: ButtonTypes) {
  const _children = children || text;
  const isExternal = isExternalLink(href);
  const Element = href ? (isExternal ? 'a' : Link) : 'button';

  return (
    <Element
      href={href || ''}
      {...(href &&
        Element !== 'button' && { href: href, ...(isExternalLink(href) && { target: '_blank', rel: 'noopener' }) })}
      data-theme={theme}
      data-shade={shade}
      className={styles.button}
      {...props}
    >
      {_children}
      {theme === 'primary' && !!icon && getIcon(icon)}
    </Element>
  );
}

const getIcon = (icon: string) => {
  switch (icon) {
    case 'cart':
      return <CartIcon />;
    case 'file':
      return <FileIcon />;
    default:
      return null;
  }
};

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
