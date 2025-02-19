import { Suspense, useEffect } from 'react'
import { LinkCard } from './LinkCard'
import { useLinksStore } from '../lib/stores'
import { useNavigate } from 'react-router'
import { FilterBar } from './FilterBar'
import { useFilter } from '../hooks/useFilter'

export function ListLinks() {
  const { error, fetchLinks } = useLinksStore()
  const { changeTerm, linksFiltered } = useFilter()
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
      <FilterBar action={changeTerm} />
      <section className="tablet:mx-0 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-4 overflow-y-scroll">
        {(linksFiltered.length > 0 || linksFiltered) &&
          linksFiltered.map(({ id, long, short, clicks }) => (
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
