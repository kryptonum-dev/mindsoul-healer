import { HeadingTypes } from '@/components/ui/Heading';
import { ImgDataTypes } from '@/components/ui/image';

export type AboutAuthorTypes = {
  sectionHeading: HeadingTypes;
  paragraphMain: string;
  paragraphSecondary: string;
  image: ImgDataTypes;
  list: { name: string; href: string }[];
  index: number;
};
