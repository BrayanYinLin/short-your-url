import { GitHubIcon, GoogleIcon } from '@/components/Icons'
import { useTranslationStore } from '@/lib/stores'

export const GoogleSignInButton = () => {
  const { t } = useTranslationStore()
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
      {t('Continue Google')}
    </button>
  )
}

export const GithubSignInButton = () => {
  const { t } = useTranslationStore()
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
      {t('Continue GitHub')}
    </button>
  )
}
