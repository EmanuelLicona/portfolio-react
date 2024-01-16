import { useContext } from 'react'
import { IModalProject } from '../intefaces/IModalProject'
import { ModalContext } from '../context/ModalContext'
import { ImageCarousel } from './ImageCarousel'

export const ModalProject = () => {
  const { closeModal, modalState }: { modalState: IModalProject, closeModal: () => void } = useContext(ModalContext)

  const { name, description, isOpen, technologies, images } = modalState
  const handleCloseModal = () => {
    closeModal()
  }

  return (
    <div className={` ${isOpen ? '' : 'hidden'} fixed flex items-center justify-center inset-0 bg-black/50 z-50 text-black`}>
      
      <div className='relative w-full h-1/2 md:w-1/2 md:h-1/2 border mx-2 
        md:mx-0 bg-white rounded-md
         overflow-y-scroll scrollbar_style
        '>

        <h1 className="text-2xl font-bold my-1 text-center">{name}</h1>

        <div className='w-full mb-2'>
          <ImageCarousel images={images} />
        </div>


        <div className='h-fit'>
          <p className='text-pretty  px-2'>{description}</p>

          {
            technologies.length > 0 &&
            <ul className=" list-disc list-inside mt-1 px-2">
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
            absolute top-1 right-1
          "
        >x</button>
      </div>
    </div>
  )
}
