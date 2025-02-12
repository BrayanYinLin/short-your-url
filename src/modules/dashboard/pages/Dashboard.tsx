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
