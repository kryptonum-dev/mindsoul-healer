import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

export default defineField({
  name: 'ModuleList',
  title: 'Prezentacja Modułów',
  type: 'document',
  icon: () => '📚',
  fields: [
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Obrazek',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'video',
      type: 'file',
      title: 'Plik Wideo (ocpcjonalny)',
      description: 'Wideo nachodzi na obrazek',
      options: {
        accept: 'video/mp4',
      },
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
          name: 'videoThumbnail',
          type: 'imageAlt',
          description: 'Obrazek wyświetlany przed odtworzeniem filmiku',
          title: 'Obrazek do filmiku',
          options: {
            collapsible: false,
            collapsed: false,
          },
        }),
        defineField({
          name: 'videoID',
          type: 'videoID',
          title: 'ID Filmiku Vimeo',
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
