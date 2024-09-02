import { ButtonTypes } from '@/components/ui/Button';
import { HeadingTypes } from '@/components/ui/Heading';

export type TwoBoxesCtaTypes = {
  sectionHeading: HeadingTypes;
  list: (
    | { _type: 'defaultBlock'; content: string; heading: string }
    | { _type: 'ctaBlock'; content: string; heading: string; cta: ButtonTypes }
  )[];
  index: number;
};
