import './styles/Header.css'

export const Header = () => {
  return (
    <header
      className="flex justify-center items-center
    mx-auto
    py-5
    sticky top-0
    w-full xl:w-[1120px]
    z-10"
    >



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
          href="#main">Inicio</a
        >

        <a
          className="hover:bg-white/10 rounded-full px-3 transition"
          href="#experience">Experiencia</a
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
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>


      </nav>

    </header>

  )
}
