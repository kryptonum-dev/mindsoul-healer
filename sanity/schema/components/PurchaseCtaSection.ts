import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

export default defineField({
  name: 'PurchaseCtaSection',
  title: 'Sekcja z wezwaniem do działania i obrazkiem',
  type: 'document',
  icon: () => '🛒',
  fields: [
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Obrazek',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sectionHeading',
      type: 'sectionHeading',
      title: 'Nagłówek sekcji',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
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
