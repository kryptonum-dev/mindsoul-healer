import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

export default defineField({
  name: 'ImageText',
  type: 'document',
  title: 'Sekcja z obrazkiem i zdjęciem',
  icon: () => '💌',
  fields: [
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Obraz',
      validation: Rule => Rule.required(),
    }),
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
