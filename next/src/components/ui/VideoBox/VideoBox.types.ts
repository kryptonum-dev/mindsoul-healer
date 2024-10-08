import { ReactNode } from 'react';

export type VideoBoxTypes = {
  videoId: string;
  title: string;
  children: ReactNode;
  options?: { controls?: boolean; muted?: boolean; loop?: boolean };
  closeTime?: number;
};
