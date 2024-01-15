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
      {/* <div className='relative menu__mobile bg-purple-700'> */}
      <div className='relative  bg-black'>
        <div className="fixed top-1 right-3 sm:hidden p-3">
          <button onClick={toggleMenu} className='text-3xl' ><MenuIcon /></button>
        </div>
      </div>

      <div className={` ${isOpen ? '' : 'animate__animated animate__fadeOutUpBig'}
      sm:hidden
        animate__animated
        animate__fadeInDownBig
        animate__duration-300
        absolute 
        w-full
        h-[300px]
        top-0
        right-0
        p-4
        rounded-b-3xl
        bg-neutral-200 dark:bg-neutral-800/50
      backdrop-blur-2xl
        shadow-2xl
        shadow-white/30
      `}>
        <ul className='flex flex-col items-center gap-5'>
          <li className='hover:underline' onClick={toggleMenu}><a href="#main"> Home </a></li>
          <li className='hover:underline' onClick={toggleMenu}><a href="#experience"> About </a></li>
          <li>
            <select
              className="
                      border border-black rounded-full
                      px-3
                      flex flex-row items-center
                      bg-neutral-200 dark:bg-neutral-800/50
                      backdrop-blur-2xl
                      "
            >
              <option value="es">ES </option>
              <option value="en">EN</option>
            </select>

          </li>
        </ul>

        <div className='absolute  bottom-4 left-0 right-0 flex justify-center'>

        <button className='border px-4 rounded-2xl hover:bg-white/20' onClick={toggleMenu}>CLOSE</button>
        </div>
      </div>
    </>
  )
}
