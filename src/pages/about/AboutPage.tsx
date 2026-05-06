import { About } from '../../components/home/about/About'
import { Skills } from '../../components/home/skills/Skills'
import ProfesionalExperience from '../../components/home/about/ProfesionalExperience'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'

export const AboutPage = () => {
  useScrollToTopOnMount()

  return (
    <>
      <About />
      <ProfesionalExperience />
      <Skills />
    </>
  )
}
