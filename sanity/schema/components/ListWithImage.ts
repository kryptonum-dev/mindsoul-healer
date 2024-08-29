import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

const title = 'Listy ze zdjęciami';
const icon = () => '📜';

export default defineField({
  name: 'ListWithImage',
  title,
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista elementów',
      validation: Rule => Rule.required().min(2).max(6).error('Lista musi zawierać od 2 do 6 elementów'),

      of: [
        defineField({
          name: 'element',
          type: 'object',
          title: 'Element',
          fields: [
            defineField({
              name: 'image',
              type: 'imageAlt',
              title: 'Obraz',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'sectionHeading',
              title: 'Nagłówek Elementu',
              type: 'sectionHeading',
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
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title,
      media: icon,
    }),
  },
});
