import { useTranslation } from 'react-i18next'

type ExperienceItem = {
  period: string
  titleKey: string
  subtitleKey?: string
  company?: { url: string; label: string }
  responsibilitiesKey?: string
  bullets: string[]
  bulletNested?: { parentKey: string; childKeys: string[] }
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2020/09 - 2022/12',
    titleKey: 'about.fronh4',
    subtitleKey: 'about.PreparationAndFreelanceWork',
    bullets: ['about.fronp1'],
  },
  {
    period: '2022/12 - 2023/06',
    titleKey: 'general.FrontendWebDeveloper',
    company: {
      url: 'https://catalogo.godjango.dev/nosotros/',
      label: 'GoDjango Technology Company, La Habana',
    },
    responsibilitiesKey: 'general.KeyResponsibilities',
    bullets: ['about.worksInfo.text4'],
    bulletNested: {
      parentKey: 'about.worksInfo.text1',
      childKeys: ['about.worksInfo.text2', 'about.worksInfo.text3'],
    },
  },
  {
    period: '2023/06 - 2023/12',
    titleKey: 'general.FrontendWebDeveloper',
    company: {
      url: 'https://www.tecopos.com/',
      label: 'TecoPos Technology Company, La Habana',
    },
    responsibilitiesKey: 'general.KeyResponsibilities',
    bullets: ['about.worksInfo.text7', 'about.worksInfo.text8'],
    bulletNested: {
      parentKey: 'about.worksInfo.text5',
      childKeys: ['about.worksInfo.text6'],
    },
  },
  {
    period: '2023/12 - 2025/01',
    titleKey: 'general.ChiefoftheWebDepartment',
    company: {
      url: 'https://www.tecopos.com/',
      label: 'TecoPos Technology Company, La Habana',
    },
    responsibilitiesKey: 'general.KeyResponsibilities',
    bullets: [
      'about.worksInfo.text9',
      'about.worksInfo.text10',
      'about.worksInfo.text11',
      'about.worksInfo.text12',
      'about.worksInfo.text13',
    ],
  },
  {
    period: '2025/01 - 2025/06',
    titleKey: 'general.FullstackProgrammer',
    company: {
      url: 'https://www.redcollege.net/',
      label: 'RedCollege, Santiago, Chile (Remoto)',
    },
    responsibilitiesKey: 'general.KeyResponsibilities',
    bullets: [
      'about.worksInfo.text14',
      'about.worksInfo.text15',
      'about.worksInfo.text16',
      'about.worksInfo.text17',
    ],
  },
  {
    period: '2025/06 - 2026/02',
    titleKey: 'general.SoftwareArchitectFullstack',
    subtitleKey: 'general.Freelance',
    responsibilitiesKey: 'general.KeyResponsibilities',
    bullets: [
      'about.worksInfo.text18',
      'about.worksInfo.text19',
      'about.worksInfo.text20',
      'about.worksInfo.text21',
    ],
  },
  {
    period: '2026/02 - {present}',
    titleKey: 'general.SoftwareArchitectFullstack',
    company: {
      url: 'https://www.informagestudios.com/',
      label: 'InforMage Studios, España (Remoto)',
    },
    responsibilitiesKey: 'general.KeyResponsibilities',
    bullets: [
      'about.worksInfo.text22',
      'about.worksInfo.text23',
      'about.worksInfo.text24',
    ],
  },
]

const ProfesionalExperience = () => {
  const [text] = useTranslation('global')

  const formatPeriod = (raw: string) =>
    raw.replace('{present}', text('general.Present'))

  return (
    <section className="seccion">
      <h2 className="titulo-seccion">{text('about.profExp')}</h2>
      <ol className="mt-8">
        {[...EXPERIENCES].reverse().map((exp) => (
          <li
            key={exp.period}
            className="grid gap-3 border-t border-carbon py-6 md:grid-cols-2 md:gap-5"
          >
            <p className="rotulo">{formatPeriod(exp.period)}</p>
            <div>
              <h3 className="titulo-item">{text(exp.titleKey)}</h3>
              {exp.subtitleKey && (
                <p className="mt-2 text-niebla">{text(exp.subtitleKey)}</p>
              )}
              {exp.company && (
                <a
                  href={exp.company.url}
                  target="_blank"
                  rel="noreferrer"
                  className="enlace mt-2 inline-block text-niebla"
                >
                  {exp.company.label}
                </a>
              )}
              <ul className="mt-4 grid gap-2">
                {[
                  ...(exp.bulletNested
                    ? [exp.bulletNested.parentKey, ...exp.bulletNested.childKeys]
                    : []),
                  ...exp.bullets,
                ].map((key) => (
                  <li key={key} className="prosa">
                    {text(key)}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ProfesionalExperience
