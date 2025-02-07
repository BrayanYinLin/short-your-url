import { CloseIcon } from '@/components/Icons'
import { Overlay } from '@/components/Overlay'
import { useRef } from 'react'

export function DeleteModal({ close }: { close: () => void }) {
  const modal = useRef<HTMLElement | null>(null)

  const handleToggle = () => {
    modal.current?.classList.replace('animate-maximize', 'animate-minimize')

    const timer = setTimeout(() => {
      close()

      clearTimeout(timer)
    }, 290)
  }

  return (
    <Overlay>
      <section
        className="animate-maximize bg-white rounded-md min-w-60 p-4"
        ref={modal}
      >
        <div className="flex justify-between items-center">
          <h1>Deseas borrar</h1>

          <button
            type="button"
            className="p-1 rounded-md"
            onClick={handleToggle}
            aria-label="close panel"
          >
            <CloseIcon />
          </button>
        </div>
      </section>
    </Overlay>
  )
}
