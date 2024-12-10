import { defineField } from 'sanity';

export default defineField({
  name: 'ctaButton',
  type: 'object',
  title: 'Przycisk (CTA)',
  icon: () => '📢',
  fields: [
    defineField({
      name: 'theme',
      type: 'string',
      title: 'Rodzaj',
      options: {
        list: [
          { value: 'primary', title: 'Główne' },
          { value: 'secondary', title: 'Dodatkowe' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Tekst',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      title: 'Link',
      description: 'Link relatywny lub absolutny (wymagany protokół https://)',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('#') && !value.startsWith('/') && !value.startsWith('https://')) {
            return 'Nieprawidłowy adres URL.';
          }
          return true;
        }).required(),
    }),
    defineField({
      name: 'easyCartInfo',
      type: 'boolean',
      title: 'Włącz informacje o płatności',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      heading: 'text',
      paragraph: 'href',
      theme: 'theme',
      icon: 'icon',
    },
    prepare: ({ heading, paragraph, icon, theme }) => {
      const themeTitle = theme === 'primary' ? 'Główne' : 'Dodatkowe';
      return {
        title: `(${themeTitle}) ${heading}`,
        subtitle: paragraph,
        icon,
      };
    },
  },
});
