import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'

import { BackButton } from '../../components/backButton/BackButton'
import { CarouselImage } from '../../components/carouselImage/CarouselImage'
import { SEO, SITE_ORIGIN } from '../../components/seo/SEO'
import { useDarkMode } from '../../hooks/useDarkMode'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'
import { projectBySlug, legacyRedirects } from '../../data/projects'
import {
  buildBreadcrumbSchema,
  buildCreativeWorkSchema,
} from '../../utils/schema'

import { ProjectIntro } from './components/ProjectIntro'
import { ProjectTechStack } from './components/ProjectTechStack'
import { ProjectSourceLinks } from './components/ProjectSourceLinks'

export const ProjectPage = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const [text] = useTranslation('global')
  const { isDark } = useDarkMode()
  const { lang, localizePath } = useLanguage()

  useScrollToTopOnMount()

  const redirect = legacyRedirects.find((r) => r.from === slug)
  if (redirect) {
    return <Navigate to={localizePath(`/${redirect.to}`)} replace />
  }

  const project = projectBySlug.get(slug)
  if (!project) {
    return <Navigate to={localizePath('/')} replace />
  }

  const isEs = lang === 'ES'
  const seoLang = isEs ? 'es' : 'en'
  const projectTitle = project.titleKey
    ? text(project.titleKey)
    : project.title || project.slug
  const projectDesc = text(project.descriptionKey)
  const projectPath = localizePath(`/${project.slug}`)
  const projectImage = project.images[0]
    ? `${SITE_ORIGIN}/${project.images[0]}`
    : undefined

  const breadcrumb = buildBreadcrumbSchema([
    { name: isEs ? 'Inicio' : 'Home', url: localizePath('/') },
    {
      name: isEs ? 'Proyectos' : 'Projects',
      url: localizePath('/work'),
    },
    { name: projectTitle, url: projectPath },
  ])
  const creativeWork = buildCreativeWorkSchema({
    name: projectTitle,
    description: projectDesc,
    url: projectPath,
    image: projectImage,
  })
  const seoTitle = isEs
    ? `${projectTitle} — Proyecto de Jorge Senjudo`
    : `${projectTitle} — Project by Jorge Senjudo`
  const seoDescription = projectDesc.length > 200
    ? `${projectDesc.slice(0, 197).trim()}...`
    : projectDesc

  return (
    <Fade>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={projectPath}
        lang={seoLang}
        image={projectImage}
        hasEnglish
        schema={[breadcrumb, creativeWork]}
      />
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
