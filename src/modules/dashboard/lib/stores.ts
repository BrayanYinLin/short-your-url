import { Link } from 'root/types'
import { create } from 'zustand'
import { getUserLinks } from './services'

interface LinksState {
  links: Link[]
  error: string | null
  fetchLinks: () => Promise<void>
}

export const useLinksStore = create<LinksState>((set) => ({
  links: [],
  error: null,
  fetchLinks: async () => {
    set({ error: null })
    try {
      const links = await getUserLinks()

      set({ links: links })
    } catch (e) {
      console.error(e)
      set({ error: 'there was an error' })
    }
  }
}))
