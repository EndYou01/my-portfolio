import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../hooks/useLanguage'

export const BackButton = () => {
  const [text] = useTranslation('global')
  const navigate = useNavigate()
  const { localizePath } = useLanguage()

  const handleClick = () => {
    let target = localizePath('/work')
    try {
      target = localStorage.getItem('lastLocation') || target
    } catch {
      /* ignore storage errors */
    }
    navigate(target)
  }

  return (
    <button type="button" onClick={handleClick} className="enlace-marcado">
      {text('snb.b')}
    </button>
  )
}
