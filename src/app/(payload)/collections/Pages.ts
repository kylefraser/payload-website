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
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      admin: { description: 'This is a title field' },
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
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
      admin: { description: 'Excerpt used to generate Meta Description' },
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero, TwoColumn, SimpleRichText, FormBlock],
      admin: {
        description:
          'A collection of blocks to build a page. Hint: use Live Preview to view edits in realtime',
      },
    },
  ],
  versions: {
    drafts: true,
  },
}
