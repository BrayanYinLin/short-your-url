import { useEffect, useState } from 'react'
import { Link } from 'root/types'
import { getUserLinks } from '../lib/services'

export function useLinks() {
  const [links, setLinks] = useState<Link[]>([])

  useEffect(() => {
    getUserLinks()
      .then(setLinks)
      .catch((e) => {
        console.error(e)
      })
  }, [])

  return { links }
}
