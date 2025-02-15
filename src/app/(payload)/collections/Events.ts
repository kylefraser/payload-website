import { Hero } from '../blocks/Hero'
import { TwoColumn } from '../blocks/TwoColumn'
import { SimpleRichText } from '../blocks/SimpleRichText'
import formatSlug from '@/utils/formatSlug'

export const Events = {
  slug: 'events',
  labels: {
    singular: 'Event',
    plural: 'Events',
  },
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: ({ data }: any) => `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/events/${data.slug}`,
    },
    useAsTitle: 'title',
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
      name: 'location',
      label: 'Location',
      type: 'text',
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
    },
  ],
  versions: {
    drafts: true,
  },
}
