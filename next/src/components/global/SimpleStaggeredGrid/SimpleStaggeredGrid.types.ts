import { HeadingTypes } from '@/components/ui/Heading';
import { ImgDataTypes } from '@/components/ui/image';

export type SimpleStaggeredGridTypes = {
  sectionHeading: HeadingTypes;
  imagesGrid: {
    topParagraph: string;
    imageContainer: { image: ImgDataTypes; imageText: string };
    bottomParagraph: string;
  }[];
  content: { title: string; paragraph: string };
  index: number;
};
