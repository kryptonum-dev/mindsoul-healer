import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'fullCtaBox',
  type: 'object',
  title: 'Wezwanie do działania',
  icon: () => '🗣️',
  validation: Rule => Rule.required(),
  fields: [
    defineField({
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf (Opcjonalny)',
    }),
    defineField({
      name: 'ctaButton',
      type: 'ctaButton',
      title: 'Przycisk (CTA)',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href',
    },
  },
});
