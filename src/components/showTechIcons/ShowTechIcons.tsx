import { ImageLoaded } from '../imageLoaded/ImageLoaded'
import { useDarkMode } from '../../hooks/useDarkMode'

type Props = {
  technologies: string[]
  position?: 'start' | 'end'
  lite?: boolean
}

type TechIcon = { name: string; src: string }

const TECH_ICONS: TechIcon[] = [
  { name: 'AntDesign', src: 'icons/ant_design_icon.png' },
  { name: 'AdonisJs', src: 'icons/adonisjs.png' },
  { name: 'Bootstrap', src: 'icons/bootstrap_logo_icon.png' },
  { name: 'Postman', src: 'icons/postman_icon.png' },
  { name: 'PostgreSql', src: 'icons/postgresql.png' },
  { name: 'Express', src: 'icons/express.png' },
  { name: 'MySql', src: 'icons/mysql_original_wordmark_logo_icon.png' },
  { name: 'REST API', src: 'icons/rest_api_icon.png' },
  { name: 'Axios', src: 'icons/axios_logo_icon.png' },
  { name: 'Git', src: 'icons/git_icon.png' },
  { name: 'Github', src: 'icons/github_icon.png' },
  { name: 'Python', src: 'icons/pythonIcon.png' },
  { name: 'HTML', src: 'icons/htmlIcon.png' },
  { name: 'CSS', src: 'icons/cssIcon.png' },
  { name: 'Django', src: 'icons/django_plain_logo_icon.png' },
  { name: 'JavaScript', src: 'icons/javascriptIcon.png' },
  { name: 'C', src: 'icons/c_original_logo_icon.png' },
  { name: 'Java', src: 'icons/java_original_logo_icon.png' },
  { name: 'PHP', src: 'icons/php_icon.png' },
  { name: 'React', src: 'icons/reactIcon.png' },
  { name: 'Redux', src: 'icons/reduxIcon.png' },
  { name: 'Redux ToolKit', src: 'icons/reduxIcon.png' },
  { name: 'SASS', src: 'icons/sassIcon.png' },
  { name: 'TypeScript', src: 'icons/typescriptIcon.png' },
  { name: 'Vue', src: 'icons/vue_icon.png' },
  { name: 'Nuxt', src: 'icons/nuxt_icon.png' },
  { name: 'Vite', src: 'icons/viteIcon.png' },
  { name: 'Laravel', src: 'icons/laravel_plain_wordmark_logo_icon.png' },
  { name: 'Next.js', src: 'icons/NextJS_black&white_icon.svg' },
  { name: 'NestJS', src: 'icons/nestjs.png' },
  { name: 'TypeORM', src: 'icons/typeorm-logo.png' },
  { name: 'SWR', src: 'icons/SWR_black&white_icon.svg' },
  { name: 'React Bootstrap', src: 'icons/react_bootstrap_icon.png' },
  { name: 'Tailwind', src: 'icons/tailwind_icon.svg' },
]

const iconClass = (src: string, isDark: boolean, lite: boolean): string => {
  const baseClass = lite ? 'techIconLite' : 'techIcon'
  if (src.includes('black&white') && isDark) {
    return `techIconSvgWhite ${baseClass}`
  }
  return baseClass
}

export const ShowTechIcons = ({ technologies, lite = false }: Props) => {
  const { isDark } = useDarkMode()
  const requested = new Set(technologies.map((t) => t.toLowerCase()))

  return (
    <ul className="techIcons_container">
      {TECH_ICONS.filter((icon) => requested.has(icon.name.toLowerCase())).map(
        (icon) => (
          <li key={icon.name} className="techIcon_cell">
            <ImageLoaded
              effect=""
              classname={iconClass(icon.src, isDark, lite)}
              alt={`${icon.name} logo`}
              src={icon.src}
            />
            {!lite && <p className="techIconText">{icon.name}</p>}
          </li>
        ),
      )}
    </ul>
  )
}
