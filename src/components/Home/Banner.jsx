import React from 'react';
import Banner from '../Template/Banner';
import homeBanner from '../../img/bannerHome-kasa.webp'

const HomeBanner = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={homeBanner}
        />
    )
}

export default HomeBanner;