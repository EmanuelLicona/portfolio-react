import { useContext } from 'react'
import { SectionContainer } from '../../components/SectionContainer'
import { I18nContext } from '../../context/I18nProvider'
import { FaBootstrap, FaJava, FaLaravel, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiMariadbfoundation, SiMysql, SiNestjs, SiPhp, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi'

export const AboutMeSection = () => {

  const contextLang = useContext(I18nContext)
  if (contextLang === null) {
    throw new Error('I18nContext not found')
  }

  return (
    <SectionContainer id="about" className="md:mt-28">
      <h3 className="
        text-3xl md:text-4xl 
        lg:text-5xl font-bold 
        text-gray-900 
        dark:text-white"
      >
        {contextLang.t.translate("aboutMe.title")}
      </h3>

      <p className="text-lg text-pretty font-normal text-gray-500 dark:text-gray-400 mt-2">

        {contextLang.t.translate("aboutMe.description")}
      </p>

      <h4 className="
      mt-12
        text-3xl 
       font-bold 
        text-gray-900 
        dark:text-white"
        id='experience'
      >
        {contextLang.t.translate("experience.title")}

      <a
        className=' text-xl text-pretty ms-4  border px-3 rounded-md hover:bg-white/10'
        href="/media/portfolio.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >{contextLang.t.translate("portfolio.download")}</a>
      </h4>

      <ol className="relative border-s border-gray-200 dark:border-purple-950 mt-12">

        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-purple-900"></div>
          <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">{contextLang.t.translate("experience.content1.date")}</time>
          <h3 className="text-2xl mt-3 font-semibold text-gray-900 dark:text-white">{contextLang.t.translate("experience.content1.title")}</h3>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">

            {contextLang.t.translate("experience.content1.description")}
          </p>
        </li>

      </ol>

      <h4 className="mt-12 text-3xl font-bold text-gray-900 dark:text-white">
        {contextLang.t.translate("skills.title")}
      </h4>
      <section className=" flex flex-col md:flex-row  gap-4  md:justify-between pt-7">

        <ul className=" flex flex-col gap-3 text-lg text-pretty font-normal text-gray-500 dark:text-gray-400 mt-2">
          <li>
            <span className='font-bold text-gray-300'>{contextLang.t.translate("skills.content.title1")}</span>
            {/* <p>{contextLang.t.translate("skills.content.description1")}</p> */}

            <ul className='flex gap-6 mt-3'>
              <li><FaJava className='text-5xl' /></li>

              <li><IoLogoJavascript className='text-5xl' /></li>

              <li><SiTypescript className='text-5xl' /></li>

              <li><SiPhp className='text-5xl' /></li>

            </ul>
          </li>

          <li className='mt-3'>
            <span className='font-bold text-gray-300'>{contextLang.t.translate("skills.content.title2")}</span>
            {/* <p>{contextLang.t.translate("skills.content.description2")}</p> */}

            <ul className='flex gap-6 mt-3'>

              <li><FaReact className='text-5xl' /></li>
              <li><FaVuejs className='text-5xl' /></li>
              <li><FaBootstrap  className='text-5xl' /></li>
              <li><SiTailwindcss  className='text-5xl' /></li>
            </ul>
          </li>

          <li>
            <span className='font-bold text-gray-300'>{contextLang.t.translate("skills.content.title3")}</span>
            {/* <p>{contextLang.t.translate("skills.content.description3")}</p> */}

            <ul className='flex gap-6 mt-3'>
              <li><FaNodeJs className='text-5xl' /></li>
              <li><SiNestjs className='text-5xl' /></li>
              <li><FaLaravel  className='text-5xl' /></li>
            </ul>

          </li>

          <li>
            <span className='font-bold text-gray-300'>{contextLang.t.translate("skills.content.title4")}</span>
            {/* <p>{contextLang.t.translate("skills.content.description4")}</p> */}

            <ul className='flex gap-6 mt-3'>
              <li><SiMysql className='text-5xl' /></li>
              <li><BiLogoMongodb className='text-5xl' /></li>
              <li><BiLogoPostgresql className='text-5xl' /></li>
              <li><SiMariadbfoundation className='text-5xl' /></li>
            </ul>
          </li>

          <li className='mt-3'>
            <span className='font-bold text-gray-300'>{contextLang.t.translate("skills.content.aditional.title")}</span>
            <ul className='flex flex-col list-disc ps-6 gap-4'>

              {/* <li>
                <p>
                  <span className='font-bold text-gray-300'>{contextLang.t.translate("skills.content.aditional.subtitle1")} </span>
                  {contextLang.t.translate("skills.content.aditional.description1")}
                </p>
              </li> */}

              <li>
                <p>
                  <span className='font-bold text-gray-300'>{contextLang.t.translate("skills.content.aditional.subtitle2")} </span>
                  {contextLang.t.translate("skills.content.aditional.description2")}
                </p>
              </li>

              <li>
                <p>
                  <span className='font-bold text-gray-300'>{contextLang.t.translate("skills.content.aditional.subtitle3")} </span>
                  {contextLang.t.translate("skills.content.aditional.description3")}
                </p>
              </li>

              <li>
                <p>
                  <span className='font-bold text-gray-300'>{contextLang.t.translate("skills.content.aditional.subtitle4")} </span>
                  {contextLang.t.translate("skills.content.aditional.description4")}
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
        {contextLang.t.translate("education.title")}
      </h4>

      <p className="text-lg text-pretty font-normal text-gray-500 dark:text-gray-400 mt-2">
        {contextLang.t.translate("education.description1")}
      </p>
      <p className='text-lg text-pretty font-normal text-gray-500 dark:text-gray-400 mt-2'>
        {contextLang.t.translate("education.description2")}
      </p>

    </SectionContainer>
  )
}
