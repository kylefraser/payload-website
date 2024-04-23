import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pnfmsg5aqelcyhad.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default withPayload(nextConfig)
