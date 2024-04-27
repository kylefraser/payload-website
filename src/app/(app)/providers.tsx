'use client'

import { ThemeProvider } from 'next-themes'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  //@ts-expect-error
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

export function Providers({ children }: any) {
  return (
    <ThemeProvider attribute="class">
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
    </ThemeProvider>
  )
}
