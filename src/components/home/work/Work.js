import React from 'react'
import {useTranslation} from 'react-i18next'

export const Work = () => {
  const [text] = useTranslation("global")

    return (
        <h1>{text("work.h1")}</h1>
    )
}
    