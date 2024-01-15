import { SectionContainer } from '../../components/SectionContainer'
import { CheckIcon } from '../../components/icons/CheckIcon'

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

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam consectetur, at fugiat dolorum eum qui quia!
        Ex magnam numquam dolorum illo amet distinctio, nulla corporis.
        Ipsa incidunt numquam at labore.

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
          <h3 className="text-2xl mt-3 font-semibold text-gray-900 dark:text-white">Fullstack Developer - 021 Digital Marketing</h3>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            Responsable de la plataforma, componentes y utilidades para la creación y
            desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software.
            Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.
          </p>
        </li>

      </ol>

      <h4 className="
      mt-12
        text-3xl 
       font-bold 
        text-gray-900 
        dark:text-white"
      >
        Educacion
      </h4>


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

      <h4 className="
      mt-12
        text-3xl 
       font-bold 
        text-gray-900 
        dark:text-white"
      >
        Habilidades
      </h4>


      <section className=" md:flex  md:justify-between pt-7">

        <article className='border md:w-1/3 p-4 rounded-xl shadow-lg shadow-purple-300
          hover:-rotate-2
          duration-500
          ease-in-out
        '>
          <h3 className='text-2xl text-center pb-2 border-b-[1px]' >Frontend</h3>
          <ul className='text-md mt-3'>
            
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
          </ul>
        </article>

        <article className='border w-1/3 p-4 mx-4 rounded-xl shadow-lg shadow-purple-300
          hover:scale-110
          duration-500
          ease-in-out
        '>
          <h3 className='text-2xl text-center pb-2 border-b-[1px]' >Frontend</h3>
          <ul className='text-md mt-3'>
            
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
          </ul>
        </article>
        
        <article className='border w-1/3 p-4 rounded-xl shadow-lg shadow-purple-300
          hover:rotate-2
          duration-500
          ease-in-out
        '>
          <h3 className='text-2xl text-center pb-2 border-b-[1px]' >Frontend</h3>
          <ul className='text-md mt-3'>
            
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
            <li className='flex mt-5'>
              <CheckIcon className='mr-3' /> <p>JavaScript</p>
            </li>
          </ul>
        </article>

        
      </section>



    </SectionContainer>
  )
}
