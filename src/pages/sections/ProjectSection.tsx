import { useContext, useEffect, useState } from 'react'
import { SectionContainer } from '../../components/SectionContainer'
import { ModalContext } from '../../context/ModalContext'
import { getProjects } from '../../helpers/getProjects'
import { IProject } from '../../intefaces/IProject'
import { I18nContext } from '../../context/I18nProvider'

export const ProjectSection = () => {

  const contextLang = useContext(I18nContext)
  if (contextLang === null) {
    throw new Error('I18nContext not found')
  }

  const [projects, setProjects] = useState<IProject[]>([])

  const { selectProjectModal } = useContext(ModalContext)


  useEffect(() => {
    const lang = contextLang.language
    const projs: IProject[] = getProjects(lang)
    setProjects(projs)
  }, [contextLang.language])


  const openModal = (projectName: string) => {
    const project = projects.find(project => project.name === projectName)
    if (project) {
      selectProjectModal(project)
    } 
  }

  return (
    <SectionContainer id="projects" className="mt-28">
      <h3 className="
        text-3xl md:text-4xl 
        lg:text-5xl font-bold 
        text-gray-900 
        dark:text-white"
      >
        { contextLang.t.translate("projects.title") }
      </h3>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  lg:grid-cols-3 pt-7 ">
        {
          projects.map((project, index) => (
            <article key={index} className="border min-[300px] max-h-[300px]  flex flex-col p-2
              bg-white/5 
              border-gray-200 rounded-md
              dark:border-gray-700 
            ">
              <img className='w-fill mx-auto  max-h-[180px]' src="https://placehold.co/300x180" alt="image project" />

              <h3 className='text-lg mt-1'>{project.name}</h3>

              <p className='text-sm h-[70px] overflow-y-auto scrollbar_style text-gray-500 dark:text-gray-400'>
                {project.description}
              </p>

              <div className=' flex gap-3 mt-5'>
                <a className='px-3 py-1 border rounded-md hover:bg-white/10' href="#">Github</a>
                <a className='px-3 py-1 border rounded-md hover:bg-white/10' href="#">Demo</a>
                <button className='px-3 py-1 border rounded-md hover:bg-white/10' onClick={() => openModal(project.name)}>Info</button>
              </div>
            </article>
          ))
        }

      </section>
    </SectionContainer>
  )
}
