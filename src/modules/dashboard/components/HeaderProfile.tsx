import { User } from '@/lib/stores'
import { Avatar } from './Avatar'
import { LanguageIcon, SettingsIcon } from '@/components/Icons'

export function HeaderProfile({ user }: { user: User }) {
  return (
    <section className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar url={user!.avatar} name={user!.name} />
        <h1 className="text-2xl font-bold">{user.name}</h1>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="change language"
          className="p-1 rounded hover:bg-slate-100 transition-all duration-200"
        >
          <LanguageIcon />
        </button>
        <button
          type="button"
          aria-label="settings"
          className="p-1 rounded hover:bg-slate-100 transition-all duration-200"
        >
          <SettingsIcon />
        </button>
      </div>
    </section>
  )
}
