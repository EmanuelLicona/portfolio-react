import { IProject } from '../intefaces/IProject'

export const ProjectCard = ({ project, openModal }: { project: IProject, openModal: (projectName: string) => void }) => {
  return (
    <article className="border min-[300px] max-h-[300px]  flex flex-col p-2
    bg-white/5 
    border-gray-200 rounded-md
    dark:border-gray-700 
  ">
      <img className='w-fill mx-auto  max-h-[180px]' src={project.images[0]} alt="image project" />

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
  )
}
