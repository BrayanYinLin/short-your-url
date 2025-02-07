import { GitHubIcon, GoogleIcon } from '@/components/Icons'

export const GoogleSignInButton = () => {
  const handleSignIn = async () => {
    const response = await fetch('http://localhost:5373/api/auth/google')
    const { link } = await response.json()
    window.location.href = link
  }

  return (
    <button
      type="button"
      className="flex gap-2 font-semibold px-4 py-2 border-[1px] bg-white border-[#808080] my-2 rounded-md"
      onClick={handleSignIn}
    >
      <GoogleIcon />
      Continue with Google
    </button>
  )
}

export const GithubSignInButton = () => {
  const handleGithubSignIn = async () => {
    const response = await fetch('http://localhost:5373/api/auth/github')
    const { link } = await response.json()
    window.location.href = link
  }

  return (
    <button
      type="button"
      className="flex gap-2 font-semibold px-4 py-2 border-[1px] bg-white border-[#808080] my-2 rounded-md"
      onClick={handleGithubSignIn}
    >
      <GitHubIcon />
      Continue with GitHub
    </button>
  )
}
