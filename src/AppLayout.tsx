import { ReactNode } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ModalProvider } from './context/ModalProvider'
import { I18nProvider } from './context/I18nProvider'
export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <I18nProvider>
        <ModalProvider>
          <div
            className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24
			[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
          ></div>

          <Header />


          {children}

          <Footer />

        </ModalProvider>
      </I18nProvider>
    </>
  )
}
