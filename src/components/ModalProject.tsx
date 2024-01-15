import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import { IModalProject } from '../intefaces/IModalProject'

export const ModalProject = () => {
  const { closeModal, modalState }: { modalState: IModalProject, closeModal: () => void } = useContext(ModalContext)

  const { name, description, isOpen, technologies } = modalState

  const handleCloseModal = () => {
    closeModal()
  }

  return (

    // Background
    <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 z-40 bg-black/80`}>

      {/* Modal */}

      <div className="
          absolute

          w-full
          h-1/2

          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          sm:w-1/2 
          sm:h-1/2

          bg-white rounded-lg p-4 text-black z-50">
        <h1 className="text-2xl font-bold mb-4 text-center">{name}</h1>

        <div className='w-full max-h-[220px] mb-4'>
          <img className='w-full max-h-[200px]' src="https://placehold.co/300x180" alt="" />
        </div>
        {/* Content */}
        <div className=' max-h-[140px] overflow-y-scroll scrollbar_style'>
          <p>{description}</p>

          {
            technologies.length > 0 &&
            <ul className="list-disc list-inside mt-5">
              {
                technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))
              }
            </ul>
          }
        </div>

        <button onClick={handleCloseModal}
          className="bg-purple-500 hover:bg-purple-700 text-white py-[1px] px-4 rounded
            absolute bottom-1 right-1
          "
        >Close</button>
      </div>


    </div>
  )
}
