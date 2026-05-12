import { About } from '../../components/home/about/About'
import { Skills } from '../../components/home/skills/Skills'
import ProfesionalExperience from '../../components/home/about/ProfesionalExperience'
import { WaveBlock } from '../../components/home/wave/WaveBlock'
import { StatsCards } from '../../components/statsCards/StatsCards'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'

export const AboutPage = () => {
  useScrollToTopOnMount()

  return (
    <>
      <WaveBlock />
      <StatsCards />
      <About />
      <ProfesionalExperience />
      <Skills />
    </>
  )
}
