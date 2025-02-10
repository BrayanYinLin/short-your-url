import { User } from '@/lib/stores'
import { Avatar } from './Avatar'
import { SettingsButton } from './SettingsButton'
import { LanguageButton } from '@/components/LanguageButton'

export function HeaderProfile({ user }: { user: User }) {
  return (
    <section className="w-full p-2 rounded-md bg-white-hue border border-black flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar url={user!.avatar} name={user!.name} />
        <h1 className="text-xl font-bold">{user.name}</h1>
      </div>

      <div className="flex items-center gap-2">
        <LanguageButton />
        <SettingsButton />
      </div>
    </section>
  )
}
