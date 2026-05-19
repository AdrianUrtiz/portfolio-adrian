import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Stack } from "@/components/portfolio/Stack";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { LanguageTransition } from "@/components/portfolio/LanguageTransition";
import ButtonUp from "@/components/ButtonUp";
import useComeBackTitle from "@/hooks/useComeBackTitle";
import { useI18n } from "@/i18n/useI18n";

function App() {
  const { isChangingLanguage, messages } = useI18n();

  useComeBackTitle(messages.comebackTitle);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
  );
}

export default App;
