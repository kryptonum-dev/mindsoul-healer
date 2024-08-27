import {defineField} from 'sanity'
import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Sekcja HERO z nagłówkiem i filmikiem'
const icon = () => '⭐️'

export default defineField({
  name: 'HeroHeaderVideo',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Nagłówek sekcji',
      type: 'sectionHeading',
    }),
    defineField({
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Obraz',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoId',
      type: 'videoID',
      title: 'Filmik',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'fullCtaBox',
      title: 'Wezwanie do działania',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeading.heading',
      media: 'img',
    },
    prepare: ({heading, media}) => ({
      title: removeMarkdown(heading),
      subtitle: title,
      media,
    }),
  },
})
