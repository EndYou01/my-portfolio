import React from 'react'
import { Work } from '../../components/home/work/Work'
import { scrollToTop } from '../../functions/scrollToTop';
import { useEffect } from 'react';

export const WorkPage = () => {

    useEffect(() => {

        scrollToTop()

    }, []);
    
    return (
        <>
            <Work />
        </>
    )
}
