import { ENDPOINTS } from '@/lib/definitions'
import {
  LinkError,
  UnauthorizedAction,
  UnexpectedError,
  UserNotAuthorized
} from '@/lib/errors'
import { refreshUser } from '@/lib/services'
import { User } from 'root/types'
import { Link } from 'root/types'

const getUserAuthorizedLINK = async (): Promise<Link[]> => {
  const response = await fetch(`${ENDPOINTS.LINK}user/`, {
    method: 'GET',
    credentials: 'include'
  })

  if (!response.ok) {
    if (response.status !== 401) {
      throw new UnexpectedError('Unexpected error getting LINK')
    }

    const { msg } = await response.json()
    throw new UserNotAuthorized(msg)
  }

  const LINK: Link[] = await response.json()

  return LINK
}

export const getUserLINK = async (): Promise<Link[]> => {
  try {
    return await getUserAuthorizedLINK()
  } catch (e) {
    //  Verifica que el error se deba a que el access token expiro
    if (e instanceof UserNotAuthorized) {
      try {
        await refreshUser() //  trata de renovarlo
        return await getUserAuthorizedLINK() //  vuelve a enviar los LINK
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
  const response = await fetch(`${ENDPOINTS.LINK}`, {
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
  const response = await fetch(`${ENDPOINTS.LINK}${id}`, {
    method: 'DELETE',
    credentials: 'include'
  })

  if (!response.ok) {
    const { msg } = await response.json()
    throw new LinkError(msg)
  }
}

export const editLink = async ({ id, long }: Pick<Link, 'id' | 'long'>) => {
  const response = await fetch(`${ENDPOINTS.LINK}${id}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ long })
  })

  if (response.status === 401) {
    const { msg } = await response.json()
    throw new UnauthorizedAction(msg)
  }

  const link: Link = await response.json()

  return link
}
