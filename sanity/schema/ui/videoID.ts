import { defineField } from 'sanity';

export default defineField({
  name: 'videoID',
  title: 'ID Filmiku Vimeo',
  description: `Numer filmiku z Vimeo, możemy go znaleźć na na pasku wyszukiwania kiedy jesteśmy na Vimeo: https://vimeo.com/***`,
  type: 'string',
  validation: Rule => Rule.required(),
});
