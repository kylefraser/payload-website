'use client'

import { useFeatureFlagVariantKey } from 'posthog-js/react'

const TestingBlock = () => {
  const variant = useFeatureFlagVariantKey('home-page-conversion')
  if (variant == 'test') {
    return (
      <div>
        <p className="text-2xl text-white">this is the test</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>This is normal</p>
      </div>
    )
  }
}

export default TestingBlock
