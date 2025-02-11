import { Suspense, useEffect } from 'react'
import { LinkCard } from './LinkCard'
import '../styles/list-cards.css'
import { useLinksStore } from '../lib/stores'
import { useNavigate } from 'react-router'

export function ListLinks() {
  const { error, fetchLinks, links } = useLinksStore()
  const navigate = useNavigate()

  useEffect(() => {
    fetchLinks().then(() => {
      if (error) {
        navigate('/', { replace: true })
      }
    })
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section
        id="list-card"
        className="w-1/2 flex flex-col gap-6 px-6 pb-4 overflow-y-scroll"
      >
        {links.map(({ id, long, short, clicks }) => (
          <LinkCard
            key={id!}
            id={id!}
            long={long}
            short={short}
            clicks={clicks}
          />
        ))}
      </section>
    </Suspense>
  )
}
