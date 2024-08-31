import AboutAuthor from '../schema/components/AboutAuthor';
import HeadingWithColumns from '../schema/components/HeadingWithColumns';
import HeroHeaderVideo from '../schema/components/HeroHeaderVideo';
import ListWithImage from '../schema/components/ListWithImage';
import ModuleList from '../schema/components/ModuleList';
import PurchaseCtaSection from '../schema/components/PurchaseCtaSection';
import SimpleGridList from '../schema/components/SimpleGridList';
import SimpleStaggeredGrid from '../schema/components/SimpleStaggeredGrid';
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
  ],
});
