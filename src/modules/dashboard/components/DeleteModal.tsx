import { Overlay } from '@/components/Overlay'
import { useTranslationStore } from '@/lib/stores'
import { useRef } from 'react'
import { User } from 'root/types'
import { useLinksStore } from '../lib/stores'

export function DeleteModal({
  id,
  short,
  close
}: {
  id: Required<User>['id']
  short: string
  close: () => void
}) {
  const { remove } = useLinksStore()
  const { t } = useTranslationStore()
  const modal = useRef<HTMLElement | null>(null)

  const handleClose = () => {
    modal.current?.classList.replace('animate-maximize', 'animate-minimize')

    const timer = setTimeout(() => {
      close()

      clearTimeout(timer)
    }, 290)
  }

  const handleDelete = (id: Required<User>['id']) => {
    modal.current?.classList.replace('animate-maximize', 'animate-minimize')

    const timer = setTimeout(() => {
      close()
      remove({ id })

      clearTimeout(timer)
    }, 290)
  }

  return (
    <Overlay>
      <section
        className="animate-maximize bg-white rounded-md min-w-72 p-4"
        ref={modal}
      >
        <h3 className="text-xl font-semibold">
          {t('Delete Prompt')} <span className="font-bold">/{short}</span>?
        </h3>

        <div className="w-full flex flex-row mt-4 gap-2">
          <button
            type="button"
            className="w-1/2 py-2 px-6 rounded text-lg font-medium bg-slate-200"
            onClick={handleClose}
            aria-label="close panel"
          >
            {t('Cancel')}
          </button>
          <button
            type="button"
            className="w-1/2 py-2 px-6 rounded text-lg font-medium bg-[#d3102f] text-white-hue"
            onClick={() => handleDelete(id)}
          >
            {t('Delete')}
          </button>
        </div>
      </section>
    </Overlay>
  )
}
