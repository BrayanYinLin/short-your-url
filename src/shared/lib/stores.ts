import { create } from 'zustand'

export type User = {
  id?: string
  name: string
  email: string
  avatar: string
  provider: {
    provider_id?: string
    provider_name: string
  }
  created_at?: string
  index?: number
}

interface UserState {
  user: User | null
  setUser: (user: User) => void
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user }))
}))

export { useUserStore }
