import { SectionHeadingTypes } from '@/components/ui/SectionHeading';
import { ImgDataTypes } from '@/components/ui/image';

export type SimpleStaggeredGridTypes = {
  sectionHeading: SectionHeadingTypes;
  imagesGrid: {
    topParagraph: string;
    imageContainer: { image: ImgDataTypes; imageText: string };
    bottomParagraph: string;
  }[];
  content: { title: string; paragraph: string };
  index: number;
};
