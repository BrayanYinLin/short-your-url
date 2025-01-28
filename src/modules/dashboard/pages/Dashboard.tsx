import { MiniShortYourURLIcon } from '@/components/Icons'
import { User, useUserStore } from '@/lib/stores'
import { useEffect } from 'react'
import { SearchButton } from '../components/SearchButton'
import { GridLinks } from '../components/GridLinks'
import { Profile } from '../components/Profile'

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
    <>
      <header className="w-[660px] mx-auto flex justify-between p-6">
        <div className="flex justify-center gap-2">
          <MiniShortYourURLIcon />
          <h1 className="font-bold text-xl">Short Your URL</h1>
        </div>
        <div className="flex justify-center gap-[30px]">
          <SearchButton />
          <Profile avatar={user!.avatar} name={user!.name} />
        </div>
      </header>
      <main className="w-[660px] mx-auto p-6">
        <section className="w-full flex flex-row justify-center items-center border-b-[1px] border-[#808080]">
          <button type="button" className="w-1/2 pb-4 text-lg font-semibold">
            Links
          </button>
          <button type="button" className="w-1/2 pb-4 text-lg font-semibold">
            Account
          </button>
          {/* <div className='border-2'></div> */}
        </section>

        <div className="grid grid-cols-2 gap-6 p-6">
          <GridLinks />
        </div>
      </main>
    </>
  )
}
