import { Overlay } from '@/components/Overlay'

export function ErrorModal({
  toggle,
  message
}: {
  toggle: () => void
  message: string
}) {
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
        {message}
      </section>
    </Overlay>
  )
}
