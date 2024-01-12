import { AppLayout } from '../AppLayout'
import { MainSection } from './sections/MainSection'
import { ProjectSection } from './sections/ProjectSection'
import { AboutMeSection } from './sections/AboutMeSection';
import { ReturnStart } from '../components/ReturnStart';

export const Home = () => {
  return (
    <AppLayout>
      <main>
        <MainSection />
        
        <AboutMeSection />

        {/* <ExperienceSection /> */}

        <ProjectSection />

        <ReturnStart />
      </main>
    </AppLayout>
  )
}
