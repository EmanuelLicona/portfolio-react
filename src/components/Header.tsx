import './styles/Header.css'

export const Header = () => {
  return (
    <header
      className="flex justify-between items-center
    mx-auto
    py-5
    sticky top-0
    w-full xl:w-[1120px]
    z-10"
    >

      <div>
        <select id="language" className="
          bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg 
          dark:text-white 
          block w-full p-2.5 
          dark:border-black
          dark:bg-neutral-900
          dark:placeholder-gray-900
          ">
          <option value="ES">es</option>
          <option value="EN">en</option>
        </select>
      </div>

      <nav
        className="navbar
    border border-black rounded-full
      px-3 py-1
      flex flex-row items-center
      bg-neutral-200 dark:bg-neutral-800/50
      backdrop-blur-2xl"
      >
        <a
          className="hover:bg-white/10 rounded-full px-3 transition"
          href="#inicio">Inicio</a
        >

        <a
          className="hover:bg-white/10 rounded-full px-3 transition"
          href="#experiencia">Experiencia</a
        >
        <a className="hover:bg-white/10 rounded-full px-3 transition" href="#proyectos"
        >Proyectos</a
        >
        <a className="hover:bg-white/10 rounded-full px-3 transition" href="#sobre-mi"
        >Sobre mí</a
        >
        <a className="hover:bg-white/10 rounded-full px-3 transition" href="#contacto"
        >Contacto</a
        >
      </nav>

      <div></div>
    </header>

  )
}
