import { ReactNode } from 'react';

export type ButtonTypes = {
  theme?: 'primary' | 'secondary';
  href?: string;
  text?: string | React.ReactNode;
  children?: string | React.ReactNode;
  shade?: 'light' | 'dark' | 'gray';
  icon?: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
