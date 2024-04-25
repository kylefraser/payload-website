import { Hero } from '../blocks/Hero'
import { TwoColumn } from '../blocks/TwoColumn'
import { SimpleRichText } from '../blocks/SimpleRichText'
import { FormBlock } from '../blocks/Form'
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
  admin: {
    livePreview: {
      url: ({ data }: any) => `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/${data.slug}`,
    },
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
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea',
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero, TwoColumn, SimpleRichText, FormBlock],
    },
  ],
  versions: {
    drafts: true,
  },
}
