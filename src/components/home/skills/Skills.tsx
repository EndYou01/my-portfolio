import { useTranslation } from 'react-i18next'

import skills from '../../../constants/skills'

export const Skills = () => {
  const [text] = useTranslation('global')

  return (
    <section className="seccion pb-24 md:pb-32">
      <h2 className="titulo-seccion">{text('skills.skills')}</h2>
      <ul className="mt-8 columns-2 gap-5 border-t border-carbon pt-5 md:columns-4">
        {skills.map((skill) => (
          <li key={skill} className="mb-1.5 break-inside-avoid">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
