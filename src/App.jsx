import BackgroundMain from './components/BackgroundMain'
import Header from './components/Header'
import ButtonUp from './components/ButtonUp'
import Footer from './components/Footer'
import Body from './components/Body'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className='flex flex-col min-h-screen'>
        <BackgroundMain />
        <Header />
        <Body />
        <ButtonUp />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
