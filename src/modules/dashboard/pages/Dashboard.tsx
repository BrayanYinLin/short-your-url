import { HeaderProfile } from '../components/HeaderProfile'
import { ListLinks } from '../components/ListLinks'
import LinkForm from '../components/LinkForm'
import { createPortal } from 'react-dom'
import { Toast } from '../components/Toast'
import { useToast } from '../hooks/useToast'
import { useUser } from '../hooks/useUser'

export function Dashboard() {
  const { user } = useUser()
  const { toast, setToast } = useToast()

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
      <section className="h-full xs:max-w-[90%] md:max-w-[70%] mx-auto py-5 flex flex-col">
        <div className="w-full flex flex-col">
          {user && <HeaderProfile user={user} />}
          <LinkForm />
        </div>
        <ListLinks />
      </section>
    </main>
  )
}
