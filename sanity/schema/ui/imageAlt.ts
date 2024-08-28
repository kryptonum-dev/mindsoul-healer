import { defineField } from 'sanity';

export default defineField({
  name: 'imageAlt',
  title: 'Obraz',
  type: 'image',
  validation: Rule => Rule.required(),
  fields: [
    {
      title: 'Tekst Alternatywny',
      name: 'alt',
      type: 'string',
      description: 'Alternatywny tekst dla osób korzystających z czytników ekranowych',
    },
  ],
  options: {
    hotspot: true,
  },
});
