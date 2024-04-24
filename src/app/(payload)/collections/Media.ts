export const Media = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  access: {
    read: () => true,
  },
  upload: {
    adminThumbnail: ({ doc }: any) =>
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
          ({ data: doc }: any) =>
            `https://pnfmsg5aqelcyhad.public.blob.vercel-storage.com/${doc?.filename}`,
        ],
      },
    },
  ],
}
