import { SectionHeadingTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/ctaButtonBox/ctaButtonBox.types';
import { ImageTypes } from '@/components/ui/image';

export type HeroHeaderVideoTypes = {
  sectionHeading: SectionHeadingTypes;
  paragraph: string;
  image: ImageTypes;
  videoId: string;
  cta: CtaDataTypes;
  index: number;
};
