import { ENDPOINTS } from '@/lib/definitions'
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
