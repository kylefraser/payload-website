import type { CollectionConfig } from 'payload/types'
import TestComponent from '@/components/TestComponent'

export const Users: CollectionConfig = {
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
