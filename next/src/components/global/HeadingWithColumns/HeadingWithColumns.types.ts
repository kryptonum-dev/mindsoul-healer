import { HeadingTypes } from '@/components/ui/Heading';

export type HeadingWithColumnsTypes = {
  sectionHeading: HeadingTypes;
  columns: { heading: string; content: string }[];
  index: number;
};
