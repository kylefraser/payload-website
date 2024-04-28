export const FormBlock = {
  slug: 'formBlock',
  labels: {
    singular: 'Form Block',
    plural: 'Form Blocks',
  },
  graphQL: {
    singularName: 'FormBlock',
  },
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
      admin: { description: 'Select a form to use' },
    },
    {
      name: 'enableIntro',
      label: 'Enable Intro Content',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Show content above the form' },
    },
    {
      name: 'introContent',
      label: 'Intro Content',
      type: 'richText',
      admin: {
        description: 'Content that will be shown above the form',
        condition: (_: any, siblingData: any) => {
          if (siblingData.enableIntro) {
            return true
          } else {
            return false
          }
        },
      },
    },
  ],
}
