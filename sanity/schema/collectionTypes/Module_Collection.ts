import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

const title = 'Lista modułów';
const icon = () => '📚';

export default defineField({
  name: 'Module_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'moduleName',
      type: 'markdown',
      title: 'Nazwa modułu',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'moduleDuration',
      type: 'number',
      title: 'Czas trwania modułu (w minutach)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'lessonList',
      type: 'array',
      title: 'Lista leckji',
      validation: Rule => Rule.required().min(1).error('Moduł musi zawierać przynajmniej jedną lekcję'),
      of: [
        defineField({
          name: 'markdown',
          type: 'text',
          title: 'Nazwa lekcja',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      moduleName: 'moduleName',
      icon: 'icon',
    },
    prepare: ({ moduleName, icon }) => ({ title: removeMarkdown(moduleName), media: icon }),
  },
});
