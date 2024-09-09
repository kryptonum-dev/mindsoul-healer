import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

export default defineField({
  name: 'QuestionSection',
  title: 'Sekcja z możliwośćią zadania pytania',
  type: 'document',
  icon: () => '🎲',
  fields: [
    defineField({
      name: 'sectionHeading',
      type: 'sectionHeading',
      title: 'Nagłówek sekcji',
    }),
    defineField({
      name: 'questionList',
      type: 'array',
      title: 'Lista pytań',
      of: [
        defineField({
          name: 'question',
          title: 'Pytanie',
          type: 'object',
          icon: () => '❓',
          fields: [
            defineField({
              name: 'questionText',
              title: 'Treść pytania',
              type: 'markdown',
            }),
            defineField({
              name: 'answer',
              title: 'Odpowiedź',
              type: 'markdown',
            }),
          ],
          preview: {
            select: {
              heading: 'questionText',
              subheading: 'answer',
              icon: 'icon',
            },
            prepare: ({ heading, subheading, icon }) => ({
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(subheading),
              media: icon,
            }),
          },
        }),
      ],

      validation: Rule =>
        Rule.min(1)
          .error('Musisz dodać przynajmniej jedno pytanie.')
          .max(3)
          .error('Możesz dodać maksymalnie 3 pytania.'),
    }),

    defineField({
      name: 'email',
      title: 'Adres e-mail do wysyłania pytań',
      type: 'string',
      validation: Rule => Rule.required(),
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
