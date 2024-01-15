import { useState } from 'react'
import { MenuIcon } from './icons/MenuIcon'
import './mobileMenu.css'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='relative menu__mobile bg-purple-700'>
        <div className="fixed top-3 right-3 sm:hidden ">
          <button onClick={toggleMenu} className='text-3xl' ><MenuIcon /></button>
        </div>
      </div>

      <div className={` ${isOpen ? '' : 'hidden'}
        absolute 
        bg-purple-900
        w-full
        h-[300px]
        top-0
        right-0
        p-4
        rounded-b-3xl
        shadow-2xl
        shadow-white/30
      `}>
        <ul className=''>
          <li className=''>Home</li>
          <li className=''>About</li>
          <li className=''>Projects</li>
          <li className=''>Contact</li>
        </ul>

        <button onClick={toggleMenu}>close</button>
      </div>
    </>
  )
}
