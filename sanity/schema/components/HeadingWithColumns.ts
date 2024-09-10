import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

export default defineField({
  name: 'HeadingWithColumns',
  type: 'document',
  title: 'Nagłówek z kolumnami tekstu',
  icon: () => '📝',
  fields: [
    defineField({
      name: 'sectionHeading',
      type: 'sectionHeading',
      title: 'Nagłówek sekcji',
    }),
    defineField({
      name: 'columns',
      type: 'array',
      title: 'Kolumny tekstu',
      of: [
        defineField({
          name: 'content',
          type: 'object',
          title: 'Kolumna',
          icon: () => '📄',
          fields: [
            defineField({
              name: 'heading',
              type: 'markdown',
              title: 'Nagłówek Kolumny',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'content',
              type: 'markdown',
              title: 'Treść',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              heading: 'heading',
              subtitle: 'content',
              icon: 'icon',
            },
            prepare: ({ heading, subtitle, icon }) => ({
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(subtitle),
              media: icon,
            }),
          },
        }),
      ],

      validation: Rule =>
        Rule.required()
          .min(1)
          .error('Musisz dodać przynajmniej jedną kolumnę')
          .max(2)
          .error('Możesz dodać maksymalnie dwie kolumny'),
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeading.heading',
      subheading: 'sectionHeading.subheading',
      icon: 'icon',
    },
    prepare: ({ heading, subheading, icon }) => ({
      title: removeMarkdown(heading),
      subtitle: removeMarkdown(subheading),
      media: icon,
    }),
  },
});
