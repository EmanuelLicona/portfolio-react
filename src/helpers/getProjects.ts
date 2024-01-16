import { IProject } from '../intefaces/IProject'
import { enProjects } from './data/en.projects'
import { esProjects } from './data/es.projects'

export const getProjects = (lang: string) : IProject[] => {

  if(lang === 'en') return enProjects
  
  return esProjects
}