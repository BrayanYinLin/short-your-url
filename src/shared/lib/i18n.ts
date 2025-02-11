/* eslint-disable prettier/prettier */
export const resource = {
  en: {
    'Get Started': 'Get Started',
    'Star on Github': 'Star on Github',
    'Continue Google': 'Continue with Google',
    'Continue GitHub': 'Continue with GitHub',
    'Create Shortened Link': 'Create shortened link',
    'Shorten': 'Shorten link',
    'Creating Link Error': 'An error occurred while creating the link',
    'New Link Confirmation': 'Short link successfully created',
    'Delete Prompt': 'Do you want to delete',
    Delete: 'Delete link',
    Cancel: 'Cancel',
    'Edit Confirmation': 'Edit link',
    'Logout': 'Logout',
    'Edit Title': 'Edit',
    'Link': 'Link'
  },
  es: {
    'Get Started': 'Empezar',
    'Star on Github': 'Danos una estrella en GitHub',
    'Continue Google': 'Continuar con Google',
    'Continue GitHub': 'Continuar con GitHub',
    'Create Shortened Link': 'Crear enlace acortado',
    'Shorten': 'Acortar link',
    'Creating Link Error': 'Ocurrió un error al crear el enlace',
    'New Link Confirmation': 'Enlace corto creado exitosamente',
    'Delete Prompt': '¿Quieres borrar ',
    Delete: 'Eliminar enlace',
    Cancel: 'Cancelar',
    'Edit Confirmation': 'Editar enlace',
    'Logout': 'Cerrar sesión',
    'Edit Title': 'Editar',
    'Link': 'Enlace'
  }
}

export type Resource = typeof resource
export type Language = keyof typeof resource
export type TranslationKeys = keyof (typeof resource)['en']
