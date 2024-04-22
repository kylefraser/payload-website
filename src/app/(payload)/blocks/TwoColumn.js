export const TwoColumn = {
  slug: 'twoColumn',
  labels: {
    singular: 'Two Column block',
    plural: 'Two Column blocks',
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
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'direction',
      label: 'Direction',
      type: 'select',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Reverse',
          value: 'reverse',
        },
      ],
    },
  ],
}
