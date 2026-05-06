import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type Props = {
  pathname: string
}

export const LearnMoreButton = ({ pathname }: Props) => {
  const [text] = useTranslation('global')
  const location = useLocation()

  const handleClick = () => {
    localStorage.setItem('lastLocation', location.pathname)
  }

  return (
    <Link to={pathname} onClick={handleClick}>
      <button type="button" className="learn_more_button">
        {text('work.lm')}
      </button>
    </Link>
  )
}
