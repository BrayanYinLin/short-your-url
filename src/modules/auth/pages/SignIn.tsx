import { GitHubIcon, ShortYourURLIcon } from '@/components/Icons'
import { useUserStore } from '@/lib/stores'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router'
import { authenticateGoogle } from '../lib/services'
import { createPortal } from 'react-dom'
import { ErrorModal } from '../components/ErrorModal'
import { useState } from 'react'
import { GoogleAuthenticationError } from '@/lib/errors'

export default function SignIn() {
  const { setUser } = useUserStore()
  const [toggle, setToggle] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const navigate = useNavigate()

  const handleGithubSignIn = async () => {
    const response = await fetch('http://localhost:5373/api/auth/github')
    const { link } = await response.json()
    window.location.href = link
  }

  const handleSignIn = async (response: CredentialResponse) => {
    const { credential } = response
    try {
      const user = await authenticateGoogle(credential!)

      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/dashboard', { replace: true })
    } catch (e) {
      console.error(e)
      if (e instanceof GoogleAuthenticationError) {
        setMessage(e.message)
        setToggle(true)
      }
    }
  }

  const handleError = () => {
    console.log('Error authenticating')
  }
  return (
    <main className="bg-pattern bg-repeat min-h-screen flex flex-col items-center justify-center">
      <ShortYourURLIcon />
      <section className="m-4 flex flex-col">
        <GoogleLogin onSuccess={handleSignIn} onError={handleError} />
        <button
          type="button"
          className="flex gap-2 font-semibold px-4 py-2 border-[1px] bg-white border-[#808080] my-2 rounded-md"
          onClick={handleGithubSignIn}
        >
          <GitHubIcon />
          Continue with GitHub
        </button>
      </section>

      {toggle &&
        createPortal(
          <ErrorModal
            toggle={() => setToggle((prev) => !prev)}
            message={message}
          />,
          document.body
        )}
    </main>
  )
}
