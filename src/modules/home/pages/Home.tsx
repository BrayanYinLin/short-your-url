import {
  ArrowCornerIcon,
  GitHubIcon,
  LinkedInIcon,
  ShortYourURLIcon
} from '@/components/Icons'
import { auth } from '../lib/services'
import { useUserStore } from '@/lib/stores'
import { useNavigate } from 'react-router'

export default function Home() {
  const { setUser } = useUserStore()
  const navigate = useNavigate()

  const handleStart = () => {
    auth()
      .then((user) => {
        setUser(user)
        navigate('/dashboard')
      })
      .catch((e) => {
        console.error(e)
        navigate('/signin')
      })
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <ShortYourURLIcon />

      <h1 className="font-bold text-4xl my-2">Short Your URL</h1>

      <section className="m-4 flex gap-2">
        <button
          type="button"
          className="border-[1px] border-black bg-[#222] text-white rounded-[5px] px-6 py-2 text-xl font-semibold"
          onClick={handleStart}
        >
          Get Started
        </button>
        <a
          href="#"
          type="button"
          className="border-[1px] border-black rounded-[5px] px-6 py-2 flex items-center gap-2 text-xl font-semibold"
        >
          <GitHubIcon /> <span>Star on GitHub</span>
        </a>
      </section>

      <footer className="fixed bottom-6 left-6">
        <a
          href="https://www.linkedin.com/in/brayan-yin-lin-4b9a6a2ba/"
          className="flex gap-2 items-center"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon /> Brayan Yin Lin <ArrowCornerIcon />
        </a>
      </footer>
    </main>
  )
}
