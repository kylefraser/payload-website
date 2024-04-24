import { Hero } from '../blocks/Hero'
import { TwoColumn } from '../blocks/TwoColumn'
import { SimpleRichText } from '../blocks/SimpleRichText'
import formatSlug from '@/utils/formatSlug'

export const Pages = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero, TwoColumn, SimpleRichText],
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
}
