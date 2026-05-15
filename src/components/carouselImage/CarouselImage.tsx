import { useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

type Props = {
  images: string[]
}

const normalizeSrc = (src: string) =>
  src.startsWith('/') || src.startsWith('http') ? src : `/${src}`

const StaticGallery = ({ images }: Props) => (
  <div className="project_carousel">
    <div className="project_carousel_main">
      <img
        src={normalizeSrc(images[0] ?? '')}
        alt="Project screenshot 1"
        className="project_carousel_image"
        loading="eager"
      />
    </div>
    <ul className="project_carousel_thumbs">
      {images.map((image, index) => (
        <li key={index} className="project_carousel_thumb_item">
          <img
            src={normalizeSrc(image)}
            alt={`Project screenshot ${index + 1}`}
            className="project_carousel_thumb_img"
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  </div>
)

export const CarouselImage = ({ images }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (activeIdx >= images.length) setActiveIdx(0)
  }, [images.length, activeIdx])

  if (!mounted) return <StaticGallery images={images} />

  if (images.length === 0) return null

  const goPrev = () =>
    setActiveIdx((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setActiveIdx((i) => (i + 1) % images.length)
  const activeSrc = normalizeSrc(images[activeIdx])

  return (
    <div className="project_carousel">
      <div className="project_carousel_main">
        {images.length > 1 && (
          <button
            type="button"
            className="project_carousel_nav project_carousel_nav_prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <IoChevronBack aria-hidden />
          </button>
        )}

        <Zoom>
          <img
            key={activeSrc}
            src={activeSrc}
            alt={`Project screenshot ${activeIdx + 1}`}
            className="project_carousel_image"
            loading="eager"
          />
        </Zoom>

        {images.length > 1 && (
          <button
            type="button"
            className="project_carousel_nav project_carousel_nav_next"
            onClick={goNext}
            aria-label="Next image"
          >
            <IoChevronForward aria-hidden />
          </button>
        )}

        {images.length > 1 && (
          <span className="project_carousel_counter" aria-live="polite">
            {activeIdx + 1} / {images.length}
          </span>
        )}
      </div>

      {images.length > 1 && (
        <ul className="project_carousel_thumbs">
          {images.map((image, index) => {
            const isActive = index === activeIdx
            return (
              <li key={index} className="project_carousel_thumb_item">
                <button
                  type="button"
                  className={
                    'project_carousel_thumb' +
                    (isActive ? ' project_carousel_thumb_active' : '')
                  }
                  onClick={() => setActiveIdx(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={isActive}
                >
                  <img
                    src={normalizeSrc(image)}
                    alt={`Project screenshot ${index + 1} thumbnail`}
                    className="project_carousel_thumb_img"
                    loading="lazy"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
