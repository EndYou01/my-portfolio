import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'

import { BackButton } from '../../components/backButton/BackButton'
import { CarouselImage } from '../../components/carouselImage/CarouselImage'
import { useDarkMode } from '../../hooks/useDarkMode'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'
import { projectBySlug, legacyRedirects } from '../../data/projects'

import { ProjectIntro } from './components/ProjectIntro'
import { ProjectTechStack } from './components/ProjectTechStack'
import { ProjectSourceLinks } from './components/ProjectSourceLinks'

export const ProjectPage = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const [text] = useTranslation('global')
  const { isDark } = useDarkMode()

  useScrollToTopOnMount()

  const redirect = legacyRedirects.find((r) => r.from === slug)
  if (redirect) {
    return <Navigate to={`/${redirect.to}`} replace />
  }

  const project = projectBySlug.get(slug)
  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <Fade>
      <div className={isDark ? 'container' : 'container color_dark'}>
        <main className="main">
          <BackButton />

          <ProjectIntro
            title={project.title}
            titleKey={project.titleKey}
            descriptionKey={project.descriptionKey}
            ratingKey={project.ratingKey}
            collaborators={project.collaborators}
          />

          <CarouselImage images={project.images} />
          <br />

          <div className="project_info">
            <h2>{text('snb.h2_1')}</h2>

            <ProjectTechStack
              frontEnd={project.frontEnd}
              backEnd={project.backEnd}
            />

            <br />
            <br />

            <ProjectSourceLinks
              source={project.source}
              liveUrl={project.liveUrl}
            />
          </div>
        </main>
      </div>
    </Fade>
  )
}
