import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'
import {
  TbToolsKitchen2,
  TbBrandWhatsapp,
  TbBrandGoogle,
  TbBrush,
  TbDeviceMobile,
  TbCode,
} from 'react-icons/tb'
import type { IconType } from 'react-icons'

import { SEO } from '../../components/seo/SEO'
import { WhatsAppCTA } from '../../components/whatsappCTA/WhatsAppCTA'
import { ProjectCard } from '../../components/projectCard/ProjectCard'
import { workCards } from '../../data/workCards'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
} from '../../utils/schema'

type BenefitKey = 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6'

const BENEFIT_KEYS: BenefitKey[] = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6']
const BENEFIT_ICONS: Record<BenefitKey, IconType> = {
  b1: TbToolsKitchen2,
  b2: TbBrandWhatsapp,
  b3: TbBrandGoogle,
  b4: TbBrush,
  b5: TbDeviceMobile,
  b6: TbCode,
}

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const
const SHOWCASE_SLUGS = ['gelato', 'el-gaban', 'celebren']

export const RestaurantePage = () => {
  const { t } = useTranslation('global')
  const { localizePath } = useLanguage()

  useScrollToTopOnMount()

  const faqItems = FAQ_KEYS.map((key) => ({
    q: t(`restaurante.faq.${key}.q`),
    a: t(`restaurante.faq.${key}.a`),
  }))
  const path = '/pagina-web-restaurante-cuba'
  const showcaseCards = SHOWCASE_SLUGS.map((slug) =>
    workCards.find((c) => c.url === `/${slug}`),
  ).filter((c): c is (typeof workCards)[number] => Boolean(c))

  return (
    <div className="home_page">
      <SEO
        title={t('restaurante.meta.title')}
        description={t('restaurante.meta.description')}
        path={path}
        lang="es"
        image="/og-restaurante.png"
        schema={[
          buildBreadcrumbSchema([
            { name: 'Inicio', url: '/' },
            { name: 'Pagina web restaurante Cuba', url: path },
          ]),
          buildFaqPageSchema(faqItems),
        ]}
      />

      <main className="home_main">
        <section className="home_hero">
          <div className="home_hero_inner">
            <p className="home_hero_eyebrow">
              {t('restaurante.hero.eyebrow')}
            </p>
            <h1 className="home_hero_headline">
              {t('restaurante.hero.headline')}
            </h1>
            <p className="home_hero_sub">
              {t('restaurante.hero.subheadline')}
            </p>
            <div className="home_hero_ctas">
              <WhatsAppCTA
                variant="primary"
                size="lg"
                message={t('restaurante.hero.ctaMessage') as string}
                label={t('restaurante.hero.ctaPrimary') as string}
              />
              <a
                href="#vertical-faq"
                className="wa_cta wa_cta_secondary wa_cta_lg"
              >
                {t('home.hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </section>

        <section className="home_section home_services">
          <Fade triggerOnce>
            <header className="home_section_head">
              <h2 className="home_section_title">
                {t('restaurante.beneficios.title')}
              </h2>
              <p className="home_section_sub">
                {t('restaurante.beneficios.subtitle')}
              </p>
            </header>
          </Fade>

          <div className="home_services_grid">
            {BENEFIT_KEYS.map((key) => {
              const Icon = BENEFIT_ICONS[key]
              return (
                <article key={key} className="home_service_card">
                  <Icon className="home_service_icon" />
                  <h3 className="home_service_name">
                    {t(`restaurante.beneficios.${key}.name`)}
                  </h3>
                  <p className="home_service_desc">
                    {t(`restaurante.beneficios.${key}.desc`)}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        {showcaseCards.length > 0 && (
          <section className="home_section work_container">
            <Fade triggerOnce>
              <header className="home_section_head">
                <h2 className="home_section_title">
                  {t('restaurante.ejemplos.title')}
                </h2>
                <p className="home_section_sub">
                  {t('restaurante.ejemplos.subtitle')}
                </p>
              </header>
            </Fade>
            <div className="pcard_grid">
              {showcaseCards.map((card) => (
                <ProjectCard
                  key={card.url}
                  logo={card.logo}
                  title={card.titleKey ? t(card.titleKey) : card.title ?? ''}
                  description={t(card.descriptionKey)}
                  role={card.role}
                  period={card.period}
                  stack={card.stack}
                  image={card.image}
                  url={localizePath(card.url)}
                  altText={card.altText}
                />
              ))}
            </div>
          </section>
        )}

        <section id="vertical-faq" className="home_section home_faq">
          <Fade triggerOnce>
            <header className="home_section_head">
              <h2 className="home_section_title">
                {t('restaurante.faq.title')}
              </h2>
            </header>
          </Fade>
          <div className="home_faq_grid">
            {FAQ_KEYS.map((key) => (
              <details key={key} className="home_faq_item is_open">
                <summary className="home_faq_q">
                  <span>{t(`restaurante.faq.${key}.q`)}</span>
                </summary>
                <div className="home_faq_a">
                  <p>{t(`restaurante.faq.${key}.a`)}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="home_section home_final_cta">
          <div className="home_final_cta_inner">
            <div className="home_final_cta_body">
              <h2 className="home_final_cta_title">
                {t('restaurante.cta.title')}
              </h2>
              <p className="home_final_cta_sub">
                {t('restaurante.cta.subtitle')}
              </p>
              <WhatsAppCTA
                variant="primary"
                size="lg"
                message={t('restaurante.cta.message') as string}
                label={t('restaurante.cta.button') as string}
              />
              <p className="home_final_cta_fine">
                {t('restaurante.cta.finePrint')}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
