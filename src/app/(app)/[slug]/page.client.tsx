'use client'

import { useState } from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'
import RenderBlocks from '@/utils/RenderBlocks'

export const PageTemplate = ({ page, send }: any) => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [description, setDescription] = useState('')

  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    initialData: page,
  })

  // const handleSubmit = (event: any) => {
  //   event.preventDefault()
  //   send(name, email, description)
  // }

  return (
    <div>
      {/* {data.title}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="description"
          id="description"
          type="textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Send email</button>
      </form> */}
      <RenderBlocks layout={data?.layout} />
    </div>
  )
}
