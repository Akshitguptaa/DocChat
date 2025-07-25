import { getAuth, clerkClient } from '@clerk/nextjs/server'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Use getAuth() to get the user's ID
  const { userId } = getAuth(req)

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Initialize the Backend SDK
  const client = await clerkClient()

  // Get the user's full Backend User object
  const user = await client.users.getUser(userId)

  return res.status(200).json({ user })
}