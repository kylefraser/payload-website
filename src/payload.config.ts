import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
// import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { vercelBlobAdapter } from '@payloadcms/plugin-cloud-storage/vercelBlob'
import { seo } from '@payloadcms/plugin-seo'
import { redirects } from '@payloadcms/plugin-redirects'
//@ts-expect-error
import formBuilder from '@payloadcms/plugin-form-builder'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'

import { Blog } from './app/(payload)/collections/Blog'
import { Events } from './app/(payload)/collections/Events'
import { Glossary } from './app/(payload)/collections/Glossary'
import { Media } from './app/(payload)/collections/Media'
import { Pages } from './app/(payload)/collections/Pages'
import { Users } from './app/(payload)/collections/Users'

import { Footer } from './app/(payload)/globals/Footer'
import { Nav } from './app/(payload)/globals/Nav'
import { Settings } from './app/(payload)/globals/Settings'

import CallToAction from './blocks/CallToAction'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  email: nodemailerAdapter({
    defaultFromAddress: 'kyle@gooutland.com',
    defaultFromName: 'Test Name',
    transport: await nodemailer.createTransport({
      host: 'smtp.resend.com',
      secure: true,
      port: 465,
      auth: {
        user: 'resend',
        pass: `${process.env.RESEND_API_KEY}`,
      },
    }),
  }),
  collections: [
    // @ts-expect-error
    Pages,
    // @ts-expect-error
    Blog,
    // @ts-expect-error
    Events,
    // @ts-expect-error
    Glossary,
    // @ts-expect-error
    Media,
    // @ts-expect-error
    Users,
  ],
  globals: [
    // @ts-expect-error
    Settings,
    // @ts-expect-error
    Nav,
    // @ts-expect-error
    Footer,
  ],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures],
  }),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: vercelBlobAdapter({
            token: process.env.BLOB_READ_WRITE_TOKEN || '',
          }),
        },
      },
    }),
    seo({
      collections: ['pages', 'blog'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: any) => `Kilo Payload — ${doc?.title?.value}`,
      generateDescription: ({ doc }: any) => doc?.excerpt?.value,
    }),
    redirects({
      collections: ['pages'],
    }),
    formBuilder({
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        message: true,
      },
      redirectRelationships: ['pages'],
    }),
  ],

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
})
