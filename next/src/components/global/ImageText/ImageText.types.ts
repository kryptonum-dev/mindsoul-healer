import { HeadingTypes } from '@/components/ui/Heading';
import { CtaDataTypes } from '@/components/ui/ctaButtonBox';
import { ImgDataTypes } from '@/components/ui/image';

export type ImageTextTypes = {
  sectionHeading: HeadingTypes;
  paragraph: string;
  image: ImgDataTypes;
  cta: CtaDataTypes;
  index: number;
};
