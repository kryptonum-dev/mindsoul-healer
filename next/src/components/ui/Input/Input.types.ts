import { FieldErrors } from 'react-hook-form';

export type InputTypes = {
  label: string;
  disabled?: boolean;
  filled?: boolean;
  register: {
    name: string;
  };
  errors: FieldErrors;
  textarea?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
