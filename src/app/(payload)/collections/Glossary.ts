import formatSlug from '@/utils/formatSlug'

export const Glossary = {
  slug: 'glossary',
  labels: {
    singular: 'Glossary',
    plural: 'Glossaries',
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
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea',
    },
    {
      name: 'definition',
      label: 'Definition',
      type: 'textarea',
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
}
