import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import skills from '../../../constants/skills'
import { useDarkMode } from '../../../hooks/useDarkMode'

export const Skills = () => {
  const [text] = useTranslation('global')
  const { isDark } = useDarkMode()

  return (
    <div className="content">
      <Fade>
        <h1>{text('skills.skills')}</h1>
        <br />
        <div className={isDark ? 'columns' : 'columns columns-dark'}>
          <ul>
            {skills.map((skill) => (
              <li key={`skill-${skill}`}>{skill}</li>
            ))}
          </ul>
        </div>
      </Fade>
    </div>
  )
}
