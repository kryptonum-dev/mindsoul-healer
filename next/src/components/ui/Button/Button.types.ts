export type ButtonTypes = {
  theme?: 'primary' | 'secondary';
  href?: string;
  text?: string | React.ReactNode;
  children?: string | React.ReactNode;
  shade?: 'light' | 'dark' | 'gray';
  icon?: 'cart' | 'file';
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
