import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'NotFound_Page',
  type: 'document',
  title: 'Nie znaleziono strony',
  icon: () => '❌',
  fields: [
    defineField({
      name: 'sectionHeading',
      type: 'sectionHeading',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'ctaButton',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
});
