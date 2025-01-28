import { useState } from 'react'

type ProfileProps = {
  avatar: string
  name: string
}

export function Profile({ avatar, name }: ProfileProps) {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleClick = () => {
    setToggle((prev) => !prev)
  }

  return (
    <button
      type="button"
      className="w-[30px] h-[30px] rounded-full border-[3px] border-[#fff] hover:border-[#222222]"
      onClick={handleClick}
    >
      <img src={avatar} alt={name} width={30} className="rounded-full" />
      {toggle && (
        <section className="rounded-md relative w-20 top-2 right-10 bg-white p-1 border-[1px] border-[#808080]">
          <button type="button">Log Out</button>
        </section>
      )}
    </button>
  )
}
