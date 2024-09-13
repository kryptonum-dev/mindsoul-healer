import { isPreviewDeployment, isProductionDeployment } from '@/utils/is-preview-deployment';

/**
 * Global declaration of domain name of the website. Be aware of the protocol and www or non-www prefix.
 * @constant
 */
export const DOMAIN: string = isProductionDeployment ? 'https://mindsoulhealer.pl' : 'http://localhost:3000';

/**
 * Global default title.
 * @constant
 */
export const DEFAULT_TITLE: string = 'Mind&SoulHealer | Ali Bahridunov';

/**
 * Global default title.
 * @constant
 */
export const SHORT_TITLE: string = 'Mind&SoulHealer';

/**
 * URL for the main logo.
 * @constant
 */
export const LOGO_URL: string = `${DOMAIN}/icon-512.png`;

/**
 * Global description.
 * @constant
 */
export const DEFAULT_DESCRIPTION: string =
  'Ten kurs pomoże Ci rozwijać umiejętności na wielu poziomach. Znajdź motywację, zmień swoje podejście do życia i osiągnij sukces!';

/**
 * Global declaration of themeColor in HEX format.
 * @constant
 */
export const THEME_COLOR: string = '#efefef';

/**
 * Global declaration of backgroundColor in HEX format.
 * @constant
 */
export const BACKGROUND_COLOR: string = '#efefef';

/**
 * Global declaration of page language.
 * @constant
 */
export const LOCALE: string = 'pl';

/**
 * Declaration of global easing.
 * @constant
 */
export const EASING: number[] = [0.65, 0.05, 0.36, 1];

export const REGEX: { email: RegExp; phone: RegExp; string: RegExp } = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
  string: /^(?!\s+$)(.*?)\s*$/,
};
