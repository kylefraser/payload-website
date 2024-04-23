import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  access: {
    read: () => true,
  },
  upload: {
    adminThumbnail: ({ doc }) =>
      `https://pnfmsg5aqelcyhad.public.blob.vercel-storage.com/${doc.filename}`,
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          ({ data: doc }) =>
            `https://pnfmsg5aqelcyhad.public.blob.vercel-storage.com/${doc?.filename}`,
        ],
      },
    },
  ],
}
