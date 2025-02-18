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
      <section className="mx-3 xs:mx-2 tablet:mx-0 md:px-6 flex flex-col gap-6 pb-4 overflow-y-scroll">
        <FilterBar action={changeTerm} />
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
