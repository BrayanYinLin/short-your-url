import { Language } from './i18n'

const LANGUAGES: Record<string, Language> = {
  'es-ES': 'es',
  'en-US': 'en'
}

export const findLanguagePreference = (): Language => {
  const storagePreference = localStorage.getItem(
    'lang-preference'
  ) as Language | null

  if (storagePreference) return storagePreference

  const navigatorPreference = LANGUAGES[navigator.language] || 'en'

  return navigatorPreference
}
