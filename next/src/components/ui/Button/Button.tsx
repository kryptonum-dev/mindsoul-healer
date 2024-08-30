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
      {icon}
    </Element>
  );
}
