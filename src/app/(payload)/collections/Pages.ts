import type { CollectionConfig } from 'payload/types'
import { Hero } from '../blocks/Hero'
import { TwoColumn } from '../blocks/TwoColumn'
import { SimpleRichText } from '../blocks/SimpleRichText'

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
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero, TwoColumn, SimpleRichText],
    },
  ],
}
