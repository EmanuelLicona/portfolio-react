import { SectionContainer } from '../../components/SectionContainer'

export const ExperienceSection = () => {
  return (
    <SectionContainer id="experience" className="mt-28">
      <h3 className="
        text-3xl md:text-4xl 
        lg:text-5xl font-bold 
        text-gray-900 
        dark:text-white"
      >
        Experiencia laboral
      </h3>


      <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-12">

        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">Agosto 2022 - Diciembre 2023</time>
          <h3 className="text-2xl mt-3 font-semibold text-gray-900 dark:text-white">Fullstack Developer - 021 Digital Marketing</h3>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            Responsable de la plataforma, componentes y utilidades para la creación y
            desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software.
            Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.
          </p>
        </li>

      </ol>



    </SectionContainer>
  )
}
