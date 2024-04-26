import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generateMeta } from '../../../utils/generateMeta'
import { PageTemplate } from './page.client'
import { EmailTemplate } from '../../../components/EmailTemplate'
import { Resend } from 'resend'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params

  let page

  const payload = await getPayload({
    config: configPromise,
  })

  try {
    page = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
        _status: {
          equals: 'published',
        },
      },
      limit: 1,
    })
  } catch (error) {}

  return generateMeta({ doc: page?.docs[0] })
}

async function send(name: string, email: string, subject: string) {
  'use server'

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: email,
    subject: subject,
    react: EmailTemplate({ firstName: name }),
  })
}

export default async function Page({ params }: any) {
  const { slug } = params

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 100,
  })

  if (!data?.docs[0]) {
    return notFound()
  }

  return <PageTemplate page={data?.docs[0]} send={send} />
}
