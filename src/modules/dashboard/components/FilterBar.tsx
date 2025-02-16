import { MagnifiyingGlassIcon } from '@/components/Icons'
import { useTranslationStore } from '@/lib/stores'
import { useRef } from 'react'

type Props = {
  action: ({ term }: { term: string }) => void
}

export function FilterBar({ action }: Props) {
  const { t } = useTranslationStore()
  const input = useRef<HTMLInputElement | null>(null)

  return (
    <section className="sticky top-0 bg-white flex items-center py-1 border border-black rounded-md">
      <input
        type="text"
        name="filter"
        className="w-[85%] px-1 focus:outline-none"
        placeholder={t('Search Placeholder')}
        ref={input}
      />
      <button
        type="button"
        aria-label="search links"
        className="w-[15%] px-0"
        onClick={() => action({ term: input.current?.value || '' })}
      >
        <MagnifiyingGlassIcon />
      </button>
    </section>
  )
}
