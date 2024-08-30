import { HeadingTypes } from '@/components/ui/Heading';
import { CtaDataTypes } from '@/components/ui/ctaButtonBox';
import { ImgDataTypes } from '@/components/ui/image';

export type ModuleListTypes = {
  sectionHeading: HeadingTypes;
  paragraph: string;
  image: ImgDataTypes;
  list: { moduleName: string; moduleDuration: number; lessonList: string[] }[];
  form: { formHeading: string; videoID: string; buttonText: string };
  cta: CtaDataTypes;
  index: number;
};
