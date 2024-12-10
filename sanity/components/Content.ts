import AboutAuthor from '../schema/components/AboutAuthor';
import FaqSection from '../schema/components/FaqSection';
import HeadingWithColumns from '../schema/components/HeadingWithColumns';
import HeroHeaderVideo from '../schema/components/HeroHeaderVideo';
import ImageText from '../schema/components/ImageText';
import ListWithImage from '../schema/components/ListWithImage';
import ModuleList from '../schema/components/ModuleList';
import PurchaseCtaSection from '../schema/components/PurchaseCtaSection';
import QuestionSection from '../schema/components/QuestionSection';
import SimpleGridList from '../schema/components/SimpleGridList';
import SimpleStaggeredGrid from '../schema/components/SimpleStaggeredGrid';
import TwoBoxesCta from '../schema/components/TwoBoxesCta';
import VideoEmbedHeading from '../schema/components/VideoEmbedHeading';
import { defineType } from 'sanity';

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeroHeaderVideo,
    SimpleStaggeredGrid,
    SimpleGridList,
    ListWithImage,
    ModuleList,
    PurchaseCtaSection,
    AboutAuthor,
    HeadingWithColumns,
    TwoBoxesCta,
    FaqSection,
    QuestionSection,
    VideoEmbedHeading,
    ImageText,
  ],
});
