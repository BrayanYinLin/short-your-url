export const resource = {
  en: {
    'Get Started': 'Get Started',
    'Star on Github': 'Star on Github',
    'Continue Google': 'Continue with Google',
    'New Link': 'Create new short link',
    Create: 'Create Link'
  },
  es: {
    'Get Started': 'Empezar',
    'Star on Github': 'Dame un estrella en Github',
    'Continue Google': 'Continuar con Google',
    'New Link': 'Crear nuevo link corto',
    Create: 'Crear Hipervinculo'
  }
}

export type Resource = typeof resource
export type Language = keyof typeof resource
export type TranslationKeys = keyof (typeof resource)['en']
