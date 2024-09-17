import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Lesson_Page',
  type: 'document',
  title: 'Strona z darmową lekcją',
  icon: () => '📚',
  fields: [
    defineField({
      name: 'content',
      type: 'content',
      title: 'Komponenty strony',
      description:
        'Komponenty podstrony to sekcje strony internetowej, które można dodawać, usuwać i zmieniać ich kolejność. Umożliwiają elastyczne zarządzanie treścią i układem strony.',
      options: { collapsible: true },
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
})
