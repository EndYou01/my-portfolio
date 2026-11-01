import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Navigate, useParams } from 'react-router-dom'

import { BackButton } from '../../components/backButton/BackButton'
import { ProjectCard } from '../../components/projectCard/ProjectCard'
import { SEO, SITE_ORIGIN } from '../../components/seo/SEO'
import { RevealTitle } from '../../components/ui/RevealTitle'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { legacyRedirects, projectBySlug } from '../../data/projects'
import { workCards } from '../../data/workCards'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'
import {
  buildBreadcrumbSchema,
  buildCreativeWorkSchema,
} from '../../utils/schema'

const normalizeSrc = (src: string) =>
  src.startsWith('/') || src.startsWith('http') ? src : `/${src}`

const GalleryImage = ({ src, alt, eager }: { src: string; alt: string; eager?: boolean }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const image = (
    <img
      src={normalizeSrc(src)}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      className="h-auto w-full bg-carbon"
    />
  )
  return mounted ? <Zoom>{image}</Zoom> : image
}

const Detail = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <dt className="rotulo">{label}</dt>
    <dd className="mt-1.5">{children}</dd>
  </div>
)

export const ProjectPage = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const [text] = useTranslation('global')
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
    { name: isEs ? 'Proyectos' : 'Projects', url: localizePath('/work') },
    { name: projectTitle, url: projectPath },
  ])
  const creativeWork = buildCreativeWorkSchema({
    name: projectTitle,
    description: projectDesc,
    url: projectPath,
    image: projectImage,
  })

  const cardIdx = workCards.findIndex((c) => c.url === `/${project.slug}`)
  const card = workCards[cardIdx]
  const next = [1, 2, 3].map(
    (n) => workCards[(Math.max(cardIdx, 0) + n) % workCards.length],
  )
  const [cover, ...rest] = project.images
  const shotAlt = (n: number) => `${projectTitle} screenshot ${n}`

  return (
    <>
      <SEO
        title={
          isEs
            ? `${projectTitle} — Proyecto de Jorge Senjudo`
            : `${projectTitle} — Project by Jorge Senjudo`
        }
        description={
          projectDesc.length > 200
            ? `${projectDesc.slice(0, 197).trim()}...`
            : projectDesc
        }
        path={projectPath}
        lang={isEs ? 'es' : 'en'}
        image={projectImage}
        hasEnglish
        schema={[breadcrumb, creativeWork]}
      />
      <main className="margenes pt-24 md:pt-[120px]">
        <BackButton />
        <RevealTitle key={project.slug} text={projectTitle} className="titulo-pagina mt-8" />

        {cover && (
          <div className="mt-8">
            <GalleryImage src={cover} alt={shotAlt(1)} eager />
          </div>
        )}

        <div className="grid gap-12 pt-16 md:grid-cols-2 md:gap-5 md:pt-20">
          <div>
            <h2 className="titulo-item">{text('snb.h2_1')}</h2>
            <dl className="mt-6 grid content-start gap-6">
              {card && <Detail label={text('work.role')}>{card.role}</Detail>}
              {card && <Detail label={text('general.period')}>{card.period}</Detail>}
              <Detail label="Front end">{project.frontEnd.tech.join(', ')}</Detail>
              {project.backEnd?.tech && project.backEnd.tech.length > 0 && (
                <Detail label="Back end">{project.backEnd.tech.join(', ')}</Detail>
              )}
            </dl>
          </div>
          <div>
            <h2 className="titulo-item">{text('work.project')}</h2>
            <div className="mt-6 grid gap-4">
              <p className="prosa">{projectDesc}</p>
              {project.frontEnd.descriptionKey && (
                <p className="prosa text-niebla">{text(project.frontEnd.descriptionKey)}</p>
              )}
              {project.backEnd?.descriptionKey && (
                <p className="prosa text-niebla">{text(project.backEnd.descriptionKey)}</p>
              )}
              {project.ratingKey && <p className="prosa">{text(project.ratingKey)}</p>}
              {project.collaborators?.map((c) => (
                <p key={c.url} className="prosa">
                  {text(c.prefixKey)}{' '}
                  <a href={c.url} className="underline underline-offset-2 hover:text-salvia">
                    {c.name}
                  </a>
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-5">
              {project.source.type === 'github' && (
                <a target="_blank" rel="noreferrer" href={project.source.url} className="enlace-marcado">
                  {text('footer.source')}
                </a>
              )}
              {project.source.type === 'visit' && project.source.url !== project.liveUrl && (
                <a target="_blank" rel="noreferrer" href={project.source.url} className="enlace-marcado">
                  {text('footer.visit')}
                </a>
              )}
              {project.source.type === 'none' && (
                <p className="text-niebla">{text('footer.nosource')}</p>
              )}
              {project.liveUrl && (
                <a target="_blank" rel="noreferrer" href={project.liveUrl} className="enlace-marcado">
                  {text('general.visitSite')}
                </a>
              )}
            </div>
          </div>
        </div>

        {rest.length > 0 && (
          <div className="mt-16 grid items-start gap-2.5 md:mt-20 md:grid-cols-2">
            {rest.map((image, i) => (
              <GalleryImage key={image} src={image} alt={shotAlt(i + 2)} />
            ))}
          </div>
        )}

        <section className="pb-24 pt-32 md:pb-32 md:pt-48">
          <SectionHeader
            title={text('work.more')}
            link={{ to: localizePath('/work'), label: text('work.seeAll') }}
          />
          <ul className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {next.map((c) => (
              <li key={c.url}>
                <ProjectCard card={c} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
