import { GoogleAuthenticationError } from '@/lib/errors'

export const getGithubData = async ({ search }: { search: string }) => {
  const urlParams = new URLSearchParams(search)
  const code = urlParams.get('code')

  if (code) {
    try {
      const response = await fetch(
        `http://localhost:5373/api/auth/github/callback?code=${code}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error('Error fetching user data')
      }

      const user = await response.json()
      localStorage.setItem('user', JSON.stringify(user))

      return user
    } catch (e) {
      console.error('Error fetching user data:', e)
      throw e
    }
  }
}

export const authenticateGoogle = async ({ search }: { search: string }) => {
  const urlParams = new URLSearchParams(search)
  const code = urlParams.get('id_token')

  if (code) {
    try {
      const response = await fetch(
        `http://localhost:5373/api/auth/google/callback?code=${code}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new GoogleAuthenticationError('Error fetching user data')
      }

      const user = await response.json()
      localStorage.setItem('user', JSON.stringify(user))

      return user
    } catch (e) {
      console.error('Error fetching user data:', e)
      throw e
    }
  }
}
