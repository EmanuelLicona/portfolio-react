import { SectionContainer } from '../../components/SectionContainer'

export const AboutMeSection = () => {
  return (
    <SectionContainer id="experience" className="md:mt-28">
      <h3 className="
        text-3xl md:text-4xl 
        lg:text-5xl font-bold 
        text-gray-900 
        dark:text-white"
      >
        Sobre mi
      </h3>

      <p className="text-lg text-pretty font-normal text-gray-500 dark:text-gray-400 mt-2">
        
        Hola, soy Abdiel Licona, un apasionado desarrollador hondureño de 23 años con un enfoque
        integral en la ingeniería en computación.
        Mi experiencia abarca tanto el desarrollo backend como frontend, destacando mi habilidad
        para crear soluciones tecnológicas eficientes y escalables.

      </p>

      <h4 className="
      mt-12
        text-3xl 
       font-bold 
        text-gray-900 
        dark:text-white"
      >
        Experiencia laboral
      </h4>

      <ol className="relative border-s border-gray-200 dark:border-purple-950 mt-12">

        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-purple-900"></div>
          <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">Agosto 2022 - Diciembre 2023</time>
          <h3 className="text-2xl mt-3 font-semibold text-gray-900 dark:text-white">Junior Fullstack Developer - 021 Digital Marketing</h3>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            Componentes y utilidades para la creación y desarrollo de aplicaciones web.
            Implantación de medidas de integración continua y despliegue. Utilizando tecnologias
            como nestjs aprovechando su arquitectura modular y eficiente para construir servicios backend robustos
            y vuejs para la creación de interfaces de usuario atractivas y funcionales.

          </p>
        </li>

      </ol>

      <h4 className="mt-12 text-3xl font-bold text-gray-900 dark:text-white">
        Habilidades tecnicas
      </h4>
      <section className=" flex flex-col md:flex-row  gap-4  md:justify-between pt-7">

        <ul className=" flex flex-col gap-3 text-lg text-pretty font-normal text-gray-500 dark:text-gray-400 mt-2">
          <li>
            <span className='font-bold text-gray-300'>Lenguajes de programación:</span>
            <p>Multiples lenguajes de programación, incluyendo JavaScript, TypeScript, PHP y Java</p>
          </li>

          <li>
            <span className='font-bold text-gray-300'>Desarrollo frontend:</span>
            <p>Experiencia sólida en la creación de interfaces de usuario atractivas y funcionales utilizando frameworks como React y Vuejs.</p>
          </li>

          <li>
            <span className='font-bold text-gray-300'>Desarrollo backend:</span>
            <p>Experiencia específica en la creación de APIs RESTful y integración con bases de datos relacionales y no relacionales, empleando tecnologias como Node.js, Express JS, Nest Js y Laravel.</p>
          </li>

          <li>
            <span className='font-bold text-gray-300'>Bases de datos:</span>
            <p>Competencia en el diseño y gestión de bases de datos SQL y NoSQL, como MySQL, MariaDB, PostgreSQL y MongoDB.</p>
          </li>

          <li>
            <span className='font-bold text-gray-300'>Tecnologias adicionales:</span>
            <ul className='flex flex-col list-disc ps-6 gap-4'>

              <li className=''>
                <p>
                  <span className='font-bold text-gray-300'>Frameworks CSS: </span>
                  Experiencia con Tailwind CSS y Bootstrap, optimizando el desarrollo frontend para una apariencia moderna y adaptable.
                </p>
              </li>

              <li>
                <p>
                  <span className='font-bold text-gray-300'>Gestión de versiones: </span>
                  Proficiente en el uso de Git para el control de versiones y colaboración eficiente en proyectos, con experiencia específica en GitHub.
                </p>
              </li>

              <li>
                <p>
                  <span className='font-bold text-gray-300'>Contenedores y Orquestación: </span>
                  Familiarizado con Docker para la creación de contenedores y orquestación eficiente de servicios.
                </p>
              </li>

              <li>
                <p>
                  <span className='font-bold text-gray-300'>Servicios en la nube: </span>
                  Conozco y he trabajado con servicios de AWS, aprovechando la escalabilidad y potencial de la nube para desplegar aplicaciones de manera eficiente.
                </p>
              </li>


            </ul>
          </li>

        </ul>

      </section>



      <h4 className="
      mt-12
        text-3xl 
       font-bold 
        text-gray-900 
        dark:text-white"
      >
        Educacion
      </h4>

      <p className="text-lg text-pretty font-normal text-gray-500 dark:text-gray-400 mt-2">
        Actualmente, estoy termiando mi carrera en ingeniería en computación, fusionando conocimientos académicos con habilidades prácticas.
      </p>
      <p className='text-lg text-pretty font-normal text-gray-500 dark:text-gray-400 mt-2'>
        Como autodidacta comprometido, me esfuerzo por integrar las últimas tecnologías en mis proyectos, incluyendo medidas de integración continua y despliegue para garantizar la calidad del software.
      </p>









    </SectionContainer>
  )
}
