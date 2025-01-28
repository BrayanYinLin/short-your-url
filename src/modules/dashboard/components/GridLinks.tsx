import { Suspense } from 'react'
import { useLinks } from '../hooks/links.hook'
import { LinkCard } from './LinkCard'

export function GridLinks() {
  const { links } = useLinks()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {links.map(({ id, long, short, clicks }) => (
        <LinkCard key={id!} long={long} short={short} clicks={clicks} />
      ))}
    </Suspense>
  )
}
