import { User, useUserStore } from '@/lib/stores'
import { useEffect } from 'react'
import { HeaderProfile } from '../components/HeaderProfile'
import { ListLinks } from '../components/ListLinks'

export function Dashboard() {
  const { user, setUser } = useUserStore()

  useEffect(() => {
    if (user == null) {
      const jsonUser = localStorage.getItem('user')

      if (jsonUser) {
        try {
          const parsedUser: User = JSON.parse(jsonUser)
          setUser(parsedUser)
        } catch (error) {
          console.error('Error parsing user from localStorage:', error)
        }
      }
    }
  }, [])

  return (
    <main className="bg-pattern h-screen overflow-y-hidden">
      <section className="h-full max-w-[700px] mx-auto py-5 grid grid-cols-2">
        <header className="float-left col-start-1 flex items-start justify-start gap-2">
          {user && <HeaderProfile user={user} />}
        </header>
        <ListLinks />
      </section>
    </main>
  )
}
