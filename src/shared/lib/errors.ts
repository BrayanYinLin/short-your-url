const createError = ({ name }: { name: string }) => {
  return class CustomError extends Error {
    constructor(message: string) {
      super(message)
      this.name = name
    }
  }
}

export const GoogleAuthenticationError = createError({
  name: 'GoogleAuthenticationError'
})
export const LinkError = createError({ name: 'LinkError' })
