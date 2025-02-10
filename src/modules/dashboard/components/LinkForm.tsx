import { FormEvent, useRef } from 'react'
import { createLink } from '../lib/services'
import { useLinksStore } from '../lib/stores'

export default function LinkForm() {
  const shortInput = useRef<HTMLInputElement | null>(null)
  const linkInput = useRef<HTMLInputElement | null>(null)
  const { fetchLinks } = useLinksStore()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const short = String(data.get('short'))
    const long = String(data.get('long'))

    if (!short || !long) {
      return
    }

    try {
      await createLink({ long, short })
      await fetchLinks()

      shortInput.current?.setAttribute('value', '')
      linkInput.current?.setAttribute('value', '')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white-hue col-start-1 min-h-12 flex flex-col border border-black rounded-md p-3 gap-2"
    >
      <h2 className="font-bold text-lg">New Link</h2>
      <label htmlFor="short">Short</label>
      <input
        type="text"
        name="short"
        id="short"
        className="focus:outline-none border border-black-hue p-1 rounded"
        placeholder="My-link-short"
        required
      />
      <label htmlFor="long">Link</label>
      <input
        type="text"
        name="long"
        id="long"
        placeholder="https://example.com"
        className="focus:outline-none border border-black-hue p-1 rounded"
      />
      <input
        className="w-full p-1 rounded text-lg text-white font-semibold bg-black-hue border border-black-hue hover:cursor-pointer"
        type="submit"
        value="Create"
      />
    </form>
  )
}
