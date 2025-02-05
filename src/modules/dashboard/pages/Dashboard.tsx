import { User, useUserStore } from '@/lib/stores'
import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { HeaderProfile } from '../components/HeaderProfile'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="max-w-[700px] mx-auto pt-5 grid grid-cols-2">
      <header className="float-left col-start-1 flex items-start justify-start gap-2">
        {user && <HeaderProfile user={user} />}
      </header>
      <Outlet />
    </main>
  )
}
