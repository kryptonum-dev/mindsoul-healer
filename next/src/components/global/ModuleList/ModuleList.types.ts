import { ReactNode } from 'react';
import { FormStatusTypes } from '@/global/types';
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

export type FormTypes = {
  heading: ReactNode;
  buttonText: string;
  videoID: string;
  privacyPolicy: string;
  index: number;
};

export type NewsletterStateTypes = {
  errorState: {
    heading: string;
    paragraph: React.ReactNode;
  };
  successState: {
    heading: string;
    paragraph: string;
  };
  isSuccess: FormStatusTypes['success'];
  isLoading: boolean;
  setStatus: React.Dispatch<React.SetStateAction<FormStatusTypes>>;
};
