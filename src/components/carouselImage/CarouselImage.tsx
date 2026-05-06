import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/navigation'

import { ImageLoaded } from '../imageLoaded/ImageLoaded'
import { useIsMobile } from '../../hooks/useMediaQuery'

type Props = {
  images: string[]
}

export const CarouselImage = ({ images }: Props) => {
  const isMobile = useIsMobile()
  const slideClass = isMobile ? 'slide_portrait' : 'slide_landscape'

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
