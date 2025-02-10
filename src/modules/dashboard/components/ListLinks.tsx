import { Suspense, useEffect } from 'react'
import { LinkCard } from './LinkCard'
import '../styles/list-cards.css'
import { useLinksStore } from '../lib/stores'

export function ListLinks() {
  const { fetchLinks, links } = useLinksStore()

  useEffect(() => {
    fetchLinks()
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        id="list-card"
        className="w-1/2 grid grid-cols-1 gap-6 px-6 pb-4 overflow-y-scroll"
      >
        {links.map(({ id, long, short, clicks }) => (
          <LinkCard key={id!} long={long} short={short} clicks={clicks} />
        ))}
      </div>
    </Suspense>
  )
}
