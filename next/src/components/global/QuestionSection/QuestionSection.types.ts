import { ReactNode } from 'react';
import { HeadingTypes } from '@/components/ui/Heading';

export type QuestionSectionTypes = {
  sectionHeading: HeadingTypes;
  questionList: { questionText: string; answer: string }[];
  email: string;
  index: number;
};

export type CopyButtonTypes = {
  email: string;
};

export type QuestionFormTypes = {
  privacyPolicy: string;
  ArrowIcon: ReactNode;
  index: number;
};
