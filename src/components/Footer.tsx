import { useContext } from 'react'
import { I18nContext } from '../context/I18nProvider'

export const Footer = () => {
  const contextLang = useContext(I18nContext)
  if (contextLang === null) {
    throw new Error('I18nContext not found')
  }

  return (
    <footer
      className="rounded-lg   backdrop-blur-lg w-full xl:w-[1120px] mx-auto "
    >
      <div
        className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
      >
        <span className="text-sm sm:text-center ">
        © 2024 <span className='font-bold'>Abdiel Licona. </span>     {contextLang.t.translate("footer.copyright")}
        </span>
        <ul
          className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"
        >
          <li>
            <a href="#about" className="hover:underline me-4 md:me-6">{contextLang.t.translate("footer.about")}</a>
          </li>
          <li>
            <a href="#" className="hover:underline">{contextLang.t.translate("footer.contact")}</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
