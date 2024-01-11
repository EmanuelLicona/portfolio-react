import { ReactNode } from 'react'

export const SectionContainer = ({ id, className, children }: { id: string, className: string, children: ReactNode }) => {
  return (

    <section
      id={id}
      data-section={id}
      className={`section ${className} w-full mx-auto lg:w-[740px] pb-24`}
    >

      {children}
    </section>
  )
}
