import { ReactNode } from 'react';
import { HeadingTypes } from '@/components/ui/Heading';
import { CtaDataTypes } from '@/components/ui/ctaButtonBox/ctaButtonBox.types';
import { ImgDataTypes } from '@/components/ui/image';

export type HeroHeaderVideoTypes = {
  sectionHeading: HeadingTypes;
  paragraph: string;
  image: ImgDataTypes;
  videoId: string;
  authorName: string;
  cta: CtaDataTypes;
  index: number;
};

export type VideoBoxTypes = { videoId: string; PlayIcon: ReactNode; index: number; children: ReactNode };
