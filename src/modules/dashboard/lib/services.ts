import { ENDPOINTS } from '@/lib/definitions'
import {
  LinkError,
  TokenNotRefreshed,
  UnexpectedError,
  UserNotAuthorized
} from '@/lib/errors'
import { User } from 'root/types'
import { Link } from 'root/types'

export const refreshUser = async () => {
  const response = await fetch(`${ENDPOINTS.AUTH}refresh`, {
    method: 'GET',
    credentials: 'include'
  })

  if (!response.ok) {
    const { msg } = await response.json()
    throw new TokenNotRefreshed(msg)
  }
}

const getUserAuthorizedLinks = async (): Promise<Link[]> => {
  const response = await fetch(`${ENDPOINTS.LINKS}user/`, {
    method: 'GET',
    credentials: 'include'
  })

  if (!response.ok) {
    if (response.status !== 401) {
      throw new UnexpectedError('Unexpected error getting links')
    }

    const { msg } = await response.json()
    throw new UserNotAuthorized(msg)
  }

  const links: Link[] = await response.json()

  return links
}

export const getUserLinks = async (): Promise<Link[]> => {
  try {
    return await getUserAuthorizedLinks()
  } catch (e) {
    //  Verifica que el error se deba a que el access token expiro
    if (e instanceof UserNotAuthorized) {
      try {
        await refreshUser() //  trata de renovarlo
        return await getUserAuthorizedLinks() //  vuelve a enviar los links
      } catch (e) {
        console.error(e)
        throw e
      }
    } else {
      throw e
    }
  }
}

export const logoutUser = async (): Promise<boolean> => {
  const response = await fetch(`${ENDPOINTS.AUTH}/logout`, {
    method: 'GET',
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('there was an error at logout')
  }

  localStorage.removeItem('user')

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

  const link: Link = await response.json()

  return link
}

export const deleteLink = async ({ id }: Required<Pick<User, 'id'>>) => {
  const response = await fetch(`${ENDPOINTS.LINKS}${id}`, {
    method: 'DELETE',
    credentials: 'include'
  })

  if (!response.ok) {
    const { msg } = await response.json()
    throw new LinkError(msg)
  }
}
