import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import { useDarkMode } from '../../hooks/useDarkMode'
import { scrollToTop } from '../../utils/scroll'

export const BackButton = () => {
  const navigate = useNavigate()
  const { isDark } = useDarkMode()

  const handleClick = () => {
    const lastLocation = localStorage.getItem('lastLocation') || '/'
    navigate(lastLocation)
    scrollToTop()
  }

  return (
    <button
      type="button"
      className="bg_transparent my-element bckBtn"
      onClick={handleClick}
      aria-label="Go back"
    >
      <IoIosArrowBack className={isDark ? 'bckBtn_icon' : 'btn_icon_dark'} />
    </button>
  )
}
