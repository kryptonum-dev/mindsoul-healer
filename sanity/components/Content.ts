import {defineType} from 'sanity'
import HeroHeaderVideo from '../schema/components/HeroHeaderVideo'

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [HeroHeaderVideo],
})
