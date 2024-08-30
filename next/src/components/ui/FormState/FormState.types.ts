import { FormStatusTypes } from '@/global/types';

export type FormStateTypes = {
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
  hierarchy?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
