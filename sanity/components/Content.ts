import HeroHeaderVideo from '../schema/components/HeroHeaderVideo';
import { defineType } from 'sanity';

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [HeroHeaderVideo],
});
