import { useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import { ImageLoaded } from '../imageLoaded/ImageLoaded'
import { useIsMobile } from '../../hooks/useMediaQuery'

type Props = {
  images: string[]
}

const StaticGallery = ({ images }: Props) => (
  <ul className="project_static_gallery">
    {images.map((image, index) => (
      <li key={index} className="project_static_gallery_item">
        <img
          src={image.startsWith('/') ? image : `/${image}`}
          alt={`Project screenshot ${index + 1}`}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </li>
    ))}
  </ul>
)

export const CarouselImage = ({ images }: Props) => {
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()
  const slideClass = isMobile ? 'slide_portrait' : 'slide_landscape'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <StaticGallery images={images} />
  }

  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView="auto"
      className="container"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={slideClass}>
          <Zoom>
            <ImageLoaded
              effect="blur"
              classname={slideClass}
              alt={`Project screenshot ${index + 1}`}
              src={image}
            />
          </Zoom>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
