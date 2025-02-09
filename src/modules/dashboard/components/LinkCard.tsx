import {
  ClickIcon,
  CopiedSuccessfullyIcon,
  CopyIcon,
  EditIcon,
  TrashIcon
} from '@/components/Icons'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'root/types'
import { DeleteModal } from './DeleteModal'
import { ORIGINS } from '@/lib/definitions'

export function LinkCard({ long, short, clicks }: Link) {
  const [copied, setCopied] = useState(false)
  const [modal, setModal] = useState(false)

  const copyToClipboard = (link: string) => {
    const url = `${ORIGINS.LOCAL}${link}`
    navigator.clipboard.writeText(url)
    setCopied(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timer) setCopied(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <article className="bg-white-hue border-[1px] border-black-hue rounded-md p-3 flex gap-4 flex-col justify-between">
      {modal &&
        createPortal(
          <DeleteModal close={() => setModal(false)} />,
          document.body
        )}
      <section className="flex justify-between">
        <div className="flex flex-col w-1/2 overflow-hidden">
          <a href={long} target="_blank" className="text-base font-semibold">
            /{short}
          </a>
          <p className="text-xs font-light overflow-hidden whitespace-nowrap overflow-ellipsis">
            {long}
          </p>
        </div>

        <div className="flex gap-1 items-start">
          <button
            type="button"
            aria-label="copy icon"
            className="p-1 rounded hover:bg-slate-100 transition-all duration-200"
            onClick={() => copyToClipboard(short)}
          >
            {copied ? <CopiedSuccessfullyIcon /> : <CopyIcon />}
          </button>
          <button
            type="button"
            aria-label="edit icon"
            className="p-1 rounded hover:bg-slate-100 transition-all duration-200"
          >
            <EditIcon />
          </button>
          <button
            type="button"
            aria-label="trash icon"
            className="p-1 rounded hover:bg-slate-100 transition-all duration-200"
            onClick={() => setModal(true)}
          >
            <TrashIcon />
          </button>
        </div>
      </section>

      <p className="flex items-center text-xs">
        <ClickIcon /> {clicks} Clicks
      </p>
    </article>
  )
}
