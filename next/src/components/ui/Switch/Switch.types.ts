import { ReactNode } from 'react';

export type SwitchTypes = {
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  children?: ReactNode;
};
