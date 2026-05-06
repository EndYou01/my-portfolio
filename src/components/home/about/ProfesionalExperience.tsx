import { useTranslation } from 'react-i18next'
import { useDarkMode } from '../../../hooks/useDarkMode'

type ExperienceItem = {
  period: string
  titleKey: string
  subtitleKey?: string
  company?: { url: string; label: string; logo: string }
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
      logo: 'logos/GoDjangoLogo.png',
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
      logo: 'logos/TecoposLogo2.jpg',
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
      logo: 'logos/TecoposLogo2.jpg',
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
      logo: 'logos/redcollege_logo.png',
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
    period: '2025/06 - {present}',
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
]

const ProfesionalExperience = () => {
  const [text] = useTranslation('global')
  const { isDark } = useDarkMode()

  const formatPeriod = (raw: string) =>
    raw.replace('{present}', text('general.Present'))

  return (
    <div>
      <h2 className="center">{text('about.profExp')}</h2>

      <div className="about_container">
        <div
          className={
            isDark ? 'infoContain' : 'infoContain project_info_container_dark'
          }
        >
          {EXPERIENCES.map((exp) => (
            <div key={exp.period} style={{ border: 'none' }} className="tr">
              <div className="first_td">{formatPeriod(exp.period)}</div>
              <div className={isDark ? 'second_td' : 'second_td_dark'}>
                <h3>{text(exp.titleKey)}</h3>

                {exp.subtitleKey && (
                  <p className="secundary_color">{text(exp.subtitleKey)}</p>
                )}

                {exp.company && (
                  <div className="second_td_empressContainer">
                    <a className="secundary_color" href={exp.company.url}>
                      {exp.company.label}
                    </a>
                    <img
                      className="second_td_empressIMG"
                      src={exp.company.logo}
                      alt={`${exp.company.label} logo`}
                    />
                  </div>
                )}

                {exp.responsibilitiesKey && (
                  <h4>{text(exp.responsibilitiesKey)}.</h4>
                )}

                {(exp.bulletNested || exp.bullets.length > 0) && (
                  <ul>
                    {exp.bulletNested && (
                      <li>
                        {text(exp.bulletNested.parentKey)}
                        <ul>
                          {exp.bulletNested.childKeys.map((key) => (
                            <li key={key}>{text(key)}</li>
                          ))}
                        </ul>
                      </li>
                    )}
                    {exp.bullets.map((key) => (
                      <li key={key}>{text(key)}</li>
                    ))}
                  </ul>
                )}

                {!exp.bulletNested && !exp.responsibilitiesKey && (
                  <div className="info">
                    {exp.bullets.map((key) => (
                      <p key={key}>{text(key)}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfesionalExperience
