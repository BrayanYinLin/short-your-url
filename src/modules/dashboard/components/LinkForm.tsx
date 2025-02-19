import { FormEvent, useRef } from 'react'
import { createLink } from '../lib/services'
import { useLinksStore } from '../lib/stores'
import { showToast } from '../lib/events'
import { LinkError } from '@/lib/errors'
import { useTranslationStore } from '@/lib/stores'

export default function LinkForm() {
  const { t } = useTranslationStore()
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

    if (short === 'dashboard' || short === 'signin' || short === 'auth') {
      return
    }

    try {
      // eslint-disable-next-line no-useless-escape
      const shortRegex = /^[A-Za-z0-9\-\+\*\_]*$/g
      const urlRegex =
        /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s?#]*)?(\?[^\s#]*)?(#[^\s]*)?$/g

      if (!shortRegex.test(short) || !urlRegex.test(long)) {
        return
      }

      const link = await createLink({ long, short })
      await fetchLinks()

      shortInput.current!.value = ''
      linkInput.current!.value = ''
      showToast({
        title: t('New Link Confirmation'),
        message: link.long,
        isError: false
      })
    } catch (e) {
      console.error(e)
      if (e instanceof LinkError) {
        showToast({
          title: t('Creating Link Error'),
          message: e.message,
          isError: false
        })
      }
    }
  }

  const handleShortTyping = () => {
    // eslint-disable-next-line no-useless-escape
    const shortRegex = /^[A-Za-z0-9\-\+\*\_]+$/g

    if (shortInput.current!.value === '') {
      shortInput.current?.classList.replace(
        'border-[#d3102f]',
        'border-black-hue'
      )
      return
    }

    if (shortRegex.test(shortInput.current!.value)) {
      shortInput.current?.classList.replace(
        'border-[#d3102f]',
        'border-black-hue'
      )
    } else {
      shortInput.current?.classList.replace(
        'border-black-hue',
        'border-[#d3102f]'
      )
    }
  }

  const handleURLTyping = () => {
    const urlRegex =
      /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/

    if (urlRegex.test(linkInput.current!.value)) {
      linkInput.current?.classList.replace(
        'border-[#d3102f]',
        'border-black-hue'
      )
    } else {
      linkInput.current?.classList.replace(
        'border-black-hue',
        'border-[#d3102f]'
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-3 xs:mx-2 tablet:mx-0 mb-4 bg-white-hue col-start-1 min-h-12 flex flex-col border border-black rounded-md p-3 gap-2"
    >
      <h2 className="font-bold text-lg">{t('Create Shortened Link')}</h2>
      <label htmlFor="short">Short</label>
      <input
        type="text"
        name="short"
        id="short"
        placeholder="My-link-short"
        className="focus:outline-none border border-black-hue p-1 rounded"
        ref={shortInput}
        onChange={handleShortTyping}
        required
      />
      <label htmlFor="long">Link</label>
      <input
        type="text"
        name="long"
        id="long"
        placeholder="https://example.com"
        className="focus:outline-none border border-black-hue p-1 rounded"
        ref={linkInput}
        onChange={handleURLTyping}
        required
      />
      <input
        className="w-full p-1 rounded text-lg text-white font-semibold bg-black-hue border border-black-hue hover:cursor-pointer"
        type="submit"
        value={t('Shorten')}
      />
    </form>
  )
}
