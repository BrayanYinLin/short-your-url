import { User, useUserStore } from '@/lib/stores'
import { useEffect } from 'react'
import { HeaderProfile } from '../components/HeaderProfile'
import { ListLinks } from '../components/ListLinks'
import LinkForm from '../components/LinkForm'
import { createPortal } from 'react-dom'
import { Toast } from '../components/Toast'
import { useToast } from '../hooks/useToast'

export function Dashboard() {
  const { user, setUser } = useUserStore()
  const { toast, setToast } = useToast()

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
      {toast &&
        createPortal(
          <Toast
            title={toast.title}
            message={toast.message}
            toggle={() => setToast(null)}
          />,
          document.body
        )}
      <section className="h-full max-w-[700px] mx-auto py-5 flex">
        <div className="w-[350px] flex flex-col">
          <header className="float-left col-start-1 flex items-start justify-start gap-2 mb-2">
            {user && <HeaderProfile user={user} />}
          </header>
          <LinkForm />
        </div>
        <ListLinks />
      </section>
    </main>
  )
}
