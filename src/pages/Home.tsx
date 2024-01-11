import { AppLayout } from '../AppLayout'
import { SectionContainer } from '../components/SectionContainer'
import { SocialPill } from '../components/SocialPill'
import { EmailIcon } from '../components/icons/EmailIcon'
import { GitHubIcon } from '../components/icons/GitHubIcon'
import { LinkedinIcon } from '../components/icons/LinkedinIcon'

export const Home = () => {
  return (
    <AppLayout>
      <main>
        <SectionContainer id="inicio" className="py-44 pb-32 flex">
          <article>
            <h1
              className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10 text-pretty"
            >
              Hola, soy Emanuel Licona <a
                href="https://linkedin.com/in/midudev"
                target="_blank"
                rel="noopener"
                className="flex justify-center items-center"
              >
                {/* <!-- <Badge>Disponible para trabajar</Badge> --> */}
              </a>
            </h1>
            <h2
              className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white"
            >
              <span>+1 años de experiencia.</span><span
                className="text-yellow-800 dark:text-yellow-200"
              >
                Desarrollador Web Backend y Frontend</span
              >
              .<span className="text-red-800 dark:text-red-200">
                De La Ceiba, Honduras</span
              >.
              <span className="text-sky-800 dark:text-sky-200"
              >Especializado en crear aplicaciones únicas.</span
              >
            </h2>

            <nav className="flex gap-4 mt-8 flex-wrap">
              <SocialPill href="https://linkedin.com/in/midudev">
                <LinkedinIcon className="size-4 md:size-6" />
                LinkedIn
              </SocialPill>
              <SocialPill href="https://github.com/EmanuelLicona">
                <GitHubIcon className="size-4 md:size-6" />
                GitHub
              </SocialPill>
              <SocialPill href="mailto:miduga@gmail.com">
                <EmailIcon className="size-4 md:size-6" />
                emanuel.licona02@gmail.com
              </SocialPill>
            </nav>
          </article>

          <img
            className="rounded-full size-3/12 mb-4 hover:scale-105 transition"
            src="/img_perfil.webp"
            alt="midudev photo"
          />
        </SectionContainer>

        <SectionContainer id="experiencia" className="py-44">
          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Experiencia
          </h3>

          <p
            className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white"
          >
            En mi tiempo libre me dedico a aprender y mejorar mis habilidades
          </p>
        </SectionContainer>
      </main>
    </AppLayout>
  )
}
