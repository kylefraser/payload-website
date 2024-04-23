export const Nav = {
  slug: 'nav',
  labels: 'Nav',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navLinks',
      label: 'Nav Links',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
    },
  ],
}
