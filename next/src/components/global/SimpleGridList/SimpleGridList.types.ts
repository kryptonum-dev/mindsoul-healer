import { ButtonTypes } from '@/components/ui/Button';
import { SectionHeadingTypes } from '@/components/ui/SectionHeading';
import { ImgDataTypes } from '@/components/ui/image';

export type SimpleGridListTypes = {
  sectionHeading: SectionHeadingTypes;
  image: ImgDataTypes;
  list: string[];
  preCtaText: string;
  cta: ButtonTypes;
  index: number;
};
