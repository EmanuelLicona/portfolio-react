import { AppLayout } from '../AppLayout'
import { MainSection } from './sections/MainSection'
import { ProjectSection } from './sections/ProjectSection'
import { AboutMeSection } from './sections/AboutMeSection'
import { ReturnStart } from '../components/ReturnStart'
import { ModalProject } from '../components/ModalProject'

export const Home = () => {
  return (
    <AppLayout>

      <main className='px-5 '>
        <MainSection />

        <AboutMeSection />

        {/* <ExperienceSection /> */}

        <ProjectSection />

      <ReturnStart />
      </main>
      <ModalProject />
    </AppLayout>
  )
}
