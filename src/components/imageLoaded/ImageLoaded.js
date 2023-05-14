

import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Spinner } from './Spinner'
import { FillContext } from '../../context/FillContext'

export const ImageLoaded = ({ effect, classname, alt, src }) => {

    let [imageLoaded, setImageLoaded] = useState(false)
    let { firstLoad, setFirstLoad } = useContext(FillContext)

    return (
        <div
            className={(classname === "bg_image") ? "ImageLoadedBackGround" : ""}
        >
            {!imageLoaded && <Spinner />}

            {!firstLoad && (<LazyLoadImage
                effect={effect}
                className={(classname === "bg_image") ? "bg_imageImageLoaded" : classname}
                alt={alt}
                src={src}
                onLoad={() => {
                    setImageLoaded(true)
                    setFirstLoad(true);
                }}
            />)}


            {firstLoad && <LazyLoadImage
                effect={effect}
                className={(classname === "bg_image") ? "bg_imageImageLoaded" : classname}
                alt={alt}
                src={src}
                onLoad={() => {
                    setImageLoaded(true)
                }}
            />}


        </div>
    )
}


