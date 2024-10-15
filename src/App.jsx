import { useContext } from 'react'
import BackgroundMain from './components/BackgroundMain'
import Header from './components/Header'
import ButtonUp from './components/ButtonUp'
import Footer from './components/Footer'
import Body from './components/Body'
import LanguageTransition from './components/LanguageTransition'
import ScrollReveal from './components/ScrollReveal'
import { LanguageProvider, LanguageContext } from './context/LanguageContext'

function AppContent() {
  const { isChanging } = useContext(LanguageContext)

  return (
    <div className='flex flex-col min-h-screen'>
      <LanguageTransition isChanging={isChanging} />
      <BackgroundMain />
      <Header />
      <ScrollReveal>
        <Body />
      </ScrollReveal>
      <ScrollReveal>
        <ButtonUp />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
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
