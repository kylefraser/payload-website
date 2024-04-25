import formatSlug from '@/utils/formatSlug'

export const Blog = {
  slug: 'blog',
  labels: {
    singular: 'Blog',
    plural: 'Blogs',
  },
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: ({ data }: any) => `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/blog/${data.slug}`,
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
      name: 'body',
      label: 'Body',
      type: 'richText',
    },
  ],
  versions: {
    drafts: true,
  },
}
