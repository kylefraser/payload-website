import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export default async function TestCoponent() {
  const payload = await getPayloadHMR({ config: configPromise })

  const users = await payload.find({
    collection: 'users',
  })

  return (
    <>
      <div>This is a test component</div>
      {users.docs.map((user) => {
        return (
          <div key={user.id}>
            <h2>Users</h2>
            <p>{user.email}</p>
          </div>
        )
      })}
    </>
  )
}
