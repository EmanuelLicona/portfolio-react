import { AppLayout } from '../AppLayout'
import { MainSection } from './sections/MainSection'
import { ProjectSection } from './sections/ProjectSection'
import { AboutMeSection } from './sections/AboutMeSection';

export const Home = () => {
  return (
    <AppLayout>
      <main>
        <MainSection />
        
        <AboutMeSection />

        {/* <ExperienceSection /> */}

        <ProjectSection />


      </main>
    </AppLayout>
  )
}
