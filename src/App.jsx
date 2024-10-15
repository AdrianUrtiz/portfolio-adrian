import { useContext } from 'react'
import BackgroundMain from './components/BackgroundMain'
import Header from './components/Header'
import ButtonUp from './components/ButtonUp'
import Footer from './components/Footer'
import Body from './components/Body'
import LanguageTransition from './components/LanguageTransition'
import ScrollReveal from './components/ScrollReveal'
import { LanguageProvider, LanguageContext } from './context/LanguageContext'
import useIsMobile from './hooks/useIsMobile' // Importar el hook

function AppContent() {
  const { isChanging } = useContext(LanguageContext)
  const isMobile = useIsMobile() // Usar el hook para detectar si es móvil

  return (
    <div className='flex flex-col min-h-screen'>
      <LanguageTransition isChanging={isChanging} />
      <BackgroundMain />
      <Header />
      {isMobile ? (
        <>
          <Body />
        </>
      ) : (
        <>
          <ScrollReveal>
            <Body />
          </ScrollReveal>
        </>
      )}
      <ButtonUp />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
