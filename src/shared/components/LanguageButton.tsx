import { LanguageIcon } from '@/components/Icons'
import { useEffect, useRef, useState } from 'react'

export function LanguageButton() {
  const languageButton = useRef<HTMLButtonElement | null>(null)
  const [languageStateButton, setLanguageStateButton] = useState<boolean>(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const element = languageButton.current
      const hit = element && !element.contains(event.target as Node)

      if (hit) {
        languageButton.current?.classList.replace(
          'animate-maximize',
          'animate-minize'
        )
        const timer = setTimeout(() => {
          setLanguageStateButton(false)
          clearTimeout(timer)
        }, 300)
      }
    }

    window.addEventListener('click', handleOutsideClick)
    return () => window.removeEventListener('click', handleOutsideClick)
  }, [languageStateButton])

  const toggle = () => setLanguageStateButton((prev) => !prev)

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="change language"
        className="p-1 rounded hover:bg-slate-100 transition-all duration-200"
        onClick={toggle}
        ref={languageButton}
      >
        <LanguageIcon />
      </button>
      {languageStateButton && (
        <section className="animate-maximize rounded-md absolute w-20 top-10 right-0 bg-white p-1 border-[1px] border-[#808080] flex flex-col">
          <button type="button">ES</button>
          <button type="button">EN</button>
        </section>
      )}
    </div>
  )
}
