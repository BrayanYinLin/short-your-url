import {
  ClickIcon,
  CopiedSuccessfullyIcon,
  CopyIcon,
  EditIcon,
  TrashIcon
} from '@/components/Icons'
import { useEffect, useState } from 'react'
import { Link } from 'root/types'

export function LinkCard({ long, short, clicks }: Link) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link)
    setCopied(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timer) setCopied(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <article className="border-[1px] border-[#808080] rounded-md p-3 flex gap-4 flex-col justify-between">
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
            onClick={() => copyToClipboard(long)}
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
