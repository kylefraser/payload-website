import React from 'react'

export default async function Blog() {
  const blogs = await getBlog()
  return (
    <div>
      <h1>Hello Blog</h1>
      {blogs.map((blog: any, i: number) => (
        <h1>{blog.title}</h1>
      ))}
    </div>
  )
}

async function getBlog() {
  const res = await fetch(`http://localhost:3001/api/blog?limit=100`)
  const blogs = await res.json()

  return blogs.docs
}
