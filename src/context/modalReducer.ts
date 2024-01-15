import { IModalProject } from '../intefaces/IModalProject'
import { ModalTypes } from '../types/typesModal'


export const initializer = {
    name: '',
    description: '',
    images: [],
    technologies: [],
    isOpen: false
}

export const modalReducer = (state: IModalProject, action: { type: ModalTypes, payload?: IModalProject}) => {
  switch (action.type) {
    case ModalTypes.OPEN_MODAL:      
      return {
        ...state,
        isOpen: true
      }

    case ModalTypes.CLOSE_MODAL:
      return {
        ...state,
        ...initializer
      }

    case ModalTypes.SELECT_PROJECT:
      return {
        ...state,
        ...action.payload,
        isOpen: true
      }
    default:
      return state
  }
}