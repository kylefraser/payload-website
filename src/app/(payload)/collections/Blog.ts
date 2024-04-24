export const Blog = {
  slug: 'blog',
  labels: {
    singular: 'Blog',
    plural: 'Blogs',
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
      name: 'body',
      label: 'Body',
      type: 'richText',
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
}
