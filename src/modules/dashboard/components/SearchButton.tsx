import { MagnifiyingGlassIcon } from '@/components/Icons'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { SearchPanel } from './SearchPanel'

export function SearchButton() {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <>
      <button type="button" aria-label="search button" onClick={handleToggle}>
        <MagnifiyingGlassIcon />
      </button>
      {toggle &&
        createPortal(<SearchPanel toggle={handleToggle} />, document.body)}
    </>
  )
}
