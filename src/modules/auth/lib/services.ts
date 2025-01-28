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

export const authenticateGoogle = async (credential: string) => {
  try {
    const response = await fetch('http://localhost:5373/api/auth/google', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: credential })
    })

    if (!response.ok) {
      const { msg } = await response.json()
      throw new GoogleAuthenticationError(msg)
    }
    const user = await response.json()

    return user
  } catch (e) {
    if (e instanceof GoogleAuthenticationError) {
      console.error(e.message)
      throw e
    }
  }
}
