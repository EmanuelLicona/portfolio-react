import { useContext } from 'react'
import { MobileMenu } from './MobileMenu'
import { I18nContext } from '../context/I18nProvider'

export const Header = () => {

  const contextLang = useContext(I18nContext)
  if (contextLang === null) {
    throw new Error('I18nContext not found')
  }

  return (
    <header
      className="flex justify-center items-center
    mx-auto
    py-5
    sticky top-0
    w-full xl:w-[1120px]
    z-10"
    >
      <MobileMenu />

      <nav
        className="navbar
        hidden
    border border-black rounded-full
      px-3 py-1
      sm:flex flex-row items-center
      bg-neutral-200 dark:bg-neutral-800/50
      backdrop-blur-2xl
      "
      >
        <a
          className="hover:bg-white/10 rounded-full px-3 transition"
          href="#">{contextLang.t.translate("header.home")}</a>

        <a className="hover:bg-white/10 rounded-full px-3 transition" href="#about">
          {contextLang.t.translate("header.about")}
        </a>

        <a className="hover:bg-white/10 rounded-full px-3 transition"
          href="#experience">{contextLang.t.translate("header.experience")}</a>

        <a className="hover:bg-white/10 rounded-full px-3 transition" href="#projects">
          {contextLang.t.translate("header.projects")}</a>




        {/* TODO select language */}

        <select
          className="ml-auto
          border border-black rounded-full
          px-4 py-1
          ms-5
          flex flex-row items-center
          bg-neutral-200 dark:bg-neutral-800/50
          backdrop-blur-2xl
          "
          value={contextLang.language}
          onChange={(e) => contextLang.changeLanguage(e.target.value)}

        >
          <option value="es">{contextLang.t.translate("languages.es")}</option>
          <option value="en">{contextLang.t.translate("languages.en")}</option>
        </select>


      </nav>


    </header>

  )
}
