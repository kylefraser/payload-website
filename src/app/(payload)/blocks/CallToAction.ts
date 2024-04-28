export const CallToAction = {
  slug: 'callToAction',
  labels: {
    singular: 'Call to action',
    plural: 'Call to actions',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'text',
      label: 'Text',
      type: 'textarea',
    },
    {
      name: 'buttonLabel',
      label: 'Button Label',
      type: 'text',
    },
    {
      name: 'link',
      label: 'Link',
      type: 'relationship',
      relationTo: ['pages', 'blog', 'glossary'],
    },
  ],
}
