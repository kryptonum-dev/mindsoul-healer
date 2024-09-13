import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

export default defineField({
  name: 'AboutAuthor',
  title: 'O autorze kursu',
  type: 'document',
  icon: () => '👨‍🏫',
  fields: [
    defineField({
      title: 'Obraz',
      name: 'image',
      type: 'imageAlt',
    }),
    defineField({
      name: 'sectionHeading',
      type: 'sectionHeading',
      title: 'Nagłówek sekcji',
    }),
    defineField({
      name: 'paragraphMain',
      title: 'Treść główna',
      type: 'markdown',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'paragraphSecondary',
      title: 'Treść dodatkowa',
      type: 'markdown',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'list',
      title: 'Lista biznesów',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [
        defineField({
          name: 'business',
          type: 'object',
          title: 'Biznes',
          icon: () => '💰',
          fields: [
            defineField({
              name: 'name',
              type: 'markdown',
              title: 'Nazwa biznesu',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'href',
              type: 'string',
              title: 'Link',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              href: 'href',
              icon: 'icon',
            },
            prepare: ({ title, href, icon }) => ({
              title,
              subtitle: href,
              media: icon,
            }),
          },
        }),
      ],
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
