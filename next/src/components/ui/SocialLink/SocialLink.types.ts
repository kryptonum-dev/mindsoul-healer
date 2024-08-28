import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { PlatformType } from '@/global/types';

export type SocialLinkTypes = { platform: PlatformType } & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
