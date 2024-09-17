import Content from '../components/Content';
import Faq_Collection from './collectionTypes/Faq_Collection';
import Module_Collection from './collectionTypes/Module_Collection';
import seo from './components/seo';
import Index_Page from './singleTypes/Index_Page';
import Lesson_Page from './singleTypes/Lesson_Page';
import NotFound_Page from './singleTypes/NotFound_Page';
import { global } from './singleTypes/global';
import cta from './ui/cta';
import fullCtaBox from './ui/fullCtaBox';
import imageAlt from './ui/imageAlt';
import sectionHeading from './ui/sectionHeading';
import socialMedia from './ui/socialMedia';
import videoID from './ui/videoID';

export const schemaTypes = [
  Index_Page,
  NotFound_Page,
  Lesson_Page,
  seo,
  global,
  socialMedia,
  Content,
  sectionHeading,
  videoID,
  fullCtaBox,
  cta,
  imageAlt,
  Module_Collection,
  Faq_Collection,
];
