import { Overlay } from '@/components/Overlay'
import '../styles/search-panel.css'

export function SearchPanel({ toggle }: { toggle: () => void }) {
  return (
    <Overlay>
      <section className="modal">
        <button
          type="button"
          className="bg-white text-black font-semibold px-4 py-2 rounded-md shadow-lg"
          onClick={toggle}
        >
          Close
        </button>
      </section>
    </Overlay>
  )
}
