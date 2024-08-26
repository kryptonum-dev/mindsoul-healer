import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type SocialLinkTypes = { children: ReactNode } & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
