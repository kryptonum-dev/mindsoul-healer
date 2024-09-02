import { ReactNode } from 'react';
import { ButtonTypes } from '@/components/ui/Button';
import { HeadingTypes } from '@/components/ui/Heading';
import { ImgDataTypes } from '@/components/ui/image';

export type FaqSectionTypes = {
  sectionHeading: HeadingTypes;
  list: { image: ImgDataTypes; question: string; answer: string; cta: ButtonTypes }[];
  index: number;
};

export type FaqTypes = {
  list: { image: ImgDataTypes; question: ReactNode; answer: ReactNode; cta: ButtonTypes }[];
  PlusIcon: ReactNode;
  MinusIcon: ReactNode;
  UserIcon: ReactNode;
  CartIcon: ReactNode;
};
