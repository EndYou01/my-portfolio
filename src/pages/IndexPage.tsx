import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import { About } from '../components/home/about/About'
import { Skills } from '../components/home/skills/Skills'
import { WaveBlock } from '../components/home/wave/WaveBlock'
import { Work } from '../components/home/work/Work'
import { StatsCards } from '../components/statsCards/StatsCards'

export const IndexPage = () => {
  const [scrollPosition] = useState(0)

  return (
    <div className="indexContainer">
      <main className="main">
        <WaveBlock />

        <div
          className={
            scrollPosition > 20 ? 'hidden_animated_arrow' : 'animated_arrow'
          }
        >
          <BsChevronDown />
        </div>

        <StatsCards />
        <About />
        <Work />
        <Skills />
      </main>
    </div>
  )
}
