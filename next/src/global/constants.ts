/**
 * Global declaration of domain name of the website. Be aware of the protocol and www or non-www prefix.
 * @constant
 */
export const DOMAIN: string = 'https://mindsoulhealer.pl';

/**
 * Global declaration of page language.
 * @constant
 */
export const LOCALE: string = 'pl';

/**
 * Declaration of global easing.
 * @constant
 */
export const EASING: number[] = [0.11, 0, 0.5, 0];

export const REGEX: { email: RegExp; phone: RegExp; string: RegExp } = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
  string: /^(?!\s+$)(.*?)\s*$/,
};
