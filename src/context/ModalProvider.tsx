import { ReactNode, useReducer } from 'react'
import { ModalContext } from './ModalContext'
import { modalReducer } from './modalReducer'
import { ModalTypes } from '../types/typesModal'
import { IModalProject } from '../intefaces/IModalProject'
import { IProject } from '../intefaces/IProject'

const initializer = (): IModalProject => {
  return {
    name: '',
    description: '',
    images: [],
    technologies: [],
    isOpen: false
  }
}

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, modalDispatch] = useReducer(modalReducer, {}, initializer)

  const openModal = () => {
    modalDispatch({ type: ModalTypes.OPEN_MODAL })
  }

  const closeModal = () => {
    modalDispatch({ type: ModalTypes.CLOSE_MODAL })
  }

  const selectProjectModal = (project: IProject) => {
    modalDispatch({ type: ModalTypes.SELECT_PROJECT, payload: { ...modalState, ...project } })
  }

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal, selectProjectModal }}>
      {children}
    </ModalContext.Provider>
  )
}