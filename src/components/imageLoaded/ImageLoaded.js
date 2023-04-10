

import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Spinner } from './Spinner'

export const ImageLoaded = ({ effect, classname, alt, src }) => {

    let [imageLoaded, setImageLoaded] = useState(false)

    // useEffect(() => {
    //     // Read the state from local storage when the component is mounted
    //     let localImageLoaded = localStorage.getItem("imageLoaded")
    //     setImageLoaded(localImageLoaded)
    // }, [])

    // useEffect(() => {
    //     // Save the state to local storage after the first rendering
    //     localStorage.setItem("imageLoaded", imageLoaded)
    // })
    return (
        <div
            className={(classname === "bg_image") ? "ImageLoadedBackGround" : ""}
        >
            {!imageLoaded && <Spinner />}

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


