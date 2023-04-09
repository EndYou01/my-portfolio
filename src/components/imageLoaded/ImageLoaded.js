

import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Spinner } from './Spinner'

export const ImageLoaded = ({ effect, classname, alt, src }) => {

    let [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div
            className={(classname === "bg_image") ? "ImageLoadedBackGround" : ""}
        >
            {!imageLoaded && <Spinner/>}
            
            <LazyLoadImage
                effect={effect}
                className={(classname === "bg_image") ? "bg_imageImageLoaded" : classname}
                alt={alt}
                src={src}
                onLoad={() => {
                    setImageLoaded(true)
                }}
            />
        </div>
    )
}


