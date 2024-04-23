import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
// import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { vercelBlobAdapter } from '@payloadcms/plugin-cloud-storage/vercelBlob'

import { Blog } from './app/(payload)/collections/Blog'
import { Media } from './app/(payload)/collections/Media'
import { Pages } from './app/(payload)/collections/Pages'
import { Users } from './app/(payload)/collections/Users'

import { Header } from './app/(payload)/globals/Header'
import { Footer } from './app/(payload)/globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const adapter = vercelBlobAdapter({
  token: process.env.BLOB_READ_WRITE_TOKEN || '',
})

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  // @ts-expect-error
  collections: [Blog, Media, Pages, Users],
  // @ts-expect-error
  globals: [Header, Footer],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    //@ts-expect-error
    cloudStorage({
      collections: {
        media: {
          adapter: adapter, // see docs for the adapter you want to use
        },
      },
    }),
  ],

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
})
