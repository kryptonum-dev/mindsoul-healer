import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

const title = 'O autorze kursu';
const icon = () => '👨‍🏫';
const businessIcon = () => '💰';

export default defineField({
  name: 'AboutAuthor',
  type: 'document',
  title,
  icon,
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
            },
            prepare: ({ title, href }) => ({
              title,
              subtitle: href,
              media: businessIcon,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: 'socialMedia',
      type: 'socialMedia',
      title: 'Social Media',
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
