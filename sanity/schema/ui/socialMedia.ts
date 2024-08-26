import {defineField} from 'sanity'
import {FaInstagram, FaYoutube, FaFacebook, FaTiktok, FaLinkedin} from 'react-icons/fa6'

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
      name: 'facebook',
      type: 'object',
      title: 'Facebook',
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
          title: 'Facebook',
          subtitle: paragraph,
          icon: FaFacebook,
        }),
      },
    }),
    defineField({
      name: 'linkedin',
      type: 'object',
      title: 'Linkedin',
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
          title: 'LinkedIn',
          subtitle: paragraph,
          icon: FaLinkedin,
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
