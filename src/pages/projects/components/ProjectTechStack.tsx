import { useTranslation } from 'react-i18next'

import { ShowTechIcons } from '../../../components/showTechIcons/ShowTechIcons'
import type { Project } from '../../../data/projects'

type Props = {
  frontEnd: Project['frontEnd']
  backEnd?: Project['backEnd']
}

export const ProjectTechStack = ({ frontEnd, backEnd }: Props) => {
  const [text] = useTranslation('global')

  return (
    <>
      <h3>Front End:</h3>
      {frontEnd.descriptionKey && <p>{text(frontEnd.descriptionKey)}</p>}
      <ShowTechIcons technologies={frontEnd.tech} position="end" />

      {backEnd && (
        <>
          <h3>Back End:</h3>
          {backEnd.descriptionKey && <p>{text(backEnd.descriptionKey)}</p>}
          {backEnd.tech && backEnd.tech.length > 0 && (
            <ShowTechIcons technologies={backEnd.tech} position="end" />
          )}
          {backEnd.isNone && (
            <ul>
              <li>none</li>
            </ul>
          )}
        </>
      )}
    </>
  )
}
