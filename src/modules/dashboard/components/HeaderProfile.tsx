import { User } from '@/lib/stores'
import { Avatar } from './Avatar'
import { LanguageIcon, SettingsIcon } from '@/components/Icons'
import { useEffect, useRef, useState } from 'react'
import { LogoutButton } from './LogoutButton'

export function HeaderProfile({ user }: { user: User }) {
  const langButton = useRef<HTMLButtonElement | null>(null)
  const configButton = useRef<HTMLButtonElement | null>(null)
  const [langOpt, setLangOpt] = useState<boolean>(false)
  const [configOpt, setConfigOpt] = useState<boolean>(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langButton.current &&
        !langButton.current.contains(event.target as Node)
      ) {
        setLangOpt(false)
      }

      if (
        configButton.current &&
        !configButton.current.contains(event.target as Node)
      ) {
        setConfigOpt(false)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [langOpt])

  const toggleLangOpt = () => {
    setLangOpt((prev) => !prev)
  }

  const toggleConfigOpt = () => {
    setConfigOpt((prev) => !prev)
  }

  return (
    <section className="w-full p-2 rounded-md bg-white-hue border border-black flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar url={user!.avatar} name={user!.name} />
        <h1 className="text-xl font-bold">{user.name}</h1>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            type="button"
            aria-label="change language"
            className="p-1 rounded hover:bg-slate-100 transition-all duration-200"
            onClick={toggleLangOpt}
            ref={langButton}
          >
            <LanguageIcon />
          </button>
          {langOpt && (
            <section className="rounded-md absolute w-20 top-10 right-0 bg-white p-1 border-[1px] border-[#808080] flex flex-col">
              <button type="button">ES</button>
              <button type="button">EN</button>
            </section>
          )}
        </div>
        <div className="relative">
          <button
            type="button"
            aria-label="settings"
            className="p-1 rounded hover:bg-slate-100 transition-all duration-200"
            ref={configButton}
            onClick={toggleConfigOpt}
          >
            <SettingsIcon />
          </button>
          {configOpt && (
            <section className="rounded-md absolute w-20 top-10 right-0 bg-white p-1 border-[1px] border-[#808080] flex flex-col">
              <LogoutButton />
            </section>
          )}
        </div>
      </div>
    </section>
  )
}
