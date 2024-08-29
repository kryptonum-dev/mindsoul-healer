import { ButtonTypes } from '@/components/ui/Button';
import { HeadingTypes } from '@/components/ui/Heading';
import { ImgDataTypes } from '@/components/ui/image';

export type SimpleGridListTypes = {
  sectionHeading: HeadingTypes;
  image: ImgDataTypes;
  list: string[];
  preCtaText: string;
  cta: ButtonTypes;
  index: number;
};
