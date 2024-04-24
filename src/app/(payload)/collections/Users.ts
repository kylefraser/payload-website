import TestComponent from '@/app/(payload)/components/TestComponent'

export const Users = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'test',
      label: 'Test component',
      type: 'ui',
      admin: {
        components: {
          Field: TestComponent,
        },
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}
