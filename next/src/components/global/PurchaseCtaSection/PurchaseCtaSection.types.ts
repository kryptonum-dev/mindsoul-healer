import { HeadingTypes } from '@/components/ui/Heading';
import { CtaDataTypes } from '@/components/ui/ctaButtonBox';
import { ImgDataTypes } from '@/components/ui/image';

export type PurchaseCtaSectionTypes = {
  image: ImgDataTypes;
  sectionHeading: HeadingTypes;
  paragraph: string;
  cta: CtaDataTypes;
  index: number;
};
