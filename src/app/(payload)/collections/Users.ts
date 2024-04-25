// import TestComponent from '@/app/(payload)/components/TestComponent'

export const Users = {
  slug: 'users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // {
    //   name: 'test',
    //   label: 'Test component',
    //   type: 'ui',
    //   admin: {
    //     components: {
    //       Field: TestComponent,
    //     },
    //   },
    // },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'avatar',
      label: 'Avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'biography',
      label: 'Biography',
      type: 'textarea',
    },
  ],
}
