import React from 'react';
import Banner from '../Template/Banner';
import bannerAbout from '../../img/bannerAbout-kasa.webp'

const BannerAbout = () => {
    return(
        <Banner
            title='À propos'
            src={bannerAbout}
        />
    )
}

export default BannerAbout;