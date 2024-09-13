import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { PlatformType } from '@/utils/get-socials';

export type SocialLinkTypes = { platform: PlatformType } & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
