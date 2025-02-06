import { useState } from 'react'

type ProfileProps = {
  url: string
  name: string
}

export function Avatar({ url, name }: ProfileProps) {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleClick = () => {
    setToggle((prev) => !prev)
  }

  return (
    <button
      type="button"
      className="w-[35px] h-[35px] rounded-full border-[3px] border-[#fff] transition-all duration-200 hover:border-[#222222]"
      onClick={handleClick}
    >
      <img src={url ?? ''} alt={name} width={35} className="rounded-full" />
      {toggle && (
        <section className="rounded-md relative w-20 top-2 right-10 bg-white p-1 border-[1px] border-[#808080]">
          <button type="button">Log Out</button>
        </section>
      )}
    </button>
  )
}
