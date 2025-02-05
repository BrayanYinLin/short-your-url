import { ClickIcon, CopyIcon, EditIcon, TrashIcon } from '@/components/Icons'
import { Link } from 'root/types'

export function LinkCard({ long, short, clicks }: Link) {
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

        <div className="flex gap-2 items-start">
          <button type="button" aria-label="copy icon">
            <CopyIcon />
          </button>
          <button type="button" aria-label="edit icon">
            <EditIcon />
          </button>
          <button type="button" aria-label="trash icon">
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
