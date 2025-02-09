import { Suspense } from 'react'
import { useLinks } from '../hooks/links.hook'
import { LinkCard } from './LinkCard'
import '../styles/list-cards.css'

export function ListLinks() {
  const { links } = useLinks()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        id="list-card"
        className="grid grid-cols-1 gap-6 px-6 pb-4 overflow-y-scroll"
      >
        {links.map(({ id, long, short, clicks }) => (
          <LinkCard key={id!} long={long} short={short} clicks={clicks} />
        ))}
      </div>
    </Suspense>
  )
}
