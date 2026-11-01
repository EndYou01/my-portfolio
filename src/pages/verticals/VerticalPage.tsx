import { useTranslation } from 'react-i18next'

import { ProjectCard } from '../../components/projectCard/ProjectCard'
import { SEO } from '../../components/seo/SEO'
import { FaqList } from '../../components/ui/FaqList'
import { RevealTitle } from '../../components/ui/RevealTitle'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { WhatsAppCTA } from '../../components/whatsappCTA/WhatsAppCTA'
import { workCards } from '../../data/workCards'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
} from '../../utils/schema'

const BENEFIT_KEYS = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'] as const
const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const
const SHOWCASE_SLUGS = ['gelato', 'el-gaban', 'celebren']

type Props = {
  ns: 'menuDigital' | 'restaurante'
  path: string
  image: string
  breadcrumb: string
}

export const VerticalPage = ({ ns, path, image, breadcrumb }: Props) => {
  const { t } = useTranslation('global')

  useScrollToTopOnMount()

  const faqItems = FAQ_KEYS.map((key) => ({
    q: t(`${ns}.faq.${key}.q`),
    a: t(`${ns}.faq.${key}.a`),
  }))
  const showcase = SHOWCASE_SLUGS.map((slug) =>
    workCards.find((c) => c.url === `/${slug}`),
  ).filter((c): c is (typeof workCards)[number] => Boolean(c))

  return (
    <>
      <SEO
        title={t(`${ns}.meta.title`)}
        description={t(`${ns}.meta.description`)}
        path={path}
        lang="es"
        image={image}
        schema={[
          buildBreadcrumbSchema([
            { name: 'Inicio', url: '/' },
            { name: breadcrumb, url: path },
          ]),
          buildFaqPageSchema(faqItems),
        ]}
      />
      <main>
        <section className="margenes pt-32 md:pt-[160px]">
          <p className="rotulo">{t(`${ns}.hero.eyebrow`)}</p>
          <RevealTitle
            text={t(`${ns}.hero.headline`)}
            className="titulo-pagina mt-5 max-w-[20ch]"
          />
          <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-5">
            <div className="flex flex-wrap items-center gap-5 self-start">
              <WhatsAppCTA
                message={t(`${ns}.hero.ctaMessage`) as string}
                label={t(`${ns}.hero.ctaPrimary`) as string}
              />
              <a href="#preguntas" className="enlace-marcado">
                {t('faqLink')}
              </a>
            </div>
            <p className="prosa">{t(`${ns}.hero.subheadline`)}</p>
          </div>
        </section>

        <section className="seccion">
          <SectionHeader
            title={t(`${ns}.beneficios.title`)}
            intro={t(`${ns}.beneficios.subtitle`)}
          />
          <ul>
            {BENEFIT_KEYS.map((key) => (
              <li
                key={key}
                className="grid gap-2 border-t border-carbon py-6 md:grid-cols-2 md:gap-5"
              >
                <h3 className="titulo-item">{t(`${ns}.beneficios.${key}.name`)}</h3>
                <p className="prosa text-niebla">{t(`${ns}.beneficios.${key}.desc`)}</p>
              </li>
            ))}
          </ul>
        </section>

        {showcase.length > 0 && (
          <section className="seccion">
            <SectionHeader
              title={t(`${ns}.ejemplos.title`)}
              intro={t(`${ns}.ejemplos.subtitle`)}
            />
            <ul className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {showcase.map((card) => (
                <li key={card.url}>
                  <ProjectCard card={card} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section id="preguntas" className="seccion scroll-mt-[60px]">
          <SectionHeader title={t(`${ns}.faq.title`)} />
          <FaqList items={faqItems} />
        </section>

        <section className="seccion pb-24 md:pb-32">
          <h2 className="titulo-pagina max-w-[16ch]">{t(`${ns}.cta.title`)}</h2>
          <p className="prosa mt-8">{t(`${ns}.cta.subtitle`)}</p>
          <WhatsAppCTA
            message={t(`${ns}.cta.message`) as string}
            label={t(`${ns}.cta.button`) as string}
            className="mt-6"
          />
          <p className="mt-3 text-etiqueta text-niebla">{t(`${ns}.cta.finePrint`)}</p>
        </section>
      </main>
    </>
  )
}
