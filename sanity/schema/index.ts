import Content from '../components/Content';
import seo from './components/seo';
import Index_Page from './singleTypes/Index_Page';
import { global } from './singleTypes/global';
import cta from './ui/cta';
import fullCtaBox from './ui/fullCtaBox';
import imageAlt from './ui/imageAlt';
import sectionHeading from './ui/sectionHeading';
import socialMedia from './ui/socialMedia';
import videoID from './ui/videoID';

export const schemaTypes = [
  Index_Page,
  seo,
  global,
  socialMedia,
  Content,
  sectionHeading,
  videoID,
  fullCtaBox,
  cta,
  imageAlt,
];
