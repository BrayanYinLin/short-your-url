import { CloseIcon } from '@/components/Icons'
import { useEffect, useRef } from 'react'

type ToastProps = {
  title: string
  message: string
  toggle: () => void
}

export function Toast({ title, message, toggle }: ToastProps) {
  const toastElement = useRef<HTMLElement | null>(null)

  const handleClick = () => {
    toastElement.current?.classList.replace(
      'animate-appear',
      'animate-disappear'
    )

    const timer = setTimeout(() => {
      toggle()
      clearTimeout(timer)
    }, 400)
  }

  useEffect(() => {
    let destroyTimer: number
    const TIME_TO_START_ANIMATION = 4000
    const TIME_TO_DESTROY = 450

    const timer = setTimeout(() => {
      toastElement.current?.classList.replace(
        'animate-appear',
        'animate-disappear'
      )

      destroyTimer = setTimeout(() => {
        toggle()
      }, TIME_TO_DESTROY)
    }, TIME_TO_START_ANIMATION)

    return () => {
      clearTimeout(timer)
      clearTimeout(destroyTimer)
    }
  }, [])

  return (
    <article
      className="animate-appear md:w-72 fixed bottom-2 left-2 border border-black-hue p-2 bg-white-hue rounded-md"
      ref={toastElement}
    >
      <div className="flex justify-between">
        <p className="text-xl font-bold">{title}</p>
        <button type="button" aria-label="close toast" onClick={handleClick}>
          <CloseIcon />
        </button>
      </div>
      <p className="text-xs overflow-hidden whitespace-nowrap overflow-ellipsis w-30">
        {message}
      </p>
    </article>
  )
}
