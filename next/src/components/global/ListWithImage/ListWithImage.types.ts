import { HeadingTypes } from '@/components/ui/Heading';
import { ImgDataTypes } from '@/components/ui/image';

export type ListWithImageTypes = {
  list: { image: ImgDataTypes; sectionHeading: HeadingTypes; content: string }[];
  index: number;
};
