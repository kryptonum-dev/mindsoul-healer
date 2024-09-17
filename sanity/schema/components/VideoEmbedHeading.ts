import { removeMarkdown } from '../../utils/remove-markdown';
import { defineField } from 'sanity';

export default defineField({
  name: 'VideoEmbedHeading',
  title: 'Sekcja z filmikiem i nagłówkiem',
  icon: () => '🎥',
  type: 'document',
  fields: [
    {
      name: 'sectionHeading',
      type: 'sectionHeading',
    },
    {
      name: 'paragraph',
      title: 'Paragraf',
      type: 'markdown',
      validation: Rule => Rule.required(),
    },
    {
      name: 'videoID',
      type: 'videoID',
    },
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
