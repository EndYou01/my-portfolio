

import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const ImageLoaded = ({ effect, classname, alt, src }) => {


    const [imageLoaded, setImageLoaded] = useState(false)


    return (
        <div className={
            (classname === "bg_image") ? "ImageLoadedBackGround" : ""
        }>
            {!imageLoaded && 
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            }
            <LazyLoadImage
                effect={effect}
                className={(classname === "bg_image") ? "bg_imageImageLoaded" : classname}
                alt={alt}
                src={src}
                onLoad={() =>
                    setImageLoaded(true)
                }
            />
        </div>
    )
}


