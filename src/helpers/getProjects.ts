import { IProject } from '../intefaces/IProject'

export const getProjects = () : IProject[] => {
  return [
    {
      name: 'Portfolio',
      description: 'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a, ',
      urlCode: 'https://sudarshan.dev',
      urlDemo: 'https://sudarshan.dev',
      images: [
        'https://placehold.co/300x180'
      ],
      technologies: [
        'React',
        'Tailwind',
        'Typescript'
      ]
    },
    {
      name: 'Portfolio 2',  
      description: 'My personal website 2',
      urlCode: 'https://sudarshan.dev',
      urlDemo: 'https://sudarshan.dev',
      images: [
        'https://placehold.co/300x180'
      ],
      technologies: [
        'Tailwind',
        'Typescript',
        'React',
      ]
    }
  ]
}