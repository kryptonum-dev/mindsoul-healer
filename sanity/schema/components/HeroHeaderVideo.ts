import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

export default defineField({
  name: 'HeroHeaderVideo',
  type: 'document',
  title: 'Sekcja HERO z nagłówkiem i filmikiem',
  icon: () => '⭐️',
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
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Obraz',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'videoId',
      type: 'videoID',
      title: 'Filmik',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      type: 'markdown',
      description: 'Imię i nazwisko autora pojawi się pod filmikiem wprowadzającym.',
      title: 'Imię i nazwisko autora',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'fullCtaBox',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeading.heading',
      subheading: 'sectionHeading.subheading',
      media: 'image',
    },
    prepare: ({ heading, subheading, media }) => ({
      title: removeMarkdown(heading),
      subtitle: removeMarkdown(subheading),
      media,
    }),
  },
});
