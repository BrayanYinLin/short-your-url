import { Overlay } from '@/components/Overlay'
import { CloseIcon } from '@/components/Icons'
import '../styles/search-panel.css'

export function SearchPanel({ toggle }: { toggle: () => void }) {
  return (
    <Overlay>
      <section className="modal">
        <button
          type="button"
          className="float-right px-4 py-2 rounded-md"
          onClick={toggle}
          aria-label="close panel"
        >
          <CloseIcon />
        </button>
      </section>
    </Overlay>
  )
}
