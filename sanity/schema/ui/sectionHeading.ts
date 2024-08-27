import {defineField} from 'sanity'

export default defineField({
  name: 'sectionHeading',
  type: 'object',
  title: 'Nagłówek sekcji',
  fields: [
    defineField({
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek (Opcjonalny)',
    }),
  ],
})
