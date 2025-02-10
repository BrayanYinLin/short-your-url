import { ENDPOINTS } from '@/lib/definitions'
import { LinkError } from '@/lib/errors'
import { Link } from 'root/types'

export const getUserLinks = async (): Promise<Link[]> => {
  const response = await fetch(`${ENDPOINTS.LINKS}/user/`, {
    method: 'GET',
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('there was an error')
  }

  const links: Link[] = await response.json()

  return links
}

export const logoutUser = async (): Promise<boolean> => {
  const response = await fetch(`${ENDPOINTS.AUTH}/logout`, {
    method: 'GET',
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('there was an error at logout')
  }

  return true
}

export const createLink = async ({
  long,
  short
}: {
  long: string
  short: string
}) => {
  const response = await fetch(`${ENDPOINTS.LINKS}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      long,
      short
    })
  })

  if (!response.ok) {
    const { msg } = await response.json()
    throw new LinkError(msg)
  }

  const link = await response.json()

  return link
}
