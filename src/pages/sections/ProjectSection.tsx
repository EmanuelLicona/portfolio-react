import { useContext, useEffect, useState } from 'react'
import { SectionContainer } from '../../components/SectionContainer'
import { ModalContext } from '../../context/ModalContext'
import { getProjects } from '../../helpers/getProjects'
import { IProject } from '../../intefaces/IProject'
import { I18nContext } from '../../context/I18nProvider'
import { ProjectCard } from '../../components/ProjectCard'

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
            <ProjectCard key={index} project={project} openModal={openModal} />
          ))
        }

      </section>
    </SectionContainer>
  )
}
