import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

const title = 'Sekcja z prostą siatką zdjęć';
const icon = () => '📦';

export default defineField({
  name: 'SimpleStaggeredGrid',
  type: 'document',
  icon,
  title,
  validation: Rule => Rule.required(),
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Nagłówek sekcji',
      type: 'sectionHeading',
    }),
    defineField({
      name: 'imagesGrid',
      type: 'array',
      title: 'Siatka zdjęć',
      validation: Rule => Rule.required().max(2).error('Lista może zawierać maksimum 2 elementy'),
      of: [
        defineField({
          name: 'column',
          type: 'object',
          title: 'Kolumna',
          fields: [
            defineField({
              name: 'topParagraph',
              type: 'markdown',
              title: 'Paragraf nad obrazem (opcjonalny)',
            }),
            defineField({
              name: 'imageContainer',
              type: 'object',
              title: 'Kontener obrazu',
              fields: [
                defineField({
                  name: 'image',
                  type: 'imageAlt',
                  title: 'Obraz',
                  validation: Rule => Rule.required(),
                  options: { collapsibe: false, collapsed: false },
                }),
                defineField({
                  name: 'imageText',
                  type: 'markdown',
                  title: 'Tekst do obrazu',
                  validation: Rule => Rule.required(),
                }),
              ],
            }),
            defineField({
              name: 'bottomParagraph',
              type: 'markdown',
              title: 'Paragraf pod obrazem (opcjonalny)',
            }),
          ],
          preview: {
            select: {
              heading: 'imageContainer.imageText',
              media: 'imageContainer.image',
            },
            prepare: ({ heading, media }) => ({
              title: removeMarkdown(heading),
              media,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Tekst pod siatką',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'markdown',
          title: 'Tytuł',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'paragraph',
          type: 'markdown',
          title: 'Paragraf',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeading.heading',
      media: 'img',
    },
    prepare: ({ heading, media }) => ({
      title: removeMarkdown(heading),
      subtitle: title,
      media,
    }),
  },
});
