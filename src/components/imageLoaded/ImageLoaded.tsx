import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Spinner } from './Spinner'

type Props = {
  effect?: string
  classname: string
  alt: string
  src: string
}

export const ImageLoaded = ({ effect, classname, alt, src }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const isBackground = classname === 'bg_image'

  return (
    <div className={isBackground ? 'ImageLoadedBackGround' : ''}>
      {!imageLoaded && <Spinner />}
      <LazyLoadImage
        effect={effect as 'blur' | 'opacity' | undefined}
        className={isBackground ? 'bg_imageImageLoaded' : classname}
        alt={alt}
        src={src}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  )
}
