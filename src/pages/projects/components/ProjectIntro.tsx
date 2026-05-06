import { useTranslation } from 'react-i18next'

import type { Project } from '../../../data/projects'

type Props = {
  title: string
  titleKey?: string
  descriptionKey: string
  ratingKey?: string
  collaborators?: Project['collaborators']
}

export const ProjectIntro = ({
  title,
  titleKey,
  descriptionKey,
  ratingKey,
  collaborators,
}: Props) => {
  const [text] = useTranslation('global')
  const heading = titleKey ? text(titleKey) : title

  return (
    <div>
      <h1 className="Colorh1">{heading}</h1>
      <p>{text(descriptionKey)}</p>
      <br />

      {(ratingKey || (collaborators && collaborators.length > 0)) && (
        <ul>
          {ratingKey && <li>{text(ratingKey)}</li>}
          {collaborators?.map((c) => (
            <li key={c.url}>
              {text(c.prefixKey)}{' '}
              <a className="link" href={c.url}>
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
