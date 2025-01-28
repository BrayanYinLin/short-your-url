import { ClickIcon, CopyIcon, EditIcon, TrashIcon } from '@/components/Icons'
import { Link } from 'root/types'

export function LinkCard({ long, short, clicks }: Link) {
  return (
    <article className="border-[1px] border-[#808080] rounded-md p-3 flex gap-4 flex-col justify-center">
      <section className="flex justify-between">
        <div className="flex flex-col w-1/2 overflow-hidden">
          <p className="text-base font-semibold">/{short}</p>
          <p className="text-xs font-light">{long}</p>
        </div>

        <div className="flex gap-1 items-start">
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
