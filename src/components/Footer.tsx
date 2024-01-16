
export const Footer = () => {
  return (
    <footer
      className="rounded-lg   backdrop-blur-lg w-full xl:w-[1120px] mx-auto "
    >
      <div
        className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
      >
        <span className="text-sm sm:text-center ">
        © 2024 <span className='font-bold'>Abdiel Licona. </span>Todos los derechos reservados.
        </span>
        <ul
          className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"
        >
          <li>
            <a href="#about" className="hover:underline me-4 md:me-6">Sobre mí</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
