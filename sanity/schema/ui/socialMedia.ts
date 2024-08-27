import {defineField} from 'sanity'
import {FaInstagram, FaYoutube, FaTiktok} from 'react-icons/fa6'

export default defineField({
  name: 'socialMedia',
  title: 'Social media',
  type: 'array',
  of: [
    defineField({
      name: 'instagram',
      type: 'object',
      title: 'Instagram',
      fields: [
        defineField({
          name: 'url',
          type: 'url',
          title: 'Link',
        }),
      ],
      preview: {
        select: {
          paragraph: 'url',
        },
        prepare: ({paragraph}) => ({
          title: 'Instagram',
          subtitle: paragraph,
          icon: FaInstagram,
        }),
      },
    }),
    defineField({
      name: 'youtube',
      type: 'object',
      title: 'Youtube',
      fields: [
        defineField({
          name: 'url',
          type: 'url',
          title: 'Link',
        }),
      ],
      preview: {
        select: {
          paragraph: 'url',
        },
        prepare: ({paragraph}) => ({
          title: 'YouTube',
          subtitle: paragraph,
          icon: FaYoutube,
        }),
      },
    }),
    defineField({
      name: 'tiktok',
      type: 'object',
      title: 'TikTok',
      fields: [
        defineField({
          name: 'url',
          type: 'url',
          title: 'Link',
        }),
      ],
      preview: {
        select: {
          paragraph: 'url',
        },
        prepare: ({paragraph}) => ({
          title: 'TikTok',
          subtitle: paragraph,
          icon: FaTiktok,
        }),
      },
    }),
  ],
  validation: (Rule) => Rule.unique(),
})
