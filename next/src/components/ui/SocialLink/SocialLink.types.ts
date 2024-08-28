import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type SocialLinkTypes = { platform: PlatformType } & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
