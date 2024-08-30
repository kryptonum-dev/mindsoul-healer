import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

const title = 'Prezentacja Modułów';
const icon = () => '📚';

export default defineField({
  name: 'ModuleList',
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
      name: 'list',
      type: 'array',
      title: 'Lista Modułów',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Module_Collection' }],
        },
      ],
      validation: Rule => Rule.required().unique().min(1).error('Musisz dodać przynajmniej jeden moduł'),
    }),
    defineField({
      name: 'form',
      type: 'object',
      title: 'Formularz',
      fields: [
        defineField({
          name: 'formHeading',
          type: 'markdown',
          title: 'Nagłówek formularza',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'videoID',
          type: 'videoID',
          title: 'ID Filmiku',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'buttonText',
          type: 'markdown',
          title: 'Tekst przycisku',
          validation: Rule => Rule.required(),
        }),
      ],
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
