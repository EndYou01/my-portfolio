import { Work } from '../../components/home/work/Work'
import { useScrollToTopOnMount } from '../../hooks/useScrollToTopOnMount'

export const WorkPage = () => {
  useScrollToTopOnMount()

  return <Work />
}
