import { BsCodeSlash, BsBoxArrowInUpRight } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

import { useDarkMode } from '../../../hooks/useDarkMode'
import type { SourceLink } from '../../../data/projects'

type Props = {
  source: SourceLink
  liveUrl?: string
}

export const ProjectSourceLinks = ({ source, liveUrl }: Props) => {
  const [text] = useTranslation('global')
  const { isDark } = useDarkMode()
  const iconClass = isDark ? 'icon' : 'icon btn_icon_dark'

  return (
    <>
      <div className="this_page_source_container">
        <BsCodeSlash className={iconClass} />
        {source.type === 'github' && (
          <a target="_blank" rel="noreferrer" href={source.url}>
            {text('footer.source')}
          </a>
        )}
        {source.type === 'visit' && (
          <a target="_blank" rel="noreferrer" href={source.url}>
            {text('footer.visit')}
          </a>
        )}
        {source.type === 'none' && <p>{text('footer.nosource')}</p>}
      </div>

      {liveUrl && (
        <div className="this_page_source_container">
          <BsBoxArrowInUpRight className={iconClass} />
          <a target="_blank" rel="noreferrer" href={liveUrl}>
            {text('general.visitSite')}
          </a>
        </div>
      )}
    </>
  )
}
