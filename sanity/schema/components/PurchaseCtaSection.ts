import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

const title = 'Sekcja z wezwaniem do działania i obrazkiem';
const icon = () => '🛒';

export default defineField({
  name: 'PurchaseCtaSection',
  type: 'document',
  title,
  icon,
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
      icon: 'icon',
    },
    prepare: ({ heading, icon }) => ({
      title: removeMarkdown(heading),
      subtitle: title,
      media: icon,
    }),
  },
});
