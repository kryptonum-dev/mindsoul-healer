import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

const title = 'Dwa bloki z wezwaniami do działania';
const icon = () => '💼';

export default defineField({
  name: 'TwoBoxesCta',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'sectionHeading',
      type: 'sectionHeading',
      title: 'Nagłówek sekcji',
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Bloki',
      of: [
        defineField({
          name: 'defaultBlock',
          type: 'object',
          title: 'Bazowy blok',
          icon: () => '⚙',
          fields: [
            defineField({
              name: 'heading',
              type: 'markdown',
              title: 'Nagłówek bloku',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'content',
              type: 'markdown',
              title: 'Treść bloku',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              heading: 'heading',
              subheading: 'title',
              icon: 'icon',
            },
            prepare: ({ heading, subheading, icon }) => ({
              title: removeMarkdown(heading),
              subtitle: subheading,
              media: icon,
            }),
          },
        }),
        defineField({
          name: 'ctaBlock',
          type: 'object',
          title: 'Blok z wezwaniem do działania',
          icon: () => '📢',
          fields: [
            defineField({
              name: 'heading',
              type: 'markdown',
              title: 'Nagłówek bloku',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'content',
              type: 'markdown',
              title: 'Treść bloku',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'cta',
              type: 'ctaButton',
              title: 'Wezwanie do działania',
            }),
          ],
          preview: {
            select: {
              heading: 'heading',
              subheading: 'title',
              icon: 'icon',
            },
            prepare: ({ heading, subheading, icon }) => ({
              title: removeMarkdown(heading),
              subtitle: subheading,
              media: icon,
            }),
          },
        }),
      ],
      validation: Rule => Rule.required().min(1).max(2).error('Lista musi zawierać od 1 do 2 elementów'),
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
