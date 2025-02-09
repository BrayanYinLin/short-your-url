import { ENDPOINTS } from '@/lib/definitions'
import { User } from '@/lib/stores'

export const quickAuthentication = async () => {
  try {
    const authenticate = await fetch(ENDPOINTS.AUTH, {
      method: 'GET',
      credentials: 'include'
    })

    if (!authenticate.ok) {
      throw new Error('Missing authentication')
    }

    const user: User = await authenticate.json()

    return user
  } catch (e) {
    console.error(e)
    throw e
  }
}
