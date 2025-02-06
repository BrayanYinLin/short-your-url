import { GitHubIcon, GoogleIcon, ShortYourURLIcon } from '@/components/Icons'

export default function SignIn() {
  const handleGithubSignIn = async () => {
    const response = await fetch('http://localhost:5373/api/auth/github')
    const { link } = await response.json()
    window.location.href = link
  }

  const handleSignIn = async () => {
    const response = await fetch('http://localhost:5373/api/auth/google')
    const { link } = await response.json()
    window.location.href = link
  }
  return (
    <main className="bg-pattern bg-repeat min-h-screen flex flex-col items-center justify-center">
      <ShortYourURLIcon />
      <section className="m-4 flex flex-col">
        <button
          type="button"
          className="flex gap-2 font-semibold px-4 py-2 border-[1px] bg-white border-[#808080] my-2 rounded-md"
          onClick={handleSignIn}
        >
          <GoogleIcon />
          Continue with Google
        </button>
        <button
          type="button"
          className="flex gap-2 font-semibold px-4 py-2 border-[1px] bg-white border-[#808080] my-2 rounded-md"
          onClick={handleGithubSignIn}
        >
          <GitHubIcon />
          Continue with GitHub
        </button>
      </section>
    </main>
  )
}
