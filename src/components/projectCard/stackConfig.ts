import { IconType } from 'react-icons'
import {
  SiAdonisjs,
  SiAntdesign,
  SiAxios,
  SiBootstrap,
  SiC,
  SiCss3,
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiQuasar,
  SiReact,
  SiRedux,
  SiSass,
  SiSwr,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si'

export type StackEntry = {
  label: string
  bg: string
  color: string
  Icon?: IconType
}

const ENTRIES: StackEntry[] = [
  { label: 'React', bg: 'rgba(97,218,251,0.10)', color: '#61dafb', Icon: SiReact },
  { label: 'TypeScript', bg: 'rgba(49,120,198,0.18)', color: '#6da7e3', Icon: SiTypescript },
  { label: 'JavaScript', bg: 'rgba(247,223,30,0.10)', color: '#f1d540', Icon: SiJavascript },
  { label: 'Vue', bg: 'rgba(65,184,131,0.14)', color: '#4fc08d', Icon: SiVuedotjs },
  { label: 'Nuxt', bg: 'rgba(0,220,130,0.12)', color: '#00dc82', Icon: SiNuxtdotjs },
  { label: 'Next.js', bg: 'rgba(255,255,255,0.06)', color: '#e5e5e5', Icon: SiNextdotjs },
  { label: 'Tailwind', bg: 'rgba(6,182,212,0.14)', color: '#38bdf8', Icon: SiTailwindcss },
  { label: 'NestJS', bg: 'rgba(234,40,69,0.12)', color: '#ff5a6e', Icon: SiNestjs },
  { label: 'AdonisJs', bg: 'rgba(90,69,255,0.14)', color: '#8b7aff', Icon: SiAdonisjs },
  { label: 'MySQL', bg: 'rgba(68,121,161,0.18)', color: '#7fb4d8', Icon: SiMysql },
  { label: 'PostgreSQL', bg: 'rgba(51,103,145,0.18)', color: '#7fb0db', Icon: SiPostgresql },
  { label: 'Laravel', bg: 'rgba(255,45,32,0.12)', color: '#ff6b5e', Icon: SiLaravel },
  { label: 'PHP', bg: 'rgba(119,123,180,0.18)', color: '#a8acd6', Icon: SiPhp },
  { label: 'MongoDB', bg: 'rgba(71,162,72,0.14)', color: '#5fc060', Icon: SiMongodb },
  { label: 'Java', bg: 'rgba(244,116,33,0.14)', color: '#f08a4b', Icon: SiOpenjdk },
  { label: 'C', bg: 'rgba(99,148,193,0.14)', color: '#9ec3e8', Icon: SiC },
  { label: 'HTML', bg: 'rgba(228,77,38,0.12)', color: '#ff7a4c', Icon: SiHtml5 },
  { label: 'CSS', bg: 'rgba(38,77,228,0.15)', color: '#5e9aff', Icon: SiCss3 },
  { label: 'Vite', bg: 'rgba(189,121,255,0.14)', color: '#bd79ff', Icon: SiVite },
  { label: 'Express', bg: 'rgba(120,120,120,0.18)', color: '#cfcfcf', Icon: SiExpress },
  { label: 'Bootstrap', bg: 'rgba(121,82,179,0.16)', color: '#a98ad6', Icon: SiBootstrap },
  { label: 'Redux', bg: 'rgba(118,74,188,0.16)', color: '#a380e0', Icon: SiRedux },
  { label: 'Redux ToolKit', bg: 'rgba(118,74,188,0.16)', color: '#a380e0', Icon: SiRedux },
  { label: 'Ant Design', bg: 'rgba(24,144,255,0.14)', color: '#5fb1ff', Icon: SiAntdesign },
  { label: 'SASS', bg: 'rgba(204,102,153,0.16)', color: '#e07ab2', Icon: SiSass },
  { label: 'Quasar', bg: 'rgba(25,118,210,0.16)', color: '#5fa8e8', Icon: SiQuasar },
  { label: 'Symfony', bg: 'rgba(20,20,20,0.4)', color: '#e5e5e5', Icon: SiSymfony },
  { label: 'Axios', bg: 'rgba(91,75,156,0.16)', color: '#a395d8', Icon: SiAxios },
  { label: 'TypeORM', bg: 'rgba(254,121,42,0.14)', color: '#fe9e6f' },
  { label: 'Python', bg: 'rgba(54,124,178,0.16)', color: '#7fb4d8', Icon: SiPython },
  { label: 'Django', bg: 'rgba(9,46,32,0.6)', color: '#5fc097', Icon: SiDjango },
  { label: 'SWR', bg: 'rgba(255,255,255,0.06)', color: '#cfcfcf', Icon: SiSwr },
  { label: 'REST API', bg: 'rgba(120,120,120,0.18)', color: '#cfcfcf' },
  { label: 'Postman', bg: 'rgba(255,108,55,0.14)', color: '#ff8a5f', Icon: SiPostman },
  { label: 'Git', bg: 'rgba(240,80,51,0.12)', color: '#ff7a5a', Icon: SiGit },
  { label: 'GitHub', bg: 'rgba(255,255,255,0.06)', color: '#e5e5e5', Icon: SiGithub },
  { label: 'React Bootstrap', bg: 'rgba(81,168,235,0.14)', color: '#7ec5f0', Icon: SiBootstrap },
]

const normalize = (s: string) => s.toLowerCase().replace(/[\s._-]+/g, '')

const CONFIG_MAP: Record<string, StackEntry> = Object.fromEntries(
  ENTRIES.map((e) => [normalize(e.label), e]),
)

export const lookupStack = (name: string): StackEntry => {
  const key = normalize(name)
  return (
    CONFIG_MAP[key] ?? {
      label: name,
      bg: 'rgba(255,255,255,0.05)',
      color: '#c0c0c8',
    }
  )
}
