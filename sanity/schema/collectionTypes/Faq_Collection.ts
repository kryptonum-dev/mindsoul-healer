import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField, defineType } from 'sanity';

const title = 'Elementy FAQ';
const icon = () => '❓';

export default defineType({
  name: 'Faq_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Zdjęcie pytającego (opcjonalne)',
      description: 'Zdjęcie, które pojawi się obok pytania.',
      validation: Rule => Rule.optional(),
    }),
    defineField({
      name: 'question',
      type: 'markdown',
      title: 'Pytanie',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'answer',
      type: 'markdown',
      title: 'Odpowiedź',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'ctaButton',
      title: 'Wezwanie do działania (opcjonalne)',
      description: 'Przycisk z wezwaniem do działania pojawi się pod opowiedzią.',
      validation: Rule => Rule.optional(),
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      heading: 'question',
      subheading: 'answer',
      media: 'image',
    },
    prepare: ({ heading, subheading, media }) => ({
      title: removeMarkdown(heading),
      subtitle: removeMarkdown(subheading),
      media: media || icon,
    }),
  },
});
