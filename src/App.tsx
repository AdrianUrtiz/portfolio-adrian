import { ButtonUp } from '@/components/ButtonUp'
import { About } from '@/components/portfolio/About'
import { Contact } from '@/components/portfolio/Contact'
import { Experience } from '@/components/portfolio/Experience'
import { Footer } from '@/components/portfolio/Footer'
import { Hero } from '@/components/portfolio/Hero'
import { LanguageTransition } from '@/components/portfolio/LanguageTransition'
import { Navbar } from '@/components/portfolio/Navbar'
import { Projects } from '@/components/portfolio/Projects'
import { Stack } from '@/components/portfolio/Stack'

import { useComeBackTitle } from '@/hooks/useComeBackTitle'

import { useI18n } from '@/i18n/useI18n'

export const App = () => {
  const { isChangingLanguage, messages } = useI18n()

  useComeBackTitle(messages.comebackTitle)

  return (
    <div className="bg-background text-foreground min-h-screen">
      <LanguageTransition isChanging={isChangingLanguage} />
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Experience />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
      <ButtonUp />
    </div>
  )
}
