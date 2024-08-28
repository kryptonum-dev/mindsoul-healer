import { defineField } from 'sanity';

export default defineField({
  name: 'videoID',
  title: 'Filmik',
  description: 'Numer filmiku z Vimeo, możemy go znaleźć na pasku wyszukiwania po znaku /',
  type: 'string',
  validation: Rule => Rule.required(),
});
