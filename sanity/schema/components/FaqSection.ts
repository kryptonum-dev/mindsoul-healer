import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

const title = 'Sekcja FAQ';
const icon = () => '❓';

export default defineField({
  name: 'FaqSection',
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
      title: 'Lista pytań i odpowiedzi',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Faq_Collection' }],
        },
      ],
      validation: Rule =>
        Rule.unique().error('Pytania nie mogą się powtarzać').min(1).error('Dodaj przynajmniej jedno pytanie'),
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
